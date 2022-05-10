export const getFilePath = (path:string,modelName: string, fileType: string) => {
  path=`${process.cwd()}/src/app/${path.trim()}`
  return `${path}/store/${fileType}s/${modelName.toLowerCase()}.${fileType}.ts`;
};
