// GoSpeed server: serves the web app and the speed-test endpoints. No dependencies.
const http = require('http'), fs = require('fs'), path = require('path'), crypto = require('crypto');
const PORT = process.env.PORT || 8080;
const PUBLIC = path.join(__dirname, 'public');
const types = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };
const chunk = crypto.randomBytes(65536);
const NOCACHE = { 'Cache-Control': 'no-store' };

http.createServer((req, res) => {
  const u = new URL(req.url, 'http://localhost');

  if (u.pathname === '/api/ping') { res.writeHead(204, NOCACHE); return res.end(); }

  if (u.pathname === '/api/download') {
    let n = Math.min(parseInt(u.searchParams.get('bytes')) || 10e6, 50e6);
    res.writeHead(200, { ...NOCACHE, 'Content-Type': 'application/octet-stream', 'Content-Length': n, 'Content-Encoding': 'identity' });
    res.on('close', () => { n = 0; });
    (function send() {
      while (n > 0 && !res.destroyed) {
        const l = Math.min(n, chunk.length); n -= l;
        if (!res.write(l === chunk.length ? chunk : chunk.subarray(0, l))) { res.once('drain', send); return; }
      }
      if (!res.destroyed) res.end();
    })();
    return;
  }

  if (u.pathname === '/api/upload' && req.method === 'POST') {
    req.on('data', () => {});
    req.on('end', () => { res.writeHead(200, NOCACHE); res.end('ok'); });
    return;
  }

  const rel = u.pathname === '/' ? 'index.html' : path.normalize(u.pathname).replace(/^([/\\]|\.\.)+/g, '');
  const file = path.join(PUBLIC, rel);
  if (!file.startsWith(PUBLIC)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log('GoSpeed running on port ' + PORT));
