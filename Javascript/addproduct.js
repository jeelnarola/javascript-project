document.querySelector(".productpage").addEventListener("submit",(e)=>{
    e.preventDefault()
    let product={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        description:document.getElementById("description").value,
        quantity:document.getElementById("quantity").value,
        Offer:document.getElementById("offer").value,
        hsn:document.getElementById("code").value,
        img:document.getElementById("img").value,
        imgone:document.getElementById("imgone").value,
        imgtwo:document.getElementById("imgtwo").value,
        imgthree:document.getElementById("imgthree").value,
        cat:document.getElementById("cat").value,
    }   
     
        console.log(product);
        if(product.img.lenght<0){
            document.getElementById("img").style.border="2px solid green"
        }
        else{
            document.getElementById("img").style.border="2px solid red"
        }
    
        if(!(product.title.lenght>0&&product.price.lenght>0&&product.quantity.lenght>0&&product.hsn.lenght>0&&product.img.lenght>0&&product.description.lenght>0))
        {
            fetch(`http://localhost:3000/product/?hsn=${product.hsn}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                if(data.length>0){
                    alert("HSN code same")
                    document.querySelector(".productimg").style.display="block"
                    document.querySelector(".firstlist").style.display="none"
                }
                else{
                    window.location.href="/index.html"
                    fetch(`http://localhost:3000/product`,{
                        method:"POST",
                        headers:{"content-type":"application/json"},
                        body:JSON.stringify(product)
                    })
                }
            })
        }
    })
    
    document.getElementById("nextbtn").addEventListener("click",(e)=>{
        e.preventDefault()
        let title=document.getElementById("title").value
    let price=document.getElementById("price").value
    let description=document.getElementById("description").value
    let quantity=document.getElementById("quantity").value
    let hsn=document.getElementById("code").value
    let cat=document.getElementById("cat").value
    if(title==""){
        document.getElementById("title").style.border="2px solid red"
     
    }else{
        document.getElementById("title").style.border="2px solid green"
    }
    if(price==""){
        document.getElementById("price").style.border="2px solid red"
     
    }else{
        document.getElementById("price").style.border="2px solid green"
    }
    if(description==""){
        document.getElementById("description").style.border="2px solid red"
     
    }else{
        document.getElementById("description").style.border="2px solid green"
    }
    if(quantity==""){
        document.getElementById("quantity").style.border="2px solid red"
     
    }else{
        document.getElementById("quantity").style.border="2px solid green"
    }
    if(hsn==""){
        document.getElementById("code").style.border="2px solid red"
     
    }else{
        document.getElementById("code").style.border="2px solid green"
    }
    if(cat==""){
        document.getElementById("cat").style.border="2px solid red"
    }
    else{
        document.getElementById("cat").style.border="2px solid green"
    }
    
    if(!(title==""&&price==""&&quantity==""&&hsn==""&&description=="")){
        fetch(`http://localhost:3000/product/?hsn=${hsn}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                if(data.length>0){
                    alert("HSN code same")  
                    document.getElementById("code").style.border="2px solid red"  
                }
                else{
                    document.querySelector(".productimg").style.display="block"
                    document.querySelector(".firstlist").style.display="none"
                }
            })
    }
    })
    
    
    document.getElementById("backbtn").addEventListener("click",()=>{
        document.querySelector(".productimg").style.display="none"
        document.querySelector(".firstlist").style.display="block"
    })
    
    
    
            // TITLE KEY-PRESS 
    
    document.getElementById("title").addEventListener("keypress",(e)=>{
        // e.preventDefault()
        let regName = /^[a-zA-Z]+$/;
        let title=document.getElementById("title").value
        if(regName.test(title)){
            document.getElementById("title").style.border="2px solid green"
        }
        else if(title==""){
            document.getElementById("title").style.border="2px solid red"
    
        }
        else{
            document.getElementById("title").style.border="2px solid red"
        }
    })
    
            // PEICE 
    
    document.getElementById("price").addEventListener("keypress",(e)=>{
                // e.preventDefault()
        let price=document.getElementById("price").value
               
                if (price.lenght=="") {
                    document.getElementById("price").style.border="2px solid red"
                }
                else{
                    document.getElementById("price").style.border="2px solid green"
                }
    })
    
            // description
    
    document.getElementById("description").addEventListener("keypress",(e)=>{
        // e.preventDefault()
    let description=document.getElementById("description").value
       
        if (description.lenght=="") {
            document.getElementById("description").style.border="2px solid red"
        }
        else{
            document.getElementById("description").style.border="2px solid green"
        }
    })
    
            // quantity
    
    document.getElementById("quantity").addEventListener("keypress",(e)=>{
        // e.preventDefault()
    let quantity=document.getElementById("quantity").value
       console.log(quantity);
        if(quantity<="10") {
            document.getElementById("quantity").style.border="2px solid green"
            document.getElementById("quantitytext").innerHTML="max quantity 10"
        }
        else{
            document.getElementById("quantity").style.border="2px solid red"
        }
    })
    
    
    document.getElementById("code").addEventListener("keypress",(e)=>{
        // e.preventDefault()
    let code=document.getElementById("code").value
       console.log(code);
        if(code=="") {
            document.getElementById("code").style.border="2px solid red"
            document.getElementById("code").innerHTML="max quantity 10"
        }
        else{
            document.getElementById("code").style.border="2px solid green"
        }
    })