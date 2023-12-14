function password() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "%#@&$!?*";
    var characters = "";

    if(document.getElementById("uppercase").checked == true) {
        characters = characters + uppercase;
    }
    
    if(document.getElementById("lowercase").checked == true) {
        characters = characters + lowercase;
    }

    if(document.getElementById("numbers").checked == true) {
        characters = characters + numbers;
    }

    if(document.getElementById("symbols").checked == true) {
        characters = characters + symbols;
    }

    var password = "";
    var passwordLength = parseInt(document.getElementById("passwordLength").value);
    var arr = Array(passwordLength);
    for(var i = 0; i < passwordLength; i++) {
        arr[i] = characters[Math.floor(Math.random() * characters.length)];
        password = password + arr[i];
    }
    alert(password);
}