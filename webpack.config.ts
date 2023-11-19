
import { Configuration } from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import path from 'path'
import { IEnvVariable } from './config/build/types/types'

export default (env: IEnvVariable) => {

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  env.port ?? (env.port = 3000)

  const config: Configuration = buildWebpack({ env, paths, analyzer: env.analyzer })


  return config
}