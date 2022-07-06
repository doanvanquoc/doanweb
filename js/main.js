let showNav = document.getElementById("showNav");
let hideNav = document.getElementById("hideNav");
let mobile_nav = document.getElementById("mobile_nav");


showNav.onclick = function () {
    mobile_nav.style.transform = "translateX(-100%)";
    mobile_nav.style.transition = "transform 0.3s linear";
}

hideNav.onclick = function () {
    mobile_nav.style.transform = "translateX(100%)";
    mobile_nav.style.transition = "transform 0.3s linear";

}

// 2 function bên dưới là do github copilot làm, e chỉ thêm nó vào để cái navbar thêm hợp lý xíu :((

//create a function to hide the navbar when resize the window
window.onresize = function () {
    if (window.innerWidth > 768) {
        mobile_nav.style.transform = "translateX(100%)";
        mobile_nav.style.transition = "transform 0.3s linear";
    }
}

//create a function to hide the navbar when scroll the page
window.onscroll = function () {
    if (window.scrollY > 100) {
        mobile_nav.style.transform = "translateX(100%)";
        mobile_nav.style.transition = "transform 0.3s linear";
    }
}



