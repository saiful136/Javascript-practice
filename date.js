let d=new Date();
console.log(d);

//The paraameters are specifying year, month, day, hour, minute, second, and millisecond (in order):
let a = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(a);

let c = new Date(2020,11); //JS counts months from 0. January=0, December=11.
console.log(c);

//You cannot show only year. It will consider it as Milliseconds.
let r = new Date(2020);
console.log(r);


// --------Previous century------------
//One and two digit years will be interpreted as 19xx

let s=new Date(5,4,4); //output = May 04 1955
console.log(s);

let p=new Date(22,11,22); //Dec 22 1922
console.log(p);


//-------new Date(dateString)----------

let b = new Date ("24 February, 2020");
console.log(b);

let ab = new Date("2024-11-11"); //while specifying the date in string, year will start from 1. So, december = 12.
console.log(ab);

let ad = new Date ("2020"); //ISO dates can be written only in year
console.log(ad);

//---------Showing different date format------
let x = new Date();
console.log(x);
console.log(x.toISOString());
console.log(x.toUTCString());
console.log(x.toLocaleDateString());
console.log(x.toLocaleTimeString());



//----------Get Date Methods-----------------
let t = new Date();
console.log(t.getFullYear());
console.log(t.getMonth()); //month count starts from 0
console.log(t.getDate());
console.log(t.getTime());
console.log(t.getDay());
console.log(t.Date.now());
