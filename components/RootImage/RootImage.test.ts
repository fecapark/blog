function tester(a: number, b: number) {
  return a + b;
}

it("hello", () => {
  expect(tester(1, 2)).toBe(3);
});

export {};
