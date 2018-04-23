// Variables
const form = document.querySelector("#form");
const feedback = document.getElementById("#formFeedback");
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

let content = '';

form.addEventListener("submit", e => {
    e.preventDefault();
    return formValidation();
})

function formValidation() {
    size = document.getElementById("size");
    color = document.getElementById("color");

    name = document.getElementById("name");
    email = document.getElementById("email");

    address = document.getElementById("sAddress");
    address2 = document.getElementById("sAddress2");
    city = document.getElementById("city");
    state = document.getElementById("state");
    zip = document.getElementById("zip");
    country = document.getElementById("country");

    if (name != "" && email !="" && address !="" && city !="" && state != "" && zip != 0 && country != "") {
        // Valid form submission
        content +=
            `ORDER DETAILS<br>Product Size: ${size}<br>Product Color: ${color}<br><br>Customer Name: ${name}<br>Customer Email: ${email}<br>Shipping Address 1: ${sAddress}<br>Shipping Address 2: ${sAddress2}<br>City: ${city}<br>State: ${state}<br>Zip: ${zip}<br>Country: ${country}`;

        // Populate the DOM
        feedback.innerHTML(content);
    }

    // Invalid form alerts
    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }
}