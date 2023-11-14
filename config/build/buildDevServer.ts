import { EMode, IEnvVariable } from '../../webpack.config';
import type { Configuration } from 'webpack'

export function buildDevServer(params: { env: IEnvVariable }): Configuration['devServer'] {
  const { env } = params;

  const isDevMode = env.mode === EMode['development']

  return isDevMode ? {
    port: env.port ?? 3000,
    open: true,
  } : undefined
}