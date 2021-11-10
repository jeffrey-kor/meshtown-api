import { Calculation } from './sum';

test("add 1 + 2 to equal 3", () => {
  const calculation = new Calculation();
  expect(calculation.sum(1, 2)).toBe(3);
});