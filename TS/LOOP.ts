var grade:string = "A";
switch(grade) {
    case "A": {
        console.log("优");
        break;
    }
    case "B": {
        console.log("良");
        break;
    }
    case "C": {
        console.log("及格");
        break;
    }
    case "D": {
        console.log("不及格");
        break;
    }
    default: {
        console.log("非法输入");
        break;
    }
}



var num:number = 2
if(num > 0) {
    console.log(num+" 是正数")
} else if(num < 0) {
    console.log(num+" 是负数")
} else {
    console.log(num+" 不是正数也不是负数")
}

var num:number = 5;
var factorial:number = 1;

while(num >=1) {
    factorial = factorial * num;
    num--;
}
console.log("5 的阶乘为："+factorial);



var n:number = 10;
do {
    console.log(n);
    n--;
} while(n>=0);