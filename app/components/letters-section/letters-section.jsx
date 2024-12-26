'use client';
import Heading1 from "../heading-1/heading-1";
import LetterCard from "../letter-card/letter-card";
import {useRef} from "react";
import {useInView , motion} from "framer-motion";

export default function LettersSection() {
    const letters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const mainLetters = letters.slice(0 , 12);

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return(
        <div className="w-full">
            {/* the heading of the section */}
            <motion.div
                ref={ref}
                initial={{y : 50 , opacity : 0}}
                animate={isInView ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="w-full flex flex-row-reverse">
                <Heading1 title="نامه ها" />
            </motion.div>
            {/* the cards section */}
            <div className="flex justify-between flex-wrap">
                {
                    mainLetters.map((item , index) => (
                        <LetterCard key={index} item={item}/>
                    ))
                }
            </div>
        </div>
    );
}