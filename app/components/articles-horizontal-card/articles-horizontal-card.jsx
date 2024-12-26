
"use client";
import React, {useRef} from 'react';
import Genre from '../genre/genre';
import Image from 'next/image';
import Heading3 from '../heading3/heading3';
import {motion , useInView} from "framer-motion";

export default function ArticlesHorizontalCard({value}) {
    const ref = useRef(null);
    const isInview = useInView(ref , {once : true});
    return (
        <motion.div
            ref={ref}
            initial={{y: 20, opacity: 0, rotate: -2}}
            animate={isInview ? {y: 0, rotate: 0, opacity: 1} : {}}
            transition={{duration: 0.5, delay: 0.5}}
            className="w-full flex flex-row justify-between py-3 md:py-7 border-b-2 border-black">
            {/* it has two column */}
            <div className="w-2/3 md:w-full lg:w-3/4 mt-4 md:mt-0 flex flex-col justify-between pr-5">
                {/* it has three rows */}
                <div className="flex w-full justify-end mt-8 md:mt-5">
                    <Heading3 title="صندوقچه بی بی"/>
                </div>
                <div className="w-full">
                    <p className="text-right font-common-thin leading-3 md:leading-6 mt-1 md:mt-0 text-6px md:text-12px lg:text-17px rtl ">
                        یادم می‌آید که روز ختم ما کنارش می‌نشستیم و انتظار می‌کشیدم تا قرائت
                        خود را تمام کند و نخود و کشمش دَم‌کرده برای ما بدهد. سوالی که همیشه
                        در ذهن داشتم این بود که چرا این نخود و کشمش‌ها از خلاصی نیستند. او
                        چنان در تقسیم مهارت داشت که حتی یک نخود و یک کشمش از کسی زیاد و کم
                        نبود.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row md:justify-between items-center mt-5 md:mt-0">
                    {/* it has two column */}
                    <div
                        className="w-full lg:w-1/3 md:justify-end lg:justify-between justify-around lg:mr-7 lg:flex h-0 md:h-full hidden md:flex">
                        <div>
                            <Genre title="داستان کوتاه"/>
                        </div>
                        <div className="md:ml-2 lg:ml-0">
                            <Genre title="علمی تخیلی"/>
                        </div>
                    </div>
                    <div className="w-full md:w-full lg:w-2/3 flex justify-between">
                        <div className="rtl flex items-center text-right">
                            <b className="font-common-bold text-6px md:text-12px">زمان:</b>
                            <p className="font-common-thin text-6px mt-1 md:text-12px">12</p>
                            <p className="font-common-thin text-6px mt-1 md:text-12px">دقیقه</p>
                        </div>
                        <div className="rtl flex items-center text-right">
                            <b className="font-common-bold text-6px md:text-12px">تاریخ:</b>
                            <p className="font-common-thin text-6px mt-1 md:text-12px">1403/12/05</p>
                        </div>
                        <div className="rtl flex items-center text-right">
                            <b className="font-common-bold text-6px md:text-12px">نویسنده:</b>
                            <p className="font-common-thin text-6px mt-1 md:text-12px">باسط یزدانی</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* column 2 */}
            <div
                className="w-[150px] md:w-1/2 lg:w-1/4 xl:w-1/5 mt-14 md:mt-8 relative h-[132px] md:h-[225px] lg:h-[200px] xl:h-[220px] overflow-hidden">
                <Image
                    src="/assets/img/cardPic.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="absolute hover:scale-110 transition-all duration-300"
                />
            </div>
        </motion.div>
    );
}
