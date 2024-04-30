// spotlight click 
document.getElementById("nc").addEventListener("click",(e)=>{
    e.preventDefault();

    document.getElementById("nct").style.display="block"
    document.getElementById("btc").style.display="none"
    document.getElementById("nsp").style.display="none"
    document.getElementById("cfe").style.display="none"
});
document.getElementById("bt").addEventListener("click",(e)=>{
    e.preventDefault();

    document.getElementById("nct").style.display="none"
    document.getElementById("btc").style.display="block"
    document.getElementById("nsp").style.display="none"
    document.getElementById("cfe").style.display="none"
});
document.getElementById("ns").addEventListener("click",(e)=>{
    e.preventDefault();

    document.getElementById("nct").style.display="none"
    document.getElementById("btc").style.display="none"
    document.getElementById("nsp").style.display="block"
    document.getElementById("cfe").style.display="none"
});
document.getElementById("cf").addEventListener("click",(e)=>{
    e.preventDefault();

    document.getElementById("nct").style.display="none"
    document.getElementById("btc").style.display="none"
    document.getElementById("nsp").style.display="none"
    document.getElementById("cfe").style.display="block"
});