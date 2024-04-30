// import { prohead } from "../component/load"
import { footer, load,prohead } from "/component/load.js"
document.getElementById("produloder").innerHTML=load()
document.getElementById("footerprodu").innerHTML=footer()
// document.getElementById("producthead").innerHTML=prohead()
let sing=localStorage.getItem("sing")
let products=[]
let stro=JSON.parse(localStorage.getItem("user"))
console.log(stro.img);
let sign=localStorage.getItem("signup")
if(sign){
    document.getElementById("signup").style.display="none"
    document.getElementById("login").style.display="none"
    document.getElementById("logout").style.display="block"
}


const logout=()=>{
    document.getElementById("signup").style.display="block"
    document.getElementById("login").style.display="block"
    document.getElementById("logout").style.display="none"
    localStorage.removeItem("stro")
}
document.getElementById("logout").addEventListener("click",logout)
const users=()=>{
    console.log(stro);
    let img=document.createElement("img")
    img.src=stro.img
    img.setAttribute("id","userprofile")
    let first=document.createElement("h2")
    first.innerHTML=stro.first
    let name=document.createElement("p")
    name.innerHTML=stro.last
    let email=document.createElement("p")
    email.innerHTML=stro.email
    let div=document.createElement("div")
    div.append(img,first,name,email)
    div.setAttribute("class","singleuser")
    console.log(stro.last);
    document.getElementById("profilee").append(div)
}

users()

const DataTransfer=()=>{

    let img=document.createElement("img")
    img.src=stro.img
    document.getElementById("profile").append(img)
}
DataTransfer()

document.getElementById("profile").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("user-profile").style.display="block"
})
document.getElementById("close").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("user-profile").style.display="none"
})
document.getElementById("lth").addEventListener("click",()=>{
    let lth=products.sort((a,b)=>a.price-b.price)
    console.log(lth);
    product(lth)
})
document.getElementById("htl").addEventListener("click",()=>{
    let htl=products.sort((a,b)=>b.price-a.price)
    console.log(lth);
    product(htl)
})
document.getElementById("all").addEventListener("click",()=>{
    get()
})
document.getElementById("serch").addEventListener("keypress",(e)=>{
    //    e.preventDefault()
    let serchInput=document.getElementById("serch").value
    if(e.key=="Enter"){
        fetch(`http://localhost:3000/product?title=${serchInput}`)
        .then((res)=>res.json())
        .then((data)=>{
            product(data)
        })
    }
        })
const product=(data)=>{
    console.log("lth",data);
    document.querySelector(".claa").innerHTML=" "
    data.map((ele)=>{
        let div1=document.createElement("div")
        div1.setAttribute("class","div1")

        div1.setAttribute("id","hover")
        let img=document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","img")
        img.setAttribute("id",`img${ele.id}`)
        let overly=document.createElement("div")
        overly.setAttribute("class","overly-product")
        div1.append(img,overly)

        let btnshop=document.createElement("button")
        btnshop.innerHTML="Shop now"
        btnshop.setAttribute("class","btnshop")
        btnshop.addEventListener("click",()=>{
            console.log(ele.id);
            localStorage.setItem("product",ele.id)
            window.location.href="/Page/show.html"
        })
        overly.append(btnshop)
        let content=document.createElement("div")
        content.setAttribute("class","content")
         
        let title=document.createElement("h3")
        title.innerHTML=ele.title.substr(0,50)+"..."
        let price=document.createElement("h2")
        price.innerHTML=`₹${ele.price}`
        content.append(title,price)

        
        let row=document.createElement("div")
        row.setAttribute("class","class")
        let col=document.createElement("div")
        col.setAttribute("class"," col-xl-3 col-lg-3 col-md-4 col-sm-12")
        row.append(col)
        let div=document.createElement("div")
        div.setAttribute("class","border")
        div.append(div1,content)
        col.append(div)
        document.querySelector(".claa").append(col)
    })
}

let ig =document.querySelector(".loader-one")
console.log(ig);

window.addEventListener("load",()=>{
    ig.style.display="none"
    
})


const get =()=>{
    fetch(`http://localhost:3000/product`)
    .then((res)=>res.json())
    .then((data)=>{
        products=data
        product(data)
        
    })
}
const cartget=()=>{
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>{
        let dat=data.length
        if(data.length>0){
            document.querySelector(".cart-s").innerHTML=dat
        }
        else{
            document.querySelector(".cart-s").style.display="none"
        }
    })
}
cartget()
get()
