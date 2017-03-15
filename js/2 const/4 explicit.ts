let someArr = new Array(3).fill('');
let indexes1 = []
for (let index = 0; index < someArr.length; index++) {
  indexes1 = indexes1.concat([index]);
}
console.log(indexes1);

const indexes2 = someArr.map((x, i) => i);
console.log(indexes2);
 

/** Module */
export { someArr };