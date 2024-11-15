// Highlight section on hover
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        section.style.transition = "box-shadow 0.3s ease";
    });

    section.addEventListener("mouseleave", () => {
        section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
});

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate fields
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate sending the form
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Clear form inputs
});

// Animate project cards on page load
const projectCards = document.querySelectorAll(".project");

window.addEventListener("load", () => {
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        }, index * 200); // Stagger animations
    });
});
