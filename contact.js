function validateForm(e) {
    
    var fname = document.forms["contact-form"]["fname"].value;
    var lname = document.forms["contact-form"]["lname"].value;
    var email = document.forms["contact-form"]["email"].value;
    var subject = document.forms["contact-form"]["subject"].value;
    var copy = document.forms["contact-form"]["copy-checkbox"].checked;
    console.log(copy);
    if (fname == "") {
        alert("First name must be filled.");
        e.preventDefault();
        return;
    } 
    if (lname == "") {
        alert("Last name must be filled.");
        e.preventDefault();
        return;
    } 
    if (email == "") {
        alert("Email address must be filled.");
        e.preventDefault();
        return;
    } 
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
        alert("Invalid Email Address!");
        e.preventDefault();
        return;
    }
    if (subject == "") {
        alert("Subject content must be filled.");
        e.preventDefault();
        return;
    } 
    if (copy){
        alert("Successful Submission! You will receive your confirmation email in a while.");
        return;
    } else {
        alert("Successful Submission!");
        return;
    }
    
  }
  