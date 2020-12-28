const Point = require("./Point");

test("should have initial position without passing", () => {
  const point = new Point();
  expect(point.x).toBe(0);
  expect(point.y).toBe(0);
});

test("should create point with passed positions", () => {
  const point = new Point(1, 2);
  expect(point.x).toBe(1);
  expect(point.y).toBe(2);
});
