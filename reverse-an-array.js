function reverseArray(arr) {
  const newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    newArr.push(arr[arr.length - i]);
  }
  return newArr;
}
reverseArray([1, 2, 3, 4, 5, 6]);
