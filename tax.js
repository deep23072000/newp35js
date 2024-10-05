function tax(){
    let package = parseInt(window.prompt("Enter your package"));

    if(package<350000){
        window.alert("Package is less than 3.5lakh so you dont want to pay");
    }
    else if(package >=350000 && package<800000){
        let payabletax = (package/100)*10;
        window.alert("You have to pay" + payabletax + "on your package");
    }
    else if(package>=800000){
        let payabletax = (package/100)*17;
        window.alert("You have to pay" + payabletax + "on your package");
    }
    else{
        window.alert("invalid input");
    }
}

tax();
