'use client';
import Filter from "../components/filter/filter";
import Heading1 from "@/app/components/heading-1/heading-1";
import ArticlesHorizontalCard from "../components/articles-horizontal-card/articles-horizontal-card";
import {useRef, useState} from "react";
import Authors from "@/app/components/authors/authors";
import {useInView , motion} from "framer-motion";

export default function ArticlesPage() {
    const items = [1,2,3,4,5,6,7,8,,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;

    // Calculate the total number of pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Calculate the index range of cards to display
    const indexOfLastCard = currentPage * itemsPerPage;
    const indexOfFirstCard = indexOfLastCard - itemsPerPage;
    const currentCards = items.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1 , {once : true});


    return (
        // main container of the page
        <div className="container container-main mx-auto">
        {/*  the filter of the page  */}
            <Filter />

        {/*  title of the page  */}
            <motion.div
                ref={ref}
                initial={{y : 50 , opacity : 0}}
                animate={isInView ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="w-full flex flex-row-reverse mt-5">
                <Heading1 title="مقاله ها" />
            </motion.div>

        {/*  the body of the page  */}
            <div className="w-full">
                {
                    currentCards.map((item , index) =>(
                        <ArticlesHorizontalCard key={index} vlaue={item}/>
                    ))
                }
            </div>
            {/* Pagination controls */}
            <motion.div
                ref={ref1}
                initial={{y : 50 , opacity : 0}}
                animate={isInView1 ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
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

        {/*  the authors section  */}
            <div className="w-full mt-14 mb-7">
                <Authors />
            </div>
        </div>
    );
}