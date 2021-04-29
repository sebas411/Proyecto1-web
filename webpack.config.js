const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  entry: './src/index.jsx',
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <html>
        <head>
          <title>Wolfram|Alpha: Computational Intelligence</title>
          <link rel="shortcut icon" href="https://www.wolframalpha.com/_next/static/images/favicon_fzx75d1e.ico">
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `,
  })],
}
