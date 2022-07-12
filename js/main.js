let showNav = document.getElementById("showNav");
let hideNav = document.getElementById("hideNav");
let mobile_nav = document.getElementById("mobile_nav");
let dropdown_button = document.getElementById("dropdown_button");
let dropdown_button2 = document.getElementById("dropdown_button2");
let dropmenu = document.getElementById("dropmenu");
let dropmenu2 = document.getElementById("dropmenu2");
let i = 0;
let j =0;

showNav.onclick = function () {
    mobile_nav.style.transform = "translateX(-100%)";
    mobile_nav.style.transition = "transform 0.3s linear";
}

hideNav.onclick = function () {
    mobile_nav.style.transform = "translateX(100%)";
    mobile_nav.style.transition = "transform 0.3s linear";

}

dropdown_button.onclick = function () {
    i % 2 == 0 ? dropmenu.style.display="block" : dropmenu.style.display="none";
    i++;
}

dropdown_button2.onclick = function () {
    j % 2 == 0 ? dropmenu2.style.display="block" : dropmenu2.style.display="none";
    j++;
}

// 2 function bên dưới là của github copilot làm, e chỉ thêm nó vào để cái navbar thêm hợp lý xíu :((


window.onresize = function () {
    if (window.innerWidth > 0) {
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




