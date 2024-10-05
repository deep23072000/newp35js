function kuchbhi(){
    setTimeout(show,3000);

    function show(){
       let selectwebsite = document.querySelector('#website');
       selectwebsite.style.display = "block";

       let selectimg = document.querySelector('#img');
       selectimg.style.display = "none"
    }
}