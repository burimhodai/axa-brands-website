import emailjs from "@emailjs/browser";

export const sendEmail = (form: HTMLFormElement): Promise<void> => {
  return emailjs
    .sendForm("contact_service", "templateID", form, {
      publicKey: "5u4KuB6wlyBAKSjTu",
    })
    .then(
      () => {
        console.log("Email successfully sent");
      },
      (error) => {
        console.error("Email was not sent", error.text);
        throw error;
      }
    );
};
