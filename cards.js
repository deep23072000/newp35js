let arrofobj = [
    {
        "id":1,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    },
    {
        "id":2,
        "imageurl":"https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },{
        "id":3,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },{
        "id":4,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },{
        "id":5,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },{
        "id":6,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },{
        "id":7,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },{
        "id":8,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },{
        "id":9,
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999

    },
];

let selectdiv = document.querySelector('#ans');

selectdiv.innerHTML = arrofobj.map((card)=>`
<div style="margin:20px;box-shadow:0px 0px 10px 2px black">
        <img width="200px"  height="200px" src="${card.imageurl}" alt="">
        <div>${card.bname}</div>
        <div>${card.pname}</div>
        <div>${card.pprice}</div>
        <div>add to cart </div>
        <div>buy now </div>
    </div>
`).join(" ")