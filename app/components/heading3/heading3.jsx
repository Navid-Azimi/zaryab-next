import React from 'react';

export default function Heading3({ title }) {
  return (
    <div className="inline  relative">
      <p className="font-new-extra-bold inline text-27px md:text-59px">{title}</p>
      <div className="w-full bg-[#FFFFEA] absolute h-[50%] bottom-0 -z-10"></div>
    </div>
  );
}
