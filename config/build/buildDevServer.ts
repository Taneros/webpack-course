import { IEnvVariable } from '../../webpack.config';
import type { Configuration } from 'webpack'

export function buildDevServer(params: { env: IEnvVariable, isDevMode: boolean }): Configuration['devServer'] {
  const { env, isDevMode } = params;
  return isDevMode ? {
    port: env.port ?? 3000,
    open: true,
  } : undefined
}