document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });
});


document.getElementById("carer-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const formData = {
        name: document.getElementById("carer-name").value.trim(),
        email: document.getElementById("carer-email").value.trim(),
        phone: document.getElementById("carer-phone").value.trim(),
        availability: document.getElementById("carer-availability").value,
        comments: document.getElementById("carer-message").value.trim(),
    };

    console.log(formData); // ✅ Check if data is being captured correctly

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.availability) {
        alert("Please fill in all required fields.");
        return;
    }

    // Email validation
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

    // Disable the submit button while submitting
    const submitButton = document.querySelector("#carer-form button");
    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    // API Gateway Endpoint
    const apiEndpoint = "https://fv1dv4vfw7.execute-api.ap-southeast-2.amazonaws.com/prod";

    try {
        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json(); // Parse JSON response

        if (response.ok && result.message === "Application submitted successfully") {
            alert("Your application has been submitted successfully!");
            document.getElementById("carer-form").reset();
        } else {
            console.error("Server Error:", result);
            alert("Error submitting the application. Please try again later.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was a problem submitting your application.");
    } finally {
        submitButton.disabled = false;
        submitButton.innerText = "Submit";
    }
});