function threenumber(){
    let num1 =parseInt(window.prompt("Enter number one"));
    let num2 =parseInt( window.prompt("Enter number two"));
    let num3 =parseInt(window.prompt("Enter number three"));

    if(num1>num2 && num1>num3){
        window.alert("number one is greater" + num1);
    }else if(num2>num1 && num2>num3){
        window.alert("number two is greater" +num2);
    }else{
        window.alert("number three is greater" + num3);
    }
}


threenumber();