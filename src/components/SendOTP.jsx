import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Button, message, Spin } from "antd";
import sendotp from "./../assets/image/otpsend.jpg";
import {jwtDecode} from "jwt-decode"

const SendOTP = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enter");
    try {
      setLoading(true);
      const response = await axios.post(
        "https://campus-voice-backend.onrender.com/api/v1/auth/sendotp",
        { email }
      );
      setLoading(false);
      const { success } = response.data;
      if (success) {
        // navigate to signup page after OTP is sent
        navigator("/signup", { state: { email: email } });
        // Show success toast if OTP is sent successfully
        message.success("OTP sent successfully");
      } else {
        // Show error toast if OTP sending fails
        setLoading(false);
        message.error("Error occured");
      }
    } catch (error) {
      // Show error toast for network errors or other issues
      console.error("Error Sending OTP: ");
      setLoading(false);
      // message.error("Error Occured");

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // Set the backend error message if available
        message.error(error.response.data.message);
      } else {
        console.error("API: Error Sending OTP: ", error);
      }
    }
  };

  return (
    <div className="mt-3 w-full h-[88vh] flex flex-col items-center px-1 gap-5 md:gap-16 lg:flex-row lg:gap-2 md:px-0 lg:px-5">
    <div className="absolute top-2">{loading && <Spin />}</div>
  
    
    <div className="flex flex-col items-center gap-3 w-full lg:w-1/2">
      <div className="flex justify-center">
        <img src={sendotp} alt="" className="rounded-lg w-60 h-60 md:w-[25rem] md:h-[25rem] lg:w-[22rem] lg:h-[22rem] shadow-lg" />
      </div>
      <p className="text-gray-500 text-center md:text-[24px] w-[80%] md:mb-2 lg:w-[80%]">
        We will send you <strong>One Time Password</strong> on your email for verification.
      </p>
    </div>
  
    
    <div className="flex flex-col items-center w-full lg:w-1/2">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[70%] p-5 h-48 bg-stone-100 rounded-lg border-2 border-s-4 border-s-fuchsia-400 shadow-xl flex flex-col items-center"
      >
        <h2 className="text-2xl w-full font-semibold md:text-3xl text-center text-lime-600 mb-4">
          Enter your college email
        </h2>
  
        
        <div className="w-full flex flex-col md:flex-col items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="flex-grow block w-full rounded-lg border py-2 px-4 text-gray-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 transition-all duration-200 shadow-sm sm:text-sm md:text-xl"
            required
          />
  
          <Button
            htmlType="submit"
            type="primary"
            loading={loading}
            className="w-full md:w-auto px-4 pb-8  rounded-lg text-lg font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 ease-in-out"
          >
            Send OTP
          </Button>
        </div>
      </form>
    </div>
  </div>
  

  );
};

export default SendOTP;
