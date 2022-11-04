// let arr = [3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   arr[i * 3] = arr[i] * 3;
// }
// console.log(arr);

let arred = [3, 4, 5, 6];

let modificar = arred.map((element) => {
  return element * 3;
});

console.log(modificar);
console.log(arred);
