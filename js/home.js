
//HOME PAGE ARTICLE
let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function changeSlide(direction) {
            currentSlideIndex += direction;
            if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
            if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
            showSlide(currentSlideIndex);
        }

        function setSlide(index) {
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
        }

        showSlide(currentSlideIndex);

//HOME FOOTER FORM
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Capture the form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    // Log the data (for demonstration purposes)
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Comment:", comment);

    // Optionally, display a message to the user
    alert("Thank you for contacting us, " + fullName + "!");
});