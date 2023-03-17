function validateName()
{
  var uname = document.getElementById("name");

  var letters = /^[A-Za-z ]+$/;
  document.getElementById('nameError').innerHTML = '';
  if (uname.value.match(letters)){return true;}
  else
  {
    document.getElementById("nameError").innerHTML = "[Name must contain alphabet characters only]";
    uname.focus();
    return false;
  }
}
function validatePhone()
{
  var ucontact = document.getElementById("phone");

  var numbers = /^(6|8|9)[0-9]{7}$/;
  document.getElementById('phoneError').innerHTML = '';
  if (ucontact.value.match(numbers)){return true;}
  else
  {
    document.getElementById("phoneError").innerHTML = "[Phone must contain 8 numbers and start with 6,8 or 9]";
    ucontact.focus();
    return false;
  }
}
function validateEmail()
{
  var uemail = document.getElementById("email");

  var letters = /^[a-zA-Z_]+[@]+[a-zA-Z]+[.]+[a-zA-Z._]+$/;
  document.getElementById('emailError').innerHTML = '';
  if (uemail.value.match(letters)){return true;}
  else
  {
    document.getElementById("emailError").innerHTML = "[Email format: something@something.something]";
    uemail.focus();
    return false;
  }
}
function validateAge()
{
  var uage = document.getElementById("age");

  var numbers = /^[0-9]+$/;
  document.getElementById('ageError').innerHTML = '';
  if (uage.value.match(numbers)){return true;}
  else
  {
    document.getElementById("ageError").innerHTML = "[Age must contain numbers only]";
    uage.focus();
    return false;
  }
}
function formValidation(){
  if (validateName()&&validatePhone()&&validateEmail()&&validateAge()){
    alert("All fields validated. Form will be submitted to database. ");
    return true;
  }
  else{
    alert("Some fields are invalid. Please correct them before submitting. ")
    return false;
  }
}
