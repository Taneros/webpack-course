
import { Configuration } from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import path from 'path'
import { EMode, IEnvVariable } from './config/build/types/types'

export default (env: IEnvVariable) => {

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  env.port ?? (env.port = 3000)
  env.platform ?? (env.platform = 'desktop')
  env.mode ?? (env.mode = EMode['development'])

  const config: Configuration = buildWebpack({ env, paths })

  return config
}