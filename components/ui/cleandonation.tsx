"use client";

import { useState } from "react";
import DonationForm from "./donationform";

export default function Donation() {
  const [amount, setAmount] = useState<string | number>(10000);
  const [otherAmount, setOtherAmount] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  const displayAmount = (amt: string | number) =>
    typeof amt === "number" ? `₦${amt.toLocaleString()}` : "";

  if (showForm) {
    return (
      <DonationForm
        amount={amount === "Other" ? otherAmount : amount}
        frequency="once"
        onBack={() => setShowForm(false)}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 max-w-[400px]">
      <div className="max-w-[400px] w-full bg-white p-6 rounded-md border border-gray-300 shadow-sm">
        {/* Top Row: 10k, 20k, 50k */}
        <div className="flex justify-between mb-4 gap-2">
          {[10000, 20000, 50000].map((amt) => (
            <button
              key={amt}
              className={`w-[30%] px-2 py-2 rounded font-semibold transition border ${
                amount === amt
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
              onClick={() => setAmount(amt)}
            >
              {displayAmount(amt)}
            </button>
          ))}
        </div>

        {/* Bottom Row: 100k + Other */}
        <div className="flex justify-between gap-2 mb-4">
          <button
            className={`w-[30%] px-2 py-2 rounded font-semibold transition border ${
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
              placeholder="₦"
              className="w-[67%] px-4 py-2 font-bold text-gray-700 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              value={
                otherAmount
                  ? `₦${Number(otherAmount.replace(/\D/g, "") || "0").toLocaleString()}`
                  : ""
              }
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                setOtherAmount(raw);
              }}
            />
          ) : (
            <button
              className={`w-[67%] px-4 py-2 font-bold text-gray-700 rounded transition border ${
                amount === "Other"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
              onClick={() => setAmount("Other")}
            >
              Other amount
            </button>
          )}
        </div>

        {/* Join Button */}
        <button
          className="w-full bg-green-600 text-white py-3 rounded font-normal text-[14px] hover:bg-green-500 transition mb-2 tracking-widest"
          onClick={() => setShowForm(true)}
        >
          JOIN TODAY
        </button>

        <hr className="border-t-2 border-dotted border-gray-300 my-3" />

        <p className="text-[14px] font-semibold text-gray-900 text-center">
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
          . 100% of funds go directly to the charity.
        </p>
      </div>
    </div>
  );
}