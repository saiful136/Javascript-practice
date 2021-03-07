function functionName() {
    console.log("I'm a Function");
}

function add1() {

    let a=20, b=1;
    console.log(a+b);

}

function sub() {
    let a=20, b=1;
    console.log(a-b);
}

functionName();
add1();
sub();


//-----------Parameters-------------

function add(x, y) {
    let result= x + y;
    return result;
}

console.log(add(1,2));

// -------------Array------------------ 
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}
console.log(sum1);


let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
}
console.log(sum2);


function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
console.log(sum);
}

sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);

// --------------------Argument object

function test(a,b,c) {
    console.log(arguments);
    
}

test(1,2,4);