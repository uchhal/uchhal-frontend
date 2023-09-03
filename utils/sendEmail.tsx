import emailjs from "emailjs-com";
import emailConfigCreds from "@/config/config.json";
export const sendEmail = (formData:any) => {
  emailjs
    .send(
      emailConfigCreds.service,
      emailConfigCreds.template,
      formData,
      emailConfigCreds.key
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
};
