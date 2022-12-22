var data = [
  {
    que: "what is the population ? ",
    options: [
      { label: "12000", value: 12000 },
      { label: "15k", value: 15000 },
      { label: "20k", value: 20000 },
    ],
    ans: null,
  },
  {
    que: "what is the name of your country ? ",
    options: [
      { label: "India", value: "IND" },
      { label: "America", value: "USA" },
      { label: "BNG", value: "Bangladesh" },
    ],
    ans: null,
  },
  {
    que: "what is the name of your president?",
    options: ["Ram Nath Kovind", "APJ Abdul Kalam"],
    ans: null,
  },
];

/*
    1. set the answer of every question to a valid option, anser can only be a string or a number, it cannot be an object
    hint: if i check data[0].ans, it should be 12000 | 15k | 20k, do not hardcode answer
    2. print the array of options labels from every question, that array should only be string array
    ans should be ['12000', '15k', '20k', 'India', 'Ameirca', 'BNG', 'Ram Nath Kovind', 'APJ Abdul Kalam'];
    3. print the question names where options are greate than 2
    ans should be ['what is the population ? ', 'what is the name of your president?']
    NOTE: so not change any thing in data array, write your code below this line. I ll change the data rrayb but your answer should be still appropriate
    according to the task description
    */
//////1.1st

var a = data[0];
var s1 = a.options[0];
var s11 = s1.value;
console.log(s11);

/////2.1st

var b = data[1];
var s2 = b.options[0];
var s22 = s2.label;
console.log(s22);

/////3.1st

var c = data[2];
var s3 = c.options[0];
console.log(s3);

///question-2nd

var arr = [
  a.options[0].label,
  a.options[1].label,
  a.options[2].label,
  b.options[0].label,
  b.options[1].label,
  b.options[2].label,
  c.options[0],
  c.options[1],
];
console.log(a.options[0].label,a.options[1].label,a.options[2].label,
b.options[0].label,b.options[1].label,b.options[2].label,
c.options[0],c.options[1]);
console.log(arr);

// ///////question-3rd

// var q = a.que;
// var q3 = c.que;
// console.log(q, q3);

