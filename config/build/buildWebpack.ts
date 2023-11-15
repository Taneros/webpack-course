import { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { buildDevServer } from './buildDevServer'
import { EMode, IEnvVariable } from '../../webpack.config'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { IBuildPaths } from './types/types'

interface IBuildWebpack {
  env: IEnvVariable,
  paths: IBuildPaths,
}

export function buildWebpack(options: IBuildWebpack): Configuration {

  const { env, paths } = options;

  return {
    mode: env.mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash:8].js',
      clean: true,
    },
    plugins: buildPlugins({ env, paths }),
    module: {
      rules: buildLoaders({ env }),
    },
    resolve: buildResolvers(),
    devtool: env.mode === EMode['development'] ? 'eval-cheap-module-source-map' : false,
    devServer: buildDevServer({ env })
  }
}