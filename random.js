function ranimg(){
    let imgurls = [
    "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",

    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r2TH-dNEty38IFbCdfLOUR4oELh5KInCKw&s"

]
let ran = Math.random();//0.5
let multiply = ran * imgurls.length;// 0.5 * 3 = 1.5
let flooredval = Math.floor(multiply); // 1
let selectimg = document.querySelector('#im');
selectimg.src = imgurls[flooredval]; //imgurls[1]

}

