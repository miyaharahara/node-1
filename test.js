// CommonJS形式のモジュール読み込み
const math = require('./cjs-math');
const res1 = math.add(1, 2);
const res2 = math.double(10);

console.log(res1, res2);

let result = 1
for (let i = 1; i <= 10; i++) {
  result *= i
  console.log(`${i}までの積: ${result}`)
  }