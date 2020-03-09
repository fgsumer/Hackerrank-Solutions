function reverseString(s) {
  try {
    let reversedArray = s
      .split('')
      .reverse()
      .join('');
    console.log(reversedArray);
  } catch (exception) {
    console.log(`${exception.message}\n${s}`);
  }
}
