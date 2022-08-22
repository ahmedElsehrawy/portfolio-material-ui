import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Button, IconButton } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CloseIcon from "@material-ui/icons/Close";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessStatus, setShowSuccessStatus] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3hoy62h",
        "template_949lpzd",
        e.target,
        "user_7QScxtplHbHBVPI4rrHHj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 2000);
  };

  const showSuccess = () => {
    setTimeout(() => {
      setShowSuccessStatus(true);
    }, 2000);
    setTimeout(() => {
      setShowSuccessStatus(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <form onSubmit={sendMail}>
        <div className="inputs">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            id=""
            cols="30"
            rows="8"
            name="message"
            placeholder="Write the message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={showSuccess}
        >
          Send
        </Button>
      </form>
      {showSuccessStatus && (
        <div className="alert">
          <CheckCircleOutlineIcon />
          <p>Your Message has been sent Successfully</p>
          <IconButton color="inherit" size="small">
            <CloseIcon onClick={() => setShowSuccessStatus(false)} />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Contact;
