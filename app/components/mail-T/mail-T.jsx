
"use client";
import React, {useRef} from 'react';
import Heading2 from '../heading-2/heading-2';
import Image from 'next/image';
import Link from 'next/link';
import {motion , useInView} from "framer-motion";

export default function MailT() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return (
        <motion.div
            ref={ref}
            initial={{y : 50 , opacity : 0}}
            animate={isInView ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5 , delay : 1}}
            className="w-[47%] flex flex-col items-end">
            {/* it has three rows */}
            <div className="w-full flex flex-col items-end">
                <Heading2 title="نامه جدید" />
                <p className="text-3xl mt-7">1403/06/07</p>
                <div className="relative w-full h-[430px] lg:h-[480px] mt-7">
                    <Image
                        src="/assets/img/mail.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="absolute"
                    />
                </div>
                <Link
                    href="#"
                    className="w-full h-10 flex justify-center items-center mt-7 border border-black font-common-lg text-28px
          bg-white text-black transition-all duration-300"
                >
                    خواندن نامه
                </Link>
            </div>
        </motion.div>
    );
}
