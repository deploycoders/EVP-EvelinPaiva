import React from 'react';

const TestimonialCard = ({ stars, text, name, treatment, avatar, initials }) => {
  return (
    <div className="bg-white p-8 md:p-10 flex flex-col justify-between shadow-sm border border-gray-100 min-h-[300px]">
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < stars ? 'text-[#c65f42]' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic text-[15px] leading-relaxed mb-8">
          "{text}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {avatar ? (
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-medium text-sm">
            {initials}
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-serif text-[17px] text-gray-900 leading-tight">{name}</span>
          <span className="text-[10px] font-bold tracking-wider text-[#c65f42] uppercase mt-1">
            {treatment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
