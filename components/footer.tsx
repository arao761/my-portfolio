import React from "react";

export default function Footer() {
  return (
    // Edit the text here to match the needs of your website
    <footer className="mb-10 px-4 text-center bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-xl p-6 w-full">
      <small className="mb-2 block text-xs">
        &copy; 2024 Ankit Rao. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS.
      </p>
    </footer>
  );
}