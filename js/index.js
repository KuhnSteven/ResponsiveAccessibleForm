// Variables
const form = document.querySelector("#form");
let size = "S";
let color = 1;
let name = "";
let email = "";
let address = "";
let address2 = "";
let city = "";
let state = "";
let zip = 0;
let country = "";

form.addEventListener("submit", e => {
    e.preventDefault();

    return formValidation();
})

function formValidation() {
    size = document.querySelector("#size");
    color = document.querySelector("#color");

    name = document.querySelector("#name").nodeValue;
    email = document.querySelector("#email");

    address = document.querySelector("#sAddress");
    address2 = document.querySelector("#sAddress2");
    city = document.querySelector("#city");
    state = document.querySelector("#state");
    zip = document.querySelector("#zip");
    country = document.querySelector("#country");

    if (name != "" && email !="" && address !="" && city !="" && state != "" && zip != 0 && country != "") {
        // Valid form submission
        
    }

    // Invalid form alerts
    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }
}