import * as fs from "fs";
import { OUTPUT_LOG_COLORS } from "../utils/constant";

export const generateFile = (
  fileName: string,
  fileTemplate: string,
  fileType: string
) => {
  fs.writeFile(fileName, fileTemplate, function (err) {
    if (err){
      console.log(OUTPUT_LOG_COLORS.ERROR,`[ERROR] ${fileName} NOT FOUND`);
      return;
    }
    console.log(
      OUTPUT_LOG_COLORS.SUCCESS,
      `[SUCCESS] ${fileType.charAt(0).toLocaleUpperCase()}${fileType.slice(
        1
      )} File Generated!`
    );
  });
};
