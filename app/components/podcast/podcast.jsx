'use client';
import Image from "next/image";
import {motion , useInView} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";

export default  function Podcast({data}) {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return (
        // it has two rows
        <motion.div
            ref={ref}
            initial={{y : 50 , opacity : 0}}
            animate={isInView ? {y : 0 , opacity : 1} : {}}
            transition={{duration : 0.5 , delay : 0.5}}
            className="w-full md:w-1/2 xl:w-1/3 mt-7 md:mt-0 border-2 border-black p-5">
            {/*  it has two rows  */}
            <Link
                className="w-full"
                href={`/podcasts/${data?.slug}`}>
                <div className="w-full flex flex-col items-end">
                    {/*  it has two rows  */}
                    <div className="w-full h-[240px] md:h-[300px] lg:h-[400px] xl:h-[330px] relative overflow-hidden">
                        <Image src={data?.featured_image} alt="" layout="fill" objectFit="cover" className="absolute
                    hover:scale-110 transition-all duration-300"/>
                    </div>
                    <div>
                        <h3 className="font-common-heavy rtl text-30px md:text-36px mt-3">{data?.title}</h3>
                    </div>
                </div>
                <div>
                    {/*  it has tow rows  */}
                    <div className="mt-3">
                        <div className="rtl flex">
                            <p className="font-common-heavy text-xl text-20px ">میزبان:</p>
                            <p className="font-common-regular text-xl text-20px ">{data?.meta.host_name}</p>
                        </div>
                        <div className="rtl flex">
                            <p className="font-common-heavy text-xl text-20px ">مهمان:</p>
                            <p className="font-common-regular text-xl text-20px ">{data?.meta.guest_name}</p>
                        </div>
                    </div>
                    <div className="rtl flex mt-3">
                        <div className="flex ml-4">
                            <p className="font-common-heavy text-12px md:text-18px">تاریخ:</p>
                            <p className="font-common-regular text-12px md:text-18px">{data?.meta.podcast_date_shamsi}</p>
                        </div>
                        <div className="flex">
                            <p className="font-common-heavy text-12px md:text-18px">طول:</p>
                            <p className="font-common-regular text-12px md:text-18px">
                                <span
                                    className="font-common-heavy text-12px md:text-18px">{data?.meta.podcast_duration}</span>
                                دقیقه
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}