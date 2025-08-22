import { FAQ_LIST } from "@/constants/FAQList";
import { useState } from "react";

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number): void => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        <div className="md:w-1/2 text-left">
          <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
            <svg
              className="w-4 h-4 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.228 9.247a1 1 0 01.791-.598l3.058-.555c.717-.13 1.41-.522 1.958-1.115L18 6m-2 2l-4 4m3-4a6 6 0 00-9.356-4.725L4 14.5V20h5.5l.5-1.5m1.5-1.5l1.5-1.5M10 16l-3-3m0 0l-3-3m3 3L6 6"
              ></path>
            </svg>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Answer to All <br className="hidden md:inline" /> Your
            Questions
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Find in-depth answers to common questions and gain a deeper
            understanding of our solution's features, functionality, and
            support.
          </p>
          {/* <button className="btnBg rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5">
            View All FAQs
          </button> */}
        </div>

        <div className="md:w-1/2 space-y-4">
          {FAQ_LIST.map((faq, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 ${
                openFaqIndex === index ? "faq-item active" : "faq-item"
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none faq-toggle"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
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
              </button>
              <div
                className={`faq-answer ${
                  openFaqIndex === index ? "open" : ""
                } pt-4`}
              >
                <p className="text-gray-600 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
