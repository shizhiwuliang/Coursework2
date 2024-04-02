let age: number = 30; // 整数
let score: number = 75.5; // 浮点数
let name: string = "Alice"; // 使用双引号
let greeting: string = 'Hello, ' + name; // 使用单引号
let welcomeMessage: string = `Welcome, ${name}`; // 使用模板字符串
let list: number[] = [1, 2, 3]; // 方括号表示法
let fruits: Array<string> = ['Apple', 'Orange', 'Banana']; // 泛型数组表示法
let map = new Map<string, number>();
map.set('apples', 5);
map.set('bananas', 10);
// 获取值
console.log(map.get('apples')); // 输出 5
let person: [string, number] = ['Alice', 28]; // 第一个元素是string，第二个是number
