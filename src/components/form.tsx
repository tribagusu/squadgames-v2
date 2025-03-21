"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const notify = () =>
    toast.info("Message sent! \r\n We will reach you back shortly");
  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_e4nmbic",
        "template_5479xed",
        form.current,
        "B1eGvn1cD85JEM9_C"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setIsLoading(false);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
        {/* ===== first line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Full Name*</label>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>WhatsApp Number*</label>
            <input
              type="text"
              name="whatsapp_number"
              placeholder="WhatsApp Number"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
        </div>

        {/* ===== second line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Email Address*</label>
            <input
              type="text"
              name="email_address"
              placeholder="Email Addres"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Role*</label>
            <input
              type="text"
              name="role"
              placeholder="What's your current role"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
        </div>

        {/* ===== third line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Company Name*</label>
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Company Site*</label>
            <input
              type="text"
              name="company_site"
              placeholder="Link to your company site"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
        </div>

        {/* ===== fourth line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Number of employee*</label>
            <select
              name="number_of_employee"
              id="number_of_employee"
              className="input"
              required
              disabled={isLoading ? true : false}
            >
              <option value="">Select your number</option>
              <option value="1-10">1-10</option>
              <option value="10-50">10-50</option>
              <option value="50-100">50-100</option>
              <option value=">100">&gt;100</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Program*</label>
            <select
              name="program"
              id="program"
              className="input"
              required
              disabled={isLoading ? true : false}
            >
              <option value="">Select your program</option>
              <option value="Softskill Training">Softskill Training</option>
              <option value="In Venue Team Building">
                In Venue Team Building
              </option>
              <option value="Outing Specials">Outing Specials</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Family Gathering">Family Gathering</option>
              <option value="Retirement Preparation">
                Retirement Preparation
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn-md-orange"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick={false}
        hideProgressBar={true}
        theme="colored"
      />
    </>
  );
}
