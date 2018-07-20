function* anotherGenerator() {
  yield  1;
  yield  2;
  yield  3;
}

for( let i of anotherGenerator()){
/* console.log(i) */
}
let gen = anotherGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
