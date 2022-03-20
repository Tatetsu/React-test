// const name = "じゃけぇ";
// const age = 28;
// //「私の名前はじゃけぇです。年齢は28歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1)

// // テンプレート文字列を用いる方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
//　従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const name = "じゃけぇ";
// const age = 28;
// //「私の名前はじゃけぇです。年齢は28歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1)

// // テンプレート文字列を用いる方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
//　従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 *  分割代入
 */
// const myPro
// const myProfile = [`じゃけぇ`, 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

// const sayHello = (name) => console.log(`こんにちは！${name}さん`);
// sayHello("じぇけぇ");

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1)
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2
// console.log(num1)
// console.log(num2)
// console.log(arr3)

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]
// arr6[0] = 100;
// console.log(arr6)
// console.log(arr4)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr8 = arr4;
// console.log(arr8)
// arr8[0] = 100;
// console.log(arr4)

/**
 * 三項演算子
 */
// ある条件　？　条件がtrueのとき　: 条件がfalseのとき
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1)

// const num = 130000000;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(`${formattedNum}円です`)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です';
// }
// console.log(checkSum(50, 60))

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1か２はtrueになります")
// }

// if (flag1 && flag2) {
//   console.log("1か２はtrueになります")
// }

// || は左側がfalseなら右側を返す (左側がtrueなら左側を返す)
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee)

// &&　は左側がtrueなら右側を返す （左側がfalseなら左側を返す）
const num2 = null;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
