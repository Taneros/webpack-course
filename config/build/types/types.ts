export enum EMode {
  development = 'development',
  production = 'production',
}

export interface IEnvVariable {
  mode?: EMode;
  port?: number;
  analyzer?: boolean;
  platform?: 'mobile' | 'desktop'
}


export interface IBuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export interface IBuildWebpack {
  env: IEnvVariable;
  paths: IBuildPaths;
}
