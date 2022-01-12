setInterval(() => {
    
var a = new Date();
a.getHours();
a.getMinutes();
a.getSeconds();
var time = a.getHours() +":"+a.getMinutes()+":" + a.getSeconds()
var date=a.toLocaleDateString();
document.getElementById('timenddate').innerHTML=  time  + "on" +  date

}, 1000);