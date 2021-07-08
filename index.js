import { csvtoJson } from './csvtojson';
import { megalist } from './joiner';
import { merger } from './merger';
import { csvConveter } from './jsontocsv';

// Convert CSV for A Company to Json
const catalogA = csvtoJson('./input/catalogA.csv');
const supplierA = csvtoJson('./input/supplierA.csv');
const barcodesA = csvtoJson('./input/barcodesA.csv');

// Convert CSV for B Company to Json
const catalogB = csvtoJson('./input/catalogB.csv');
const supplierB = csvtoJson('./input/supplierB.csv');
const barcodesB = csvtoJson('./input/barcodesB.csv');

// Merge data of Company A
const companyA = megalist(catalogA, supplierA, barcodesA, 'A');

// Merge data of Company A
const companyB = megalist(catalogB, supplierB, barcodesB, 'B');

// Merge data of CompanyA and B
const megaData = merger(companyA, companyB);

//Convert data to csv
csvConveter(megaData);
