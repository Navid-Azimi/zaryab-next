'use client';
import Filter from "../filter/filter";
import Heading1 from "../heading-1/heading-1";
import StoryPageCard from "../story-page-card/story-page-card";
import ArrowLink from "../arrow-link/arrow-link";
import {useRef, useState} from "react";
import {useInView , motion} from "framer-motion";

export default function StorySection() {
    const [showPagination , setShowPagination] = useState(false);

    const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
    const mainCards = cards.slice(0, 9);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Calculate the total number of pages
    const totalPages = Math.ceil(cards.length / itemsPerPage);

    // Calculate the index range of cards to display
    const indexOfLastCard = currentPage * itemsPerPage;
    const indexOfFirstCard = indexOfLastCard - itemsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref , {once : true});
    const isInView2 = useInView(ref2 , {once : true});

    return (
        <div>
            {/*  the filter of this section  */}
            <Filter
                items={['داستانک' , "داستان کوتاه" , "داستان بلند" , "رمان کوتاه" , "قصه" , "رمان" , "نمایش نامه" , "فیلم نامه"]}
                title="انواع داستان ها"
                genre={[]}
            />

            {/*  title of the section  */}
            <motion.div
                id="story"
                ref={ref}
                initial={{y : 50 , opacity : 0}}
                animate={isInView1 ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="mt-5 w-full flex flex-row-reverse">
                <Heading1 title='داستان ها'/>
            </motion.div>

            {/*  section body  */}
            <div>
                <div className={`w-full justify-between mt-5 flex-wrap ${showPagination ? 'hidden' : 'flex'}`}>
                    {
                        mainCards.map((item, index) => (
                            <StoryPageCard key={index} item={item}/>
                        ))
                    }
                </div>
                <div className={`w-full ${showPagination ? 'block' : "hidden"}`}>
                   <div className='w-full flex justify-between mt-5 flex-wrap'>
                       {
                           currentCards.map((item, index) => (
                               <StoryPageCard key={index} item={item}/>
                           ))
                       }
                   </div>
                    {/* Pagination controls */}
                    <div className="flex justify-center mt-5">
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
                    </div>
                </div>
            </div>
            <motion.div
            ref={ref2}
            initial={{y : 50 , opacity : 0}}
            animate={isInView2 ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5}}
                className={`w-full mt-5 flex-row-reverse ${showPagination ? 'hidden' : 'flex'}`} onClick={() => setShowPagination(true)}>
                <ArrowLink title="همه داستان ها" path="#story"/>
            </motion.div>
        </div>
    );
}