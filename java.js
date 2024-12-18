function func() {
    var usarname = document.getElementsByClassName("username")[0].value;
    var password2 = document.getElementsByClassName("password")[0].value;

    console.log(usarname, password2)
    


    debugger


    if( usarname == 'apek' && Number(password2) == 1234){
        alert("sucess full !");
        window.location.href = 'http://127.0.0.1:5500/sagar.html';
    }else{ 
        alert("wrong entry invalid");
        return;
    }

}