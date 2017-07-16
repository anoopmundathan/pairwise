import pairWise from './';

describe('PairWise', () => {
  test('should return null if nothing is passed', () => {
    const result = pairWise();
    expect(result).toBe(null);
  });
  // test('should return sum of indices', () => {
  //   const result = pairWise([7, 3], 10);
  //   expect(result).toBe(1);
  // });
  test('should return sum of indices', () => {
    const result = pairWise([1, 1, 4, 8, 3, 2], 6);
    expect(result).toBe(7);
  });
  // test('should return sum of indices', () => {
  //   const result = pairWise([7, 3, 9, 13, 11, 5], 20);
  //   expect(result).toBe(9);
  // });
});

