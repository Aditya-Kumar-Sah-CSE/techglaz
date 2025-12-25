let c = document.getElementById('ans').innerText;

function inc(){
    c++
document.getElementById('ans').textContent = c;

}


function dec(){
    c--;
    
    document.getElementById('ans').textContent = c;
  
}
let input = document.getElementById("password");




function show(){
    input.type = "text";
    document.getElementById('open').style.display="none";
     document.getElementById('closed').style.display="block";
}
function hide(){
    input.type = "password";
    document.getElementById('closed').style.display="none";
     document.getElementById('open').style.display="block";
}