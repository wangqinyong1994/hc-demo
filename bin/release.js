/* eslint-disable no-continue */
const path = require('path');

const { join } = path;

/**
 * 打包前端文件, 有可能会被用户覆盖
 * @param {Object} config
 * @param {String} dir
 */
const front = (config, dir, { run, log, fs, co }) => {
  log.info('begin to build front end code');
  return co(function* () {
    const assetsDir = join(dir, 'assets');
    const needToInstall = fs.existsSync(join(assetsDir, 'package.json'));

    if (needToInstall) {
      // run(`cd ${assetsDir} && npm install --${config.env}`, 'install frontend dependences');
      run(`cd ${assetsDir} && npm install honeypack`, 'install honeypack');
      run(`cd ${assetsDir} && node ${join('node_modules', 'honeypack', 'bin', 'honeypack')} build`);
    }

    // 处理honeypack无法打包的情况
    const packDir = join(assetsDir, '.package');
    if (!fs.existsSync(packDir)) {
      fs.mkdirpSync(packDir);
    }

    const count = fs.readdirSync(packDir);
    if (count.length === 0) {
      const list = fs.readdirSync(assetsDir);
      const exclude = ['.package', 'static'];

      // eslint-disable-next-line no-restricted-syntax
      for (const item of list) {
        if (exclude.indexOf(item) >= 0) {
          // eslint-disable-next-line no-continue
          continue;
        }
        // 复制文件到.package
        yield fs.copy(join(assetsDir, item), join(assetsDir, '.package', item));
      }
    }

    // 移动静态目录
    if (fs.existsSync(`${join(assetsDir, 'static')}`)) {
      log.info('move static file');
      yield fs.copy(
        `${join(assetsDir, 'static')}`,
        `${join(assetsDir, '.package', 'static')}`
      );
      log.info('move static file success');
    }
    log.info('assets build done');
  });
};

/**
 * 打包后端文件, 有可能会被用户覆盖
 * @param {*} config
 * @param {*} dir
 */
// eslint-disable-next-line no-unused-vars
const release = (config, dir, { run, log, fs, co }) => {
  log.info('begin to build server file');
  log.info('package env', config.env);
  const env = config.env || 'production';
  return co(function* () {
    const releaseDir = join(dir, 'out', 'release');
    yield fs.mkdirp(releaseDir);
    log.info('begin to remove release dir');
    yield fs.remove(releaseDir);
    yield fs.mkdirp(releaseDir);
    const list = fs.readdirSync(dir);
    const exclude = ['.git', 'node_modules', 'out', 'test', 'assets'];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of list) {
      if (exclude.indexOf(item) >= 0) {
        continue;
      }
      yield fs.copy(join(dir, item), join(releaseDir, item));
    }

    // 移动前端文件
    const assetsDir = join(dir, 'assets', '.package');
    if (fs.existsSync(assetsDir)) {
      yield fs.move(assetsDir, join(releaseDir, 'assets'));
    }

    // 安装依赖
    // run(`cd ${releaseDir} && npm install --${config.env}`, 'install project dependences');
    log.info('cover config');

    // 覆盖config
    if (fs.existsSync(join(releaseDir, 'config', `config_${env}.js`))) {
      yield fs.copy(
        join(releaseDir, 'config', `config_${env}.js`),
        join(releaseDir, 'config', 'config.js'),
        {
          overwrite: true,
        }
      );
    }
    log.info('build server end');
  });
};

module.exports = [front, release];
