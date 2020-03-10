/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let newArray = [];
  for (let item in objects) {
    if (objects[item].x === objects[item].y) {
      newArray.push(item);
    }
  }
  return newArray.length;
}
