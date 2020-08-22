// Getting DOM elements
const checkBox = document.getElementById("checkbox");
const body = document.querySelector(".body");

//Adding event listener to checkbox
checkBox.addEventListener("change",()=>{

    // Switching between a dark class of the body depending on checkbox's state
    body.classList.toggle("body--dark");
})