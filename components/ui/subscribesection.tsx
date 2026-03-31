"use client";

import { useState } from "react";

interface SubscribeFormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function SubscribeSectionInline() {
  const [form, setForm] = useState<SubscribeFormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true); // ✅ switch to thank you message
      } else {
        alert(data.error || "Subscription failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full p-5">
      <div className="bg-[#f8eed31c] border border-gray-300 rounded-lg p-5 max-w-4xl mx-auto text-center transition-all duration-500 ease-in-out">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-4 fade-in">
              <h2 className="text-[17px] font-bold text-gray-600 leading-tight">
                Add Impact To Your Inbox
              </h2>
              <p className="text-gray-800 font-normal mt-1 leading-tight mb-[30px]">
                Get our emails to stay in the know.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full fade-in">
              <div className="flex flex-col lg:flex-row items-stretch w-full gap-5 lg:gap-0">
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="font-normal bg-white/60 w-full lg:w-1/4 border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-[#003366] text-gray-700 rounded-none lg:rounded-l text-[18px]"
                />

                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="font-normal bg-white/60 w-full lg:w-1/4 border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-[#003366] text-gray-700 rounded-none border-t text-[18px]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="font-normal bg-white/60 w-full lg:w-1/3 border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-[#003366] text-gray-700 rounded-none border-t text-[18px]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#003366] hover:bg-[#003366e3] text-white text-sm font-bold px-4 tracking-widest rounded-none lg:rounded-r w-full lg:w-auto py-3"
                >
                  {loading ? "Submitting..." : "SUBSCRIBE"}
                </button>
              </div>

              <p className="text-xs text-gray-900 font-normal text-center mt-4">
                By clicking Subscribe, you&apos;re submitting your information to Sam
                Anisulowo Foundation.
              </p>
              <p className="text-xs text-gray-500 font-normal text-center mt-3">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="underline"
                  target="_blank"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  className="underline"
                  target="_blank"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </form>
          </>
        ) : (
          // ✅ Thank You message (animated)
          <div className="fade-in py-16">
            <h2 className="text-2xl font-normal text-[#003366] mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-gray-700 text-lg font-normal">
              Welcome to our community, {form.firstName}! 🎉  
              You’ll start receiving updates from us soon.
            </p>
          </div>
        )}
      </div>

      {/* Simple fade-in animation */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-in forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}