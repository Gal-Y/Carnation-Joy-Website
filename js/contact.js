document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });
});

// Mobile dropdown support (CSS disables hover open on small screens).
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll("nav .dropdown");
    dropdowns.forEach((dd) => {
        const trigger = dd.querySelector("a.dropbtn");
        if (!trigger) return;
        trigger.addEventListener("click", (e) => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                e.preventDefault();
                dd.classList.toggle("open");
            }
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        enquiry: document.getElementById("enquiry").value,
        message: document.getElementById("message").value.trim(),
    };

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.enquiry || !formData.message) {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(formData.phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return;
    }

    const submitButton = document.querySelector("#contactForm button");
    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    const apiEndpoint = "https://6l20ufzu4d.execute-api.ap-southeast-2.amazonaws.com/prod";

    try {
        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json(); // Parse the JSON response

        if (response.ok && result.message === "Submission successful") {
            alert("Your enquiry has been submitted successfully!");
            document.getElementById("contactForm").reset(); // ✅ Corrected form ID
        } else {
            console.error("Server Error:", result);
            alert("Error submitting the form. Please try again later.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was a problem submitting your form.");
    } finally {
        submitButton.disabled = false;
        submitButton.innerText = "Submit";
    }
});
