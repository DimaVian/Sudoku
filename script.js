function login(){
    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value

    if (user == 'abcd' || 'ABCD' && pass == 1234){
        window.location.href="level.html";
    }
    else {
        alert ('Please check your login details')
    }
}

function easy()
{
    window.location.href="easy.html";
}


function medium()
{
    window.location.href="medium.html";
}

function hard()
{
    window.location.href="hard.html";
}
















