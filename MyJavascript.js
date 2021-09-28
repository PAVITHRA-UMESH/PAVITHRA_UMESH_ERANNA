let fnameNode = document.getElementById("fname");
let spanNode1 = document.getElementById("error1");
function validate1(){
    let fname = fnameNode.value;

    if(fname == ""){
        spanNode1.innerHTML = "Required!";
        fnameNode.style.border = "5px solid red";
    }
    else if(fname.includes(" ")){
        spanNode1.innerHTML = "Space Not Allowed!";
        fnameNode.style.border = "5px solid red";
    }
    else{
        
        fnameNode.style.border = "5px solid green";
   
    }
}
let lnameNode = document.getElementById("lname");
let spanNode2 = document.getElementById("error2");
function validate2(){
    let lname = lnameNode.value;
    spanNode2.innerHTML = "";
    
    if(lname == ""){
        spanNode2.innerHTML = "Required!!!";
        lnameNode.style.border = "5px solid red";
    }
    else if(lname.includes(" ")){
        spanNode2.innerHTML = "Space not allowed!!!";
        lnameNode.style.border = "5px solid red";
    }
    else{
        
        lnameNode.style.border = "5px solid green";
    }
}

let mobNode = document.getElementById("mobileno");
let spanNode3 = document.getElementById("error3");
function validate3(){
    spanNode3.innerHTML = "";
    let mobileno = mobNode.value;

    var regmm="[0-9]{10}";
    var regmob = new RegExp(regmm);
    let valid = regmob.test(mobileno);
   
  if(mobileno== ""){
        spanNode3.innerHTML = "Required!!!";
        mobNode.style.border = "5px solid red";
    }
   else if (valid != true ){
    spanNode3.innerHTML = "Invalid Number!";
    mobNode.style.border = "5px solid red";
   }
   else{
    mobNode.style.border = "5px solid green";
   }
}

let emailNode = document.getElementById("email");
let spanNode4 = document.getElementById("error4");
function validate4(){
    spanNode4.innerHTML = "";
    let email = emailNode.value;

    var mail=emailNode.value;
    const regExp=new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");

     if(email == ""){
        spanNode4.innerHTML = "Required!!!";
        emailNode.style.border = "5px solid red";
        return false;
    }
    else if(!regExp.test(mail)){
        spanNode4.innerHTML = "Invalid Email Address!!!";
        emailNode.style.border = "5px solid red";
        return false;
    }
    else{
        emailNode.style.border = "5px solid green"; 
        return true;
    }
}

let messageNode = document.getElementById("message");
let spanNode5 = document.getElementById("error5");
function validate5(){
    let message = messageNode.value;
    spanNode5.innerHTML = "";
    
    if(message == ""){
        spanNode5.innerHTML = "Required!!!";
        messageNode.style.border = "5px solid red";
    }
    else if(message.length<10 || message.length>50){
        spanNode5.innerHTML = "Invalid Message Length!!!";
        lnameNode.style.border = "5px solid red";
    }
    else{
        messageNode.style.border = "5px solid green";
    }
}

function validateform(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();

    return (v1&&v2&&v3&&v4&&v5);
}
 

