function zoomin(){
   let selectedimg = document.querySelector('#img1');
   selectedimg.style.scale = "1.2";
   selectedimg.style.rotate = "56deg";
   selectedimg.style.transition = "all 0.5s"
   console.log(selectedimg);
}

function initial(){
    let selectedimg = document.querySelector('#img1');
    selectedimg.style.scale ="1";
   selectedimg.style.rotate = "0deg";

    selectedimg.style.transition = "all 0.5s";
}

let a = 0.1;
let b = 0.2;


console.log(a+b)
