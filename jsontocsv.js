// require json-2-csv module
const converter = require('json-2-csv');
const fs = require('fs');

// convert JSON array to CSV string
export const csvConveter = async jsonArray => {
  await converter
    .json2csvAsync(jsonArray)
    .then(csv => {
      fs.writeFileSync('./output/todos.csv', csv);
      return csv;
    })
    // eslint-disable-next-line no-unused-vars
    .catch(err => console.log('Please check output folder is present and todos.csv have permissions'));
};
