setTimeout(function() {
   console.log('times up');
},1000)

var i =0;
setInterval(function() {
    console.log('times up');

    if(i==4) {
        clearInterval(this); 
    }
    i++;
 },1000)

 setImmediate(function() {
     console.log('Hey immediate')
     
 })

