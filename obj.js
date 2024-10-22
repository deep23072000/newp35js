let obj = [
    {
        "id":1,
        "img":"./brand1.jpg",
        "name":"Harsh",
        "course":"Java",
        "mobno":1234567890,
    },
    {
        "id":2,
        "img":"./brand1.jpg",
        "name":"Dhruv",
        "course":"Python",
        "mobno":987654321,
    },
    {
        "id":3,
        "img":"./brand1.jpg",
        "name":"Dhruv",
        "course":"Python",
        "mobno":987654321,
    },
];

// console.log(obj[0].mobno)
// console.log(obj[1].course)

let selecttable = document.querySelector('#output');

selecttable.innerHTML = obj.map((e)=>`
    <tr>
      <td>${e.id}</td>
      <td><img width="100" src="${e.img}"></td>
      <td>${e.name}</td>
      <td>${e.course}</td>
      <td>${e.mobno}</td>
    </tr>
`).join(" ")