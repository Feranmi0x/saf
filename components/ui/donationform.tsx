"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowRight, FiLock } from "react-icons/fi";
// pages/checkout.js
import PaystackPayment from "../paystack";



interface DonationFormProps {
  amount: string | number;
  frequency: "once" | "monthly";
  onBack: () => void;
}

export default function DonationForm({ amount, frequency, onBack }: DonationFormProps) {

  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPreference, setContactPreference] = useState<{ email: boolean; text: boolean }>({
    email: false,
    text: false,
  });

  const displayAmount = () => {
    if (typeof amount === "number") {
      return frequency === "monthly"
        ? `₦${amount.toLocaleString()} per month`
        : `₦${amount.toLocaleString()}`;
    }
    return amount;
  };

const handleSubmit = async () => {
  try {
    const res = await fetch("/api/donation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        amount,
        frequency,
        contactPreference,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push(`/thank-you?name=${firstName}&amount=${amount}`);
      // Optionally reset fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setContactPreference({ email: false, text: false });
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="max-w-[400px] w-full bg-white p-6 rounded-lg shadow-md">
        {/* Selected Amount */}
        <div className="mb-4 p-4 bg-gray-100 rounded flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600 font-medium">Amount to Donate:</p>
            <p className="font-semibold text-lg">{displayAmount()}</p>
          </div>
          <button
            className="flex items-center underline gap-1 text-blue-600 font-normal hover:underline text-[12px]"
            onClick={onBack}
          >
            EDIT
          </button>
        </div>

        {/* Express Payment */}
        <div className="mb-4">
          <p className="text-[12px] text-gray-600 mb-2 font-medium text-left">EXPRESS PAYMENT METHOD</p>
          <div
            className="w-full bg-black/85 text-white py-3 rounded font-normal flex items-center justify-center gap-2 hover:bg-black/75 transition"
          >
          <PaystackPayment amount={5000} email="customer@example.com" /><FiArrowRight />
          </div>
          <p className="text-sm text-gray-800 mt-2 text-left font-bold">
            or enter your details manually below
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-2 mb-4">
          {/* Name row */}
          <div className="flex gap-3 w-full">
  <div className="flex-1 flex flex-col">
    <label className="mb-1 text-[12px] font-medium text-gray-600 text-left">FIRST NAME</label>
    <input
      type="text"
      className="px-4 py-2 font-bold text-[17px] rounded text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
  </div>

  <div className="flex-1 flex flex-col">
    <label className="mb-1 text-[12px] font-medium text-gray-600 text-left">LAST NAME</label>
    <input
      type="text"
      className="px-4 py-2 font-bold text-[17px] text-gray-600 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  </div>
</div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-[12px] font-medium text-gray-600 text-left">EMAIL</label>
            <input
              type="email"
              className="px-4 py-2 font-bold text-[17px] text-gray-600 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-1 text-[12px] font-medium text-gray-600 text-left">PHONE NUMBER (OPTIONAL)</label>
            <input
              type="number"
              className="px-4 py-2 rounded font-bold text-[17px] text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Contact Preference */}
        <div className="flex gap-3 items-center mb-4">
          <label className="flex items-center gap-2 font-bold">
            <input
              type="checkbox"
              checked={contactPreference.email}
              onChange={(e) =>
                setContactPreference({ ...contactPreference, email: e.target.checked })
              }
              className="accent-blue-600"
            />
            Email
          </label>
          <label className="flex items-center gap-2 font-bold">
            <input
              type="checkbox"
              checked={contactPreference.text}
              onChange={(e) =>
                setContactPreference({ ...contactPreference, text: e.target.checked })
              }
              className="accent-blue-600"
            />
            Text Message
          </label>
        </div>

        {/* Consent Description */}
        <p className="text-xs text-gray-900 mb-4 font-bold leading-tight">
          By clicking Next, you’re submitting your information to Sam Anisulowo Foundation. If you
          have opted to receive text messages, you agree to receive messages such as promotions,
          offers, alerts, and donation requests. Consent is not a condition of purchase.
        </p>

        {/* Submit Button */}
        <button
          className="w-full bg-blue-600 text-white py-3 rounded font-normal hover:bg-blue-500 transition mb-2"
          onClick={handleSubmit}
        >
          NEXT
        </button>

        {/* Secure Payment Notice */}
<div className="flex justify-center text-gray-800 font-bold text-xs mt-2 w-full">
  <p className="leading-tight">
    <span className="flex items-center gap-1">
      <FiLock className="text-gray-700" />
      Secure Payment · This site is protected by reCAPTCHA 
    </span>and the Google Privacy Policy and Terms of Service apply.
  </p>
</div>
      </div>
    </div>
  );
}