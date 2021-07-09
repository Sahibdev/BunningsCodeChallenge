/* eslint-disable no-undef */
import { getCommonSKU } from './commonSKU.js';

const jsonA = [
  {
    SKU: 'one',
    Barcode: 'abcd',
    Supplier: 'A1',
  },
  {
    SKU: 'two',
    Barcode: 'asbcf',
    Supplier: 'AB1',
  },
  {
    SKU: 'three',
    Barcode: 'rdhcb12',
    Supplier: 'BC1',
  },
];

const jsonB = [
  {
    SKU: 'one',
    Barcode: 'rafd123',
    Supplier: 'B1',
  },
  {
    SKU: 'two',
    Barcode: 'jcns1',
    Supplier: 'BB1',
  },
  {
    SKU: 'three',
    Barcode: 'rdhcb12',
    Supplier: 'BC1',
  },
];

const expectedSet = new Set(['three']);

test('Should get SKU of common product', () => {
  expect(getCommonSKU(jsonA, jsonB)).toEqual(expectedSet);
});
