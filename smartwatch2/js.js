setInterval(()=>{
    const d = new Date()
    const day = d.getDay() +' '+ d.getMonth() +' '+d.getFullYear()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()
    document.getElementById("d").innerHTML = day
    document.getElementById("h").innerHTML = h + ':'
    document.getElementById("m").innerHTML = m + ':'
    document.getElementById("s").innerHTML = s
    if(h<10){
        document.getElementById("h").innerHTML = '0'+h + ':'
    }
    if(m<10){
        document.getElementById("m").innerHTML = '0'+ m + ':'
    }
    if(s<10){
        document.getElementById("s").innerHTML = '0' + s
    }
},1000);