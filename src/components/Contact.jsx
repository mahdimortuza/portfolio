import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const successMessage = "Message sent successfully 😊";
  const failMessage = "Failed to send message 😞";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_loy0dzi",
        "template_lqzb5bt",
        form.current,
        "sJWJP6mnHBszRsI9Q"
      )
      .then(
        (result) => {
          if (result) {
            window.alert(successMessage);
          }
        },
        (error) => {
          if (error) {
            window.alert(failMessage);
          }
        }
      );
  };

  return (
    <div
      name="contact"
      className="bg-[#FEFAF6] max-w-[1350px] mx-auto flex flex-col md:flex-row md:justify-between items-center md:px-48 pt-[50px] md:pt-[68px] px-4"
    >
      <div>
        <h3 className="text-[#3D434D]  font-raleway text-[20px] md:text-[24px] font-semibold leading-[32px]">
          Mail me
        </h3>
        <p className="text-[#222A35] text-[18px] md:text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          mahdi.mortuza1@gmail.com
        </p>
        <h3 className="text-[#3D434D]  font-raleway text-[20px] md:text-[24px] font-semibold leading-[32px] mt-[8px] md:mt-[44px]">
          Contact me
        </h3>
        <p className="text-[#222A35] text-[18px] md:text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          +880 1521549150
        </p>
        <h3 className="text-[#3D434D]  font-raleway text-[20px] md:text-[24px] font-semibold leading-[32px] mt-[8px] md:mt-[44px]">
          Location
        </h3>
        <p className="text-[#222A35] text-[18px] md:text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          Free School Street, <br />
          Dhaka 1205, Bangladesh
        </p>
      </div>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-[350px]  md:w-[448px]  p-5 bg-[#EEEAE5] rounded-[8px] mt-[50px] md:mt-[0px]"
        >
          <input
            type="text"
            className="text-[#132238] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white w-full rounded-[6px]"
            placeholder="Your Name*"
            name="from_name"
          />
          <input
            type="email"
            className="text-[#132238] mt-[10px] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white w-full rounded-[6px]"
            placeholder="Your Email*"
            name="from_email"
          />
          <textarea
            cols="50"
            type="text"
            className="text-[#132238] mt-[10px] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white rounded-[6px]"
            placeholder="About you"
            name="message"
          />
          <input
            className="bg-gradient-to-r from-[#75B4F1] to-[#A573F0] rounded-[6px] text-white mt-[10px] py-1 font-normal leading-8 font-raleway text-[16px]"
            type="submit"
            value="Send"
          />
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Contact;
