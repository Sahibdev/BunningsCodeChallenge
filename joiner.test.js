/* eslint-disable no-undef */
import { joinLists } from './joiner.js';

const jsonA = [
  {
    SKU: 'one',
    Description: 'A1',
  },
  {
    SKU: 'two',
    Description: 'A2',
  },
  {
    SKU: 'three',
    Description: 'A3',
  },
];

const jsonB = [
  {
    SKU: 'one',
    Description: 'B1',
  },
  {
    SKU: 'two',
    Description: 'B2',
  },
];

const set = new Set(['two']);

const expectedJson = [
  {
    SKU: 'one',
    Description: 'A1',
    Source: 'A',
  },
  {
    SKU: 'two',
    Description: 'A2',
    Source: 'A',
  },
  {
    SKU: 'three',
    Description: 'A3',
    Source: 'A',
  },
  {
    SKU: 'one',
    Description: 'B1',
    Source: 'B',
  },
];

test('Megalist joining proper value', () => {
  expect(joinLists(jsonA, jsonB, set)).toEqual(expectedJson);
});
