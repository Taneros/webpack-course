import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { EMode, IEnvVariable } from './types/types';
import ReactRefreshTypeScript from 'react-refresh-typescript';


export function buildLoaders(params: { env: IEnvVariable }): ModuleOptions['rules'] {
  const { env } = params;

  const isDevMode = env.mode === EMode['development']

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack', options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true
              }
            }
          ]
        }
      }
    }],
  }

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDevMode ? '[name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
      },
    }
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDevMode && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true
        }
      }
    ],
    exclude: /node_modules/,
  }

  const babelLoader = {
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
        ]
      }
    }
  }


  return [
    svgLoader,
    assetLoader,
    scssLoader,
    // tsLoader,
    babelLoader
  ]
}