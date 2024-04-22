// ------------------------Sign In ---------------------------------------------------
let userEmail = document.getElementById("userEmail")
let userPassWord = document.getElementById("userPassWord")
let validitionEmpity = document.getElementById("validitionEmpity")
let validitionincorrect = document.getElementById("validitionincorrect")
let btnLogin = document.getElementById("btnLogin")
let anchorbtn = document.querySelector("#btnLogin a")

let loginArray = [];

if (localStorage.getItem("signUp") != null){
    signupArray = JSON.parse(localStorage.getItem("signUp"));
}

loginArray = signupArray;

console.log(loginArray);

function loginHarryPotter(){
    var login = {
        emailLogin : userEmail.value,
        passwordLogin : userPassWord.value,
    }
    
    
    for(let i = 0 ; i< loginArray.length ; i++){
        // console.log(loginArray[i] );
        
        if (  loginArray[i].email == userEmail.value && loginArray[i].password == userPassWord.value ){
            validitionincorrect.classList.replace("d-block" , "d-none");
            anchorbtn.setAttribute("href" , "../pages/slider.html");
    
    
        }else {
            validitionincorrect.classList.replace("d-none" , "d-block");
        }
    }


    }

    



btnLogin.addEventListener("click" , function(){
    loginHarryPotter()
})


// ---------------------------------------
