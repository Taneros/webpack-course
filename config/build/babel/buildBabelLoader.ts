import { EMode, IEnvVariable } from '../types/types';
import { removeDataTestIdBabelPlugin } from './removeDataTestIdBabelPlugin';



export function buildBabelLoader({ env }: { env: IEnvVariable }) {

  const isDevMode = env.mode === EMode['development']
  const isProdMode = env.mode === EMode['production']

  const plugins: any[] = []

  if (isProdMode) {
    plugins.push([removeDataTestIdBabelPlugin, {
      props: ['data-testId']
    }])
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          ['@babel/preset-react', {
            runtime: isDevMode ? 'automatic' : 'classic',
          },]
        ],
        plugins: plugins.length === 0 ? plugins : undefined
      }
    }
  }
}