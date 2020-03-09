function Exception(errorMessage) {
  this.message = errorMessage;
}

function isPositive(a) {
  if (a > 0) {
    return 'YES';
  } else if (a === 0) {
    throw new Exception('Zero Error');
  } else {
    throw new Exception('Negative Error');
  }
}
