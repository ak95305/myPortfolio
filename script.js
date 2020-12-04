var contactButton = document.querySelector("#contact-btn");
var crossButton = document.querySelector(".cross-btn");


contactButton.addEventListener("click", contactFunction);
crossButton.addEventListener("click", crossFunction);

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
    }
}

