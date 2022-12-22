// 01/09/2022
// function showName(name){
//     // debugger;
//     console.log(name);
// }
// var name="ankur";
// var val="verma";
// showName(val);
// name="chawla";
// showName();

//   for (i = 1; i < 100; i++) {
//     var count = 0;
//     for (j = 2;  j*j <= i; j++) {
//       if (i % j == 0) {
//         count++;
//         break;
//       }
//     }
//     if (count == 0) {
//       console.log(i);
//     }
//   }

// var costprice=200;
// var time_month=5;
// var rate=5;

// var intrest=costprice*time_month*rate/100;
// console.log(intrest);

// function intrest(costprice,time_month,rate){
// var val=costprice*time_month*rate/100;
// var total=costprice+val;
//   return total;
// }
// var t=intrest(200,5,4);
// console.log(t);

// var s={
//    name:"shashank",
//    roll_no:1834577,
//    father_name:"sachin",
//    mark:5.8,
// }
// for(let key in s){
//     console.log(key +" : "+s[key]);
// }

// console.log(2 * "3");

// 02/09/2022

// var size=5;
// var a=5;
// var size=4;
//  for(j=size; j>=0;j--){
//   console.log(a);
//   a=a-2;
//  }

// var a=0;
// for(a;a<5;a++){
// }
// console.log(a);

// let array = [3, 1, 5, 9, 2, 6, 4, 7];
// let indexOfFive = -1;

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === 5) {
//     indexOfFive = i;
//   }
// }

// console.log(indexOfFive);

// var s=["sachin" , "kumar" , "yadav" , "arpan" , "singh"];
// var r=[];
// for(i=0;i<s.length;i++){
//  r.push(s[i].toUpperCase());
// }
// console.log(r);

// var s = [2, 3, 4, 5, 3, 7, 8, 7];
// s.forEach(num);
// function num(x) {
//   if(x>=5){

//     console.log(x);
//   }
// }

// var arr = [2, 3, 4, 5, 3, 7, 8, 7];
// var p = arr.reduce((first, second) => first + second );
// console.log(p);

// function man(first, second) {
//   return first + second;
// }

// function fibonacci(number) {
//   if (number < 2) return number; // 0 if number is 0, 1 if number is 1
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }

// console.log(fibonacci(6));  // => 8

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result = randomNumberBetween(1, 6);
// console.log(result);
// tries += 1;

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// console.log(
//   "It took " + String(tries) + " tries to get a number greater than 2"
// );

// function revision
// function say(words) {
//   console.log(words);
// }

// say("hello");
// say("hi");
// say("how do you do");
// say("Quite all right");

// function foo() {
// function bar() {
//   console.log("BAR");
//   bar(); // => BAR

// }
// bar(); // => BAR
// }
// foo();

// let greetingMessage = "Good Morning!";

// function greetPeople() {
//   console.log(greetingMessage);
// }
// greetPeople(); // => 'Good Evening'
// changeGreetingMessage("Good Evening");

// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }

// problem 02/09/2022
// p=3;for i=(3:4)
// p=p+2;
// encodeURI;

// var i=0;
// while (i<5){
// i=i+i;
// // console.log(i);
// }
// encodeURI;

// // set the initial value
// var loopCounter = 3;

// function loop() {

//   document.write(loopCounter + "<br>");

//   // decrease the loopCounter, to prevent running forever
//   loopCounter--;

//   // test loopCounter and if truthy call loop() again
//   loopCounter && loop();
// }

// // invoke the loop
// loop();

// // // // 03/09/2022 //  //  //  //  //  //  //  //

// var arr1=[1,2,3,4,5,6,7,8,9,3,4,5];
// var arr2=[11,12,13,14,15,16];

// var arrpod= arr1.length > arr2.length ? arr1:arr2;
// console.log(arrpod);
// var s=(Math.min(arr1.length, arr2.length));

// for(i=0;i<s;i++){
// arrpod[i]=arr1[i] +arr2[i];

// }
// console.log(arrpod)

// function getsum(arr1 , arr2){
//   var arrpod= arr1.length > arr2.length ? arr1:arr2;
//   // console.log(arrpod);
//   var s=(Math.min(arr1.length, arr2.length));

//   for(i=0;i<s;i++){
//   arrpod[i]=arr1[i] +arr2[i];

//   }
//   return arrpod;
// }
// var a=[1,2,3,4,5,6,7,8,9,3,4,5];
// var b=[11,12,13,14,15,16];
// var total=getsum (a,b);
// console.log(total);

// var arr1=[1,2,3,4,5,6,7,8,9];
// for(p=0; p<arr1.length;p++){
//   console.log(arr1[p]);
// }

// function changeFirstElement(array) {
//   array[0] = 9;
// }
// let oneToFive = [1, 2, 3, 4, 5];
// oneToFive[0]= 12;
// changeFirstElement(oneToFive);
// console.log(oneToFive); // => [9, 2, 3, 4, 5]

// function addToArray(array) {
//   return array.concat("900");
// }
// let oneToFive = [1, 2, 3, 4, 5];
// console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
// // console.log(oneToFive); // => [1, 2, 3, 4, 5]

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// // let sum = add(20, 45);
// // console.log(sum); // => 65

// // let difference = subtract(80, 10);
// // console.log(difference); // => 70

// // console.log(add(20, 45)); // => 65
// // console.log(subtract(80, 10)); // => 70

// function times(num1, num2) {
//   return num1 * num2;
// }

// console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// // 4550 == ((20 + 45) * (80 - 10))

// let sum = add(20, 45);
// let difference = subtract(80, 10);
// let result = times(sum, difference);
// console.log(result);

//  console.log(add(subtract(80, 10), times(subtract(20, 6), add(30, 5)))); // => 560

// function greetPeople() { // This is a function expression, not a declaration
//   console.log("Good Morning!");
// };greetPeople();

// let greetPeople = function () {
//   console.log("Good Morning!");
// };

// greetPeople();

// function makeGreeter(name) {
//   return function greeter() {
//     console.log(`Hello ${name}`);
//  }
//   greeter("sachin");
// }
// makeGreeter();

// function show(){
//   console.log("Arpan")
// }
//  setTimeout(show, 3000);

// var show=function (){
//   console.log("hello!")
// }
// show();


// function dsp(a){
//   return function(b){
//      return a+b;
//   }
// }
// var sd=dsp(20);
// var s=sd(30);
// console.log(s);

// function makeGreeter(name) {
//   return function greeter() {
//     console.log(`Hello ${name}`);
//   };
// }
// var sd=makeGreeter("sachin");
// sd();

// let greetPeople = () => console.log("Good Morning!");
// greetPeople();

// let add = (a, b) => a+b;
// var sum=add(2,4);
// console.log(sum);

// var s = (a ,b) =>a+b;

// var t=s(3,4);
// console.log(t);

// let add = (a, b) => a + b;

// let getNumber = (text) => {
//   let input = prompt(text);
//   return Number(input);
// };

// let number1 = getNumber("Enter a number: ");
// let number2 = getNumber("Enter another number: ");
// console.log(add(number1, number2));

// function first() {
//   console.log("first function");
// }
// function second() {
//   first();
//   console.log("second function");
// }

// second();

// function sachin (){
//     return function (a){

//         return function (b){

//             return function (c){
//         }
//         }

//     }
//     return a+b+c;
// }
// var s=sachin()(10)(10)(10);
// console.log(s);

// var s = [
//   {
//     name: "sachin",
//     class: "B.tech",
//     roll: 1834577,
//     id: 1,
//     state: "Bihar",
//   },
//   {
//     name: "Gaurab",
//     class: "B.tech",
//     roll: 1804792,
//     id: 2,
//     state: "Bihar",
//   },
//   {
//     name: "Yuvraj",
//     class: "B.tech",
//     roll: 18302344,
//     id: 3,
//     state: "Bihar",
//   },
//   {
//     name: "shahsank",
//     class: "B.tech",
//     roll: 1834577,
//     id: 4,
//     state: "Bihar",
//   },
//   {
//     name: "Arpan",
//     class: "B.tech",
//     roll: 1834577,
//     id: 5,
//     state: "Jammu",
//   },
// ];
// var t = [];
// for(i=0;i<s.length;i++){
//     if(s[i].state=="Bihar"){
//         t.push(s[i])
//     }

// }
// console.log(t);

// var p = s.map((value) => {
//   if (value.name == "Arpan") {
//     console.log(value.name);
//   }
// });

// const sach=s.filter(value=>value.state=="Jammu").map(w=>w.name)
// console.log(sach);

// // // // 07/09/2022 //  //  //  // // //
// var arr=[2,3,4,5,6,7,8,9];

// var s=arr.reduce(add);
// console.log(s);

// function add(a ,b){
//   return a+b;
// }
// var s=arr.reduce((x,y) => x+y) ;
// console.log(s);

// var p=arr.map(isgreater);
// console.log(p);

// function isgreater(x){
//     return x*3;

// // }
// var p=arr.map((x,y)=> x*3, y);
// console.log(p);

// var q=arr.filter(less);
// console.log(q);

// function less(p){
//     return p<4;
// }
// var q=arr.filter((x)=> x<4);
// console.log(q);

// var t=arr.includes(4);
// console.log(t);

// console.log(arr);
// var s=arr.sort();
// console.log(s);

// var arr = [
//   {
//     name: "shashank",
//     roll: 1804824,
//     class: "B.tech",
//     state: "Bihar",
//     id: 1,
//   },
//   {
//     name: "yuvraj",
//     roll: 1804814,
//     class: "B.tech",
//     state: "Bihar",
//     id: 2,
//   },
//   {
//     name: "sachin",
//     roll: 1834577,
//     class: "B.tech",
//     state: "Bihar",
//     id: 3,
//   },
//   {
//     name: "Gaurav",
//     roll: 1804792,
//     class: "B.tech",
//     state: "Bihar",
//     id: 5,
//   },
//   {
//     name: "Rahul",
//     roll: 1804808,
//     class: "B.tech",
//     state: "Bihar",
//     id: 6,
//   },
//   {
//     name: "Arpan",
//     roll: 1804762,
//     class: "B.tech",
//     state: "Jammu",
//     id: 7,
//   },
// ];

// var sac=arr.filter((val)=> {
//     if(val.state=="Bihar"){
//         console.log(val);
//     }
// });

// var sac = arr.map((val) => {
//     debugger;
//   if (val.state == "Jammu") {
//     return {...val, state: "Bihar" };
//   }
//   return val;
// });
// console.log(sac);

//    arr[5].state="Bihar";
//    console.log(arr);

// var sac = arr.map((val) => {
//   if (val.state == "Jammu") {
//     val.state == "Bihar"
//     console.log(val);
//   }

// });

// spasrade operator
// var arr =  ['Beluga', 'Blue', 'Humpback'];
// var s=arr.join(); // 'Blue,Humpback,Beluga'
// var p=arr.sort(); // ['Beluga', 'Blue', 'Humpback']
// console.log(s);
// console.log(p);
// var arr= [40, 1, 5, 200];
// var s =arr.join(); // '40,1,5,200'
// var t =arr.sort(); // [1, 200, 40, 5]
// console.log(s);
// console.log(t);

// function compareNumbers(a, b) {

//     return a - b;
//   }
// var u =arr.sort(compareNumbers); // [1, 5, 40, 200]
// console.log(u);

// var arr="2,3,4,5,2,8,6".split();
// console.log(arr);

// function a(x){

//     function b(y){
//      return x+y;
//     }
//      b(24);

//      function
//     //  console.log(t);

//     } a(23)
// // 1
// var a=[1,2,3,4,5,6,7,8];
// // 2
// console.log(a);
// var b=[];
// b[0]=1;
// b[1]=2;
// b[2]=3;
// b[0]=5;
// console.log(b);

// // 3
// var c=[];
// c.push(2,4,5,6);
// console.log(c);
// // 4
// var d="2,3,4,5,6,7,8".split(",");
// console.log(d);

// var arr = [
//   {
//     name: "shashank",
//     roll: 1804824,
//     class: "B.tech",
//     state: "Bihar",
//     id: 1,
//   },
//   {
//     name: "yuvraj",
//     roll: 1804814,
//     class: "B.tech",
//     state: "Bihar",
//     id: 2,
//   },
//   {
//     name: "sachin",
//     roll: 1834577,
//     class: "B.tech",
//     state: "Bihar",
//     id: 3,
//   },
//   {
//     name: "Gaurav",
//     roll: 1804792,
//     class: "B.tech",
//     state: "Bihar",
//     id: 5,
//   },
//   {
//     name: "Rahul",
//     roll: 1804808,
//     class: "B.tech",
//     state: "Bihar",
//     id: 6,
//   },
//   {
//     name: "Arpan",
//     roll: 1804762,
//     class: "B.tech",
//     state: "Jammu",
//     id: 7,
//   },
//   {
//     name: "Gaurav",
//     roll: 1804792,
//     class: "B.tech",
//     state: "Bihar",
//     id: 5,
//   },
// ];

// var ans=arr.map((val) =>{
//   if(val.name=="Gaurav"){
//     var t= delete val;

//     return t;
//   }
//   return val;
// })
// console.log(ans);

// var sac=arr.map((val) =>{
//    return {...val,subject:"science"}
// })
// console.log(sac);
// var obj = {
//   name: "dilkhush",
//   Roll: 12345,
//   class: "B.tech",
//   subject: "Science",
//   id: 9,
// };

// for (i = 0; i < arr.length; i++) {
//   if (arr[i].name == "Rahul") {
//      arr.splice([i+1],0,obj);
//     //  arr.push(obj);
//   }
// }

// console.log(arr);

// var arr=[[[["RAM"],["SHAYAM"],["KAM"],["NAM"],["DHAM"]]]];
// arr.forEach((w) => {
//   w.forEach((x) =>{
//   x.forEach((y)=> {
//   y.forEach((z) => console.log(z))
//   })
//   });
//  });

// const numbers = [4, 2, 5, 111, 3];
// debugger;
// numbers.sort((a, b)=> a - b);
// // numbers.sort();
// console.log(numbers);

// function a(u) {
//   // debugger;
//   return function b(v) {
//     return v*u; n
//   };

// }
// var i=a(5);
// console.log(i(8));
// debugger;
// for (i = 5; i>0 ; i--) {
//   for (j =0; j<i; j++) {
//     document.write(" * ");
//   }
//   document.write("</br>");
// }
//  var arr=[2,3,4,6,4,6,7,5,76,];

//   delete arr[3];
//   console.log(arr);

// function Student(first, second, last, roll, cls, state){
// this.firstName=first;
// this.secondName=second;
// this.lasstName=last;
// this.Roll=roll;
// this.class=cls;
// this.state=state;
// }
// var student1= new Student("SHASHANK" , "KUMAR" ,"YADAV",1834577, "B.tech","BIHAR" )
// console.log(student1);

// var student = {
//   firstName: "SHASHANK",
//   secondName: "KUMAR",
//   lastName: "YADAV",
//   Roll: 1834577,
//   class: "B.tech",
//   state: "Bihar",
// };

// for (const key in student) {
//   console.log(key + ":" + student[key]);
// }

// console.log(Object.keys(student));
// console.log(Object.values(student));

// var arr=[70,79,71,77,26];
// var i=arr.slice(3,5);  //i=>77,26
// var i=arr.splice(1,3,39)//arr=>70,39,26
// arr.sort();

// if(arr[3]==77){
//   arr[3]=22;
// }
// console.log(arr);