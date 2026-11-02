
/* =========================================
   WEBCRAFT - TASK 1
   JavaScript Functionality
========================================= */


/* 1. SELECT THE WELCOME BUTTON */

const welcomeButton = document.getElementById("welcomeButton");


/* 2. ADD CLICK EVENT LISTENER */

if (welcomeButton) {

    welcomeButton.addEventListener("click", function () {

        // Display a welcome message when the button is clicked
        alert(
            "Hello! Welcome to WebCraft. Keep learning, building and creating!"
        );

    });

}


/* 3. LOG PAGE LOAD MESSAGE */

console.log("WebCraft website loaded successfully!");

console.log("HTML, CSS and JavaScript are connected.");
