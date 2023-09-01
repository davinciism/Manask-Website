const menu = document.querySelector(".menu")
const sidebar = document.querySelector(".sidebar")
const close = document.querySelector(".close")

menu.addEventListener('click', () => {
    if(sidebar.style.width == "0%"){
        sidebar.style.width = "100%"
        sidebar.style.opacity = "1"
    }
    else{
        sidebar.style.width = "0%"
        sidebar.style.opacity = "0"
    }
})

close.addEventListener('click', () => {
    if(sidebar.style.width == "100%"){
        sidebar.style.width = "0%"
        sidebar.style.opacity = "0"
    }
    else{
        sidebar.style.width = "100%"
        sidebar.style.opacity = "1"
    }
})