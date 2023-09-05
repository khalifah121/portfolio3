const links = document.querySelector(".links")
const menu = document.querySelector(".menu")

menu.addEventListener("click",()=>{
    links.classList.toggle("hide")
})

// THEME SWITCH
const switchBtn = document.querySelector(".theme-switcher")

switchBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})