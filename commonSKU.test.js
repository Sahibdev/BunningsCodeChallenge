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

const jsonExpectionA = [
  {
    SKU: 'one',
    Supplier: 'A1',
  },
  {
    SKU: 'two',
    Supplier: 'AB1',
  },
  {
    SKU: 'three',
    Supplier: 'BC1',
  },
];

const jsonExpectionB = [
  {
    SKU: 'one',
    Supplier: 'B1',
  },
  {
    SKU: 'two',
    Supplier: 'BB1',
  },
  {
    SKU: 'three',
    Supplier: 'BC1',
  },
];

const expectedExpectionSet = new Set();

test('Should get SKU of common product', () => {
  expect(getCommonSKU(jsonExpectionA, jsonExpectionB)).toEqual(expectedExpectionSet);
});
