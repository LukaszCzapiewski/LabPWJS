function checkForm() {
    var error = false, 
    contactName = document.getElementById("name"), 
    contactSurname = document.getElementById("surname"),
    contactInfo = document.getElementById("info"),
    email = document.getElementById("email");
    if (contactName.value == "") {
        error = true; }
    if (contactSurname.value == "") {
        error = true; }
    if (contactInfo.value == "") {
        error = true; }
    if (!(validateEmail(email.value))) {
        error = true; }
    if (error === false) {return true; } else {return false; }
}

function checkFormInput() {
    var contactName = document.getElementById("name"),
    contactSurname = document.getElementById("surname"),
    contactInfo = document.getElementById("info"),
    x = document.getElementById("blad1"),
    y = document.getElementById("blad2"),
    z = document.getElementById("blad3"),
    email = document.getElementById("email"),
    mail1 = document.getElementById("blad4");
    if (contactName.value == "") {
        x.className="d-block text-danger";
        contactName.className = "form-control is-invalid";
         }
    else {
        x.className="d-none";
        contactName.className = "form-control is-valid";
    }
    if (contactSurname.value == "") {
        y.className="d-block text-danger";
        contactSurname.className = "form-control is-invalid";
         }
    else {
        y.className="d-none";
    contactSurname.className = "form-control is-valid";}
    if (contactInfo.value == "") {
        z.className="d-block text-danger";
        contactInfo.className = "form-control is-invalid";
         }
    else {
        z.className="d-none";
    contactInfo.className = "form-control is-valid";
    }
    if (!(validateEmail(email.value))) {
        if(email.value == "")
            {
                email.className = "form-control is-invalid";
                mail1.className="d-block text-danger";
            mail1.innerHTML = "Email jest wymagany! Proszę wpisać email.";
            }
        else {
            email.className = "form-control is-invalid";
            mail1.className="d-block text-danger";
            mail1.innerHTML = email.value+"<- Mail tej formy jest niepoprawny!";
        }
         }
    else {
        mail1.className="d-none";
    email.className = "form-control is-valid";
    }
    
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}