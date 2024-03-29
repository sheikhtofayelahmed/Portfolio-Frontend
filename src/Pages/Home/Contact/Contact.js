import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_8bhpjoj",
        "template_8k5t4f9",
        form.current,
        "8oURMztO3Ze7BjGU4"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert('sent')
        },
        (error) => {
          // console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <div className="Contact">
      <div className="contact-details">
        <h1 className="heading">CONTACT ME</h1>
        <p>
          Feel free to contact me to provide some feedback on my projects,
          give me suggestions for new projects, or to just say
          hello! I'm waiting for your HELLO!.
        </p>
        <div className="straight-line"></div>
        <div className="contact-info">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>{" "}
            (+880) 1799 797976
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>{" "}
            tofayel101@proton.me
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>{" "}
            Sylhet, Bangladesh
          </p>
        </div>
      </div>
      <div className="contact-form">
        <h1 className="heading">SAY HELLO</h1>
        <form ref={form} onSubmit={sendEmail} className="form-control">
          <div className="flex flex-col items-start justify-center">
            <input
            name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered input-md w-full max-w-xs my-3 "
            />

            <input
              name="number"
              type="number"
              placeholder="Your Phone"
              className="input input-bordered input-md w-full max-w-xs my-3"
              required
            />

            <textarea
              name="message"
              className="textarea w-80 textarea-bordered my-3 mb-7"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn3">
              Send mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
