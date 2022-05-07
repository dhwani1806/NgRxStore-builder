export const modelStructure = (modelName: string, modelProperty: any) => {
  let modelLiteral = `export interface ${modelName} {`;
  modelLiteral += `\n  id: number`
  for (let i = 0; i < modelProperty.length; i++) {
    let prop = modelProperty[i];
    modelLiteral += `\n  ${prop.name}: ${prop.type};`;
  }

  modelLiteral += `\n}`;

  return modelLiteral;
};
