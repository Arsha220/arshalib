let user=document.getElementById("user");
let pwd=document.getElementById("pwd");
let user1=document.getElementById("user1");
let pwd1=document.getElementById("pwd1");
function usercheck() {
    if (user.value == "admin") {
        console.log(user.value);
        user1.innerHTML = "";
        return true;
    } else {
        user1.innerHTML = "Enter valid Username";
        user1.style.color = "yellow";
        user1.style.fontFamily="San serif";
        return false;
    }
}
function passcheck() {
    if (pwd.value == "12345") {
        console.log(pwd.value);
        pwd1.innerHTML = "";
        return true;
    } 
    else {
        pwd1.innerHTML = "Enter valid Password";
        pwd1.style.color = "yellow";
        pwd1.style.fontFamily="San serif";
        return false;
    }

}
