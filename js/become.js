document.getElementById("carer-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append("name", document.getElementById("carer-name").value.trim());
    formData.append("email", document.getElementById("carer-email").value.trim());
    formData.append("phone", document.getElementById("carer-phone").value.trim());
    formData.append("availability", document.getElementById("carer-availability").value);
    formData.append("comments", document.getElementById("carer-message").value.trim());

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.get("email"))) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone validation (must be numbers and 10-15 characters)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(formData.get("phone"))) {
        alert("Please enter a valid phone number (10-15 digits).");
        return;
    }

    // Disable submit button while submitting
    const submitButton = document.querySelector("#carer-form button");
    submitButton.disabled = true;
    submitButton.innerText = "Submitting...";

    // API Gateway Endpoint (Replace with your actual AWS API Gateway URL)
    const apiEndpoint = "https://6l20ufzu4d.execute-api.ap-southeast-2.amazonaws.com/prod/become-carer";

    try {
        const response = await fetch(apiEndpoint, {
            method: "POST",
            body: formData, // Send FormData (including file)
        });

        if (response.ok) {
            alert("Your application has been submitted successfully!");
            document.getElementById("carer-form").reset(); // Reset form after submission
        } else {
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

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });
});
