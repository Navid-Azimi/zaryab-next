'use client';
import {motion, useInView} from "framer-motion";
import Heading1 from "@/app/components/heading-1/heading-1";
import ArrowLink from "@/app/components/arrow-link/arrow-link";
import {useRef, useState , useEffect} from "react";
import Podcast from "@/app/components/podcast/podcast";
import axios from "@/utils/api";

export default function PodcastsPage() {

    // get data
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages , setTotalPages] = useState(0);

    const fetchData = async (page) => {
        try {
            const response = await axios.get(`/v1/podcasts?per_page=5&page=${page}`);
            setData(response.data);
            setTotalPages(response.data.pages); // Assuming the API provides total pages
            console.log("fetch again");
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);



    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1 , {once : true});
    return(
        // the main container of the page
        <div className="container container-main mx-auto mb-5">
            {/*  the title of the page  */}
            <motion.div
                ref={ref}
                initial={{y: 50, opacity: 0}}
                animate={isInView ? {y: 0, opacity: 1} : {}}
                transition={{duration: 0.5}}
                className="flex flex-row-reverse justify-between mt-7">
                <Heading1 title="نشست ها"/>
                <ArrowLink title="همه نشست ها"/>
            </motion.div>
            {/* the body of the page the cards sections */}
            <div className="flex flex-wrap mt-7">
                {
                    data?.podcasts.map((data , index) => (
                        <Podcast key={index} data={data}/>
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
        </div>
    );
}