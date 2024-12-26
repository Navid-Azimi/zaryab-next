'use client';
import React, {useRef} from 'react';
import Heading1 from '../heading-1/heading-1';
import AuthorCard from '../author-card/author-card';
import {motion , useInView} from "framer-motion";

export default function AuthorWeek() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
  return (
    <section className="flex flex-col items-end">
      {/* it has two rows */}
      <motion.div
        ref={ref}
        initial={{y : 50 , opacity : 0}}
        animate={isInView ? {y : 0 , opacity : 1} : {}}
        transition={{duration : 0.5}}
        className="flex flex-row-reverse"
      >
        <Heading1 title="نویسنده و شاعر هفته" />
      </motion.div>
      <div className="mt-7 w-full flex flex-col md:flex-row justify-between">
        <AuthorCard />
        <AuthorCard />
      </div>
    </section>
  );
}
