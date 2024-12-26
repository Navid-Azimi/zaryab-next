import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Genre({ title }) {
  return (
    <div className="relative flex justify-center items-center group pb-1">
      <Link
        href="#"
        className="font-common-thin"
      >
        {title}
      </Link>
      <Image
        src="assets/svg/yellowCircle.svg"
        alt=""
        width={15}
        height={15}
        className="absolute right-0 -z-10 group-hover:rotate-90 transition-all duration-1000"
      />
      <div className="absolute right-0 opacity-0 -z-10 bg-[#FCA30A] w-[15px] h-[15px] rounded-full group-hover:opacity-100 transition-all duration-500 delay-500"></div>
    </div>
  );
}
