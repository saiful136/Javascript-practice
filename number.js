let x=20, y=40; //here, the values are numbers
let z=x+y;
console.log(z); 

// If we put the value inside the quotation, it will consider the value as a string. So, it will concatenated the values instead of addition. 
let a="40";
let b="20";
let c=a+b;
console.log(c); 

// But, for the other operators like (-,*,/,%) it will always work as a number.

let p=a*b;
console.log(p);

let q=a-b;
console.log(q);

let r=a/b;
console.log(r);


// -----------NaN------------
// isNaN = Not a Number
//isNuN is used to findout whether it's a number or not. It shows results in boolean.
console.log(isNaN(r));

let ab="saj";
let ac=234;
let ad=ab+ac;
console.log(ad);
console.log(isNaN(ad)); //as the value of "ad" is "saj234" and it's not a plain number, so the output of isNuN will be TRUE.


// ----------Infinity----------
let anc=2/0;
console.log(anc); //If the result surpasses the largest possible number, then it will show Infinity as the output.

let asd = typeof Infinity;
console.log(asd); //Infinity is one kind of number.


//----Converting variables to numbers---

//The Number() method converts variables to numbers:

let qw=Number(true);
console.log(qw);

let qq=Number(false);
console.log(qq);

let qr=Number("102");
console.log(qr);

let qa=Number("10,2");
console.log(qa); //returns NaN


// --------toExponential--------------

let n1=44.4444444;
n1=parseFloat(n1).toExponential(2); //parseFloat converts the number into string
console.log(n1);
console.log(n1);


// --------toFixed--------------
let n2 = 24.567576887;
console.log(typeof n2);
n2=parseFloat(n2).toFixed(2); //parseFloat converts the number into string
console.log(n2);
console.log(typeof n2);


