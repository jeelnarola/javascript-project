
const showpaa=(e)=>{
    let pass=document.getElementById("pass-login");
    if(pass.type==="password"){
        pass.type="text"
    }
    else{
        pass.type="password"
    }
}
document.getElementById("checkbox").addEventListener("click",showpaa)

const forpaa=()=>{
    let pass=document.getElementById("for-pass-in");
    console.log(pass);
    if(pass.type==="password"){
        pass.type="text"
    }else{
        pass.type="password"
    }

}
document.getElementById("shopaa").addEventListener("click",forpaa)

document.getElementById("forget").addEventListener("click",(e)=>{
e.preventDefault()
// alert("yes")
document.querySelector(".email-cheak").style.display="block"
})
let id=-1


document.getElementById("forget-check").addEventListener("submit",(e)=>{
    e.preventDefault()
    let email=document.getElementById("for-email-in").value
    fetch(`http://localhost:3000/signup/?email=${email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length>0){
            // console.log(data[0].id);
            id=data[0].id;
            console.log(id);
            document.querySelector(".pass-cheak").style.display="block"
        }else{
            document.querySelector(".email-cheak").style.display="none"
        }
    })
    console.log(email);
})

document.querySelector("#forget-check").addEventListener("submit",(e)=>{
    e.preventDefault()
})
document.getElementById("res-btn").addEventListener("click",(e)=>{
    e.preventDefault()
    let passd=document.getElementById("for-pass-in").value
    let passregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(passregex.test(passd)){
    fetch(`http://localhost:3000/signup/${id}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({password:passd})
    })
    }
    else{
        alert("First letter cpital,number use...")
    }
})
document.getElementById("login").addEventListener("submit",(e)=>{
    e.preventDefault()

    let email=document.getElementById("loginemail").value
    let pasword=document.getElementById("pass-login").value
   
    fetch(`http://localhost:3000/signup?email=${email}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.length>0){
           if(data[0].password==pasword){
            localStorage.setItem("signup",true)
            localStorage.setItem("user",JSON.stringify(...data))
            alert("login successful")
            window.location.href="/index.html"
        } 
           else{
            alert("password worng !")
           } 
                 
        }
        else{
            alert("user not found !")
            setTimeout(()=>{
                window.location.href="/Page/sign.html"
            },1000)
        }
    })
    
})