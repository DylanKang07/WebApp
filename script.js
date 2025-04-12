// Add JavaScript code for your web site here and call it from index.html. 
document.getElementById("myBtn").addEventListener("click",() => {
    let input = document.getElementById("myInput").ariaValueMax;
    document.getElementById("myPara").innerHTML = "You typed " + input;
})
