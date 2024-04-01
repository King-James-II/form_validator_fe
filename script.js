// Variables for user data and status
let userName = '';
let email = '';
let password = '';
let userExists = false;
let registered = false;

// DOM elements
const formContainer = document.getElementById("form-container");
const profileContainer = document.getElementById("profile-container");
const response = document.getElementById("response");
const userDatabase = ["John", "Jane", "Bob", "Ashley"];

// Function to handle form input
function formInput(e) {
  e.preventDefault();
  userName = e.target.username.value;
  email = e.target.email.value;
  password = e.target.password.value;
  checkExistingUser(userDatabase);
}

// Function to check if user already exists
function checkExistingUser(array) {
  for (let i = 0; i < array.length; i++) {
    if (userName === array[i]) {
      response.style.visibility = "visible";
      return true;
    }
  }
  formValidate(userName, email, password);
}

// Function to validate form data
function formValidate(usernameVar, emailVar, passwordVar) {
  if (usernameVar && emailVar && passwordVar) {
    console.log("Registration successful");
    registered = true;
  }
  else {
    console.log("All form fields must be filled out");
  }
  renderProfile(registered);
}

// Function to render user profile
function renderProfile(registeredBoolean) {
  if (registeredBoolean) {
    formContainer.setAttribute("id", "none");
    profileContainer.style.visibility = "visible";
    response.style.visibility = "hidden";
  }
}
