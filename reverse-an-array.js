let arr = [1, 2, 3, 4, 5, 6, 7];
function reverseArray(arr) {
  let newArr=[];
  for (i=0; i<=arr.length; i++) {
    newArr.push(arr[arr.length - i]);
  }
  return newArr;
}