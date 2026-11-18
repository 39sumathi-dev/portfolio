const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'dist', 'conceptra-labs');

if (fs.existsSync(src)) {
  // Mirror to ./conceptra-labs
  fs.cpSync(src, path.join(__dirname, 'conceptra-labs'), { recursive: true });

  // Mirror to ./browser
  fs.cpSync(src, path.join(__dirname, 'browser'), { recursive: true });

  // Mirror inside dist/conceptra-labs/browser
  const subBrowser = path.join(src, 'browser');
  if (!fs.existsSync(subBrowser)) {
    fs.mkdirSync(subBrowser, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      if (item !== 'browser') {
        fs.cpSync(path.join(src, item), path.join(subBrowser, item), { recursive: true });
      }
    }
  }

  console.log('Postbuild: Successfully mirrored output directories (conceptra-labs, dist/conceptra-labs, browser)');
} else {
  console.warn('Postbuild: dist/conceptra-labs not found');
}
