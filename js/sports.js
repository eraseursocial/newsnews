//SPORTS FOOTER FORM
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Capture the form data
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

    // Log the data (for demonstration purposes)
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Comment:", comment);

    // Display a message to the user
    if (fullName && email && comment) {
        alert("Thank you for contacting us, " + fullName + "!");
    } else {
        alert("Please fill out all fields.");
    }
});
