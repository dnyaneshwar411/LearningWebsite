document.querySelector("#header .navBar .fa-bars").addEventListener("click", function () {
    document.querySelector("#header .navBar ul").classList.toggle("nav-toggle");
    console.log("india");
})

for (i = 0; i < document.querySelectorAll("#header .navBar ul li").length; i++) {
    document.querySelectorAll("#header .navBar ul li a")[i].addEventListener("click", function () {
        document.querySelector("#header .navBar ul").classList.toggle("nav-toggle");
        console.log("india");
    })
}