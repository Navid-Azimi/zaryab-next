'use client';

import {useState , useEffect} from "react";
import AuthorsCard from "@/app/components/authors-card/authors-card";
import Heading1 from "@/app/components/heading-1/heading-1";
import ArrowLink from "@/app/components/arrow-link/arrow-link";
import Book from "@/app/components/book/book";
import AuthorWeek from "@/app/components/author-week/author-week";
import axios from "@/utils/api";
import {log} from "next/dist/server/typescript/utils";

export default function AuthorPage() {

    const [data , setData] = useState(null);
    const [error  , setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages , setTotalPages] = useState(0);

    const fetchData = async (page) => {
        try {
            const response = await axios.get(`/v1/authors?per_page=5&page=${page}`);
            setData(response.data);
            setTotalPages(response.data.pagination.total_pages); // Assuming the API provides total pages
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

    return(
        // the main container of the page
        <div className="container container-main mx-auto">
        {/*  the title of the page  */}
            <div className="flex flex-row-reverse justify-between mt-7">
                <Heading1 title="نویسنده ها و شاعران آوای زریاب" />
                <ArrowLink title="همه نویسنده ها و شاعران"/>
            </div>
        {/*  the authors section  */}
            <div className="flex justify-between flex-wrap mt-14">
                {
                    data?.data.map((data , index) =>(
                        <AuthorsCard key={index} data={data}/>
                    ))
                }
            </div>
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

        {/*  book section  */}
            <div className="mt-14">
                <Book />
            </div>
            <div className="mt-14 mb-14">
                <AuthorWeek />
            </div>
        </div>
    );
}