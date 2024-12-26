'use client';
import React, {useState} from 'react';
import Heading1 from '../heading-1/heading-1';
import Genre from '../genre/genre';
import Image from 'next/image';
import {motion , useInView} from 'framer-motion';
import {useRef} from "react";

export default function StoryDay() {
 const ref = useRef(null);
 const isInview = useInView(ref , {once : true});
  // the story of the day section has three rows first row the first title the second row is the main title and some text of story genre , time ,date and author and the third section is the picture of the story
  return (
    <section className="mt-7">
      {/* first row */}
      <div className="container container-main mx-auto flex flex-col">
        {/* heading of the page */}
        <motion.div
            className="flex flex-row-reverse"
            initial={{y : 50 , opacity : 0}}
            animate={isInview ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5}}
        >
          <Heading1 title="داستان روز" />
        </motion.div>
      </div>
      {/* second row */}
      <div className="container container-main mx-auto flex flex-col-reverse xl:flex-row justify-between mt-6">
        {/* it has two columns */}
        {/* first column */}
        <div className="flex flex-col w-full mt-9 lg:mt-0 xl:w-2/3">
          {/* the text of the story */}
          <motion.div
              ref={ref}
              initial={{y : 50 , opacity : 0}}
              animate={isInview ? {y : 0 , opacity : 1} : {}}
              transition={{duration : 0.5 , delay : 1}}
              className="lg:mt-3">
            <p className="text-right font-common px-3 lg:text-justify xl:text-right rtl lg:mt-14 xl:mt-0">
              یادم می‌آید که روز ختم ما کنارش می‌نشستیم و انتظار می‌کشیدم تا
              قرائت خود را تمام کند و نخود و کشمش دَم‌کرده برای ما بدهد. سوالی
              که همیشه در ذهن داشتم این بود که چرا این نخود و کشمش‌ها از خلاصی
              نیستند. او چنان در تقسیم مهارت داشت که حتی یک نخود و یک کشمش از
              کسی زیاد و کم نبود.
            </p>
          </motion.div>
          {/* genre */}
          <motion.div
              ref={ref}
              initial={{y : 50 , opacity : 0}}
              animate={isInview ? {y : 0 , opacity : 1} : {}}
              transition={{duration : 0.5 , delay : 1.5}}
              className="lg:w-full flex flex-col md:flex-row-reverse xl:flex-row mt-9 lg:mt-0 justify-between">
            <div className="w-full md:w-1/2 xl:flex xl:w-1/3 flex items-end md:justify-around xl:justify-end flex-wrap font-common-thin">
              <div className="w-1/4 md:hidden lg:w-0 xl:flex xl:w-1/2 flex justify-center items-center">
                <Genre title="علمی تخیلی" />
              </div>
              <div className="w-1/4 md:hidden lg:w-0 xl:flex xl:w-1/2 flex justify-center items-center">
                <Genre title="داستان کوتاه" />
              </div>
              <div className="w-1/4 lg:w-1/2 xl:w-1/2 flex justify-center items-center">
                <Genre title="علمی تخیلی" />
              </div>
              <div className="w-1/4 lg:w-1/2 xl:w-1/2 flex justify-center items-center">
                <Genre title="داستان کوتاه" />
              </div>
            </div>
            <div className="flex w-full md:w-2/3 mt-9 xl:w-2/3 justify-between items-end">
              <div className="rtl flex text-right">
                <b className="font-common-bold">زمان:</b>
                <p className="font-common-thin mt-1">12</p>
                <p className="font-common-thin mt-1">دقیقه</p>
              </div>
              <div className="rtl flex text-right">
                <b className="font-common-bold">تاریخ:</b>
                <p className="font-common-thin mt-1">1403/12/05</p>
              </div>
              <div className="rtl flex text-right">
                <b className="font-common-bold">نویسنده:</b>
                <p className="font-common-thin mt-1">باسط یزدانی</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* second column */}
        <div>
          {/* the title of the story */}
          <motion.h1
              className="font-new-black text-50px lg:text-94px mt-4 leading-[67%] flex flex-row-reverse xl:flex-col items-end"
              ref={ref}
              initial={{y : 50 , opacity : 0}}
              animate={isInview ? {y : 0 , opacity : 1} : {}}
              transition={{duration: 0.5, delay: 0.5}}
          >
            <p>صندوقچه</p>
            <p>بی بی</p>
          </motion.h1>
          {/* genre */}
          <div className="w-full hidden xl:hidden xl:w-1/3 mt-9  flex-wrap font-common-thin">
            <div className="w-1/4 lg:w-1/2 flex justify-center items-center">
              <Genre title="علمی تخیلی"/>
            </div>
            <div className="w-1/4 lg:w-1/2 flex justify-center items-center">
              <Genre title="داستان کوتاه"/>
            </div>
            <div className="w-1/4 lg:w-1/2 flex justify-center items-center">
              <Genre title="علمی تخیلی"/>
            </div>
            <div className="w-1/4 lg:w-1/2 flex justify-center items-center">
              <Genre title="داستان کوتاه"/>
            </div>
          </div>
        </div>
      </div>
      {/* third row */}
      <motion.div
          ref={ref}
          initial={{y : 50 , opacity : 0}}
          animate={isInview ? {y : 0 , opacity : 1} : {}}
          transition={{duration : 0.5 , delay : 2}}
          className="container container-main mx-auto mt-9">
        <div className="w-full h-[200px] md:h-[400px] lg:h-[430px] xl:h-[500px] relative">
          <Image
              src="/assets/img/mainPic.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute"
          />
        </div>
      </motion.div>
    </section>
  );
}
