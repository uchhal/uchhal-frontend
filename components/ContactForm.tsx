"use client";
import React, { useState } from "react";
import classes from "../styles/form.module.css";
import { sendEmail } from "../utils/sendEmail";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendEmail(formData);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <form
      className="block w-[50%] m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  justify-center items-center"
      onSubmit={submitHandler}
    >
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
      </div>

      <button className="text-gray-500" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
