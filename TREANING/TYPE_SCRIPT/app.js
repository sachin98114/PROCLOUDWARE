"use strict";
// enum latter{
//     sachin="sac" , shashank="sha" , yuvi="yuvraj", rahul="hala", gaurav="chhotu" , arpan="sarabi"
// }
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Test function Working fine");
    };
    return App;
}());
var a1 = new App();
a1.test();
// let a:number=10;
// console.log(a);
// var data:string[] =["anil","joyo","mario"];
// data.push("ifjiojfo")
// data.push(100);
// data.push(true)
// console.log(data);
// object
// define a custom type for object
// interface usersTyped{
//     name:string,
//     age:number,
//     address:any,
// }
// var users:any={
//     name:"bruce",
//     age:30,
//     address:100
// }
// users["city"]="delhi"  //create properties in object
// console.log(users)
// Union
// var data:string|number|boolean="anil";
// data=30;
// data=true;
// console.log(data);
// Interface in typescript
// why use interface
// how to use interface
// interface example with object
// syntax
// interface interface_name{
// prototy_type: data_type,
// prototy_type: data_type
// }
// interface userType{
//     name:string,
//     age:number,
//     getName:()=>string
// }
// var users:userType = {
//     name: "yuvi",
//     age: 30,
//     getName:function(){
//         return "yuvi"
//     }
// }
// console.log(users);
// console.log(users.getName());
// // function
// Define a normal function
// define function type
// add params in function
// define params type
// optional params with type
// function cal(a:number,b?:number):number
// {
//     return b?a+b:a
// }
// console.log(cal(100))
// Class in javascript
// define a class
// create object for class
// make property
// make function
// define data type of function and property
// define dsts type to params
// class App{
//     name:string="yuvraj"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         return this.name
//     }
// }
// let a1= new App("yuvi");
// console.log(a1.getName())
// Inheritance
// class Parent{
//     name="shashank";
//     setName(name){
//         this.name=name;
//     }
// }
// class Child extends Parent{
//      getName:string(){
//         return this.name
//     }
// }
// var c1=new Child();
// c1.setName("yuvi")
// console.log(c1.getName())
// Namespace
///<reference path="./Utils.ts">
// namespace UsersUtils{
//     export class Users extends Parent{
//         getName(){
//             return this.name
//         }
//     }
// }
// let u1=new UsersUtils.Users();
// u1.setName("bruce")
// console.log(u1.getName());
// Module
// import sLogin from './Student'
// import tLogin from './teacher'
// let teacher=new tLogin()
// console.log(tLogin)
// console.log(teacher.data)
// let Student=new sLogin();
// console.log(Student.data);
// Genric
// it is use for reuse the function
// function user(data){
//     return data
// }
// console.log(user({name:"yuvi", age:"30"}))
