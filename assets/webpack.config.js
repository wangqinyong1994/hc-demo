const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const packageName = require('../package.json').name;

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  context: __dirname,
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: {
    app: './index.jsx',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve('.package'),
    publicPath: `/${packageName}/assets/`,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@components': path.join(__dirname, './components'),
      '@api': path.join(__dirname, './api'),
      '@utils': path.join(__dirname, './utils'),
      '@styles': path.join(__dirname, './styles'),
      '@pages': path.join(__dirname, './pages'),
      '@store': path.join(__dirname, './store'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,

        use: {
          loader: 'babel-loader',

          options: {
            cacheDirectory: path.join(
              __dirname,
              '.honeypack_cache/babel-loader',
            ),
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'add-module-exports',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              'transform-class-properties',
              'transform-object-rest-spread',
              ['import', { libraryName: 'antd', style: true }],
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,

        use: {
          loader: 'file-loader',

          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,

        use: {
          loader: 'file-loader',

          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.(less|css)$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',

            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    lodash: '_',
    intl: 'Intl',
    mobx: 'mobx',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProgressPlugin((percentage, msg) => {
      const stream = process.stderr;
      if (stream.isTTY && percentage < 0.71) {
        stream.cursorTo(0);
        stream.write(`📦  ${msg}  `);
        stream.clearLine(1);
      }
    }),
    new webpack.DefinePlugin({ platformCode: JSON.stringify(packageName) }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        cache: path.join(__dirname, '.honeypack_cache/terser-webpack-plugin'),
        parallel: true,
      }),
    ],

    splitChunks: {
      cacheGroups: {
        commons: {
          test: module =>
            /[\\/]node_modules[\\/]/.test(module.resource) &&
            module.constructor.name !== 'CssModule',
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
};

module.exports = config;
