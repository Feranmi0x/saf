"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import PrivacyModal from "./privacy";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="text-gray-300 pt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-32">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-700">
            {/* Logo and brief info */}
            <div className="lg:col-span-2">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">Sam Anisulowo Foundation</h2>
              <p className="text-gray-600 font-bold text-sm mb-6">
                Empowering lives and creating lasting change through impactful initiatives.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/samuel.foundations" target="_blank" aria-label="Facebook" className="hover:text-blue-600 text-gray-800"><FaFacebookF /></a>
                <a href="https://x.com/safoundation20?s=20" target="_blank" aria-label="Twitter" className="hover:text-blue-400 text-gray-800"><FaTwitter /></a>
                <a href="https://www.instagram.com/sam_anisulowo_foundations" target="_blank" aria-label="Instagram" className="hover:text-red-600 text-gray-800"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/sam-anisulowo-foundation/" target="_blank" aria-label="LinkedIn" className="hover:text-blue-600 text-gray-800"><FaLinkedinIn /></a>
                <a href="https://youtube.com/@samanisulowofoundation" target="_blank" aria-label="YouTube" className="hover:text-red-600 text-gray-800"><FaYoutube /></a>
              </div>
            </div>

            {/* Take Action */}
            <div>
              <h3 className="text-gray-800 font-normal mb-4">Take Action</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/donate" className="hover:text-blue-400 text-gray-600">Donate</Link></li>
                <li><Link href="/#contact" className="hover:text-blue-400 text-gray-600">Volunteer</Link></li>
                <li><Link href="/donate#events" className="hover:text-blue-400 text-gray-600">Events</Link></li>
              </ul>
            </div>

            {/* Get to Know Us */}
            <div>
              <h3 className="text-gray-800 font-normal mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/how-we-work" className="hover:text-blue-400 text-gray-600">About Us</Link></li>
                <li><Link href="/how-we-work#impactstories" className="hover:text-blue-400 text-gray-600">Impact Stories</Link></li>
                <li><Link href="/#contact" className="hover:text-blue-400 text-gray-600">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Sam Anisulowo Foundation. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-blue-400">Privacy Policy & Terms of Service</button>

            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}