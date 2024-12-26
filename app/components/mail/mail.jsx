"use client";
import React, {useRef} from 'react';
import Heading2 from '../heading-2/heading-2';
import Image from 'next/image';
import Link from 'next/link';
import {motion , useInView} from "framer-motion";

export default function Mail() {
  const ref = useRef(null);
  const isInView = useInView(ref , {once : true});
  return (
    <motion.div
        ref={ref}
        initial={{y : 50 , opacity : 0}}
        animate={isInView ? {y : 0 , opacity : 1} : {}}
        transition={{duration : 0.5 , delay : 1}}
        className="w-full flex flex-col items-end">
      {/* it has three rows */}
      <div className="w-full flex flex-col items-end">
        <Heading2 title="نامه جدید" />
        <p className="mt-5 md:mt-0">1403/06/07</p>
        <div className="relative w-full h-[470px] md:h-[425px] mt-5 md:mt-0">
          <Image
            src="/assets/img/mail.png"
            alt=""
            fill
            className="absolute object-contain"
          />
        </div>
        <Link
          href="#"
          className="w-full h-10 flex justify-center items-center border border-black font-common-lg text-27px text-black bg-white lg:text-white lg:bg-black
          lg:hover:bg-white lg:hover:text-black transition-all duration-300"
        >
          خواندن نامه
        </Link>
      </div>
      <div className="w-full hidden md:flex flex-col items-end mt-7">
        <Heading2 title="نامه های قدیم" />
        <div className="w-full flex flex-col items-end mt-7">
          <h3 className="font-common-med text-3xl rtl">ماه نامه</h3>
          <p className="text-sm font-common-thin">1403/06/07</p>
        </div>
        <div className="w-full flex flex-col items-end mt-7">
          <h3 className="font-common-med text-3xl rtl">ماه نامه</h3>
          <p className="text-sm font-common-thin">1403/06/07</p>
        </div>
        <div className="w-full flex flex-col items-end mt-7">
          <h3 className="font-common-med text-3xl rtl">ماه نامه</h3>
          <p className="text-sm font-common-thin">1403/06/07</p>
        </div>
        <div className="w-full flex flex-col items-end mt-7">
          <h3 className="font-common-med text-3xl rtl">ماه نامه</h3>
          <p className="text-sm font-common-thin">1403/06/07</p>
        </div>
      </div>
      <div className="w-full hidden md:flex flex-col items-end mt-7">
        <Heading2 title="مقاله های جدید" />
        <div className="mt-7">
          <div>
            <p className="rtl font-common-med text-3xl">چگونه انسان باشید.</p>
          </div>
          <div className="flex rtl justify-between items-center">
            <div className="rtl flex text-right items-center text-[8px]">
              <b className="font-smallTitle">نویسنده:</b>
              <p className="font-smallText">باسط یزدانی</p>
            </div>
            <div className="rtl flex text-right text-8px items-center">
              <b className="font-smallTitle">تاریخ:</b>
              <p className="font-smallText">1403/12/05</p>
            </div>
            <div className="flex text-8px">
              <p className="font-smallText mr-1">خبری</p>
              <p className="font-smallText">خبری</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div>
            <p className="rtl font-common-med text-3xl">چگونه انسان باشید.</p>
          </div>
          <div className="flex rtl justify-between items-center">
            <div className="rtl flex text-right items-center text-8px">
              <b className="font-smallTitle">نویسنده:</b>
              <p className="font-smallText">باسط یزدانی</p>
            </div>
            <div className="rtl flex text-right text-8px items-center">
              <b className="font-smallTitle">تاریخ:</b>
              <p className="font-smallText">1403/12/05</p>
            </div>
            <div className="flex text-8px">
              <p className="font-smallText mr-1">خبری</p>
              <p className="font-smallText">خبری</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div>
            <p className="rtl font-common-med text-3xl">چگونه انسان باشید.</p>
          </div>
          <div className="flex rtl justify-between items-center">
            <div className="rtl flex text-right items-center text-8px">
              <b className="font-smallTitle">نویسنده:</b>
              <p className="font-smallText">باسط یزدانی</p>
            </div>
            <div className="rtl flex text-right text-8px items-center">
              <b className="font-smallTitle">تاریخ:</b>
              <p className="font-smallText">1403/12/05</p>
            </div>
            <div className="flex text-8px">
              <p className="font-smallText mr-1">خبری</p>
              <p className="font-smallText">خبری</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div>
            <p className="rtl font-common-med text-3xl">چگونه انسان باشید.</p>
          </div>
          <div className="flex rtl justify-between items-center">
            <div className="rtl flex text-right items-center text-8px">
              <b className="font-smallTitle">نویسنده:</b>
              <p className="font-smallText">باسط یزدانی</p>
            </div>
            <div className="rtl flex text-right text-8px items-center">
              <b className="font-smallTitle">تاریخ:</b>
              <p className="font-smallText">1403/12/05</p>
            </div>
            <div className="flex text-8px">
              <p className="font-smallText mr-1">خبری</p>
              <p className="font-smallText">خبری</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
