const fc = require("fast-check");

test("reverse", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (ls) => {
      const rev = [...ls].reverse();
      expect(rev).toEqual(ls);
    })
  );
});
