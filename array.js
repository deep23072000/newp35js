let arr = [34,67,8,9,3,67,8,9,9,"hello"];
let arr2 = ["this is array class"];

let arr3 = [45,6,7,3,5,function(){ console.log("function called")}];
let arr4 = [null,undefined,4,678,6<7];
console.log(arr);
console.log(arr[9]);
console.log(arr[9][4]);
console.log(arr2[0][5]);
arr3[5]();
console.log(arr4[4]);

console.log(typeof(arr));

for(let i = 0;i<arr.length;i++){
    console.log(i);
    console.log(arr[i])
};

for(let i in arr){
    //index of arary element
    console.log(i)
}

for(let i of arr){
    //element of array
    console.log(i)
}