import * as fs from "fs";
export const generateFile = (fileName: string, fileTemplate: string,fileType:string) => {
  fs.writeFile(fileName, fileTemplate, function (err) {
    if (err) throw err;
    console.log(`${fileType.charAt(0).toLocaleUpperCase()}${fileType.slice(1)} File Generated!`);
  });
};
