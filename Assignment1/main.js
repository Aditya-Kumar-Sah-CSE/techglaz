function showLogin(){



    document.getElementById("signUp-form").style.display ="none";
    document.getElementById("login-form").style.display = "block";
    
}

function showSignup(){



    document.getElementById("signUp-form").style.display ="block";
    document.getElementById("login-form").style.display = "none";
    
}

function signUp() {
      const username = document.getElementById("signUp-username").value;
      const email = document.getElementById("signUp-email").value;
      const password = document.getElementById("signUp-password").value;

      if (!username || !email || !password) {
        alert("Please fill all fields!");
        return;
      }
alert("Signup successful! You can now login.");
      showLogin();
     
    }

    function login() {
      const username = document.getElementById("login-username").value;
     
      const password = document.getElementById("login-password").value;

      if (!username || !password) {
        alert("Please fill all fields!");
        return;
      }
   
alert("Signup successful! You can now login.");
 window.location.href = "home.html";
     
    }

    function check(){
      const num = document.getElementById("number").value;
 
      // console.log(num);
    
      if(num&1){
document.getElementById("ans").innerText = "odd"

      }
      else{
       document.getElementById("ans").innerText = "Even"
      }
    
    }


    //random color

    function change_bg(){

  const btn =  document.querySelector('#colorName');
let con = document.querySelector('.container');
    console.log(btn);

let char = '0123456789ABCDEF'
let setcolor = "";

for(let i =0,charlan = char.length ; i<6;i++){
  setcolor +=char.charAt(Math.floor(Math.random()*charlan))
}

console.log(setcolor);
btn.textContent=`#${setcolor}`
con.style.backgroundColor =`#${setcolor}`;

    }
  