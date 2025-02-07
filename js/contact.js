document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });
});

document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        enquiry: document.getElementById("enquiry").value, // Dropdown selection
        message: document.getElementById("message").value.trim(),
    };

    // Basic Validation: Ensure all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.enquiry || !formData.message) {
        alert("Please fill in all fields.");
        return;
    }

    // Email validation (basic check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation (must be numbers and 10-15 characters)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(formData.phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return;
    }

    // Disable submit button while submitting
    const submitButton = document.querySelector("#contact-form button");
    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    // API Gateway Endpoint (Replace with your actual AWS API Gateway URL)
    const apiEndpoint = "https://your-api-id.execute-api.region.amazonaws.com/prod/contact-form";

    try {
        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Your enquiry has been submitted successfully!");
            document.getElementById("contact-form").reset(); // Reset form after submission
        } else {
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

