import React, { useState } from 'react';
import axios from 'axios';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can implement your logic for sending the form data
    console.log(formData);
    const response = await axios.post("https://campus-voice-backend.onrender.com/api/v1/contact/contactus",formData)
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-stone-100 border-2 border-s-4 border-l-indigo-500 p-10 bg-white rounded-lg shadow-xl transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-8 text-lime-500 text-center">Get In Touch</h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="relative">
      <label htmlFor="name" className="block text-sm text-blue-600 font-medium text-gray-700">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
        placeholder="Your full name"
        required
      />
    </div>

    <div className="relative">
      <label htmlFor="email" className="block text-sm text-blue-600 font-medium text-gray-700">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
        placeholder="Your email address"
        required
      />
    </div>

    <div className="relative">
      <label htmlFor="message" className="block text-sm text-blue-600 font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
        placeholder="Your message..."
        rows="5"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 ease-in-out"
    >
      Send Message
    </button>
  </form>
</div>

  );
};

export default ContactUs;
