const fc = require("fast-check");

test("difference_must_not_be_zero", () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (first, second) => {
      if (first < 10) {
        return true;
      }
      const difference = Math.abs(first - second);
      return difference !== 0;
    })
  );
});

test("difference_must_not_be_small", () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (first, second) => {
      if (first < 10) {
        return true;
      }
      const difference = Math.abs(first - second);
      return 1 > difference || difference > 4;
    })
  );
});

test("difference_must_not_be_one", () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (first, second) => {
      if (first < 10) {
        return true;
      }
      const difference = Math.abs(first - second);
      return difference !== 1;
    })
  );
});
