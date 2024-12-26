'use client';
import {motion, useInView} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Heading1 from "@/app/components/heading-1/heading-1";
import Authors from "@/app/components/authors/authors";
import {useRef} from "react";
import {useState , useEffect} from "react";
import axios from "@/utils/api";
import ArrowLink from "@/app/components/arrow-link/arrow-link";
import AuthorsCard from "@/app/components/authors-card/authors-card";

export default function AuthorPage({params}) {
    const [data , setData] = useState(null);
    const [Error , setError] = useState(null);
    const [similarData , setSimilarData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`/v1/authors/${params.author}`);
                setData(response.data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/v1/similar_authors/${params.author}?per_page=8`);
                setSimilarData(response.data.authors);
            } catch (err) {
                setError(err.respons?.data.message || err.message);
            }
        }
        fetchData();
    },[])
    console.log(similarData);
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});

    return(
        // the main container of the page
        <div className="container container-main mx-auto">
        {/* the author section */}
            <div className="flex flex-col md:flex-row-reverse mt-7">
                {/*  it has 7 rows  */}
                <motion.div
                    ref={ref}
                    initial={{y : 50 , opacity : 0}}
                    animate={isInView ? {y : 0 , opacity : 1} : {}}
                    transition={{duration : 0.5}}
                    className="w-full md:w-1/2 xl:w-1/3 border-2 border-black p-7">
                    <div className='w-full h-[250px] lg:h-[300px] xl:h-[250px] relative'>
                        <Image src={data?.featured_image} alt="" layout='fill' objectFit="cover" className="absolute"/>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{y : 50 , opacity : 0}}
                    animate={isInView ? {y : 0 , opacity : 1} : {}}
                    transition={{duration : 0.5 , delay : 1}}
                    className="w-full md:w-1/2 xl:w-3/4 mt-5 md:mt-0 flex flex-col justify-end mr-7">
                    <div className="font-common-heavy text-50px md:text-60px rtl text-black">
                        {data?.title}
                    </div>
                    <div className="flex rtl mt-7 text-black">
                        <div className="font-common-heavy text-20px">موقعیت:</div>
                        <div className="font-common-regular text-20px">{data?.meta.location}</div>
                    </div>
                    <div className="flex rtl mt-3 text-black">
                        <div className="font-common-heavy text-20px">وظیفه:</div>
                        <div className="font-common-regular text-20px">{data?.meta.job}</div>
                    </div>
                    <div className="flex rtl mt-3 text-black">
                        <div className="font-common-heavy text-20px">تعداد نوشته ها:</div>
                        <div className="font-common-regular text-20px">{data?.meta.sum_topics}</div>
                    </div>
                    <div className="flex rtl mt-3 text-black">
                        <div className="font-common-heavy text-20px">سن:</div>
                        <div className="font-common-regular text-20px">{data?.meta.age}</div>
                    </div>
                    <div className="flex mt-3 justify-end">
                        <Link href={data?.meta.facebook_link || '#'}>
                            <Image
                                src='/assets/svg/facebook.svg'
                                alt="facebook logo"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href={data?.meta.instagram_link || '#'}>
                            <Image
                                src='/assets/svg/instagram.svg'
                                alt="instagram logo"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href={data?.meta.telegram_link || '#'}>
                            <Image
                                src='/assets/svg/telegram.svg'
                                alt="telegram logo"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link href={data?.meta.youtube_link || '#'}>
                            <Image
                                src='/assets/svg/youtube.svg'
                                alt="youtube logo"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                </motion.div>
            </div>
        {/*  introduction section  */}
            <div>
            {/*  title  */}
                <motion.div
                    ref={ref}
                    initial={{y : 50 , opacity : 0}}
                    animate={isInView ? {y : 0 , opacity : 1} : {}}
                    transition={{duration : 0.5 , delay : 1.5}}
                    className="flex flex-row-reverse mt-14">
                    <Heading1 title="معرفی نامه" />
                </motion.div>
            {/*  the text  */}
                <motion.div
                    ref={ref}
                    initial={{y : 50 , opacity : 0}}
                    animate={isInView ? {y : 0 , opacity : 1} : {}}
                    transition={{duration : 0.5 , delay : 2}}
                    dangerouslySetInnerHTML={{ __html:  data?.content}}
                    className="font-common-regular w-full text-justify md:text-right text-20px lg:text-25px xl:text-30px rtl mt-7"></motion.div>
            </div>
            {/* authors section */}
            <div className="mt-7">
                <div className="flex flex-col">
                    {/* it have two rows */}
                    <motion.div
                        ref={ref}
                        initial={{y: 5, opacity: 0}}
                        animate={isInView ? {y: 0, opacity: 1} : {}}
                        transition={{duration: 0.5}}
                        className="flex flex-col-reverse items-end w-full lg:flex-row-reverse md:justify-between">
                        <Heading1 title="نویسنده ها و شاعران آوای زریاب"/>
                        <ArrowLink title="همه نویسنده و شاعران"/>
                    </motion.div>
                    <div className="flex flex-wrap justify-between mt-7">
                        {
                            similarData?.map((data, index) => (
                                <AuthorsCard key={index} data={data}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}