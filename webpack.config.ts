
import { Configuration } from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import path from 'path'

export enum EMode {
  development = 'development',
  production = 'production',
}

export interface IEnvVariable {
  mode: EMode
  port: number
}

export default (env: IEnvVariable) => {

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
  }

  env.port ?? (env.port = 3000)

  const config: Configuration = buildWebpack({ env, paths })


  return config
}