# BunningsCodeChallenge

## Setup

`yarn` - Install all the dependencies for project.

## Running

`yarn start` - will run the project.

This will need following files to run
- `inputFiles/barcodesA.csv`
- `inputFiles/barcodesB.csv`
- `inputFiles/catalogA.csv`
- `inputFiles/catalogB.csv`
- `inputFiles/supplierA.csv`
- `inputFiles/supplierB.csv`
- `outputFile/`

## Testing

`yarn test` - will run test with coverage report.

## Configuration

If the file name in different then mentioned above.
- `./constants.js` can be configured to handle different file name.

## Exceptions

When input files are not correctly formatted. Te user will receive following error
 - `Cannot Parse File` followed by path and filename.

When output path is not created or output file does not have premission to overwrite
 - `Please check output folder is present and todos.csv have permissions`

