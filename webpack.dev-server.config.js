import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const PORT = 3000;
const HOST = '0.0.0.0';
const DEBUG = true;
export default {
  port: PORT,
  host: HOST||'0.0.0.0',
  devtool: 'eval-source-map',
  entry: [
    './src/index',
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://192.168.1.103:${PORT}`
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
      {
        test: /\.styl$/,
        /* eslint-disable max-len */
        //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
        loader: 'style-loader!css-loader!stylus-loader'
        /* eslint-enable max-len */
      }, {
        test: /\.woff$/,
        loader: 'file-loader?name=font/[name].[ext]?[hash]'
      }, {
        test: /\.png$/,
        loader: 'file-loader?name=images/[name].[ext]?[hash]'
      }, {
        test: /\.md$/,
        loader: 'html!markdown'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {test: /\.less$/, loader: 'style!css!less'}, {
        test: /\.jade$/,
        loader: 'jade-react-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: 'src/index.html', inject: 'body'})
  ]
};
