function addNumbers(...nums:number[]) {
    var i;
    var sum:number = 0;

    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    console.log("和为：",sum)
}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)



var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));




function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1;
    } else {
        return (number * factorial(number - 1));     // 调用自身
    }
};
console.log(factorial(6));      // 输出 720


var foo = (x:number)=>10 + x
console.log(foo(100))      //输出结果为 110



function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any,y?:any):void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1,"xyz");