const left = document.querySelector(".left"),
right = document.querySelector(".right"),
editorhtml = document.querySelector(".editor-html"),
editorcss = document.querySelector(".editor-css"),
editorjs = document.querySelector(".editor-js"),
tocl1 = document.querySelector(".tocl-1"),
tocl2 = document.querySelector(".tocl-2"),
tocl3 = document.querySelector(".tocl-3"),
run = document.querySelector(".btn-run"),
iframe = document.querySelector(".iframe"),
darkLightMode = document.querySelector(".btn-dark-light"),
menu = document.querySelector(".editor-menu"),
live = document.querySelector(".live"),
livebtn = document.querySelector("#live"),
body = document.querySelector(".body");

let ldm = 0;

// Run Btn Event Listener
run.addEventListener("click", runcode)

function dhtml() {
    var htmlBlob = new Blob([editorhtml.value], {type: "text/html"});

    var url = window.URL.createObjectURL(htmlBlob);
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "index.html";

    anchor.click();
    window.URL.revokeObjectURL(url);
    document.removeChild(anchor);
}

function dcss() {
    var cssBlob = new Blob([editorcss.value], {type: "text/css"});

    var url = window.URL.createObjectURL(cssBlob);
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "style.css";

    anchor.click();
    window.URL.revokeObjectURL(url);
    document.removeChild(anchor);
}

function djs() {
    var jsBlob = new Blob([editorjs.value], {type: "text/js"});

    var url = window.URL.createObjectURL(jsBlob);
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "script.js";

    anchor.click();
    window.URL.revokeObjectURL(url);
    document.removeChild(anchor);
}

// Set Dark Mode
darkLightMode.addEventListener("click", () => {
    
    if (ldm == '0') {
        ldm = 1;
        darkLightMode.innerHTML = "Light Mode";
        editorhtml.style.backgroundColor = "#363836";
        editorhtml.style.color = "#eee";
        editorcss.style.backgroundColor = "#363836";
        editorcss.style.color = "#eee";
        editorjs.style.backgroundColor = "#363836";
        editorjs.style.color = "#eee";
        tocl1.style.backgroundColor = "darkslategray";
        tocl1.style.color = "#eee";
        tocl2.style.backgroundColor = "darkslategray";
        tocl2.style.color = "#eee";    
        tocl3.style.backgroundColor = "darkslategray";
        tocl3.style.color = "#eee";
        menu.style.backgroundColor = "#363836";    
        body.style.backgroundColor = "#363836";
        darkLightMode.style.backgroundColor = "darkslategray";
        live.style.backgroundColor = "darkslategray";
        run.style.backgroundColor = "darkslategray";
        darkMode.style.color = "#eee";
        lightMode.style.color = "#eee";
        run.style.color = "#eee";
        live.style.color = "#eee";
    } else if (ldm == '1') {
        ldm = 0;
        darkLightMode.innerHTML = "Dark Mode";
        editorhtml.style.backgroundColor = "";
        editorhtml.style.color = "";
        editorcss.style.backgroundColor = "";
        editorcss.style.color = "";    
        editorjs.style.backgroundColor = "";
        editorjs.style.color = "";
        tocl1.style.backgroundColor = "lightgray";
        tocl1.style.color = "";
        tocl2.style.backgroundColor = "lightgray";
        tocl2.style.color = "";
        tocl3.style.backgroundColor = "lightgray";
        tocl3.style.color = "";
        body.style.backgroundColor = "";
        menu.style.backgroundColor = "";
        darkLightMode.style.backgroundColor = "#31ad26";
        live.style.backgroundColor = "#31ad26";
        run.style.backgroundColor = "#31ad26";
        darkMode.style.color = "#fff";
        lightMode.style.color = "#fff"
        run.style.color = "#fff";
        live.style.color = "";
    }

})

// LIVE CODE
livebtn.addEventListener("click", () => {
    if (livebtn.checked) {
        addEventListener("keyup", runcode);
    } else {
        removeEventListener("keyup", runcode);
    }
})

function runcode() {
    let html = editorhtml.value;
    let css = "<style>"+editorcss.value+"</style>";
    let js = editorjs.value;
    iframe.contentDocument.body.innerHTML=html+css;
    iframe.contentWindow.eval(js);
}