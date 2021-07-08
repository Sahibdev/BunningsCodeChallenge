import csv from 'csvtojson';
import converter from 'json-2-csv';
import fs from 'fs';
import { joinLists } from './joiner.js';
import { getCommonSKU } from './commonSKU.js';
import CONSTANTS from './constants.js';

let companyA, companyB;

// Convert Company A Barcode CSV to Json
try {
  companyA = await csv().fromFile(CONSTANTS.BARCODE_A);
} catch (error) {
  console.log(`Cannot Parse File ${CONSTANTS.BARCODE_A}`);
}

// Convert Company B Barcode CSV to Json
try {
  companyB = await csv().fromFile(CONSTANTS.BARCODE_B);
} catch (error) {
  console.log(`Cannot Parse File ${CONSTANTS.BARCODE_B}`);
}

// Get Common Catalog
const commonCatalog = getCommonSKU(companyA, companyB);

// Convert Company A Catalog CSV to Json
try {
  companyA = await csv().fromFile(CONSTANTS.CATALOG_A);
} catch (error) {
  console.log(`Cannot Parse File ${CONSTANTS.CATALOG_A}`);
}

// Convert Company A Catalog CSV to Json
try {
  companyB = await csv().fromFile(CONSTANTS.CATALOG_B);
} catch (error) {
  console.log(`Cannot Parse File ${CONSTANTS.CATALOG_B}`);
}

// Merge and remove common catalog
const megaList = joinLists(companyA, companyB, commonCatalog);

// Convert the Merge list to csv
await converter
  .json2csvAsync(megaList)
  .then((csv) => {
    fs.writeFileSync(CONSTANTS.OUTPUT_FILE, csv);
    console.log(`Output Succesfully written in ${CONSTANTS.OUTPUT_FILE}`);
    return csv;
  })
  // eslint-disable-next-line no-unused-vars
  .catch((err) =>
    console.log(
      'Please check output folder is present and todos.csv have permissions'
    )
  );
