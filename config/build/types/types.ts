export enum EMode {
  development = 'development',
  production = 'production',
}

export interface IEnvVariable {
  mode: EMode;
  port: number;
  analyzer?: boolean;
}


export interface IBuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export interface BuildOptions {
  port: number;
  paths: IBuildPaths;
}

export interface IBuildWebpack {
  env: IEnvVariable;
  paths: IBuildPaths;
  analyzer?: boolean;
}
