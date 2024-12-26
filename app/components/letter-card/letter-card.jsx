'use client';
import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";
import {useInView , motion} from "framer-motion";

export default function LetterCard() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});

    return(
        // the letter cord main container
        <motion.div
            ref={ref}
            initial={{y : 50 , opacity : 0}}
            animate={isInView ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5 , delay : 0.5}}
            className="flex flex-col w-full md:w-[45%] xl:w-[23%] mt-7">
        {/*  it has 3 rows  */}
            <div className="relative w-full h-[455px] md:h-[400px] lg:h-[550px] xl:h-[350px]">
                <Image src="/assets/img/mail.png" alt="letter" layout="fill" objectFit="cover" className="absolute"/>
            </div>
            <div className="mt-5">
                <div className="flex rtl items-center">
                    <p className="font-common-heavy text-30px md:text-25px lg:text-30px xl:text-20px ml-1">عنوان:</p>
                    <p className="font-common-regular text-30px md:text-25px lg:text-30px xl:text-20px">به یاد نادیه انجمن</p>
                </div>
                <div className="flex rtl items-center">
                    <p className="font-common-heavy text-30px md:text-25px lg:text-30px xl:text-20px ml-1">شماره:</p>
                    <p className="font-common-regular text-30px md:text-25px lg:text-30px xl:text-20px">5</p>
                </div>
                <div className="flex rtl items-center">
                    <p className="font-common-heavy text-30px md:text-25px lg:text-30px xl:text-20px ml-1">تاریخ نشر:</p>
                    <p className="font-common-regular text-30px md:text-25px lg:text-30px xl:text-20px">1403/06/04</p>
                </div>
            </div>
            <div className=" w-full flex flex-row-reverse justify-between items-center mt-5">
                <Link href="#" className="w-[47%] py-1 text-white flex justify-center items-center bg-footerBtn font-common-lg text-28px
                border-2 border-footerBtn hover:bg-white hover:text-footerBtn transition-all duration-700">دانلود</Link>
                <Link href="#" className="w-[47%] py-1 text-white flex justify-center items-center bg-black font-common-lg text-28px
                border-2 border-black hover:bg-white hover:text-black transition-all duration-700">خواندن</Link>
            </div>
        </motion.div>
    );
}