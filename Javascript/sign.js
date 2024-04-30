const show=()=>{
    let pass=document.getElementById("password");
    console.log(pass);
    if(pass.type==="password"){
        pass.type="text"
    }else{
        pass.type="password"
    }
}
document.querySelector("#checkbox").addEventListener("click",show)

const sign=(e)=>{
    e.preventDefault();
    let signdata={
        img:document.getElementById("userimg").value,
        first:document.getElementById("first").value,
        last:document.getElementById("last").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }
    console.log("img",signdata.img);  

    if(signdata.first==""){
        document.getElementById("first").style.border="2px solid red"
    }else if(signdata.last==""){
        document.getElementById("last").style.border="2px solid red"
    }else if(signdata.email==""){
        document.getElementById("email").style.border="2px solid red"
    }else if(signdata.password==""){
        document.getElementById("password").style.border="2px solid red"
    }
   
    let nameregex= /^[A-Za-z. ]{3,30}$/;
    let emailregerx=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/;
    let passregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!(nameregex.test(signdata.first)) ){
        document.getElementById("first").style.border="2px solid red"

    }
    else{
        document.getElementById("first").style.border="2px solid green"

    }
    if(!(nameregex.test(signdata.last)) ){
        document.getElementById("last").style.border="2px solid red"
    }
    else{
        document.getElementById("last").style.border="2px solid green"

    }
    if(!(emailregerx.test(signdata.email))){
        document.getElementById("email").style.border="2px solid red"
    }
    else{
        document.getElementById("email").style.border="2px solid green"
    }
    if(!(passregex.test(signdata.password))){
        document.getElementById("password").style.border="2px solid red"
    }
    else{
        document.getElementById("password").style.border="2px solid green"
    }

    if(nameregex.test(signdata.first)&&nameregex.test(signdata.last)&&emailregerx.test(signdata.email)&&passregex.test(signdata.password)&&signdata.img.length>0){
        fetch(`http://localhost:3000/signup?email=${signdata.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.length>0){
                if(!(data.length==signdata.email)){
                    alert("Alr")
                }
            }
            else{
                try{
                    fetch(`http://localhost:3000/signup`,{
                        method:"POST",
                        headers:{"content-type":"application/json"},
                        body:JSON.stringify(signdata)
                    })
                    localStorage.setItem("signup",true)
                    localStorage.setItem("user",JSON.stringify(signdata))
                    window.location.href="/index.html"
                }catch(err){
                    alert("err")
                }
            }
        })
       
    }
}
document.getElementById("sign").addEventListener("submit",sign)

        //  FIRST NAME REGEX USER CONDTION CHECK

document.getElementById("first").addEventListener("keypress",()=>{
let first=document.getElementById("first").value
let nameregex=/^[A-Za-z.]{3,30}$/;
if(!(nameregex.test(first))){
    document.getElementById("first").style.border="2px solid red"
    document.querySelector(".first").innerHTML="Not valid name !"
    document.querySelector(".fa-check").style.display="none"
}
else{
    document.querySelector(".fa-check").style.display="block"
    document.querySelector(".first").innerHTML=""
    document.getElementById("first").style.border="2px solid green"    
}

})
        //  LAST NAME REGEX USER CONDTION CHECK 

document.getElementById("last").addEventListener("keypress",()=>{
    let last=document.getElementById("last").value
    let nameregex=/^[A-Za-z.]{3,30}$/; 
    if(!(nameregex.test(last))){
        document.getElementById("last").style.border="2px solid red"
        document.querySelector(".lastt").innerHTML=" Not valid name !"
    }
    else{
        document.getElementById("last").style.border="2px solid green"
        document.querySelector(".lastt").innerHTML=""
    }

})

        
        //  EMAIL NAME REGEX USER CONDTION CHECK
        
document.getElementById("email").addEventListener("keypress",()=>{
    let email=document.getElementById("email").value;
    let emailregerx=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/;
    if(!emailregerx.test(email)){
        document.getElementById("email").style.border="2px solid red"
        document.querySelector(".emaill").innerHTML="...@gamil.com !"
    }
    else{
        document.getElementById("email").style.border="2px solid green"
        document.querySelector(".emaill").innerHTML=""
    }

})

        //  PASSWORD NAME REGEX USER CONDTION CHECK

document.getElementById("password").addEventListener("keypress",()=>{
    let password=document.getElementById("password").value;
    let passregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!passregex.test(password)){
        document.getElementById("password").style.border="2px solid red"
        document.querySelector(".passwordd").innerHTML="Frist letter capital , letter , number ...!"
    }
    else{
        document.getElementById("password").style.border="2px solid green"
        document.querySelector(".passwordd").innerHTML=""
    }

})
