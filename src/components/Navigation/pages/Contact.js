import React, { useState } from "react";
import { validateEmail } from "../../../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };
 
  return (
    <Form>
      <h1 data-testid="h1tag" className="text-center">
        Contact Me
      </h1>

      <form id="contact-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupName">
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label htmlFor="email">Email Address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGroupMessage">
          <Form.Label htmlFor="message">Message:</Form.Label>
          <Form.Control as='textarea'
            name="message"
            rows={5}
            defaultValue={message}
            onBlur={handleChange}
          />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button data-testid="button" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
