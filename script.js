// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const form = document.getElementById('simpleForm');

    // Select the output paragraph where the thank you message will be displayed
    const output = document.getElementById('output');

    // Listen for the form submit event
    form.addEventListener('submit', function (event) {
        // Prevent the form from actually submitting
        event.preventDefault();

        // Get the values of name and email from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Display the thank you message with name and email
        output.innerHTML =` Thank you, <strong>${name}</strong>! We have received your details. A confirmation email has been sent to <strong>${email}</strong>.`;

        // Optionally clear the form after submission (comment out if not desired)
        form.reset();
    });
});