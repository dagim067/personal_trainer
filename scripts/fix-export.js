const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'out');
const noJekyllSrc = path.resolve(__dirname, '..', '.nojekyll');
const noJekyllDest = path.join(outDir, '.nojekyll');

function copyNoJekyll() {
  if (fs.existsSync(noJekyllSrc)) {
    fs.copyFileSync(noJekyllSrc, noJekyllDest);
    console.log('Copied .nojekyll to out/');
  } else {
    console.warn('.nojekyll not found at project root; skipping copy.');
  }
}

function copyNestedPageAliases(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);

    if (item.isDirectory() && item.name.startsWith('__next.')) {
      const pageFile = path.join(itemPath, '__PAGE__.txt');
      if (fs.existsSync(pageFile)) {
        const aliasFile = path.join(dir, `${item.name}.__PAGE__.txt`);
        if (!fs.existsSync(aliasFile)) {
          fs.copyFileSync(pageFile, aliasFile);
          console.log(`Created alias file: ${path.relative(outDir, aliasFile)}`);
        }
      }
    }

    if (item.isDirectory()) {
      copyNestedPageAliases(itemPath);
    }
  }
}

function main() {
  if (!fs.existsSync(outDir)) {
    console.error('Export output directory not found:', outDir);
    process.exit(1);
  }

  copyNoJekyll();
  copyNestedPageAliases(outDir);
}

main();
