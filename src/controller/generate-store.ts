#!/usr/bin/env node
import * as fs from "fs";
import { getModelDetails } from "../config/initial-config";
import { actionStructure } from "../template/action";

import { createFile } from "../config/create-file";
import { modelStructure } from "../template/model";
import { selectorStructure } from "../template/selector";
import { serviceStructure } from "../template/service";
import { effectStructure } from "../template/effects";
import { stateStructure } from "../template/state";
import { reducerStructure } from "../template/reducer";
import { FILETYPE } from "../utils/constant";
import { generateFile } from "../utils/file-operation";
import { getFilePath } from "../utils/path";
(async function () {
  const model = await getModelDetails();
  if (model.filesToGenerate.includes(FILETYPE.ACTION)) {
    await createFile("store", "store/actions");
    await generateFile(
      getFilePath(model.modelName, FILETYPE.ACTION),
      actionStructure(model.modelName),
      FILETYPE.ACTION
    );
  }

  if (model.filesToGenerate.includes(FILETYPE.REDUCER)) {
    await createFile("store", "store/reducers");
    await generateFile(
      getFilePath(model.modelName, FILETYPE.REDUCER),
      reducerStructure(model.modelName),
      FILETYPE.REDUCER
    );
  }

  if (model.filesToGenerate.includes(FILETYPE.STATE)) {
    await createFile("store", "store/states");
    await generateFile(
      getFilePath(model.modelName, FILETYPE.STATE),
      stateStructure(model.modelName),
      FILETYPE.STATE
    );
  }

  if (model.filesToGenerate.includes(FILETYPE.EFFECT)) {
    await createFile("store", "store/effects");
    await generateFile(
      getFilePath(model.modelName, FILETYPE.EFFECT),
      effectStructure(model.modelName),
      FILETYPE.EFFECT
    );
  }

  if (model.filesToGenerate.includes(FILETYPE.SERVICE)) {
    await createFile("store", "store/services");
    await generateFile(
      getFilePath(model.modelName, FILETYPE.SERVICE),
      serviceStructure(model.modelName),
      FILETYPE.SERVICE
    );
  }

  if (model.filesToGenerate.includes(FILETYPE.SELECTOR)) {
    await createFile("store", "store/selectors");
    await generateFile(
      getFilePath(model.modelName, FILETYPE.SELECTOR),
      selectorStructure(model.modelName),
      FILETYPE.SELECTOR
    );
  }

  if (model.filesToGenerate.includes(FILETYPE.MODEL)) {
    await createFile("store", "store/models");
    await generateFile(
      getFilePath(model.modelName, FILETYPE.MODEL),
      modelStructure(model.modelName, model.modelProperty),
      FILETYPE.MODEL
    );
   
  }
})();
