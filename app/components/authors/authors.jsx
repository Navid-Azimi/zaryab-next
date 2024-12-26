'use client';
import React, {useRef} from 'react';
import Heading1 from '../heading-1/heading-1';
import ArrowLink from '../arrow-link/arrow-link';
import AuthorsCard from "../authors-card/authors-card";
import {motion , useInView} from "framer-motion";
import axios from "@/utils/api";
import {useState , useEffect} from "react";

export default function Authors() {
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
                try {
                    const response = await axios.get('/v1/authors?per_page=8');
                    setData(response.data.data);
                } catch (err) {
                    setError(err.response?.data?.message || err.message);
                }
        }
        fetchData();
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
  return (
    <div className="flex flex-col">
      {/* it have two rows */}
      <motion.div
          ref={ref}
          initial={{y : 5 , opacity : 0}}
          animate={isInView ? {y : 0 , opacity : 1} : {}}
          transition={{duration : 0.5}}
          className="flex flex-col-reverse items-end w-full md:flex-row-reverse md:justify-between">
            <Heading1 title="نویسنده ها و شاعران آوای زریاب" />
          <ArrowLink title="همه نویسنده و شاعران" path="/authors"/>
      </motion.div>
      <div className="flex flex-wrap justify-between mt-7">
          {
              data?.map((data , index) => (
                  <AuthorsCard key={index} data={data}/>
              ))
          }
      </div>
    </div>
  );
}
