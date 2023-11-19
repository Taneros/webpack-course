import type { Configuration } from 'webpack';
import { EMode, IEnvVariable } from './types/types';

export function buildDevServer(params: { env: IEnvVariable }): Configuration['devServer'] {
  const { env } = params;

  const isDevMode = env.mode === EMode['development']

  return isDevMode ? {
    port: env.port ?? 3000,
    open: true,
    historyApiFallback: true,
  } : undefined
}