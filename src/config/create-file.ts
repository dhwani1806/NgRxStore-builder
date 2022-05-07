import * as fs from "fs";

export const createFile = (
    dir: string,
    settingsDir: string
  ) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.mkdirSync(settingsDir);
    } else {
      if (!fs.existsSync(settingsDir)) {
        fs.mkdirSync(settingsDir);
      }
    }
  };