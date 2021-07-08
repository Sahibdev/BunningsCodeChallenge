/* eslint-disable no-undef */
import { merger } from './merger';

const jsonA = [
  {
    source: 'A',
    productName: 'one',
    barcode: 'abcd',
    Identifier: 'A1'
  },
  {
    source: 'A',
    productName: 'two',
    barcode: 'asbcf',
    Identifier: 'AB1'
  },
  {
    source: 'A',
    productName: 'three',
    barcode: 'rdhcb12',
    Identifier: 'BC1'
  }
];

const jsonB = [
  {
    source: 'B',
    productName: 'one',
    barcode: 'rafd123',
    Identifier: 'B1'
  },
  {
    source: 'B',
    productName: 'two',
    barcode: 'jcns1',
    Identifier: 'BB1'
  },
  {
    source: 'B',
    productName: 'three',
    barcode: 'rdhcb12',
    Identifier: 'BC1'
  }
];

const expectedJson = [
  {
    source: 'A',
    productName: 'one',
    barcode: 'abcd',
    Identifier: 'A1'
  },
  {
    source: 'A',
    productName: 'two',
    barcode: 'asbcf',
    Identifier: 'AB1'
  },
  {
    source: 'A',
    productName: 'three',
    barcode: 'rdhcb12',
    Identifier: 'BC1'
  },
  {
    source: 'B',
    productName: 'one',
    barcode: 'rafd123',
    Identifier: 'B1'
  },
  {
    source: 'B',
    productName: 'two',
    barcode: 'jcns1',
    Identifier: 'BB1'
  }
];

test('Merger proper joining proper value', () => {
  expect(merger(jsonA, jsonB)).toEqual(expectedJson);
});
