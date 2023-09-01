"use client";
import DOMPurify from "dompurify";
import React, { useState } from "react";
import classes from "../styles/form.module.css";
import { sendEmail } from "../utils/sendEmail";

const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    description: "",
    explain: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const createHTML = (textInput: string) => {
    const sanitizedHTML = DOMPurify.sanitize(textInput);
    console.log("data >>>> ", sanitizedHTML);
    return sanitizedHTML;
  };
  const handleChange = (event) => {
    const value = createHTML(event.target.value);
    setFormData({ ...formData, [event.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit", formData);
    // sendEmail(formData);
    setFormData({
      name: "",
      subject: "",
      message: "",
      description: "",
      explain: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
  };
  return (
    <form
      className="block w-[50%] m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  justify-center items-center"
      onSubmit={submitHandler}
    >
      <div className={`${classes.form__group}`}>
        <label htmlFor="subjectDropdown">Select an option:</label>
        <select
          name="subject"
          id="subjectDropdown"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Physics">Physics</option>
        </select>
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option1"
          value={formData.option1}
          onChange={handleChange}
          placeholder="option1"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option2"
          value={formData.option2}
          onChange={handleChange}
          placeholder="option2"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option3"
          value={formData.option3}
          onChange={handleChange}
          placeholder="option3"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option4"
          value={formData.option4}
          onChange={handleChange}
          placeholder="option4"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={1}
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          placeholder="answer"
          required
        />
      </div>

      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          name="explain"
          value={formData.explain}
          onChange={handleChange}
          placeholder="Explaination"
          required
        />
      </div>

      <button className="text-gray-500" type="submit">
        Send
      </button>
      <div dangerouslySetInnerHTML={{ __html: formData.description }}></div>
      {formData && formData.subject && <p>You selected: {formData.subject}</p>}
    </form>
  );
};

export default DetailForm;
// function DetailForm() {
//   const [textInput, setTextInput] = useState("");
//   const [htmlOutput, setHtmlOutput] = useState("");

//   const createHTML = () => {
//     const sanitizedHTML = DOMPurify.sanitize(textInput);
//     console.log("data >>>> ", sanitizedHTML);

//     setHtmlOutput(sanitizedHTML);
//   };

//   return (
//     <div>
//       <form>
//         <label htmlFor="textInput">Enter Text:</label>
//         <input
//           type="text"
//           id="textInput"
//           value={textInput}
//           onChange={(e) => setTextInput(e.target.value)}
//         />
//         <button type="button" onClick={createHTML}>
//           Create HTML
//         </button>
//       </form>
//       <div dangerouslySetInnerHTML={{ __html: htmlOutput }}></div>
//     </div>
//   );
// }

// export default DetailForm;
