import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config = /** @type { import('webpack').Configuration } */ ({
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.worker\.ts$/,
        loader: 'worker-loader'
      },
      {
        exclude: /(node_modules)/,
        loader: 'ts-loader',
        test: /\.[tj]sx?$/
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                // namedExport: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      // runtime: true,
      // filename: ({ chunk }) => `${chunk.name.replace('/js/', '/css/')}.css`,
      // chunkFilename: '[name]-[id].chunk.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: ['all'],
    compress: true,
    port: 3000
  }
})

export default config
