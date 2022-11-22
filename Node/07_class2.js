const {Car} = require("./07_class.js")
console.log(Car);

/* const Car = require("./07_class.js")
console.log(Car); //객체형태로 가져오는 것 */

var car1 = new Car("red");
//클래스를 이용해서 객체를 생성하기 위해 
console.log(car1.returnColor());
var car2 = new Car("blue");
console.log(car2.returnColor());
var car3 = new Car("yellow");
console.log(car3.returnColor());