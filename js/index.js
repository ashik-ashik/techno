

$(document).ready(function(){




  // video play
  $('.venobox').venobox();

  // Aos init
  AOS.init();
});



  // log in

  function logInTry(){
    // e.preventDefault();
    let logUmername = document.querySelector('#login-username');
    let logPassword = document.querySelector('#login-password');
    let logErrMss = document.querySelector('.error-box span');
    var fakaName = "";
    var fakaPass = "";
    logErrMss.textContent = fakaName + fakaPass;

  
    if(logUmername.value == ''){
      logUmername.classList.add('faka');
      console.log("faka Email");
      fakaName= "Please Enter your Email"
    }else{
      console.log("no working");
      logUmername.classList.remove('faka');

    }
    if(logPassword.value == ''){
      logPassword.classList.add('faka');
      fakaPass = " Enter Your Password"
    }else if(logPassword.value.length < 8){
      fakaPass = "Password Is Incorrect!";
    }else{
      logPassword.classList.remove('faka');
    }
    if(fakaName != "" || fakaPass != ""){
      var errOne = fakaName + fakaPass;
      logErrMss.textContent = errOne;
    }
    if(fakaPass != "" && fakaName != ""){
      var errBotnMss = fakaName +" and "+ fakaPass;
      logErrMss.textContent = errBotnMss;
    }

    // loged in
    if((logUmername.value != "") && (logPassword.value != "") && (logPassword.value.length >= 8)){
      fakaName = "Your Email or password is incorrect!";
      logErrMss.textContent = fakaName;
    }

    
  }
