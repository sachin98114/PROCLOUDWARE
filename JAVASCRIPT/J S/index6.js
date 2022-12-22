// function cont(max){
//     for(var i=0;i<=200;i++){
//         if(i%2==0){
//             console.log(i);

//         }
//     } 
// }
// cont(100);


function evenNumber(max){
    debugger
for(i=0; i<max;i++){
    var even =isEven(i);
    console.log(":: even ",even);
}
}

function isEven(val){
    debugger
    var res= val%2==0;
    return res;
}
evenNumber(10);