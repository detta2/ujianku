#!/usr/bin/env python3
"""UjianKu Leaderboard API — 1 file, Python stdlib only (tanpa pip install).

Jalankan:  python3 leaderboard.py [port]
Default port 8765. Data tersimpan di SQLite file leaderboard.db
di direktori yang sama.

Endpoint:
  POST /api/score            {"bank","name","score","correct","total","used","date"}
  GET  /api/scores?bank=ID&limit=20
  GET  /health

CORS terbuka (*) supaya bisa dipanggil dari web statis (Vercel).
"""

import json
import sqlite3
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

DB = "leaderboard.db"
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765


def db():
    con = sqlite3.connect(DB)
    con.execute(
        """CREATE TABLE IF NOT EXISTS scores(
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             bank TEXT NOT NULL, name TEXT NOT NULL,
             score INTEGER NOT NULL, correct INTEGER NOT NULL,
             total INTEGER NOT NULL, used INTEGER NOT NULL,
             date TEXT NOT NULL, created TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"""
    )
    con.execute("CREATE INDEX IF NOT EXISTS idx_bank ON scores(bank, score DESC)")
    return con


class Handler(BaseHTTPRequestHandler):
    server_version = "UjianKuLB/1.0"

    def _send(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self._send(204, {})

    def do_GET(self):
        u = urlparse(self.path)
        if u.path == "/health":
            return self._send(200, {"ok": True})
        if u.path == "/api/scores":
            q = parse_qs(u.query)
            bank = q.get("bank", [""])[0][:64]
            try:
                limit = min(int(q.get("limit", ["20"])[0]), 100)
            except ValueError:
                limit = 20
            con = db()
            rows = con.execute(
                "SELECT name, score, correct, total, used, date FROM scores "
                "WHERE bank=? ORDER BY score DESC, used ASC LIMIT ?",
                (bank, limit),
            ).fetchall()
            con.close()
            return self._send(200, [
                {"name": r[0], "score": r[1], "correct": r[2],
                 "total": r[3], "used": r[4], "date": r[5]} for r in rows
            ])
        return self._send(404, {"error": "not found"})

    def do_POST(self):
        u = urlparse(self.path)
        if u.path != "/api/score":
            return self._send(404, {"error": "not found"})
        try:
            n = int(self.headers.get("Content-Length", 0))
            data = json.loads(self.rfile.read(n).decode("utf-8") or "{}")
            bank = str(data.get("bank", ""))[:64]
            name = str(data.get("name", ""))[:20].strip()
            score = int(data.get("score", 0))
            correct = int(data.get("correct", 0))
            total = int(data.get("total", 0))
            used = int(data.get("used", 0))
            date = str(data.get("date", ""))[:10]
            if not bank or not name or total <= 0 or not (0 <= score <= 100):
                return self._send(400, {"error": "bad payload"})
        except (ValueError, TypeError):
            return self._send(400, {"error": "bad payload"})
        con = db()
        # anti-spam sederhana: 1 nama dibatasi 30 submit per bank per hari
        c = con.execute(
            "SELECT COUNT(*) FROM scores WHERE bank=? AND name=? AND date=?",
            (bank, name, date),
        ).fetchone()[0]
        if c >= 30:
            con.close()
            return self._send(429, {"error": "rate limited"})
        con.execute(
            "INSERT INTO scores(bank,name,score,correct,total,used,date) "
            "VALUES(?,?,?,?,?,?,?)",
            (bank, name, score, correct, total, used, date),
        )
        con.commit()
        con.close()
        return self._send(200, {"ok": True})

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


if __name__ == "__main__":
    db().close()
    srv = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print("UjianKu leaderboard on port %d (db: %s)" % (PORT, DB), flush=True)
    srv.serve_forever()
