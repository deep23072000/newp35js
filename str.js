// let str = "     this is js class         ";

// console.log(str);
// console.log(str[0]);
// //methods of string
// console.log(str.length);

// console.log(str.replace(" ",""));

// console.log(str.replaceAll(" ",""));

// console.log(str.includes("sj"));

// console.log(str.slice(3,6))

// console.log(str.slice(11,str.length))

// console.log(str.trim());


let str = "vjefvbher bverb gervhjbhefverv ervbeger rgvbuerg nkergbiuerg jerwgerwybgerjberbne";
let store = "";
for(let i = 0;i<str.length;i++){
    if(! (str[i] === "v")){
        store = store + str[i];
    }
    else{
        store = store+"hello";
    }
}
console.log(store)


console.log(str.replaceAll(" ",","))



