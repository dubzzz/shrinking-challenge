const fc = require("fast-check");

test("large_union_list", () => {
  fc.assert(
    fc.property(fc.array(fc.array(fc.integer())), (ls) => {
      return new Set(ls.flat()).size < 5;
    })
  );
});
