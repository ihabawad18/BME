import React from "react";
import "./Contact.css";
const Contact = () => {
  const clearFields = () => {
    // Open the mailto link in a new window
    const mailtoLink = `mailto:info@BME.com?subject=${
      document.getElementById("company-name").value
    }&body=${document.getElementById("message").value}`;
    window.open(mailtoLink, "_blank");

    // Refresh the page after a short delay (adjust as needed)
    setTimeout(() => {
      window.location.reload();
    }, 1000); // 1000 milliseconds = 1 second
  };

  return (
    <div className="contact-section">
      <h1 className="contact-header">Contact Us</h1>
      <p className="contact-paragraph">
        Your inquiries are important to us. For questions regarding our
        consulting services, assistance with a specific query, or to schedule a
        meeting with our experts, please use the contact details provided below.
        Our dedicated team ensures that every communication is handled with the
        utmost confidentiality and professionalism.
      </p>
      <form
        className="contact-form"
        action="mailto:recipient@example.com"
        method="post"
        encType="text/plain"
      >
        <div className="custom-row">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <label>Name</label>
                <input name="name" id="name" type="text" />
              </div>
              <div className="col-md-6">
                <label>Company Name</label>
                <input name="company-name" id="company-name" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
                <input name="email" id="email" type="text" />
              </div>
              <div className="col-md-6">
                <label>Message</label>
                <input name="message" id="message" type="text" />
              </div>
            </div>
          </div>
          <button type="button" onClick={clearFields}>
            Send
          </button>
        </div>
      </form>
      <div className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="flexing">
                <i className="fas fa-phone"></i>
                <h2>+971 768 987 098</h2>
              </div>
              <div className="flexing">
                <i className="fas fa-envelope"></i>
                <h2>info@BME.com</h2>
              </div>
              <p>
                Business Center 1, The Meydan Hotel, Nad Al Sheba, Dubai, UAE
                P.O.Box. 9305
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
