const fc = require("fast-check");

test("lengthlist", () => {
  fc.assert(
    fc.property(
      fc.integer(1, 100).chain((n) => fc.array(fc.nat(1000), n, n)),
      (ls) => {
        return ls.reduce((a, b) => Math.max(a, b), 0) < 900;
      }
    )
  );
});

test("lengthlist (2)", () => {
  fc.assert(
    fc.property(
      fc
        .integer(1, 100)
        .chain((n) => fc.genericTuple(Array(n).fill(fc.nat(1000)))),
      (ls) => {
        return ls.reduce((a, b) => Math.max(a, b), 0) < 900;
      }
    )
  );
});
