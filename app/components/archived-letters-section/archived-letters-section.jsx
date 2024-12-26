'use client';
import Heading1 from "../heading-1/heading-1";
import Filter from "../filter/filter";
import {useRef, useState} from "react";
import LetterCard from "@/app/components/letter-card/letter-card";
import {motion, useInView} from "framer-motion";


export default function ArchivedLettersSection() {
    const letters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Calculate the total number of pages
    const totalPages = Math.ceil(letters.length / itemsPerPage);

    // Calculate the index range of cards to display
    const indexOfLastCard = currentPage * itemsPerPage;
    const indexOfFirstCard = indexOfLastCard - itemsPerPage;
    const currentCards = letters.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1 , {once : true});

    return(
        <div className="w-full">
        {/* the title of the section */}
            <motion.div
                ref={ref}
                initial={{y : 50 , opacity : 0}}
                animate={isInView ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="w-full flex flex-row-reverse">
                <Heading1 title="آرشیو نامه ها" />
            </motion.div>
        {/*  the Filter section  */}
            <div className="w-full mt-5">
                <Filter />
            </div>
        {/*  pagination section  */}
            <div className="w-full flex justify-between mt-7 flex-wrap">
                {
                    currentCards.map((item , index) => (
                        <LetterCard key={index} item={item}/>
                    ))
                }
            </div>
            {/* Pagination controls */}
            <motion.div
                ref={ref1}
                initial={{y : 50 , opacity : 0}}
                animate={isInView ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5 , delay : 0.5}}
                className="flex justify-center mt-5">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-20 h-20 mr-1 pt-3 flex justify-center items-center border-2 border-black font-common-heavy text-3xl
                                ${currentPage === index + 1 ? 'bg-black text-white' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </motion.div>
        </div>
    );
}