
"use client";

// components/ContactForm.jsx
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";

const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed z-50 transform transition-transform duration-300 ease-in-out
      left-1/2 -translate-x-1/2 
      sm:left-auto sm:right-4 sm:translate-x-0
      ${type === "success" ? "top-4" : "top-4"}`}
    >
      <div
        className={`rounded-lg px-6 py-4 shadow-lg w-[calc(100vw-2rem)] sm:w-auto mx-2 sm:mx-0 
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
        text-white flex items-center justify-between`}
      >
        <span className="text-sm sm:text-base">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close notification"
        >
          <span className="text-xl">×</span>
        </button>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

   

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        show: true,
        message: "Please fill in all required fields correctly",
        type: "error",
      });
      return;
    }

    try {
      // Add your form submission logic here
      // await submitForm(formData);

      setToast({
        show: true,
        message: "Message sent successfully! We will get back to you soon.",
        type: "success",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

      // Hide toast after 5 seconds
      setTimeout(() => {
        setToast({ show: false, message: "", type: "" });
      }, 5000);
    } catch (error) {
      setToast({
        show: true,
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <FadeIn>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}

      <form onSubmit={handleSubmit} className="relative">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
    
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
          />
        </div>
        <Button type="submit" className="mt-10">
          Let's work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
