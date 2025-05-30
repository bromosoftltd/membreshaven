'use client'
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { GoArrowUpRight } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { formatDate } from "@/utils/helpers";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    emailjs
      .send(
        'service_oj3lnm3',
        'template_dcgtbyp',
        {...data, date: formatDate(data.date)},
        'S0r3eXvY_bxilRGVL'
      )
      .then(() => {
        setLoading(false);
        reset(); // Reset form after successful submission
        toast.success("Sent successfully!", {
          style:{
            fontSize: '14px'
          }
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setLoading(false);
        toast.error("Something went wrong. Please try again later!!", {
          style:{
            fontSize: '13px'
          }
        });
      });
  };

  return (
    <div
      id="contact"
      className="w-full flex gap-6 lg:p-10 xl:min-h-[80vh] min-h-[60vh]"
    >
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="xl:w-1/2 lg:w-2/5 xl:min-h-[80vh] lg:flex hidden min-h-[60vh] rounded-3xl bg-[url(https://firebasestorage.googleapis.com/v0/b/beiystar.appspot.com/o/images%2Fcontact-bg.webp?alt=media&token=3e2d8e34-a740-4cfd-b03e-3aceb36b1902)] bg-[top_center] bg-cover"></div>
      <div className="xl:w-1/2 lg:w-3/5 w-full xl:min-h-[80vh] min-h-[60vh] lg:rounded-3xl flex flex-col p-1 xl:pl-12 lg:pl-10 md:pl-6 max-xl:pb-4 dark:bg-[#28282A] bg-[#D9A74A]">
        <h1 className="lg:p-[6px] p-2 font-[500] mt-10 text-gray-700 uppercase sm:text-start text-center bg-white w-max lg:text-[10px] text-lg rounded-full">
          Appointment
        </h1>
        <h3 className="text-white md:text-6xl sm:text-5xl text-4xl mb-3 md:text-start text-center mt-12 font-semibold">
          We’re a Spa & Wellness Center
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex sm:gap-3 flex-col xl:p-2"
        >
          <div className="flex flex-col w-[95%]">
            <textarea
              className="w-full text-black mb-3 m-auto bg-white placeholder:text-gray-600 rounded-2xl outline-none resize-none p-3 h-32"
              placeholder="Write a message"
              {...register("message", {
                required: "Please write something for us",
                minLength: {
                  value: 20,
                  message: "the message should contain atleast 20 characters",
                },
              })}
            ></textarea>
            {errors.message && (
              <span className="block self-center text-center w-max font-semibold  text-sm mt-1 mb-2 p-1 rounded-md bg-white dark:bg-transparent text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="m-3 ml-0 flex sm:flex-row flex-col sm:gap-0 gap-7 sm:items-start items-center  w-full  justify-evenly">
            <div className="flex flex-col w-[95%] sm:w-1/2">
              <input
                className="p-4 bg-white placeholder:text-gray-600 text-black text-sm rounded-xl border-none outline-none"
                type="text"
                placeholder="Full name *"
                {...register("user_name", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "name should have atleast 3 characters",
                  },
                })}
              />
              {errors.user_name && (
                <span className="block self-center text-center w-max font-semibold  text-sm mt-1 mb-2 p-1 rounded-md bg-white dark:bg-transparent text-red-500">
                  {errors.user_name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-[95%] sm:w-2/5">
              <input
                className="p-4 text-sm bg-white text-black placeholder:text-gray-600 rounded-xl border-none outline-none"
                type="email"
                placeholder="Email address *"
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.user_email && (
                <span className="block self-center text-center w-max font-semibold  text-sm mt-1 mb-2 p-1 rounded-md bg-white dark:bg-transparent text-red-500">
                  {errors.user_email.message}
                </span>
              )}
            </div>
          </div>

          <div className="m-3 ml-0 flex sm:flex-row flex-col sm:gap-0 gap-7 sm:items-start items-center w-full justify-evenly">
            <div className="flex flex-col w-[95%] sm:w-2/5">
              <select
                className="p-4 bg-white text-black text-sm rounded-xl border-none outline-none"
                {...register("service", {
                  required: "Please select a service",
                })}
              >
                <option className="text-black" value="">Available services</option>
                <option value="Sauna">Sauna</option>
                <option value="Steam Bath">Steam Bath</option>
                <option value="Waxing">Waxing</option>
                <option value="Body-Massage">Body Massage</option>
                <option value="Body Scrubbing">Body Scrubbing</option>
                <option value="Full Facial">Full Facial</option>
                <option value="Dying/Shampoo">Dying/Shampoo</option>
                <option value="Pedicure/Manicure">Pedicure/Manicure</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Nail Art">Nail Art</option>
                <option value="Dreadlocks and Retouch">
                  DreadLocks and Retouch
                </option>
              </select>
              {errors.service && (
                <span className="block self-center text-center w-max font-semibold  text-sm mt-1 mb-2 p-1 rounded-md bg-white dark:bg-transparent text-red-500">
                  {errors.service.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-[95%] sm:w-2/5">
              <input
                className="p-4 text-sm text-black bg-white placeholder:text-gray-600 rounded-xl border-none outline-none"
                type="datetime-local"
                {...register("date", {
                  required: "Please select a date",
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    if (selectedDate < today) {
                      return "Selected date cannot be in the past";
                    }
                    return true;
                  },
                })}
              />
              {errors.date && (
                <span className="block self-center text-center w-max font-semibold  text-sm mt-1 mb-2 p-1 rounded-md bg-white dark:bg-transparent text-red-500">
                  {errors.date.message}
                </span>
              )}
            </div>
          </div>

          {loading ? (
            <button
              type="button"
              className="bg-[#18181B] w-max rounded-full dark:bg-[#D9A74A] dark:hover:text-[#18181B] dark:hover:bg-white text-white mt-4 flex gap-1 items-center justify-evenly cursor-not-allowed p-2"
              disabled
            >
              <svg className="animate-spin h-6 w-6 rounded-full border-4 border-r-[#D9A74A] border-t-[#D9A74A]"></svg>
              Sending...
            </button>
          ) : (
            <button className="bg-[#18181B] dark:bg-[#D9A74A] dark:hover:text-[#18181B] dark:hover:bg-white hover:bg-white hover:text-[#0A132E] transition duration-300 ease-linear self-start ml-10 mt-1 p-3 flex items-center rounded-full gap-2 text-center cursor-pointer text-white font-semibold text-lg">
              Send Message
              <GoArrowUpRight />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
