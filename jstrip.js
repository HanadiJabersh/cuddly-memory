function validateForm() {
    var nameIn = document.getElementById("name");
    var emailIn = document.getElementById("email");
    var email=emailIn.value;
    var passwordIn = document.getElementById("password");
    var password=passwordIn.value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var dob = document.getElementById("dob");
    
    event.preventDefault()
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
      }
    
      // Check for at least one special character
      const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (!specialChars.test(password)) {
        alert("Password must contain at least one special character.");
        return false;
      }
    
      // Check for at least one uppercase letter
      const uppercaseChars = /[A-Z]/;
      if (!uppercaseChars.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  const formData = {
    Name: nameIn.value,
    Email: emailIn.value,
    password: passwordIn.value,
    gender: gender.value,
    dob: dob.value
  };
      window.location.href = "homepage.html";
      return true;
      
    }


   