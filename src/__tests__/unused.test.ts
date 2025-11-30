// src/__tests__/unused.test.ts
import { unusedA, heavyButUnused } from "../unused";

test('unusedFn returns correct string', () => {
  expect(unusedA()).toBe('I am not used');
});

describe("unused.ts functions", () => {
  test("heavyButUnused runs and returns correct array", () => {
    const result = heavyButUnused();

    // Expect length 100
    expect(result).toHaveLength(100);

    // Expect first and last values
    expect(result[0]).toBe(0);
    expect(result[99]).toBe(198);

    // Optional: ensure all values are even
    result.forEach((n) => expect(n % 2).toBe(0));
  });
});