'use client';
import ArrowLink from "../arrow-link/arrow-link";
import Heading1 from "../heading-1/heading-1";
import Podcast from "../podcast/podcast";
import {motion , useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import axios from "@/utils/api";

export  default  function Podcasts() {
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get('/v1/podcasts?per_page=3')
                setData(response.data.podcasts);
            } catch (err) {
                setError(err.response?.data?.message || err.message)
            }
        }
        fetchData();
    } , [])
    console.log(data)
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return (
        <div>
        {/*  it has two rows  */}
            <motion.div
                ref={ref}
                initial={{y : 50 , opacity : 0}}
                animate={isInView ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="flex flex-row-reverse justify-between">
                <Heading1 title="نشست ها" />
                <ArrowLink title="همه نشست ها" />
            </motion.div>
            <div className="flex flex-col md:flex-row mt-7 md:flex-wrap xl:flex-nowrap">
                {data?.map((data , index) => (
                    <Podcast data={data} key={index}/>
                ))}
            </div>
        </div>
    );
}