document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        

        alert("Thank you for reaching out! We'll get back to you soon.");

        console.log("Form submitted!");

        form.reset();
    });
});
