const csv = require('csvtojson');

export const csvtoJson = async csvFilePath => {
  try {
    await csv()
      .fromFile(csvFilePath)
      .then(jsonObj => {
        return jsonObj;
      });
  } catch (e) {
    console.error(`Cannot Parse File ${csvFilePath}`);
  }
};
