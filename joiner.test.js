/* eslint-disable no-undef */
import { megalist } from './joiner';

const jsonA = [
  {
    source: 'A',
    barcode: 'abcd',
    productName: 'one',
    Identifier: 'A1'
  },
  {
    source: 'A',
    productName: 'two',
    barcode: 'asbcf',
    Identifier: 'AB1'
  },
  {
    source: 'B',
    productName: 'three',
    barcode: 'rdhcb12',
    Identifier: 'AC1'
  }
];

const jsonB = [
  {
    source: 'A',
    name: 'GOllu'
  },
  {
    source: 'B',
    name: 'Narr'
  }
];

const expectedJson = [
  {
    source: 'A',
    barcode: 'abcd',
    productName: 'one',
    Identifier: 'A1',
    sourcename: 'GOllu'
  },
  {
    source: 'A',
    productName: 'two',
    barcode: 'asbcf',
    Identifier: 'AB1',
    sourcename: 'GOllu'
  },
  {
    source: 'B',
    productName: 'three',
    barcode: 'rdhcb12',
    Identifier: 'AC1',
    sourcename: 'Narr'
  }
];

test('Megalist joining proper value', () => {
  expect(megalist(jsonA, jsonB)).toEqual(expectedJson);
});
