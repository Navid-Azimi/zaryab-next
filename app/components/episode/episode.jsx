'use client';
import Image from "next/image";
import {useRef, useState} from "react";
import Genre from "../genre/genre";
import Link from "next/link";
import {useInView , motion} from "framer-motion";

export default function Episode({item}) {
    const [isHovered , setIsHovered] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});

    const handleMouseEnter = () => {
        setIsHovered(true);

        setTimeout(() => {
            setIsHovered(false);
        }, 500);
    };
    return(
        //     main container of the card
        <motion.div
            ref={ref}
            initial={{y : 50 , opacity : 0}}
            animate={isInView ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5 , delay : 0.5}}
            className="w-full lg:w-[48%] xl:w-[32%] p-5 md:p-10 lg:p-7 border-4 border-black flex flex-col items-end mt-5">
            {/*  it has 6 rows  */}
            <div
                className='w-full h-[250px] md:h-[500px] lg:h-[247px] border-4 border-black relative hover:border-footerBtn transition-all duration-700'
                onMouseEnter={handleMouseEnter}>
                <Image src="/assets/img/story-card.png" alt="" layout="fill" objectFit="cover" className={`absolute transition-all duration-700
                ${isHovered ? 'opacity-50' : 'opacity-100'}`}/>
            </div>
            <div className='font-new-extra-bold text-36px md:text-76px lg:text-50px mt-3'>
                صندوقچه بی بی{item}
            </div>
            <div className="w-full flex justify-end mt-3">
               <div className="font-common-heavy text-25px">
                   قسمت اول
               </div>
            </div>
            <div className="w-full mt-3">
                <Link href="#" className="w-full py-2 font-common-heavy text-20px md:text-43px lg:text-28px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700">خواندن داستان</Link>
            </div>
        </motion.div>
    );
}