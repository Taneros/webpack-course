import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import type { Configuration } from 'webpack'
import webpack from 'webpack'

export function buildPlugins(params: { isProdMode: boolean, isDevMode: boolean }): Configuration['plugins'] {
  const { isDevMode, isProdMode } = params;

  return [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    isDevMode && new webpack.ProgressPlugin(), // can slow production
    isProdMode && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
  ].filter(Boolean)
}