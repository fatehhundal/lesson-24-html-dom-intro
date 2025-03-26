function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgBox = document.getElementById("message");

    let message = "";

    if (email == "") {
        message = "Please enter your email address.";
        msgBox.style.color = "red";
    } else if (pass == "") {
        message = "Your password must be at least 8 characters long.";
        msgBox.style.color = "red";
    } else if (age = "") {
        message = "Age must be between 13 and 50";
        msgBox.style.color = "red";
    }
    
    else {
        message = "Log in successful!";
        msgBox.style.color = "green";
    }

    msgBox.innerText = message;
}