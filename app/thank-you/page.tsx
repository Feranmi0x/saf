"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ThankYouPage() {
  const [name, setName] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setName(params.get("name"));
    setAmount(params.get("amount"));
  }, []);

  const formattedAmount = amount ? `₦${Number(amount).toLocaleString()}` : null;
  const shareText = encodeURIComponent(
    `I just supported the Sam Anisulowo Foundation${formattedAmount ? ` with ${formattedAmount}` : ""} — join me in creating opportunity in Ekiti State.`
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#f8f2ea] to-white p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Message */}
        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Thank you{name ? `, ${name}` : ""}.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6 font-bold">
            {formattedAmount ? (
              <>
                We received your donation of{" "}
                <strong className="text-gray-900">{formattedAmount}</strong>. Your
                gift will support education sponsorships, vocational training, and
                small grants in Ekiti State.
              </>
            ) : (
              "Thank you for supporting the Sam Anisulowo Foundation. Your generosity helps create lasting opportunity for families and children in Ekiti State."
            )}
          </p>

          <div className="mt-8">
            <div className="flex items-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white text-sm"
              >
                Share on Twitter
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm leading-widest"
              >
                Back Home
              </Link>

              <a
                href={`mailto:hello@samfoundation.org?subject=${encodeURIComponent(
                  "Receipt request"
                )}&body=${encodeURIComponent(
                  `Hello,
                  \nI recently donated${
                    formattedAmount ? ` ${formattedAmount}` : ""
                  }${name ? ` (Donor: ${name})` : ""}. Could you please send a receipt to this email?\n\nThank you.`
                )}`}
                className="ml-auto text-sm text-gray-600 underline"
              >
                Request a receipt
              </a>
            </div>
          </div>
        </div>

        {/* Right: Visual / Image */}
        <div className="relative h-64 lg:h-auto w-full bg-gray-50 flex items-center justify-center">
          <Image
            src="/safbg.jpg"
            alt="Sam Anisulowo Foundation"
            width={1200}
            height={900}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur py-2 px-4 rounded-md shadow-sm text-sm text-gray-800">
            Founded 2018 — Supporting Ekiti State communities
          </div>
        </div>
      </div>
    </div>
  );
}