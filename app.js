console.log('Hi');
document.write ('Hello');
document.getElementById("hd").style.color = "red";
document.getElementsByTagName('p')[0].style.color =  'blue';
document.getElementsByClassName("example")[0].style.color = 'red';

//alert ("hi");


//-------Variables---------

var x,y,z;
x=2;
y=5;
z=x+y;
console.log(z);

var str1 = "100";
var n = "5";
console.log(str1*n);

let name = "Saiful Islam";
let age = 2;

console.log(`My name is ` + name);
console.log(`I'm ` + age + " years old");

// ----------Boolean-------------

let b3 = Boolean(true)
let b4 = Boolean(false)

console.log(b3, b4);

//-------Null vs Undefined-------
let abc;
let xyz = null;
console.log(null);
console.log(abc);

// -------If Else---------------

let a=5, b=6;

if (a>b) {
    console.log("A is greater");
} else {
    console.log("B is greater");
}

//--------Type Conversion---------
let str = '100';
let p = 5;

console.log(Number(str)); //value of the string converted to integer
console.log(p.toString()); //value of p converted to string


//--------------Objects---------------

let obj = {};
obj.x =11;

console.log(obj);
//console.log(typeof obj);
//"type of" is used to know the type of

let point = {
    x: 10,
    y: 20
}

point.y = 30; //updating the value of object data
console.log(point);

point.z=27;
console.log(point);

// ---------Object constract----------
let obj1 = Object();
obj1.a =22;
console.log(obj1);

let obj2 = new Object();
obj2.b = 24;
console.log(obj2);

//-----Accesing object properties----\

let points = {
    p: 22,
    q: 42,
    r: 76
}

console.log(points.r); //showing the value of individual object properties
console.log(points.p + points.q); //adding 2 values





