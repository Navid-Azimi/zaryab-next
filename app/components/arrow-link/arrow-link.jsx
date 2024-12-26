import Link from 'next/link';
import React from 'react';

export default function ArrowLink({ title , path }) {
  return (
    <Link
      href={`${path}`}
      className="flex items-center group md:mt-5 lg:mt-0"
    >
      <svg
        width="45"
        height="13"
        viewBox="0 0 45 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#2F3030] group-hover:fill-[#FCA30A] transition-all duration-1000"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.74372 0.631282C6.40201 0.289573 5.84799 0.289573 5.50628 0.631282L0.256281 5.88128C-0.0854271 6.22299 -0.0854271 6.77701 0.256281 7.11872L5.50628 12.3687C5.84799 12.7104 6.40201 12.7104 6.74372 12.3687C7.08543 12.027 7.08543 11.473 6.74372 11.1313L2.9874 7.37497H44.125C44.6082 7.37497 45 6.98322 45 6.49997C45 6.01672 44.6082 5.62497 44.125 5.62497H2.98747L6.74372 1.86872C7.08543 1.52701 7.08543 0.97299 6.74372 0.631282Z"
          fill="current-fill"
        />
      </svg>
      <p className="group-hover:text-[#FCA30A] transition-all duration-1000 font-common-lg text-15px xl:text-27px">
        {title}
      </p>
    </Link>
  );
}
