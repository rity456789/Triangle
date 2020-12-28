const Point = require("./Point");
const triangle = require("./Triangle");
const Triangle = triangle.Triangle;
const epsilion = triangle.epsilon;
const triangleType = triangle.triangleType;
const distance = triangle.distance;

test("should calculate distance right between 2 points", () => {
  const p1 = new Point(1, 2);
  const p2 = new Point(4, 6);
  const dis = distance(p1, p1);
  console.log(dis);
});
