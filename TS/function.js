function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
function factorial(number) {
    if (number <= 0) { // 停止执行
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // 调用自身
    }
}
;
console.log(factorial(6)); // 输出 720
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //输出结果为 110
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
