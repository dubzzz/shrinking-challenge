const fc = require("fast-check");

test("distinct", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (ls) => {
      return new Set(ls).size < 3;
    })
  );
});
