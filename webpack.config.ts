
import { Configuration } from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'


export enum EMode {
  development = 'development',
  production = 'production',
}

export interface IEnvVariable {
  mode: EMode
  port: number
}

export default (env: IEnvVariable) => {

  const config: Configuration = buildWebpack({ env })

  return config
}