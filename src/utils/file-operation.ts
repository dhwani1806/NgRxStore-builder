import * as fs from "fs";
import { OUTPUT_LOG_COLORS } from "../utils/constant";

export const generateFile = (
  fileName: string,
  fileTemplate: string,
  fileType: string
) => {
  fs.writeFile(fileName, fileTemplate, function (err) {
    if (err) throw err;
    console.log(
      OUTPUT_LOG_COLORS.SUCCESS,
      `[SUCCESS] ${fileType.charAt(0).toLocaleUpperCase()}${fileType.slice(
        1
      )} File Generated!`
    );
  });
};
