import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { EMode, IEnvVariable } from '../../webpack.config';

export function buildLoaders(params: { env: IEnvVariable }): ModuleOptions['rules'] {
  const { env } = params;

  const isDevMode = env.mode === EMode['development']

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }


  return [
    scssLoader,
    tsLoader,
  ]
}