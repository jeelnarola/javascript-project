import { footer, load, prohead } from "../component/load.js"
document.getElementById("footerpro").innerHTML=footer()
document.getElementById("cartloader").innerHTML=load()
document.getElementById("cartheader").innerHTML=prohead()
let totl=""
const cart=(data)=>{
    let aa=""
    data.map((ele)=>{

        let cartimgbox=document.createElement("div")
        cartimgbox.setAttribute("class","cartimgbox")
        let imgbox=document.createElement("div")
        imgbox.setAttribute("class","imgbox") 
        let cartcontentbox=document.createElement("div")
        cartcontentbox.setAttribute("class","cartcontentbox")
        let img=document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","cartimg")
        cartimgbox.append(imgbox,cartcontentbox)
        imgbox.append(img)

        let title=document.createElement("h3")
        title.innerHTML=ele.title.substring(0,60)+"..."
        title.setAttribute("class","carttitle")
        let price=document.createElement("h2")
        price.setAttribute("class","cartprice")
        price.innerHTML=`Price: ₹${ele.price}`

        
        let flex=document.createElement("div")
        flex.setAttribute("class","cartflex")

        let min=document.createElement("button")
        min.setAttribute("class",`min${ele.id}`)
        min.innerHTML=`<i class="fa-solid fa-minus"></i>`

        min.addEventListener("click",()=>{
            fetch(`http://localhost:3000/cart/${ele.id}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                data.qyt=data.qyt-1
                console.log(data.qyt);
                fetch(`http://localhost:3000/cart/${data.id}`,{
                    method:"PATCH",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(data)
                })
                .then((res)=>res.json())
                .then((data)=>console.log(data))
            })
        })


        let store=document.createElement("p")
        store.innerHTML=ele.qyt

        aa=`${ele.qyt}`
        console.log(aa);
        store.setAttribute("class","cartstore")
        let max=document.createElement("button")
        max.innerHTML=`<i class="fa-solid fa-plus"></i>`
        max.addEventListener("click",()=>{
            fetch(`http://localhost:3000/cart/${ele.id}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                data.qyt=data.qyt+1
                console.log(data.qyt);
                fetch(`http://localhost:3000/cart/${data.id}`,{
                    method:"PATCH",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(data)
                })
                .then((res)=>res.json())
                .then((data)=>console.log(data))
            })
        })
        let totle=document.createElement("h3")
        totle.innerHTML=`totle: ₹${ele.qyt*ele.price}`
        totl=totle.innerHTML
        console.log(totl);
        totle.setAttribute("class",`carttotle${ele.id} carttotle`)
        let remove=document.createElement("button")
        remove.innerHTML=`remove <i class="fa-solid fa-trash"></i>`
        remove.addEventListener("click",()=>{
            fetch(`http://localhost:3000/cart/${ele.id}`,{
                method:"delete"
            })

        })
        remove.setAttribute("class","cartremove")
        flex.append(min,store,max)
        cartcontentbox.append(title,price,flex,totle,remove)


        let div=document.createElement("div")
        div.setAttribute("class","cartsubtotle")
        let subtotlebox=document.createElement("div")
        subtotlebox.setAttribute("class","subtotlebox")
        subtotlebox.innerHTML=totl
        let div1=document.createElement("div")
        div1.setAttribute("class","col-sm-12 col-sx-12 col-md-5 col-lg-4 col-xl-3 ")

        let flex2=document.createElement("div")
        flex2.setAttribute("class","row")
        div1.append(flex2)
        let div3=document.createElement("div")
        div3.setAttribute("class","cartboxshadow")
        div3.append(cartimgbox,cartcontentbox)
        flex2.append(div3)

        document.querySelector("#rowapp").append(div1)
        console.log(aa);
        if(aa==1){
            document.querySelector(`.min${ele.id}`).style.transform= "scale(0)"
        }
        else if(aa>4){
            document.querySelector(".min").style.transform= "scale(1)"
        }
    })
}






const totle=(data)=>{
    let subtotal=0
    let qyt=0
    let gst=0
    let total=0
data.map((ele)=>{
    subtotal=subtotal+(ele.price*ele.qyt)
    qyt=qyt+ele.qyt
    gst=(subtotal)*12/100
    total=Math.round(subtotal+gst)
})
    document.querySelector("#subtotal").innerHTML=`${subtotal}`
    document.querySelector("#tdqyt").innerHTML=`${qyt}`
    document.getElementById("gst").innerHTML=gst
    document.getElementById("total").innerHTML=`₹ ${total} /-`

}

let ig =document.querySelector(".loader-one")
console.log(ig);

window.addEventListener("load",()=>{
    ig.style.display="none"
    
})

const get=()=>{
    fetch(` http://localhost:3000/cart`)
    .then((res)=>res.json())
    .then((data)=>{
        cart(data)
        totle(data)
        let dat=data.length
        if(data.length>0){
            document.querySelector(".cart-s").innerHTML=dat
        }
        else{
            document.querySelector(".cart-s").style.display="none"
        }
    })
}
get()