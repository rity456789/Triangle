const Point = require("./Point");
const triangleModule = require("./Triangle");
const Triangle = triangleModule.Triangle;
const epsilion = triangleModule.epsilon;
const triangleType = triangleModule.triangleType;
const distance = triangleModule.distance;

test("should calculate distance right between 2 points", () => {
  const p1 = new Point(1, 2);
  const p2 = new Point(4, 6);
  const dis = distance(p1, p2);
  expect(dis).toBe(5);
});

test("should specify not a triangle because one of edges equals zero", () => {
  const p1 = new Point(1, 2);
  const p2 = new Point(1, 2);
  const p3 = new Point(3, 3);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.type).toBe(triangleType.NOT_A_TRIANGLE);
});

test("should specify not a triangle because edges are on one line", () => {
  const p1 = new Point(1, 2);
  const p2 = new Point(2, 4);
  const p3 = new Point(3, 6);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.type).toBe(triangleType.NOT_A_TRIANGLE);
});

test("should specify equilateral triangle", () => {
  const p1 = new Point(0, 0);
  const p2 = new Point(2, 0);
  const p3 = new Point(1, 1.732);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.type).toBe(triangleType.EQUILATERAL);
});

test("should specify right_isosceles triangle", () => {
  const p1 = new Point(0, 0);
  const p2 = new Point(3, 0);
  const p3 = new Point(0, 3);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.type).toBe(triangleType.RIGHT_ISOSCELES);
});

test("should specify isosceles triangle", () => {
  const p1 = new Point(0, 0);
  const p2 = new Point(2, 0);
  const p3 = new Point(1, 2);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.type).toBe(triangleType.ISOSCELES);
});

test("should specify right triangle", () => {
  const p1 = new Point(0, 0);
  const p2 = new Point(2, 0);
  const p3 = new Point(0, 9);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.type).toBe(triangleType.RIGHT);
});

test("should specify normal triangle", () => {
  const p1 = new Point(0, 0);
  const p2 = new Point(1, 2);
  const p3 = new Point(1, -3);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.type).toBe(triangleType.NORMAL);
});

test("should get perimeter of not a triangle equal -1", () => {
  const p1 = new Point(1, 2);
  const p2 = new Point(1, 2);
  const p3 = new Point(3, 0);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.getPerimeter()).toBe(-1);
});

test("should get perimeter of any triangle", () => {
  const p1 = new Point(0, 0);
  const p2 = new Point(4, 0);
  const p3 = new Point(0, 3);
  const triangle = new Triangle(p1, p2, p3);
  expect(triangle.getPerimeter()).toBe(12);
});
