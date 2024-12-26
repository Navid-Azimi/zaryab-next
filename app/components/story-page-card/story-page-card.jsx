'use client';
import Image from "next/image";
import {useRef, useState} from "react";
import Genre from "../genre/genre";
import Link from "next/link";
import {useInView , motion} from "framer-motion";

export default function StoryPageCard({data , isStory}) {
    const [isHovered , setIsHovered] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});

    const handleMouseEnter = () => {
        setIsHovered(true);

        setTimeout(() => {
            setIsHovered(false);
        }, 500);
    };

    // handle the length of the string
    function truncateString(str) {
        if (str?.length > 13) {
            return str.substring(0, 13) + "...";
        }
        return str;
    }

    return(
    //     main container of the card
        <motion.div
            ref={ref}
            initial={{y : 50 , opacity : 0}}
            animate={isInView ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5 , delay : 0.5}}
            className="w-full lg:w-[48%] xl:w-[32%] p-5 md:p-10 lg:p-7 border-4 border-black flex flex-col items-end justify-between mt-5">
            {/*  it has 6 rows  */}
            <div
                className='w-full h-[250px] md:h-[500px] lg:h-[247px] border-4 border-black relative hover:border-footerBtn transition-all duration-700'
                onMouseEnter={handleMouseEnter}>
                <Image src={data?.featured_image} alt="" layout="fill" objectFit="cover" className={`absolute transition-all duration-700
                ${isHovered ? 'opacity-50' : 'opacity-100'}`}/>
            </div>
            <div className='font-new-extra-bold text-36px rtl md:text-76px lg:text-50px mt-3'>
                {truncateString(data?.title)}
            </div>
            <div className="font-common-thin text-8px md:text-18px lg:text-17px mt-3 text-right">
                {data?.excerpt}
            </div>
            <div className="w-full flex items-center justify-between mt-3 text-xs">
                <div className="rtl flex items-center text-right">
                    <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">زمان:</b>
                    <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">{data?.time}</p>
                    <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">دقیقه</p>
                </div>
                <div className="rtl flex items-center text-right md:text-18px lg:text-12px">
                    <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">تاریخ:</b>
                    <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">{data?.shamsi_date}</p>
                </div>
                <div className="rtl flex items-center text-right">
                    <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">نویسنده:</b>
                    <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">{data?.author.name}</p>
                </div>
            </div>
            <div className="w-full flex justify-end gap-2 mt-3">
                {data?.categories.map((category , index) => (
                    <Genre title={category} key={index} />
                ))}
            </div>
            <div className="w-full mt-3">
                <Link href={`/literarywritings/poems/${data?.slug}`} className="w-full py-2 font-common-heavy text-20px md:text-43px lg:text-28px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700">
                    {
                        isStory ? 'خوادن داستان' : 'خواندن شعر'
                    }
                </Link>
            </div>
        </motion.div>
    );
}