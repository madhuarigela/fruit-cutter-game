const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
html = html.replace(
  '<script src="https://cdn.jsdelivr.net/npm/phaser@3.90.0/dist/phaser.min.js"></script>',
  '<script src="./phaser.min.js"></script>'
);
fs.writeFileSync(path.join(out, "index.html"), html);
fs.copyFileSync(
  path.join(root, "node_modules", "phaser", "dist", "phaser.min.js"),
  path.join(out, "phaser.min.js")
);
console.log("Prepared offline Android web bundle in www/");
