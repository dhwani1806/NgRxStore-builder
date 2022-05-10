import * as fs from "fs";
import path = require("path");
import { OUTPUT_LOG_COLORS } from "../utils/constant";

export const createFile = (path: string, dir: string, settingsDir: string) => {
  path = `${process.cwd()}/src/app/${path.trim()}`;
  if (!fs.existsSync(`${path}/${dir}`)) {
    try {
      fs.mkdirSync(`${path}/${dir}`);
      fs.mkdirSync(`${path}/${settingsDir}`);
    } catch (err) {}
  } else {
    if (!fs.existsSync(`${path}/${settingsDir}`)) {
      fs.mkdirSync(`${path}/${settingsDir}`);
    }
  }
};
