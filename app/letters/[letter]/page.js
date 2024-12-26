'use client';
import Heading1 from "../../components/heading-1/heading-1";

import Image from "next/image";
import {useRef, useState} from "react";
import ArchivedLettersSection from "@/app/components/archived-letters-section/archived-letters-section";
import Podcasts from "@/app/components/podcasts/podcasts";
import {useInView , motion} from "framer-motion";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

export default function LetterSinglePage() {
    const images = ['paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'
        , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'
        , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'
        , 'paper.png' , 'paper.png' , 'paper.png' , 'paper.png'];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [modal , setModal] = useState(false);

    const handleForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleBackward = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1 , {once : true});
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2 , {once : true});
    const ref3 = useRef(null);
    const isInView3 = useInView(ref3 , {once : true});
    return (
        // main container of the page
        <div className="container container-main mx-auto">
            {/*  the number  */}
            <motion.div
                ref={ref1}
                initial={{y : 50 , opacity : 0}}
                animate={isInView1 ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="w-full flex flex-row-reverse mt-14">
                <Heading1 title="1"/>
            </motion.div>
            {/*  title of the letter  */}
            <motion.div
                ref={ref1}
                initial={{y : 50 , opacity : 0}}
                animate={isInView1 ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5 , delay : 0.5}}
                className="w-full flex flex-row-reverse mt-7">
                <Heading1 title="به یاد نادیه انجمن"/>
            </motion.div>
            {/* border */}
            <motion.div
                ref={ref1}
                initial={{width : 0 , opacity : 0}}
                animate={isInView1 ? {width : "100%" , opacity : 1} : {}}
                transition={{duration : 0.5 , delay : 1}}
                className="w-full h-1 bg-black mt-7"></motion.div>
            {/*  the letter pictures  */}
            <div className="w-full mt-14 overflow-hidden flex flex-col justify-center items-center overflow-x-hidden">
                <motion.div
                    ref={ref2}
                    initial={{y : 50 , opacity : 0}}
                    animate={isInView2 ? {y : 0 , opacity : 1} : {}}
                    transition={{duration : 0.5 , delay : 1.5}}
                    className="w-full flex flex-wrap justify-between">
                    {
                        images.map((letter , index) => (
                            <div className="w-full md:w-[45%] lg:w-[30%] xl:w-[23%] flex flex-col items-center mt-7 cursor-pointer"
                                 onClick={() => setModal(true)}
                                 key={index}>
                                <div className="w-full flex justify-center items-center p-3 border-4 border-black">
                                    <div className="w-full h-[350px] md:h-[300px] lg:h-[270px] xl:h-[250px] m-3 relative">
                                        <Image src={`/assets/img/${letter}`} alt="letter page" layout="fill" objectFit="cover"
                                               className="absolute"/>
                                    </div>
                                </div>
                                <div className="text-30px border-4 border-black px-6 py-2 mt-3">
                                    {index + 1}
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
            <motion.div
                ref={ref3}
                initial={{width : 0 , opacity : 0}}
                animate={isInView3 ? {width : "100%" , opacity : 1} : {}}
                transition={{duration : 0.5 , delay : 1}}
                className="w-full h-1 bg-black mt-14"></motion.div>

            {/*  the letter archive  */}
            <div className="mt-14">
                <ArchivedLettersSection/>
            </div>


            <div className="w-full h-1 bg-black mt-14"></div>
            {/*  podcast section  */}

            <div className="mt-14 mb-14">
                <Podcasts/>
            </div>

        {/*  the image slider section  */}
            <div className={`fixed top-0 bottom-0 left-0 right-0 bg-modal flex flex-row ${modal ? 'block' : 'hidden'}`}>
                <div className="relative w-full h-full py-5 overflow-hidden flex items-center justify-center">
                    {/* Images */}
                    <div className="w-full h-full relative">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-transform duration-700 ease-in-out flex justify-center items-center
                                    ${index === currentIndex ? "translate-x-0" :
                                    index < currentIndex ? "-translate-x-full" : "translate-x-full"}`}
                            >
                                <div className="w-full md:w-[80%] h-full relative">
                                    <Image
                                        src={`/assets/img/${image}`}
                                        alt={`Slide ${index}`}
                                        fill
                                        className="absolute object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handleBackward}
                        className="absolute text-60px left-4 bottom-0 md:top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    >
                        <LuChevronLeft />
                    </button>
                    <button
                        onClick={handleForward}
                        className="absolute text-60px right-4 bottom-0 md:top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    >
                        <LuChevronRight />
                    </button>
                </div>
                <div className="fixed top-2 text-30px text-white right-2 cursor-pointer" onClick={() => setModal(false)} >
                    <IoCloseOutline />
                </div>
            </div>
        </div>
    );
}