import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'


type TMode = 'production' | 'development'

interface IEnvVariable {
  mode: TMode
  port: number
}

export default (env: IEnvVariable) => {

  const isDevMode = env.mode === 'development'

  const config: Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new webpack.ProgressPlugin() // can slow production
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDevMode ? 'cheap-module-eval-source-map' : false,
    devServer: isDevMode ? {
      port: env.port ?? 3000,
      open: true,
    } : undefined
  }

  return config
}