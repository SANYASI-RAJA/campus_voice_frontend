// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {message} from "antd"
// import {useLocation} from "react-router-dom"

// const SignUp = ({token}) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     password: "",
//     confirmPassword: "",
//     role: "", // Add more fields as needed
//     serviceProviderRole:""
//   });
//   const [loading, setLoading] = useState(false);
//   const navigator = useNavigate();
  
//   // console.log("New Token:", token);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     console.log(formData)
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await axios.post("http://localhost:4000/api/v1/auth/addnewuser", formData,
//         {
//           headers:{
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       console.log(response.data)
//       if (response.data.success) {
//         setLoading(false);
//         // Signup successful, redirect to login page
//         navigator("/");
//         // Show success toast
//         message.success("New User Added Successfully")
//       } else {
//         setLoading(false);
//         // Handle signup failure (show error message)
//         message.error(message);
//       }
//     } catch (error) {
//       console.error("Error signing up:", error);
//       // Handle network errors or other issues
//       message.error("Error occurred while adding new user");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       <h2>Add New User</h2>
//       <form className="flex flex-col" onSubmit={handleSubmit}>
//         {/* Add input fields for name, email, password, role, etc. */}
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input 
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />

//         <input 
//           type="text"
//           name="contactNumber"
//           value={formData.contactNumber}
//           onChange={handleChange}
//           placeholder="Conatct Number"
//           required
//         />
//         <input 
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <input 
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm Password"
//           required
//         />
        
//         <select 
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Role</option>
//           <option value="Admin">Admin</option>
//           <option value="ServiceProvider">Service Provider</option>
//         </select>
//         {
//           formData.role === "ServiceProvider" &&
//           <select name="serviceProviderRole" onChange={handleChange} value={formData.serviceProviderRole}>
//             <option>Select Service Provider Role</option>
//             <option value="Maintenance">Maintenance</option>
//             <option value="Safety and Security">Safety and Security</option>
//             <option value="Food">Food</option>
//           </select>
//         }
//         {/* <input 
//           type="text"
//           name="otp"
//           value={formData.otp}
//           onChange={handleChange}
//           placeholder="OTP"
//           required
//         /> */}


//         {/* Add more input fields as needed */}
//         <button type="submit">Add New User</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useLocation } from "react-router-dom";

const SignUp = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
    serviceProviderRole: ""
  });
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://campus-voice-backend.onrender.com/api/v1/auth/addnewuser",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.data.success) {
        setLoading(false);
        navigator("/");
        message.success("New User Added Successfully");
      } else {
        setLoading(false);
        message.error("Failed to add new user");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      message.error("Error occurred while adding new user");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto m-8 p-6 bg-slate-100 rounded-lg shadow-lg">
    <div className="b">
      <h2 className="text-3xl font-semibold text-center text-lime-600 mb-6">Add New User</h2>
    </div>
  
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
        placeholder="Contact Number"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>
    <div className="mb-4">
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="" disabled>Select Role</option>
        <option value="Admin">Admin</option>
        <option value="ServiceProvider">Service Provider</option>
      </select>
    </div>
    {formData.role === "ServiceProvider" && (
      <div className="mb-4">
        <select
          name="serviceProviderRole"
          onChange={handleChange}
          value={formData.serviceProviderRole}
          className="w-full p-3 border border-gray-300 text-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled>Select Service Provider Role</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Safety and Security">Safety and Security</option>
          <option value="Food">Food</option>
        </select>
      </div>
    )}
    <div className="mb-6">
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
      >
        {loading ? "Adding..." : "Add New User"}
      </button>
    </div>
  </form>
</div>


  );
};

export default SignUp;
