
'use client';
import Link from "next/link";
import Image from "next/image";
import ArrowLink from "../../../components/arrow-link/arrow-link";
import Heading1 from "../../../components/heading-1/heading-1";
import StoryPageCard from "../../../components/story-page-card/story-page-card";
import Authors from "../../../components/authors/authors";
import {useRef , useState , useEffect} from "react";
import {useInView , motion} from "framer-motion";
import SimilarStories from "@/app/components/similar-storyies/similar-stories";
import axios from "@/utils/api";
import SimilarPoems from "@/app/components/similar-poems/similar-poems";


export default function PoemsSinglePage({params}) {

    // fetch data
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`v1/poem/${params.poems}`);
                setData(response.data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            }
        }
        fetchData();
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return(
        // the main container of the page
        <div className="container container-main mx-auto">
            {/*  it has two columns  */}
            <div className="w-full flex flex-col xl:flex-row-reverse">
                {/*  the story section */}
                <div className="w-full xl:w-[75%] pl-5">
                    {/*  the title section of the story  */}
                    <div className="mt-14 flex flex-col items-end">
                        <motion.div
                            ref={ref}
                            initial={{y : 50 , opacity : 0}}
                            animate={isInView ? {y : 0 , opacity : 1} : {}}
                            transition={{duration : 0.5}}
                            className="font-new-black text-50px md:text-60px lg:text-94px flex flex-col rtl items-end">
                            {data?.title}
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{y : 50 , opacity : 0}}
                            animate={isInView ? {y : 0 , opacity : 1} : {}}
                            transition={{duration : 0.5 , delay : 0.5}}
                            className="flex flex-row-reverse rtl font-common-heavy text-10px md:text-16px lg:text-25px xl:mt-14">
                            از مجموعه مترسگ متحرک
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{y : 50 , opacity : 0}}
                            animate={isInView ? {y : 0 , opacity : 1} : {}}
                            transition={{duration : 0.5 , delay : 1}}
                            className="w-full flex flex-row-reverse items-center">
                            {/* time */}
                            <div className="w-[22%] flex flex-row-reverse justify-between pl-3 items-end">
                                <div className="rtl flex text-right">
                                    <b className="font-common-bold text-6px md:text-7px lg:text-12px mt-2 md:mt-1 ml-1 lg:mt-0">زمان:</b>
                                    <p className="font-common-thin text-6px md:text-7px lg:text-12px">{data?.time}</p>
                                    <p className="font-common-thin text-6px md:text-7px lg:text-12px">دقیقه</p>
                                </div>
                                <div className="rtl flex text-right">
                                    <b className="font-common-bold text-6px md:text-7px lg:text-12px mt-2 md:mt-1 ml-1 lg:mt-0">تاریخ:</b>
                                    <p className="font-common-thin text-6px md:text-7px lg:text-12px">{data?.shamsi_date}</p>
                                </div>
                            </div>
                            {/* genre */}
                            <div className="w-[78%] flex justify-end gap-2 items-center">
                                {
                                    data?.categories.map((category , index) => (
                                        <div className="relative flex justify-center items-center group pb-1" key={index}>
                                            <Link
                                                href="#"
                                                className="font-common-thin text-5px md:text-10px lg:text-14px"
                                            >
                                                {category.title}
                                            </Link>
                                            <Image
                                                src="../../assets/svg/yellowCircle.svg"
                                                alt="photo"
                                                width={15}
                                                height={15}
                                                className="absolute right-0 -z-10 group-hover:rotate-90 transition-all duration-1000 hidden xl:block"
                                            />
                                            <div
                                                className="absolute right-0 opacity-0 -z-10 bg-[#FCA30A] w-[15px] h-[15px] rounded-full group-hover:opacity-100 transition-all duration-500 delay-500"></div>
                                        </div>
                                    ))
                                }
                            </div>
                        </motion.div>
                    </div>
                    {/*  the story text  */}
                    <motion.div
                        ref={ref}
                        initial={{y: 50, opacity: 0}}
                        animate={isInView ? {y: 0, opacity: 1} : {}}
                        transition={{duration: 0.5, delay: 1.5}}
                        dangerouslySetInnerHTML={{__html : data?.content}}
                        className="font-common-lg text-10px md:text-18px rtl mt-7"></motion.div>
                </div>
                {/* the author section */}
                <motion.div
                    ref={ref}
                    initial={{y: 50, opacity: 0}}
                    animate={isInView ? {y: 0, opacity: 1} : {}}
                    transition={{duration: 0.5, delay: 2}}
                    className="w-full xl:w-[25%] mt-14 xl:mt-64 flex flex-row-reverse md:items-center xl:flex-col items-end">
                    {/*  it has 7 rows  */}
                    <div className="w-1/2 xl:w-full border-2 border-black p-3 md:p-7">
                        <div className='w-full h-[130px] md:h-[250px] lg:h-[350px] xl:h-[213px] relative'>
                            <Image src={data?.author.featured_image} alt="" layout="fill" objectFit="cover" className="absolute"/>
                        </div>
                    </div>
                    <div className="w-1/2 xl:w-full flex flex-col items-end mr-7 xl:mr-0">
                        <div className="font-common-heavy text-25px md:text-50px rtl mt-7 md:mt-0 xl:mt-7 text-black">
                           <Link href={`/authors/${data?.author.slug}`}>
                               {data?.author.name}
                           </Link>
                        </div>
                        <div className="flex rtl md:mt-7 text-black">
                            <div className="font-common-heavy text-10px md:text-18px ml-1">موقعیت:</div>
                            <div className="font-common-regular text-10px md:text-18px">{data?.author.location}</div>
                        </div>
                        <div className="flex rtl mt-3 text-black">
                            <div className="font-common-heavy text-10px md:text-18px ml-1">وظیفه:</div>
                            <div className="font-common-regular text-10px md:text-18px">{data?.author.job}</div>
                        </div>
                        <div className="flex rtl mt-3 text-black">
                            <div className="font-common-heavy text-10px md:text-18px ml-1">تعداد نوشته ها:</div>
                            <div className="font-common-regular text-10px md:text-18px">3000</div>
                        </div>
                        <div className="flex rtl mt-3 text-black">
                            <div className="font-common-heavy text-10px md:text-18px ml-1">سن:</div>
                            <div className="font-common-regular text-10px md:text-18px">{data?.author.age}</div>
                        </div>
                        <div className="flex md:mt-3">
                            <Link href={data?.author.facebook_link || '#'}>
                                <Image
                                    src='/assets/svg/facebook.svg'
                                    alt="facebook logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href={data?.author.instagram_link || '#'}>
                                <Image
                                    src='/assets/svg/instagram.svg'
                                    alt="instagram logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href={data?.author.telegram_link || '#'}>
                                <Image
                                    src='/assets/svg/telegram.svg'
                                    alt="telegram logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href={data?.author.youtube_link || '#'}>
                                <Image
                                    src='/assets/svg/youtube.svg'
                                    alt="youtube logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/*  the similar stories  */}
            <div className="w-full flex justify-end">
                <div className="w-full xl:w-[75%]">
                   <SimilarPoems slug={params.poems}/>
                </div>
            </div>
            {/* the story section of the page */}
            <div>
                <div className="flex justify-between flex-row-reverse mt-14">
                    <Heading1 title="داستان ها"/>
                    <ArrowLink title="همه داستان ها"/>
                </div>
                <div className="w-full flex justify-between mt-7 flex-wrap">
                    <StoryPageCard/>
                    <StoryPageCard/>
                    <StoryPageCard/>
                </div>
            </div>
            {/*  the author section  */}
            <div className="mt-14 mb-14">
                <Authors/>
            </div>
        </div>
    );
}