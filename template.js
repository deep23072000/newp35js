function card(){
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let designation = document.querySelector('#designation').value;
    let address = document.querySelector('#address').value;
    let image = document.querySelector('#image').value;

    console.log(name,phone,email,designation,address,image);


    let d = ` <section id="card">
        <div>
            <img src="${image}" alt="">
        </div>
        <div>
            <h1>${name}</h1>
            <h3>${phone}</h3>
            <h3>${email}</h3>
            <h3>${designation}</h3>
            <h3>${address}</h3>
        </div>
    </section>`;

    alert("write code");

    document.querySelector('#output').innerHTML = d;
    document.querySelector('form').style.display = "none"
    print()
    return false;
}