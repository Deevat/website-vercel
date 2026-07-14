(function () {
  emailjs.init("4yXC2v-FEQpC1HVoB");
})();


// 2. Handle the Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const btn = document.getElementById("submit-btn");
      const statusMsg = document.getElementById("form-status");

      // Change button state to loading
      btn.textContent = "Sending...";
      btn.disabled = true;

      const serviceID = "Deevat";
      const templateID = "template_rod9d8g";

      // Grab values from your input fields
      const firstName = document.getElementById("user_name").value;
      const surname = document.getElementById("user_surname").value;
      const userEmail = document.getElementById("user_email").value;
      const userMessage = document.getElementById("message").value;


      // Map them directly to the keys your EmailJS template expects: name, email, content
      const templateParams = {
        name: `${firstName} ${surname}`, // Combines first name and surname
        email: userEmail,
        content: userMessage,
      };

      // Send template parameters using EmailJS
      emailjs
        .send(serviceID, templateID, templateParams)
        .then(() => {
          btn.textContent = "Send Message";
          btn.disabled = false;

          statusMsg.className = "form-status success";
          statusMsg.textContent =
            "Thank you! Your message has been successfully sent.";

          // Reset the form fields
          contactForm.reset();
        })
        .catch((err) => {
          btn.textContent = "Send Message";
          btn.disabled = false;

          statusMsg.className = "form-status error";
          statusMsg.textContent = "Something went wrong. Please try again.";
          console.error("EmailJS Error:", err);
        });
    });
  }
});
