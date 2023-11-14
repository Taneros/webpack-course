export interface IBuildPaths {
  entry: string,
  html: string,
  output: string,
}

export interface BuildOptions {
  port: number,
  paths: IBuildPaths
}