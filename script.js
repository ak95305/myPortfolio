var contactButton = document.querySelector("#contact-btn");
var crossButton = document.querySelector(".cross-btn");
var menuButton = document.querySelector("#menu-btn");
let status = "open";


contactButton.addEventListener("click", contactFunction);
crossButton.addEventListener("click", crossFunction);
menuButton.addEventListener("click", menuFunction);

function contactFunction() {
    var elem = document.querySelector(".contact-box");
    var pos = -220;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === 0) {
            clearInterval(id);
        } else {
            pos += 20;
            elem.style.right = pos + "px";
        }
        menuButton.style.display = "none"
    }
}

function crossFunction() {
    var elem = document.querySelector(".contact-box");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos === -220) {
            clearInterval(id);
        } else {
            pos -= 20;
            elem.style.right = pos + "px";
        }
        menuButton.style.display = "";
    }
}


function menuFunction() {

    if (status === "open") {
        var firstLine = document.querySelector(".first-line");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos === 45) {
                clearInterval(id);
            } else {
                pos += 3;
                firstLine.style.transform = 'rotate(' + pos + 'deg)';
            }
        }

        var secondLine = document.querySelector(".second-line");
        var pos2 = 0;
        var id2 = setInterval(frame2, 10);
        function frame2() {
            if (pos2 === -45) {
                clearInterval(id2);
            } else {
                pos2 -= 3;
                secondLine.style.transform = 'rotate(' + pos2 + 'deg)';
            }
        }

        var menuBox = document.querySelector("nav");
        var i = -200;
        var name = setInterval(frame0, 10);
        function frame0() {
            if (i === 0) {
                clearInterval(name);
            } else {
                i += 20;
                menuBox.style.right = i + "px";
            }
        }

        var navTabs = document.querySelector("#nav-tabs");
        navTabs.classList.add("new-menu");

        var menu = document.querySelector(".menu");
        menu.style.color = "white";
        
        status = "close";
    }
    else {
        var firstLine = document.querySelector(".first-line");
        console.log("aman");
        var pos4 = 45;
        var id4 = setInterval(frame4, 10);
        function frame4() {
            if (pos4 === 0) {
                clearInterval(id4);
            } else {
                pos4 -= 3;
                firstLine.style.transform = 'rotate(' + pos4 + 'deg)';
            }
        }
        var secondLine = document.querySelector(".second-line");
        var pos5 = -45;
        var id5 = setInterval(frame5, 10);
        function frame5() {
            if (pos5 === 0) {
                clearInterval(id5);
            } else {
                pos5 += 3;
                secondLine.style.transform = 'rotate(' + pos5 + 'deg)';
            }
        }

        var menuBox = document.querySelector("nav");
        var i1 = 0;
        var name1 = setInterval(frame01, 10);
        function frame01() {
            if (i1 === -200) {
                clearInterval(name1);
            } else {
                i1 -= 20;
                menuBox.style.right = i1 + "px";
            }
        }
        status = "open";
    }

}

