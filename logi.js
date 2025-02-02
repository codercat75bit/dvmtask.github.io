document.addEventListener("DOMContentLoaded",function() {
    const ham = document.getElementById("ham");
    const mobile = document.getElementById("mobile");
    const close = document.getElementById("close")

    ham.addEventListener("click", function() 
    {
     mobile.style.left = "0";   
    });
    close.addEventListener("click", function() {
        mobile.style.left = "-100%"
    })
    document.addEventListener("click", function (event) {
        if (!mobile.contains(event.target) && !ham.contains(event.target)) {
            mobile.style.left = "-100%";
        }
    })  
        
    
})