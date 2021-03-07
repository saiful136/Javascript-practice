
let d =new Date();
document.write(d);

// setTimeout(function () { location.reload(1); }, 1000); 

//Make it using arrow function. It will reload the page after 1 second (1000 milliseconds)
setTimeout( () => {
    location.reload();    
}, 1000);
