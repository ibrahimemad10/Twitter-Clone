function login() {
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");
  var text = "";
  if (userName.length < 5) {
    text ="Make sure that the username is more than (5) characters long !";
    error.innerHTML = text;
    return false;
  }
  else if (email.indexOf("@") == -1 || email.length < 10){
    text ="Make sure that the email contains @ and more than (10) characters !";
    error.innerHTML = text;
    return false;
  }
  else if (password.length < 7) {
    text ="Make sure that the password contains more than (7) digits !";
    error.innerHTML = text;
    return false;
  } else {
    text ="The registration is done ";
    error.innerHTML = text;
    error.style.color = "#43fb62f0";
    return false;
  }
}


function hideDetails() {
  var details = document.getElementById("details");
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
function hidden() {
  var details = document.getElementById("details");
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}
function tweet() {
  var creatTweet = document.getElementById("creatTweet");
  if (creatTweet.style.display === "none") {
    creatTweet.style.display = "block";
  } else {
    creatTweet.style.display = "none";
  }
}
function tweetClose() {
  var creatTweet = document.getElementById("creatTweet");
  if (creatTweet.style.display === "block") {
    creatTweet.style.display = "none";
  } else {
    creatTweet.style.display = "block";
  }
}
function creat() {
  var sharePeople = document.getElementById("sharePeople");
  if (sharePeople.style.display === "none") {
    sharePeople.style.display = "block";
  } else {
    sharePeople.style.display = "none";
  }
}
function creatTweet() {
  var chocse = document.getElementById("chocse");
  if (chocse.style.display === "none") {
    chocse.style.display = "block";
  } else {
    chocse.style.display = "none";
  }
}
function everyone() {
  var sharePeople = document.getElementById("sharePeople");
  if (sharePeople.style.display === "block") {
    sharePeople.style.display = "none";
  } else {
    sharePeople.style.display = "block";
  }
}
function follow() {
  var sharePeople = document.getElementById("sharePeople");
  if (sharePeople.style.display === "block") {
    sharePeople.style.display = "none";
  } else {
    sharePeople.style.display = "block";
  }
}
function mention() {
  var sharePeople = document.getElementById("sharePeople");
  if (sharePeople.style.display === "block") {
    sharePeople.style.display = "none";
  } else {
    sharePeople.style.display = "block";
  }
}