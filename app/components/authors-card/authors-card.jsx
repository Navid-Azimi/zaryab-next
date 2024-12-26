'use client';
import Image from "next/image";
import {motion , useInView} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";

export default  function AuthorsCard({data}) {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return (
        <motion.div
            ref={ref}
            initial={{y : 50 , opacity : 0}}
            animate={isInView ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5 , delay : 0.5}}
            className="w-full xl:w-[49%]  p-4 border-4 border-black mb-6">
       <Link href={`/authors/${data?.slug}`} className="w-full h-full flex flex-row-reverse md:justify-between">
           {/*  it has two columns  */}
           <div className="relative w-1/3 lg:w-1/4 xl:w-1/3 h-[85px] md:h-[184px] xl:h-[150px] overflow-hidden">
               <Image src={data?.featured_image} alt="author image" layout='fill' objectFit="cover" className="absolute
                hover:scale-110 transition-all duration-300" />
           </div>
           <div className="flex flex-col items-end justify-center w-2/3 lg:w-3/4 pr-4">
               <div>
                   <h3 className="font-common-heavy text-25px md:text-50px xl:text-30px">{data?.title}</h3>
               </div>
               <div className="flex flex-row-reverse justify-between w-full">
                   <p className="font-common-thin text-6px md:text-16px xl:text-12px">
                       <b className="font-common-med text-6px  md:text-16px xl:text-12px">وظیفه:</b>
                       {data?.meta?.job}
                   </p>
                   <p className="font-common-thin text-6px  md:text-16px xl:text-12px">
                       <b className="font-common-med text-6px  md:text-16px xl:text-12px">شهر:</b>
                       {data?.meta?.location}
                   </p>
                   <p className="font-common-thin text-6px  md:text-16px xl:text-12px">
                       <b className="font-common-med text-6px  md:text-16px xl:text-12px">تعداد نوشته ها:</b>
                       {data?.meta?.sum_topics}
                   </p>
               </div>
           </div>
       </Link>
        </motion.div>
    );
}