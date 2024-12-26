'use client';
import Image from "next/image";
import Link from "next/link";
import {motion , useInView} from "framer-motion";
import {useRef} from "react";
import Heading2 from "../heading-2/heading-2";

export  default  function BookT() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return (
        <div className="flex flex-col w-[47%] items-end">
            <motion.div
                ref={ref}
                initial={{y : 50 , opacity : 0}}
                animate={isInView ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
            >
                <Heading2 title="کتاب هفته" />
            </motion.div>
            <div className="w-full flex flex-col ">

                <motion.h3
                    ref={ref}
                    initial={{y: 50, opacity: 0}}
                    animate={isInView ? {y: 0, opacity: 1} : {}}
                    transition={{duration: 0.5, delay: 1}}
                    className="font-common-heading w-full text-28px text-right mt-3">
                    <p>هریپاتر و سنگ فلاسفر</p>
                </motion.h3>

                <motion.div
                    ref={ref}
                    initial={{y: 50, opacity: 0}}
                    animate={isInView ? {y: 0, opacity: 1} : {}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className="w-full items-end mt-2">
                    <div className="relative w-full bg-red-500 h-[430px] lg:h-[480px]">
                        <Image src="/assets/img/book.png" alt="" layout="fill" objectFit="cover" className="absolute"/>
                    </div>
                   <div className="flex justify-between mt-7">
                       <Link href="/literarywritings/book/bookid" className="w-[45%] h-10 bg-black flex justify-center font-common-lg text-28px items-center text-white">خلاصه</Link>
                       <Link href="#" className="w-[45%] h-10 border-footerBtn border-2 flex justify-center items-center
                       font-common-lg text-28px text-footerBtn">دانلود</Link>
                   </div>
                </motion.div>

            </div>
        </div>
    );
}