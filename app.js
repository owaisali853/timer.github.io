btn.onclick = function(){
    var tm = inpt.value;
    ID=setInterval(function(){tm--;sec.innerHTML=tm%60;
        min.innerHTML=parseInt(tm/60);btn.style.display="none";},1000)

}