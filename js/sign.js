// regestration Page --------------------------------------
let userNameSignUp = document.getElementById("userNameSignUp");
let userEmailSignINUp = document.getElementById("userEmailSignINUp");
let userPassWordSignINUp = document.getElementById("userPassWordSignINUp");
let signUpBtn = document.getElementById("signUpBtn");

let wrongUserName = document.getElementById("wrongUserName");
let wrongEmail = document.getElementById("wrongEmail");
let dublicatedmail = document.getElementById("dublicatedmail");
let wrongPassword = document.getElementById("wrongPassword");

let successMessage = document.getElementById("successMessage");


// console.log(userEmailSignINUp , userNameSignUp , userPassWordSignINUp )

let signupArray = [];

if (localStorage.getItem("signUp") != null){
    signupArray = JSON.parse(localStorage.getItem("signUp"));
}
console.log(signupArray);


// Add SignUp

function addSignUp (){
if (validateUserEmail() == true && validateUserName() == true &&  validateUserPassword()== true){
    let signup = {
        name : userNameSignUp.value,
        email : userEmailSignINUp.value,
        password : userPassWordSignINUp.value
    }

    signupArray.push(signup);
    localStorage.setItem("signUp" , JSON.stringify(signupArray));
    clearSignUp();

    successMessage.classList.replace("d-none" , "d-block");
    validitionEmpity.classList.replace("d-block" , "d-none");

}
}

signUpBtn.addEventListener("click" , function(){
    addSignUp();

})

// clear Form 


function clearSignUp (){
    userNameSignUp.value = "";
    userEmailSignINUp.value = "";
    userPassWordSignINUp.value = "";
}

// Validation Data

function validateUserName (){
    
    let regexUserName = /^[A-Z][a-z]{2,10}[0-9]{0,3}$/

    if(regexUserName.test(userNameSignUp.value)==true){
        wrongUserName.classList.replace("d-block","d-none");
        userNameSignUp.classList.replace("is-invalid","is-valid");
        return true;
    }else if(regexUserName.test(userNameSignUp.value)==false){
        wrongUserName.classList.replace("d-none","d-block");
        userNameSignUp.classList.replace("is-valid" , "is-invalid");
        return false;
    }
}
userNameSignUp.addEventListener("input", function(){
    validateUserName ();
})

function validateUserEmail(){
    let regexUserEmail = /^[a-z][a-z]+[0-9]+@(yahoo|gmail).com$/
    if(regexUserEmail.test(userEmailSignINUp.value)==true){
        wrongEmail.classList.replace("d-block","d-none");
        userEmailSignINUp.classList.replace("is-invalid","is-valid");
        return true;
    }else if(regexUserEmail.test(userEmailSignINUp.value)==false){
        wrongEmail.classList.replace("d-none","d-block");
        userEmailSignINUp.classList.replace("is-valid" , "is-invalid");
        return false;
    }else if (regexUserEmail.test(userEmailSignINUp.value)== signup.email){
        dublicatedmail.classList.replace("d-none" , "d-block");
        userEmailSignINUp.classList.replace("is-valid" , "is-invalid");
        return false;
    }else if (regexUserEmail.test(userEmailSignINUp.value) != signup.email){
        dublicatedmail.classList.replace("d-block" , "d-none");
        userEmailSignINUp.classList.replace("is-invalid","is-valid");
        return true;
    }
}

userEmailSignINUp.addEventListener("input" , function(){
    validateUserEmail();
})

function validateUserPassword(){
    let regexUserPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(regexUserPassword.test(userPassWordSignINUp.value)==true){
        wrongPassword.classList.replace("d-block","d-none");
        userPassWordSignINUp.classList.replace("is-invalid","is-valid");
        return true;
    }else if(regexUserPassword.test(userPassWordSignINUp.value)==false){
        wrongPassword.classList.replace("d-none","d-block");
        userPassWordSignINUp.classList.replace("is-valid" , "is-invalid");
        return false;
    }
}

userPassWordSignINUp.addEventListener("input" , function(){
    validateUserPassword();
})




// ---------------------------------------------------------

