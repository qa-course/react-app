import { compareTwoNumbers, sumTwoNumbers } from './utils';

it('sumTwoNumbers', () => {
  expect(sumTwoNumbers(4, 10)).toEqual(14);
  expect(sumTwoNumbers(NaN, 10)).toContain('Одно из значений или оба не числа');
});

it('compareTwoNumbers', () => {
  expect(compareTwoNumbers(4, 5)).toEqual(5);
  expect(compareTwoNumbers(5, 4)).toEqual(5);
  expect(compareTwoNumbers(-4, -5)).toEqual(-4);
  expect(compareTwoNumbers(-5, -4)).toEqual(-4);
  expect(compareTwoNumbers(-5, -5)).toEqual(-5);
  expect(compareTwoNumbers(4, 4)).toEqual(4);
  expect(compareTwoNumbers(0, 4)).toEqual(4);
  expect(compareTwoNumbers(4, 0)).toEqual(4);
  expect(compareTwoNumbers(-4, 0)).toEqual(0);
  expect(compareTwoNumbers(0, -4)).toEqual(0);
  expect(compareTwoNumbers(5, -5)).toEqual(5);
  expect(compareTwoNumbers(-5, 4)).toEqual(4);
});
