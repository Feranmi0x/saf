"use client";

import { useState } from "react";
import { FiLock } from "react-icons/fi";
import DonationForm from "./donationform"; // <-- import it here

export default function Donation() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<string | number>(10000);
  const [otherAmount, setOtherAmount] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  const getDescription = () =>
    frequency === "once"
      ? "Choose an amount to give once"
      : "Choose an amount to give per month";

  const displayAmount = (amt: string | number) => {
    if (amt === "Other") return "";
    return frequency === "monthly" ? `₦${amt.toLocaleString()}/mo` : `₦${amt.toLocaleString()}`;
  };

  if (showForm) {
    return (
      <DonationForm
        amount={amount === "Other" ? otherAmount : amount}
        frequency={frequency}
        onBack={() => setShowForm(false)}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 max-w-[400px]">
      {/* Frequency */}
      <div className="flex mb-4 max-w-[400px] w-full">
        <button
          className={`px-4 py-2 w-1/2 rounded-l text-[14px] tracking-wide transition ${
            frequency === "once" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFrequency("once")}
        >
          GIVE ONCE
        </button>
        <button
          className={`px-4 py-2 w-1/2 rounded-r text-[14px] tracking-wide transition ${
            frequency === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFrequency("monthly")}
        >
          MONTHLY
        </button>
      </div>

      {/* Donation Card */}
      <div className="max-w-[400px] w-full bg-white p-4 rounded-sm border-gray-300 border">
        <p className="mb-4 p-4 bg-gray-100 rounded flex justify-center items-center tracking-wider text-[18px]">{getDescription()}</p>

        {/* Donation Amounts */}
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {[10000, 20000, 50000].map((amt) => (
            <button
              key={amt}
              className={`px-2 py-2 w-[30%] rounded font-semibold transition border ${
                amount === amt
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
              onClick={() => setAmount(amt)}
            >
              {displayAmount(amt)}
            </button>
          ))}

          <div className="flex gap-4 w-full justify-center">
            <button
              className={`px-2 py-2 w-[30%] rounded font-semibold transition border ${
                amount === 100000
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
              onClick={() => setAmount(100000)}
            >
              {displayAmount(100000)}
            </button>

            {amount === "Other" ? (
  <input
    type="text"
    placeholder={frequency === "monthly" ? "₦ /mo" : "₦"}
    className="px-4 py-2 w-[65%] font-bold text-gray-700 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
    value={otherAmount ? `₦${Number(otherAmount.replace(/\D/g, "") || "0").toLocaleString()}` : ""}
    onChange={(e) => {
      const raw = e.target.value.replace(/\D/g, ""); // remove non-digits
      setOtherAmount(raw);
    }}
  />
) : (
  <button
    className={`px-4 py-2 w-[65%] font-bold text-gray-700 rounded transition border ${
      amount === "Other"
        ? "bg-blue-600 text-white border-blue-600"
        : "bg-gray-100 text-gray-700 border-gray-300"
    }`}
    onClick={() => setAmount("Other")}
  >
    Other amount
  </button>
)}          </div>

          <button
            className={`px-4 py-2 w-full mt-4 rounded font-semibold transition border ${
              amount === "Sponsor"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
            onClick={() => setAmount("Sponsor")}
          >
            Sponsor a child education
          </button>
        </div>

        {/* Join Today Button */}
        <button
          className="w-full bg-green-600 text-white py-3 rounded font-normal text-[14px] hover:bg-green-500 transition mb-2 tracking-widest"
          onClick={() => setShowForm(true)}
        >
          JOIN TODAY
        </button>

        <hr className="border-t-2 border-dotted border-gray-300 my-2" />

       <p className="text-[14px] font-bold text-gray-900 text-left mb-4 mt-6">
  Your{" "}
  {amount === "Other"
    ? `₦${Number(otherAmount.replace(/\D/g, "") || "0").toLocaleString()}`
    : typeof amount === "number"
    ? `₦${amount.toLocaleString()}`
    : ""}{" "}
  donation can make{" "}
  {(() => {
    const value =
      amount === "Other"
        ? Number(otherAmount.replace(/\D/g, "") || "0")
        : typeof amount === "number"
        ? amount
        : 0;

    return value > 50000 ? "many families happy" : "5 families happy";
  })()}
  . 100 percent funds goes to the charity.
</p>
      </div>

<div className="flex font-bold justify-center lg:text-white text-[12px] mt-2 w-full leading-tight">
  <p className="">
    <span className="flex items-center gap-1">
      <FiLock className="text-gray-500 lg:text-white" />
      Secure Payment · This site is protected by reCAPTCHA 
    </span>and the Google Privacy Policy and Terms of Service apply.
  </p>
</div>
    </div>
  );
}