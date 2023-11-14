import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import type { Configuration } from 'webpack'
import webpack from 'webpack'
import { EMode, IEnvVariable } from '../../webpack.config'
import { IBuildPaths } from './types/types'

export function buildPlugins(params: { env: IEnvVariable, paths: IBuildPaths }): Configuration['plugins'] {
  const { env, paths } = params;

  const isDevMode = env.mode === EMode['development']
  const isProdMode = env.mode === EMode['production']

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html })
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

  return plugins
}