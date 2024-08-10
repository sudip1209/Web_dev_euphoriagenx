function addUser()
{
    var userid = document.getElementById("userid").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var new_user = {
        "userid": userid,
        "name": name,
        "password": password
    }

    if(localStorage.getItem('allusers'))
    {
        var allusers = JSON.parse(localStorage.getItem('allusers'));
        allusers.push(new_user);
        localStorage.setItem('allusers', JSON.stringify(allusers));
    }
    else{
        var allusers = [];
        allusers.push(new_user);
        localStorage.setItem('allusers', JSON.stringify(allusers));
    }
    alert("Data Added")
    window.location.href = "";
}

function login()
{
    var userid = document.getElementById("userid").value;
    var password = document.getElementById("password").value;

    var allusers = JSON.parse(localStorage.getItem('allusers'));
    var flag = 0;
    for(i=0; i<allusers.length; i++)
    {
        if(allusers[i].userid == userid && allusers[i].password == password)
        {
            flag = 1;
            window.location.href = "home.html";
        }
    }

    if(flag == 0)
    {
        alert("Sorry your userid or password not valid...!!!");
    }
}