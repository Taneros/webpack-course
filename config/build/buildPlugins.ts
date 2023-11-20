import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration, DefinePlugin } from 'webpack'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { EMode, IBuildWebpack } from './types/types'

export function buildPlugins(params: IBuildWebpack): Configuration['plugins'] {
  const { env, paths } = params;
  const { analyzer, platform } = env;

  const isDevMode = env.mode === EMode['development']
  const isProdMode = env.mode === EMode['production']

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    })
  ]

  if (isDevMode) {
    plugins.push(new webpack.ProgressPlugin())
  }

  if (isProdMode) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}