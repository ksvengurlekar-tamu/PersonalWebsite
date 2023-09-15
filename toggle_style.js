// To prevent issue on reload of empty local storage item "href"
if (!localStorage.getItem("href")) {
    toggleStyleSheet();
}


function toggleStyleSheet(){
    // Get style element by ID 
    el = document.getElementById("mainStyleSheet");

    //Check the current stylesheet file name.
    if (el.getAttribute("href") === "darker_styles.css") {
        el.setAttribute("href", "lighter_styles.css");
        localStorage.setItem("href", "lighter_styles.css");
    }
    else {
        el.setAttribute("href", "darker_styles.css");
        localStorage.setItem("href", "darker_styles.css");
    }

}


window.onload = function(){
    // Makes the last div color persist even when someone refreshes the page.

    // get stylesheet name from local storage
    style = localStorage.getItem("href")

    // get html style element by ID an replace href attribute of html element.
    document.getElementById("mainStyleSheet").setAttribute("href", style);

}