function identity(arg) {
    return arg;
}
// 使用泛型函数
var result = identity("Hello");
console.log(result); // 输出: Hello
var numberResult = identity(42);
console.log(numberResult); // 输出: 42
// 使用泛型接口
var pair = { first: "hello", second: 42 };
console.log(pair); // 输出: { first: 'hello', second: 42 }
// 基本语法
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
// 使用泛型类
var stringBox = new Box("TypeScript");
console.log(stringBox.getValue()); // 输出: TypeScript
function logLength(arg) {
    console.log(arg.length);
}
// 正确的使用
logLength("hello"); // 输出: 5
