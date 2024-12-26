'use client';
import {useState} from "react";
import {motion} from "framer-motion";

export default function AboutCord({title , text , num}) {
    const [dropdownOpen , setDropdownOpen] = useState(false);

    return (
        <motion.div
            initial={{y : 50 , opacity : 0}}
            animate={{y : 0 , opacity : 1}}
            transition={{ duration : 0.5 , delay : num * 0.5 }}
            className={`w-full overflow-y-hidden  border-b-4 border-t-4 border-white mt-14 transition-all duration-700 
            ${dropdownOpen ? 'h-full' : 'h-12 md:h-14 lg:h-20'} transition-all duration-700`}>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className={`${dropdownOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-700`}>
                    <svg width="54" height="27" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 1L11.5 12L1 1" stroke="#FFFCF7" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className="font-common-heavy text-30px md:text-40px lg:text-46px text-white">{title}</div>
            </div
               >
            <div className="rtl py-7 text-white font-common-regular text-20px md:text-30px lg:text-46px">{text}</div>
        </motion.div>
    );
}