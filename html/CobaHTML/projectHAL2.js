var dat;
const bx=document.getElementById("cont");
const div1=document.createElement("div");
for(let x=0;x<35;x++){
fetch('https://api.waifu.im/random/')
.then((response)=>response.json())
.then((res)=>{
    dat=res;    
    const gbr=document.createElement("img");
    gbr.src=dat.images[0].url;
    gbr.width=200;
    gbr.height=200;
    div1.appendChild(gbr);
    bx.appendChild(div1);
});
}
function uchiha(){
    const ganti2 =document.body;
    ganti2.classList.toggle("uch");
}
    
const akun = ["Facebook", "Instagram", "Whatsapp"];
document.getElementById("sosmed1").innerHTML = akun[0];
document.getElementById("sosmed2").innerHTML = akun[1];
document.getElementById("sosmed3").innerHTML = akun[2];