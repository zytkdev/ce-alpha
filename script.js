const left = document.querySelector(".left"),
right = document.querySelector(".right"),
editorhtml = document.querySelector(".editor-html"),
editorcss = document.querySelector(".editor-css"),
editorjs = document.querySelector(".editor-js"),
ver = document.querySelector("#ver"),
save = document.querySelector(".btn-save"),
tocl1 = document.querySelector(".tocl-1"),
tocl2 = document.querySelector(".tocl-2"),
tocl3 = document.querySelector(".tocl-3"),
tocl4 = document.querySelector(".tocl-4"),
e = document.querySelector(".e"),
pre = document.querySelector("#log"),
run = document.querySelector(".btn-run"),
ontb = document.querySelector(".btn-ont"),
iframe = document.querySelector(".iframe"),
close = document.querySelector(".btn-close"),
con = document.querySelector(".test"),
darkLightMode = document.querySelector(".btn-dark-light"),
menu = document.querySelector(".editor-menu"),
live = document.querySelector(".live"),
livebtn = document.querySelector("#live"),
conbtn = document.querySelector("#test"),
con2 = document.querySelector("#log-container"),
devlog = document.querySelector(".btn-dev"),
body = document.querySelector(".body");

// Variables used for close btn & ldm btn
let ldm = 0;
let c = 0;

// Run btn event listner
run.addEventListener("click", runcode);

// Closes the menu
close.addEventListener('click', () => {
    if (c == 0) {
        c = 1;
        e.style.display = "none";
        close.innerHTML = ">";
        menu.style.width = "4%";
    } else if (c == 1) {
        c = 0;
        e.style.display = "";
        close.innerHTML = "<"
        menu.style.width = "100%";
    }
});

// Downloads your code
save.addEventListener("click", () => {
    let s = editorhtml.value + "<script>" + editorjs.value + "</script>" + "<style>" + editorcss.value + "</style>";
    var saveBlob = new Blob([s], {type: "text/html"});

    var url = window.URL.createObjectURL(saveBlob);
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "index.html";

    anchor.click();
    window.URL.revokeObjectURL(url);
    document.removeChild(anchor);
});

// Set Light Mode/Dark Mode
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
        iframe.style.backgroundColor = "white";
        tocl1.style.backgroundColor = "darkslategray";
        devlog.style.backgroundColor = "darkslategray";
        tocl1.style.color = "#eee";
        tocl4.style.backgroundColor = "darkslategray";
        con.style.backgroundColor = "darkslategray";
        save.style.backgroundColor = "darkslategray";
        save.style.color = "#eee";
        con.style.color = "#eee";
        tocl4.style.color = "#eee";
        e.style.backgroundColor = "#363836";
        close.style.backgroundColor = "darkslategray";
        left.style.backgroundColor = "#363836";
        right.style.backgroundColor = "#363836";
        pre.style.color = "#eee";
        con2.style.backgroundColor = "#363836";
        con2.style.color = "#eee";
        tocl2.style.backgroundColor = "darkslategray";
        tocl2.style.color = "#eee";    
        tocl3.style.backgroundColor = "darkslategray";
        tocl3.style.color = "#eee";
        menu.style.backgroundColor = "#363836";    
        body.style.backgroundColor = "#363836";
        darkLightMode.style.backgroundColor = "darkslategray";
        live.style.backgroundColor = "darkslategray";
        ontb.style.backgroundColor = "darkslategray";
        run.style.backgroundColor = "darkslategray";
        darkMode.style.color = "#eee";
        devlog.style.color = "#eee";
        ontb.style.color = "#eee";
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
        left.style.backgroundColor = "";
        right.style.backgroundColor = "";
        e.style.backgroundColor = "#eee";
        close.style.backgroundColor = "#31ad26";
        save.style.backgroundColor = "#31ad26";
        save.style.color = "#eee";
        editorjs.style.color = "";
        pre.style.color = "";
        iframe.style.backgroundColor = "";
        tocl1.style.backgroundColor = "#31ad26";
        tocl4.style.backgroundColor = "#31ad26";
        con2.style.backgroundColor = "";
        con2.style.color = "#eee";
        con.style.backgroundColor = "";
        con.style.color = "#eee";
        tocl4.style.color = "#eee";
        devlog.style.backgroundColor = "#31ad26";
        tocl1.style.color = "#eee";
        tocl2.style.backgroundColor = "#31ad26";
        tocl2.style.color = "#eee";
        tocl3.style.backgroundColor = "#31ad26";
        tocl3.style.color = "#eee";
        body.style.backgroundColor = "";
        menu.style.backgroundColor = "#eee";
        darkLightMode.style.backgroundColor = "#31ad26";
        live.style.backgroundColor = "#31ad26";
        ontb.style.backgroundColor = "#31ad26";
        run.style.backgroundColor = "#31ad26";
        darkMode.style.color = "#fff";
        devlog.style.color = "#fff";
        lightMode.style.color = "#fff"
        ontb.style.color = "#fff";
        run.style.color = "#fff";
        live.style.color = "";
    }

});

// Live Code
livebtn.addEventListener("click", () => {
    if (livebtn.checked) {
        addEventListener("keyup", runcode);
    } else {
        removeEventListener("keyup", runcode);
    }
});

// Toggle the console
conbtn.addEventListener("click", () => {
    if (conbtn.checked) {
        con2.style.display = "block";
        tocl4.style.display = "block"
        iframe.style.height = "75%";
    } else {
        con2.style.display = "none";
        tocl4.style.display = "none";
        iframe.style.height = "100%";
    }
});

// Open your code in a new window
ontb.addEventListener('click', () => {
    let html = editorhtml.value;
    let css = "<style>"+editorcss.value+"</style";
    let js = editorjs.value;
    var myWindow = window.open("", "View Code");
    myWindow.document.body.innerHTML=html+css;
    myWindow.window.eval(js);
});

// Opens the devlog
devlog.addEventListener('click', () => {
    window.open("./devlog.txt", "Devlog");
});

// Runs the code
function runcode() {
    let html = editorhtml.value;
    let css = "<style>"+editorcss.value+"</style>";
    let js = editorjs.value;
    iframe.contentDocument.body.innerHTML=html+css;
    iframe.contentWindow.eval(js);
    if (conbtn.checked) {
        window.eval(js);
    }
} 

// Valentines Countdown
/* function calculateVCountdown() {

    var now = new Date();

    var currentMonth = (now.getMonth() + 1);

    var currentDay = now.getDate();

    var nextVYear = now.getFullYear();

    if (currentMonth == 02 && currentDay > 14) {
        ver.innerHTML = "v0.9.7";
    }

    if (currentMonth == 02 && currentDay == 14) {
        ver.innerHTML = "It's valentines day!"
    }

    var nextVDate = nextVYear + '-02-14T00:00:00.000Z';
    var vDay = new Date(nextVDate);

    var diffSeconds = Math.floor((vDay.getTime() - now.getTime()) / 1000);

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    if(currentMonth != 02 || (currentMonth == 02 && currentDay != 14)){
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
        ver.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds + " Till Valentines Day!";
    }

    setTimeout(calculateVCountdown, 1000);
}

calculateVCountdown(); */
