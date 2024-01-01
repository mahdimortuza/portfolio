import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="bg-[#FEFAF6] max-w-[1350px] mx-auto flex justify-between px-48 pt-[68px]">
      <div>
        <h3 className="text-[#3D434D]  font-raleway text-[24px] font-semibold leading-[32px]">
          Mail me
        </h3>
        <p className="text-[#222A35] text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          mahdi.mortuza1@gmail.com
        </p>
        <h3 className="text-[#3D434D]  font-raleway text-[24px] font-semibold leading-[32px] mt-[44px]">
          Contact me
        </h3>
        <p className="text-[#222A35] text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          +880 1521549150
        </p>
        <h3 className="text-[#3D434D]  font-raleway text-[24px] font-semibold leading-[32px] mt-[44px]">
          Location
        </h3>
        <p className="text-[#222A35] text-[22px] font-normal leading-6 font-raleway mt-[2px]">
          Free School Street, <br />
          Dhaka 1205, Bangladesh
        </p>
      </div>
      <div>
        <form
          className="flex flex-col w-[448px] h-[328px] p-5 bg-[#EEEAE5] rounded-[8px] "
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        >
          <input
            className="text-[#132238] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white w-full rounded-[6px]"
            {...register("firstName")}
            placeholder="Your Name*"
          />
          <input
            className="text-[#132238] mt-[10px] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white w-full rounded-[6px]"
            {...register("firstName")}
            placeholder="Your Name*"
          />
          <textarea
            cols="50"
            className="text-[#132238] mt-[10px] font-normal leading-8 font-raleway text-[16px] px-4 py-1 bg-white w-full rounded-[6px]"
            {...register("aboutYou")}
            placeholder="About you"
          />
          <p>{data}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
