function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);

function c(val)  
{  
document.getElementById("d").value=val;  
}  
function v(val)  
{document.getElementById("d").value+=val;  
}  
function e()  
{  
try  
    {  
     c(eval(document.getElementById("d").value))  
    }  
    catch(e)  
    {  
     c('Error') }  
} 