import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required!`);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("form", formState);
    }
  };

  return (
    <div>
      <h1
        data-testid="h1tag"
        className="text-center"
        style={{
          backgroundColor: "#122240",
          color: "#c0a98e",
          padding: "20px",
        }}
      >
        Contact Me
      </h1>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#122240",
          color: "#c0a98e",
        }}
      >
        <div
          style={{
            backgroundColor: "#122240",
            color: "#c0a98e",
            padding: "20px",
          }}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div
          style={{
            backgroundColor: "#122240",
            color: "#c0a98e",
            padding: "20px",
          }}
        >
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div
          style={{
            backgroundColor: "#122240",
            color: "#c0a98e",
            padding: "20px",
          }}
        >
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div className="ml-4 mb-4">
            <p className="error-text text-capitalize">{errorMessage}</p>
          </div>
        )}
        <button
          className="ml-4 mb-4"
          data-testid="button"
          type="submit"
          style={{
            backgroundColor: "#be8180",
            color: "#122240",
            padding: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
