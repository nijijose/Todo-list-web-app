let user = document.getElementById("name");
let pwd = document.getElementById("password");
let error = document.getElementById("error");
let perror = document.getElementById("perror");
let submit = document.getElementById("submit");

function show(){
    var x = document.getElementById("password");
    if(x.type === "password"){
      x.type = "text";
    }
    else{
      x.type = "password";
    }
}

function match(user, pwd, check, validate) {
  var usercheck = check(user);
  var pwdcheck = validate(pwd);
  if (usercheck && pwdcheck) {
      window.location.href = "todo.html";
      return false;
  } 
}

function check(){
    if(user.value == "admin"){
      error.innerHTML = "";
      user.style.border = "2px solid green";
      return true;
    }
    else{
      error.innerHTML = "Please enter a valid username";
      error.style.color = "red";
      user.style.border = "2px solid red";
      return false;
    }
}

function validate(){
  if(pwd.value == 12345){
    perror.innerHTML = "";
    pwd.style.border = "2px solid green";
    return true;
  }
  else{
    perror.innerHTML = "Incorrect password";
    perror.style.color = "red";
    pwd.style.border = "2px solid red";
    return false;
  }
}

submit.onsubmit = function() {
  return match(user.value, pwd.value, check, validate);
}
