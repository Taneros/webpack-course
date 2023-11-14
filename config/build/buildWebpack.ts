import { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import path from 'path'

import { buildDevServer } from './buildDevServer'
import { EMode, IEnvVariable } from '../../webpack.config'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'

interface IBuildWebpack {
  env: IEnvVariable,
}

export function buildWebpack(options: IBuildWebpack): Configuration {

  const { env } = options;

  const isDevMode = env.mode === EMode['development']
  const isProdMode = env.mode === EMode['production']


  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash:8].js',
      clean: true,
    },
    plugins: buildPlugins({ isDevMode, isProdMode }),
    module: {
      rules: buildLoaders({ isDevMode }),
    },
    resolve: buildResolvers(),
    devtool: isDevMode ? 'eval-cheap-module-source-map' : false,
    devServer: buildDevServer({ env, isDevMode })
  }
}