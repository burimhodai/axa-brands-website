import emailjs from "@emailjs/browser";

export const sendEmail = (
  e: React.FormEvent<HTMLFormElement>,
  form: HTMLFormElement
): Promise<void> => {
  return emailjs
    .sendForm("contact_service", "templateID", form, {
      publicKey: "5u4KuB6wlyBAKSjTu",
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
        throw error;
      }
    );
};
