const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(distDir)) {
  const conceptraDir = path.join(distDir, 'conceptra-labs');
  const browserDir = path.join(conceptraDir, 'browser');

  if (!fs.existsSync(conceptraDir)) {
    fs.mkdirSync(conceptraDir, { recursive: true });
  }

  // Copy all files in dist (except conceptra-labs folder itself) into dist/conceptra-labs
  for (const item of fs.readdirSync(distDir)) {
    if (item !== 'conceptra-labs') {
      fs.cpSync(path.join(distDir, item), path.join(conceptraDir, item), { recursive: true });
    }
  }

  // Also mirror into dist/conceptra-labs/browser
  if (!fs.existsSync(browserDir)) {
    fs.mkdirSync(browserDir, { recursive: true });
  }
  for (const item of fs.readdirSync(conceptraDir)) {
    if (item !== 'browser') {
      fs.cpSync(path.join(conceptraDir, item), path.join(browserDir, item), { recursive: true });
    }
  }

  console.log('Postbuild: Successfully populated dist, dist/conceptra-labs, and dist/conceptra-labs/browser');
} else {
  console.warn('Postbuild: dist directory not found');
}
