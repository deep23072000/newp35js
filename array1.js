let arrstr = ["er","ytyuy0","qewe","xcs","av"];
arrstr.sort();
console.log(arrstr);

let arr = [67,90,89,4,35,678,46];
arr.sort(function(a,b){return a-b});
console.log(arr);

let arr1 = [67,90,89,4,35,678,46];
arr1.sort(function(a,b){return b-a});
console.log(arr1)

let output = arr1.reduce(function(a,b){return a+b});
console.log(output);

let answerstr = arr1.toString()
console.log(answerstr);

let answerjoin = arr1.join(" ")
console.log(answerjoin);

//higher order method
//map
//reduce
//number sort
//find
//filter
//foreach


