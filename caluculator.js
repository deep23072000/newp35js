let store = '';//7+7+9+0+78 -------------->98 -->99
               //'2+2' ------------>'4'
function cal(arg){
    console.log(arg)
    store = store + arg
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = store
}

function calculate(){
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = eval(store) //98 //4
    store = eval(store) //----------->4
    store.toString();//   '98' + 1
}