function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var dobInput = document.getElementById("dob");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var genderError = document.getElementById("genderError");
    var isValid = true;

   
    if (name == "") {
      nameError.innerHTML = "Name is required";
      isValid = false;
    } else {
      nameError.innerHTML = "";
    }
  
    if (email == "") {
      emailError.innerHTML = "Email is required";
      isValid = false;
    } else {
      emailError.innerHTML = "";
    }
  
    if (password == "") {
      passwordError.innerHTML = "Password is required";
      isValid = false;
    } else {
      passwordError.innerHTML = "";
    }
  
    if (!gender) {
      genderError.innerHTML = "Gender is required";
      isValid = false;
    } else {
      genderError.innerHTML = "";
    }
  
    if (address == "") {
      addressError.innerHTML = "Address is required";
      isValid = false;
    } else {
      addressError.innerHTML = "";
    }
  
    return isValid;
  }
  