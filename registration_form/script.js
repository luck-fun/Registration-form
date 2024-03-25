function check(e) {

    var name = e.name.value;
    var password = e.password.value;
    var email = e.email.value;

    var err = "";

    if(password == "" || name == "" || email == ""){
        err = "fill in all the fields";
    } 
        
    if (err == "") {
        alert("Success!");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Password: " + password);
        
    } else {
        document.getElementById("error").innerHTML = err;
        
    }
    return false;
}

