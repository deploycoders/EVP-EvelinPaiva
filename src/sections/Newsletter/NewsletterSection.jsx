import React from 'react';
import { newsletterData } from "@/data/info";

function NewsletterSection() {
  const { title, description, inputPlaceholder, buttonText } = newsletterData;

  return (
    <section className="bg-[#ffff] py-24 px-4 w-full">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-6 font-normal">
          {title}
        </h2>
        <p className="text-gray-600 text-[15px] md:text-base max-w-2xl mx-auto mb-12">
          {description}
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder={inputPlaceholder}
            required
            className="flex-1 px-6 py-4 bg-white border-none focus:outline-none text-sm tracking-widest text-gray-800 placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-[#2c2c2c] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-black transition-colors"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
