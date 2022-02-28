const button = document.querySelector(".button");
const form = document.querySelector("form");

button.addEventListener("click", (event)=> {
    event.preventDefault();
    form.classList.add("form-hide");
})

form.addEventListener("animationstart", event => {
    if (event.animationName==="dow"){
        document.querySelector("body").style.overflow="hidden"
    }

})

form.addEventListener("animationend", event=> {
    if (event.animationName==="dow"){
        form.style.display="none"
        document.querySelector("body").style.overflow="none"
    }

})