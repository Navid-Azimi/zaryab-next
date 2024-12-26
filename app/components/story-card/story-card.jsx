"use client";
import React, {useRef} from 'react';
import Genre from '../genre/genre';
import Image from 'next/image';
import Heading3 from '../heading3/heading3';
import {motion , useInView} from "framer-motion";
import Link from "next/link";

export default function StoryCard({data}) {
  const ref = useRef(null);
  const isInview = useInView(ref , {once : true});
  return (
    <motion.div
        ref={ref}
        initial={{y : 20 , opacity : 0  , rotate : -2}}
        animate={isInview ? {y : 0 , rotate : 0 , opacity : 1} : {}}
        transition={{duration : 0.5 , delay : 0.5}}
        className="w-full flex flex-row justify-between py-3 md:py-7 border-b-2 border-black">
      <Link className="w-full flex flex-row justify-between" href={`/literarywritings/poems/${data?.slug}`}>
        {/* it has two column */}
        <div className="w-2/3 md:w-full lg:w-3/4 mt-4 md:mt-0 flex flex-col justify-between pr-5">
          {/* it has three rows */}
          <div className="flex w-full justify-end mt-8 md:mt-5">
            <Heading3 title={data?.title} />
          </div>
          <div className="w-full">
            <p className="text-right font-common-thin leading-3 md:leading-6 mt-1 md:mt-0 text-6px md:text-12px lg:text-17px rtl ">
              {data?.excerpt}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row md:justify-between items-center mt-5 md:mt-0">
            {/* it has two column */}
            <div className="w-full lg:w-1/3 md:justify-end gap-4 justify-around lg:mr-7 lg:flex h-0 md:h-full hidden md:flex">
              <div>
                <Genre title={data?.poem_categories[0].title} />
              </div>
              <div className="md:ml-2 lg:ml-0">
                <Genre title={data?.poem_categories[1].title} />
              </div>
            </div>
            <div className="w-full md:w-full lg:w-2/3 flex justify-between">
              <div className="rtl flex items-center text-right">
                <b className="font-common-bold text-6px md:text-12px ml-1">زمان:</b>
                <p className="font-common-thin text-6px mt-1 md:text-12px">{data?.time}</p>
                <p className="font-common-thin text-6px mt-1 md:text-12px">دقیقه</p>
              </div>
              <div className="rtl flex items-center text-right">
                <b className="font-common-bold text-6px md:text-12px ml-1">تاریخ:</b>
                <p className="font-common-thin text-6px mt-1 md:text-12px">{data?.shamsi_date}</p>
              </div>
              <div className="rtl flex items-center text-right">
                <b className="font-common-bold text-6px md:text-12px ml-1">نویسنده:</b>
                <p className="font-common-thin text-6px mt-1 md:text-12px">{data?.author}</p>
              </div>
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div className="w-[150px] md:w-1/2 lg:w-1/4 mt-14 md:mt-8 relative h-[132px] md:h-[225px] lg:h-[200px] xl:h-[220px] overflow-hidden">
          <Image
              src={data?.featured_image}
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute hover:scale-110 transition-all duration-300"
          />
        </div>
      </Link>
    </motion.div>
  );
}
