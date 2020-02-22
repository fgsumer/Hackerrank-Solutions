let r = readLine();
const PI = Math.PI;

function getArea(r) {
  let area;
  area = PI * Math.pow(r, 2);
  return area;
}
function getPerimeter(r) {
  let perimeter;
  perimeter = 2 * PI * r;
  return perimeter;
}

console.log(getArea(r));
console.log(getPerimeter(r));
