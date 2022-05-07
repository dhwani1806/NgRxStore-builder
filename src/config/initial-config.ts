import * as inquirer from "inquirer";
let model:any[] = [];
const initialQuestion = [
  {
    name: "modelName",
    message: "What is the model name?",
    type: "input",
  },
  {
    name:"filesToGenerate",
    message:"Please select the files you want to generate for NgRx",
    type:"checkbox",
    choices: [
      'model', 'action', 'reducer', 'effect','selector','state','service'
    ],
  },
  {
    name: "noOfProperties",
    message: "How many properties do you want in model?(Note: Id property is default)",
    type: "number",
  },
];

const modelQuestions = (index: number) => {
  return [
    {
      name: "propertyName",
      message: `What is the property ${index} name?`,
      type: "input",
    },
    {
      name: "propertyType",
      message: `What is the property ${index} type?`,
      type: "input",
    },
  ];
};

export const getModelDetails = async () => {
  const finalAnswers: any = {};
  const answer = await inquirer.prompt(initialQuestion);
  const noOfProperties = answer.noOfProperties - 1,
    index = 1,
    model = await getModel(noOfProperties, index);
  finalAnswers.modelName = answer.modelName;
  finalAnswers.filesToGenerate = answer.filesToGenerate
  finalAnswers.modelProperty = model;
  return finalAnswers;
};

const getModel:any = async (noOfProperties: number, index: number) => {
  const que = modelQuestions(index),
    { propertyName, propertyType } = await inquirer.prompt(que);
  model.push({
    name: propertyName,
    type: propertyType,
  });
  if (!noOfProperties) {
    return model;
  } else {
    return getModel(--noOfProperties, ++index);
  }
};
