const fs = require('fs-extra');
const globby = require('globby');
const path = require('path');

// STEP 3 将lib copy 到 out 目录
globby([
  'node_modules/babel-polyfill/dist/polyfill.min.js',
  'node_modules/react/umd/react.production.min.js',
  'node_modules/react-dom/umd/react-dom.production.min.js',
  'node_modules/react-router/umd/react-router.min.js',
  'node_modules/lodash/lodash.min.js',
  'node_modules/intl/dist/Intl.min.js',
  'node_modules/mobx/lib/mobx.umd.min.js',
]).then(paths2 => {
  fs.mkdirsSync('build/lib/');
  paths2.forEach(item => {
    const filename = path.basename(item);
    fs.copySync(item, `build/lib/${filename}`);
  });
});

console.log('copy files to build/lib done !');

globby(['public/*']).then(paths3 => {
  fs.mkdirsSync('build/public/');
  paths3.forEach(item => {
    const filename = path.basename(item);
    fs.copySync(item, `build/public/${filename}`);
  });
});
console.log('copy public/ files to build done !');

globby(['utils/*']).then(paths3 => {
  fs.mkdirsSync('build/utils/');
  paths3.forEach(item => {
    const filename = path.basename(item);
    fs.copySync(item, `build/utils/${filename}`);
  });
});
console.log('copy utils/ files to build done !');

globby(['styles/*']).then(paths3 => {
  fs.mkdirsSync('build/styles/');
  paths3.forEach(item => {
    const filename = path.basename(item);
    fs.copySync(item, `build/styles/${filename}`);
  });
});

console.log('copy styles/ files to build done !');
