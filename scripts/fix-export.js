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
      copyPageAliases(itemPath, item.name, dir);
    }

    if (item.isDirectory()) {
      copyNestedPageAliases(itemPath);
    }
  }
}

function copyPageAliases(rootDir, rootName, parentDir, segments = []) {
  const items = fs.readdirSync(rootDir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(rootDir, item.name);

    if (item.isFile() && item.name === '__PAGE__.txt') {
      const aliasName = `${rootName}${segments.length ? `.${segments.join('.')}` : ''}.__PAGE__.txt`;
      const aliasPath = path.join(parentDir, aliasName);
      if (!fs.existsSync(aliasPath)) {
        fs.copyFileSync(itemPath, aliasPath);
        console.log(`Created alias file: ${path.relative(outDir, aliasPath)}`);
      }
    }

    if (item.isDirectory()) {
      copyPageAliases(itemPath, rootName, parentDir, [...segments, item.name]);
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
