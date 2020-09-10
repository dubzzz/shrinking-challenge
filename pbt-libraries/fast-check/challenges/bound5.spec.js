const fc = require("fast-check");

const sum16 = (a, b) => {
  let s = a + b;
  while (s > 32767) s -= 65536;
  while (s < -32768) s += 65536;
  return s;
};

test("bound5", () => {
  const int16Arb = fc.integer(-32768, 32767);
  const boundedListsArb = fc
    .array(int16Arb, 0, 1)
    .filter((x) => x.reduce(sum16, 0) < 256);

  fc.assert(
    fc.property(
      fc.tuple(
        boundedListsArb,
        boundedListsArb,
        boundedListsArb,
        boundedListsArb,
        boundedListsArb
      ),
      (p) => {
        return p.flat().reduce(sum16, 0) < 5 * 256;
      }
    )
  );
});
