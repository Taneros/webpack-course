import type { Configuration } from 'webpack'
import { IBuildWebpack } from './types/types'

export function buildResolvers({ paths }: Pick<IBuildWebpack, 'paths'>): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': paths.src,
    }
  }
}