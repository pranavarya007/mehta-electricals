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
      ${type === "success" ? "bottom-4" : "bottom-4"}`}
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

  // Replace this with your Google Form URL
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw379QZ6BVu4BqjSnL6zW22jnd93qSd4Sd-PaTlNYUwEHU8eOd6eghZRAJwgthYJbMa/exec";

  // Map your form fields to Google Form field IDs
  const GOOGLE_FORM_FIELD_IDS = {
    name: "entry.1059879723",
    email: "entry.521178433",
    company: "entry.827960070",
    phone: "entry.561567487",
    message: "entry.748942149",
  };

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
      // Submit to Google Apps Script
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

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
          Let&apos;s work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
