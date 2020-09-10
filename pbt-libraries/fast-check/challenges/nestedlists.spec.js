const fc = require("fast-check");

test("nestedlists", () => {
  fc.assert(
    fc.property(fc.array(fc.array(fc.constant(0))), (ls) => {
      return ls.map((l) => l.length).reduce((a, b) => a + b, 0) <= 10;
    })
  );
});
