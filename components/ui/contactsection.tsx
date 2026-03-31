"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  month: string;
  day: string;
  year: string;
  pledgeReminder: boolean;
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    month: "",
    day: "",
    year: "",
    pledgeReminder: false,
  });

  const [status, setStatus] = useState<"idle" | "success" | "duplicate" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? (e.target instanceof HTMLInputElement ? e.target.checked : false)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.duplicate) {
          setStatus("duplicate");
        } else {
          setStatus("success");
        }

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          month: "",
          day: "",
          year: "",
          pledgeReminder: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  return (
    <section id="contact" className="w-full bg-[#90e0ef]/5 lg:px-[100px] px-8 mb-10">
      <div className="bg-white/60 rounded-lg p-4 px-2 lg:px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-16">
        {/* Left Section */}
        <div className="flex lg:flex-row flex-col lg:gap-5 items-center lg:items-start text-center lg:text-left max-w-lg">
          <div className="w-[70px] h-[70px] relative mb-6 lg:mb-8">
            <Image
              src="/saflogo.jpg"
              alt="Impact"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-normal text-gray-800">
              Add Impact To your inbox
            </h2>
            <p className="text-gray-800 font-bold mt-3 text-lg">
              Get our emails to stay in the know.
            </p>
          </div>
        </div>

        {/* Right Section (Form or Message) */}
        <div className="p-6 lg:p-10 max-w-[450px] text-[12px] lg:mr-[80px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 w-full"
              >
                {/* First Name & Last Name */}
                <div className="lg:flex mt-1 gap-3 w-full">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1 font-medium mt-4">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full border font-bold text-[17px] border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1 font-medium mt-4">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full font-bold text-[17px] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1 font-medium mt-[-10px]">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full font-bold text-[17px] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Birthday */}
                <div>
                  <label className="mt-[-10px] block text-gray-700 mb-1 font-medium">
                    BIRTHDAY (OPTIONAL)
                  </label>

                  <div className="flex text-gray-400">
                    <div className="relative w-1/3">
                      <select
                        name="month"
                        value={form.month}
                        onChange={handleChange}
                        className="appearance-none font-bold text-[17px] w-full border border-gray-300 rounded-tl-sm rounded-bl-sm px-2 py-2 pr-8 focus:outline-none focus:border-blue-500"
                      >
                        <option value="">MM</option>
                        {months.map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <FaCaretDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="relative w-1/3 border-l-[0.5px] border-gray-300">
                      <select
                        name="day"
                        value={form.day}
                        onChange={handleChange}
                        className="appearance-none font-bold text-[17px] w-full border border-gray-300 px-2 py-2 pr-8 focus:outline-none focus:border-blue-500"
                      >
                        <option value="">DD</option>
                        {days.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                      <FaCaretDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="relative w-1/3 border-l-[0.5px] border-gray-300">
                      <select
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        className="appearance-none font-bold text-[17px] w-full border border-gray-300 rounded-tr-[4px] rounded-br-[4px] px-2 py-2 pr-8 focus:outline-none focus:border-blue-500"
                      >
                        <option value="">YYYY</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <FaCaretDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="pledgeReminder"
                    checked={form.pledgeReminder}
                    onChange={handleChange}
                    className="mt-[0px] h-7 w-6 mr-3"
                  />
                  <label className="leading-tight text-gray-400/90 text-[12px] tracking-wide max-w-[50ch]">
                    SET A REMINDER TO PLEDGE MY BIRTHDAY AND HELP CHANGE LIVES
                  </label>
                </div>

                {/* Submit Button with Loading */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-[-10px] w-full text-[16px] ${
                    isSubmitting
                      ? "bg-blue-300 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-400"
                  } text-white tracking-widest py-3 rounded transition`}
                >
                  {isSubmitting ? "Submitting..." : "SUBSCRIBE"}
                </button>
              </motion.form>
            )}

            {status !== "idle" && (
              <motion.div
                key="message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="text-center py-10"
              >
                {status === "success" && (
                  <>
                    <h3 className="text-2xl font-normal text-blue-600 mb-3">Thank You!</h3>
                    <p className="text-gray-700 font-bold text-[17px]">
                      You’ve successfully subscribed to updates from Sam Anisulowo Foundation.
                    </p>
                  </>
                )}
                {status === "duplicate" && (
                  <>
                    <h3 className="text-2xl font-normal text-yellow-600 mb-3">
                      You’re Already Subscribed!
                    </h3>
                    <p className="text-gray-700 font-bold">
                      Thank you for staying connected with Sam Anisulowo Foundation.
                    </p>
                  </>
                )}
                {status === "error" && (
                  <>
                    <h3 className="text-2xl font-bold text-red-600 mb-3">Oops!</h3>
                    <p className="text-gray-700">Something went wrong. Please try again.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Try Again
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}