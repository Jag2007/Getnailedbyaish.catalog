import React, { useState } from "react";

const faqData = [
  {
    question: "What are press-on nails?",
    answer: `Each set is thoughtfully made to match your unique nail size, shape, and style. Our designs are reusable and durable, ensuring long-lasting wear. With proper care, you can enjoy them multiple times.`,
  },
  {
    question: "What’s included in each order?",
    answer: `Every order includes a full application kit — pusher, filer, alcohol pad, liquid glue, and glue tabs — so you can achieve salon-quality results from the comfort of your home.`,
  },
  {
    question: "Shipping & delivery info",
    answer: `Standard delivery takes 7–10 days, depending on your location. For urgent orders, we offer expedited shipping at additional cost — just DM us to arrange your perfect set on time.`,
  },
];

const PressOnInfoBox = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-5xl mx-auto my-8 px-2">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`flex-1 bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-xl shadow-md border border-pink-200 p-4 md:p-6 transition-all duration-300 cursor-pointer relative hover:shadow-2xl ${
              openIndex === idx ? "ring-2 ring-pink-400 scale-105 z-10" : ""
            }`}
            onClick={() => toggle(idx)}
            style={{ minWidth: 0 }}
          >
            <div className="flex items-center mb-1 md:mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-100 text-pink-500 mr-2 shadow-sm">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M7 17c0-3.866 3.134-7 7-7V7c-5.523 0-10 4.477-10 10h3zm10 0c0-3.866 3.134-7 7-7V7c-5.523 0-10 4.477-10 10h3z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="font-semibold text-base md:text-lg text-pink-800">
                {item.question}
              </span>
            </div>
            {openIndex === idx ? (
              <div className="mt-2 md:mt-3 text-gray-700 text-sm md:text-base animate-fade-in">
                {item.answer}
              </div>
            ) : (
              <div className="mt-2 text-gray-400 text-xs md:text-sm italic">
                Tap to expand
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressOnInfoBox;
