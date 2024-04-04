var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log("函数中显示发动机型号  :   " + this.engine);
    };
    return Car;
}());
// 创建一个对象
var obj = new Car("XXSY1");
// 访问字段
console.log("读取发动机型号 :  " + obj.engine);
// 访问方法
obj.disp();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积:  " + this.Area);
    };
    return Circle;
}(Shape));
var obj = new Circle(223);
obj.disp();
