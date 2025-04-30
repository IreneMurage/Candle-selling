document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Get the form element

    // When the form is submitted
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop the form from refreshing the page

        // Get input values
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

    
        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return; // Stop the function if fields are empty
        }

        // printing the input in the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        alert("Thank you for reaching out! We'll get back to you soon.");

        console.log("Form submitted!"); // Log form submission

        form.reset(); // Clear the form inputs
    });
});
