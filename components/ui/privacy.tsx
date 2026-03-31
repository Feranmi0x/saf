"use client";
import { useEffect } from "react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow max-w-lg max-h-[80vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-600 tracking-widest mb-3">Privacy Policy</h2>

        <p className="mb-6 text-gray-700 tracking-widest  font-normal text-sm">
          Sam Anisulowo Foundation respects your privacy and is committed to protecting any
          information you share with us. We may collect basic information such as your name,
          email address, phone number, or details you provide when contacting us, volunteering,
          or making a donation. This information is used only to communicate with you, process
          donations, improve our services, and support our mission. We do not sell or share your
          personal information except where necessary for secure payment processing or legal
          obligations. By using this website, you agree to this policy.
        </p>

        <h2 className="text-xl font-bold tracking-widest text-gray-600 mb-3">Terms of Service</h2>

        <p className="text-gray-700 tracking-widest text-sm font-normal">
          By accessing this website, you agree to use it only for lawful purposes and in a way
          that does not harm the foundation or other users. All content on this website is for
          informational purposes and may be updated without notice. The Sam Anisulowo Foundation
          is not liable for any damages resulting from the use of this website or third-party
          links. Continued use of this website indicates your acceptance of these terms.
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}