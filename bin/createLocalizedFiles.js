#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");

process.chdir("./");
console.log(process.cwd());

const outFolder = path.resolve(process.cwd(), "out");
if (!fs.existsSync(outFolder)) {
  process.stderr.write(`> 'out' folder not found${os.EOL}`);
  process.exit(1);
}

const pages = fs
  .readdirSync(outFolder)
  .filter((f) => f.endsWith(".html") && f !== "index.html");

process.stdout.write(
  `> ${pages.length} localized ${
    pages.length === 1 ? "page" : "pages"
  } found: ${pages.map((p) => `'${p}'`).join(", ")}${os.EOL}`
);

if (!fs.existsSync(path.resolve(outFolder, "index.html"))) {
  const defaultIndex =
    pages.find((f) => f.startsWith("en.") || f.startsWith("en-")) ??
    pages.find(Boolean);

  if (defaultIndex === undefined) {
    process.stdout.write(`> 'index.html' page not found${os.EOL}`);
    process.stderr.write(`> default index page couldn't be selected${os.EOL}`);
    process.exit(2);
  }

  fs.copyFileSync(
    path.resolve(outFolder, defaultIndex),
    path.resolve(outFolder, "index.html")
  );

  process.stdout.write(
    `> 'index.html' page not found, '${defaultIndex}' selected as default${os.EOL}`
  );
}

const localizedFolder = path.resolve(outFolder, "localized");
if (fs.existsSync(localizedFolder)) {
  process.stderr.write(`> 'localized' folder already exist${os.EOL}`);
  process.exit(3);
}
fs.mkdirSync(localizedFolder);
process.stdout.write(`> 'localized' folder created${os.EOL}`);

pages.forEach((f) => {
  const folder = path.resolve(localizedFolder, f.replace(".html", ""));
  fs.mkdirSync(folder);

  const file = path.resolve(outFolder, f);
  fs.renameSync(file, path.resolve(folder, "index.html"));

  process.stdout.write(`> '${f.replace(".html", "")}' page created${os.EOL}`);
});

process.exit(0);
