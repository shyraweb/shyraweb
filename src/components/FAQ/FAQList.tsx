"use client";
import { FAQ_LIST } from "@/constants/FAQList";
import { useState } from "react";

export default function FAQList() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="md:w-1/2 space-y-4">
      {FAQ_LIST.map((faq, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 cursor-pointer ${
            openFaqIndex === index ? "faq-item active" : "faq-item"
          }`}
          onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
        >
          <div
            className="w-full flex justify-between items-center text-left focus:outline-none faq-toggle"
            onClick={() =>
              setOpenFaqIndex(openFaqIndex === index ? null : index)
            }
          >
            <span className="text-base font-semibold text-gray-900">
              {faq.question}
            </span>
            <svg
              className={`w-6 h-6 text-purple-600 rotate-icon`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {openFaqIndex === index ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                />
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </>
              )}
            </svg>
          </div>
          <div
            className={`faq-answer ${
              openFaqIndex === index ? "open pt-4" : ""
            }`}
          >
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
