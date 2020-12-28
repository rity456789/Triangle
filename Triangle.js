const triangleType = {
  EQUILATERAL: "EQUILATERAL",
  ISOSCELES: "ISOSCELES",
  RIGHT: "RIGHT",
  RIGHT_ISOSCELES: "RIGHT_ISOSCELES",
  NORMAL: "NORMAL",
  NOT_A_TRIANGLE: "NOT_A_TRIANGLE",
};
const epsilon = 0.0001;
class Triangle {
  constructor(point1, point2, point3) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.type = this.getType();
  }
  getType() {
    const [edge1, edge2, edge3] = [
      distance(this.point1, this.point2),
      distance(this.point1, this.point3),
      distance(this.point2, this.point3),
    ].sort((a, b) => a - b);
    if (edge1 <= 0 || edge2 <= 0 || edge3 <= 0) {
      return triangleType.NOT_A_TRIANGLE;
    }
    if (edge3 >= edge1 + edge2) {
      return triangleType.NOT_A_TRIANGLE;
    }
    if (isEquilateral(edge1, edge2, edge3)) {
      return triangleType.EQUILATERAL;
    }
    if (isIsosceles(edge1, edge2, edge3)) {
      if (isRight(edge1, edge2, edge3)) return triangleType.RIGHT_ISOSCELES;
      return triangleType.ISOSCELES;
    }
    if (isRight(edge1, edge2, edge3)) {
      return triangleType.RIGHT;
    }
    return triangleType.NORMAL;
  }
  getPerimeter() {
    if (this.type == triangleType.NOT_A_TRIANGLE) return -1;
    return (
      distance(this.point1, this.point2) +
      distance(this.point1, this.point3) +
      distance(this.point2, this.point3)
    );
  }
}

function isRight(edge1, edge2, edge3) {
  return Math.abs(edge3 * edge3 - edge1 * edge1 + edge2 * edge2) < epsilon;
}

function isIsosceles(edge1, edge2, edge3) {
  return Math.abs(edge1 - edge2) < epsilon || Math.abs(edge2 - edge3) < epsilon;
}

function isEquilateral(edge1, edge2, edge3) {
  return Math.abs(edge1 - edge2) < epsilon && Math.abs(edge2 - edge3) < epsilon;
}

function distance(point1, point2) {
  const x = point1.x - point2.x;
  const y = point1.y - point2.y;
  return Math.sqrt(x * x + y * y);
}

module.exports = {
  Triangle: Triangle,
  epsilon: epsilon,
  triangleType: triangleType,
  distance: distance,
};
