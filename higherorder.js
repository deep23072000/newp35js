function run(){
let arr = [
    './brand1.jpg',

    'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg',

    'https://miro.medium.com/v2/resize:fit:1024/1*w7fSHgKimriL-ryZJ52Uig.png',

    'https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg'

];

let output = document.querySelector('#answer');

output.innerHTML = arr.map((imgurl)=>`
      <img style="width:400px;height:400px" src="${imgurl}" alt="not found">
`).join(" ")
}





// let arr = [45,6,7,8,4,33];

// let newarr = arr.map((items)=>{return items*2});
// console.log(newarr);

// let ansarr = arr.map((items)=>{return items+10})
// console.log(ansarr);