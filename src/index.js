import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!!!!!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const arrowFunc = (str) => console.log(str)
// arrowFunc('Hi!!!')

// 分割代入
// const myProfile = ['kyohei', 29];
// const [name, age] = myProfile
// const message = `私は、${name}、${age}歳です`
// console.log(message)

// const myProfileDetail = ['kyohei', 29, 'Fukui']
// const [name, age] = myProfileDetail
// 指定した要素分だけ、分割代入される
// const message = `${name}, ${age}, ${prefecture}`
// console.log(message)

// スプレッド構文の使い所
// const nums = [1,2]
// const sumFunc = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(sumFunc(nums[0], nums[1]))
// console.log(sumFunc(...nums))

// まとめる
// const nums = [1,2,3,4,5]
// const [num1, num2, ...numLeft] = nums
// console.log(`${num1}, ${num2}, ${numLeft}`)

// 配列の複製・結合
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [...array1]
// console.log(array3)
// const array4 = [...array1, ...array2]
// console.log(array4)
// 参照渡しで、意図せぬ値更新を防ぐ役割
// concatでもできるけど、スプレッドなら任意の位置で特定の配列を展開できる

// 論理演算子
// ||は、左がfalseなら右を返す
const num1 = null;
const result1 = num1 || "左がfalseなら右側を返す";
console.log(result1);

const num2 = null;
const result2 = num2 && "左側がfalseなら左を返す";
console.log(result2);
