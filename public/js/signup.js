
    var user= document.getElementById("user");
	var email= document.getElementById("email");
	var pass= document.getElementById("pass");
	var rpass= document.getElementById("rpass");
    var new1=document.getElementById("new1");
    
    
function username() {
    if (user.value != "") {
		user.style.border= "2px solid blue";
        return true;
    } else {
        user.style.border = "2px solid red";
        return false;
    }
}
function emailcheck() {
	let regexp=/^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;
    if (regexp.test(email.value) == true) {
		email.style.border = "2px solid blue";
        return true;
    } else {
        email.style.border = "2px solid red";
        return false;
    }
}
function password() {
	let passexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passexp.test(pass.value.trim()) == true && pass.value.trim() != "") {
		pass.style.border = "2px solid blue";
        return true;
    } else {
        pass.style.border = "2px solid red";
        return false;
    }
}
function rpassword(){
	let passexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if (pass.value.trim() ==  rpass.value.trim()) {
		rpass.style.border = "2px solid blue";
        return true;
    } else {
        rpass.style.border = "2px solid red";
        return false;
    }

}
function register(){
	if(username() && emailcheck() && password() && rpassword()){
		return true;
	}
	else{
		return false;
	}
}