export const getFilePath = (modelName: string, fileType: string) => {
  return `store/${fileType}s/${modelName.toLowerCase()}.${fileType}.ts`;
};
