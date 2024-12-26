'use client';
import Image from "next/image";
import Link from "next/link";
import Heading1 from "../heading-1/heading-1";
import {motion , useInView} from "framer-motion";
import {useRef} from "react";

export  default  function Book() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1 , {once : true});
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2 , {once : true});
    const ref3 = useRef(null);
    const isInView3 = useInView(ref3 , {once : true});
    return (
    <div className="flex flex-col items-end">
            <motion.div
                ref={ref3}
                initial={{y : 50 , opacity : 0}}
                animate={isInView3 ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="flex flex-row-reverse"
            >
                <Heading1 title="کتاب هفته" />
            </motion.div>
        <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-between mt-7">

            {/*  it has two columns  */}
            <motion.div
                ref={ref2}
                initial={{y : 50 , opacity : 0}}
                animate={isInView2 ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5 , delay : 0.5}}
                className="w-full md:w-1/2 flex flex-col items-end">
                <div className="relative w-full h-[455px] md:h-[740px] flex flex-col">
                    <Image src="/assets/img/book.png" alt="" fill className="absolute object-contain" />
                </div>
            </motion.div>
            <div className="flex flex-col w-full justify-between md:w-1/2 items-end lg:pr-5">
                <div className="flex flex-col w-full items-end">
                    <motion.h3
                        ref={ref1}
                        initial={{y: 50, opacity: 0}}
                        animate={isInView1 ? {y: 0, opacity: 1} : {}}
                        transition={{duration: 0.5, delay: 1}}
                        className="font-common-lg text-27px lg:text-65px flex flex-col items-end justify-between lg:mt-5">
                        هریپاتر و سنگ فلاسفر
                    </motion.h3>
                    <motion.div
                        ref={ref}
                        initial={{y: 50, opacity: 0}}
                        animate={isInView ? {y: 0, opacity: 1} : {}}
                        transition={{duration: 0.5, delay: 1.5}}
                        className="rtl mt-7 font-common-regular hidden lg:block">
                        <p className="">
                            اگر به دنبال کتابی هستید که شما را به دنیایی پر از جادو، دوستی، و ماجراجویی ببرد، "هری پاتر
                            و سنگ جادو" اثر جی. کی. رولینگ انتخابی بی‌نظیر است. این کتاب نه تنها برای کودکان و نوجوانان،
                            بلکه برای بزرگسالانی که در پی لمس دوباره تخیلات کودکی هستند نیز جذاب خواهد بود. داستان با
                            پسری به نام هری آغاز می‌شود که در سن یازده سالگی متوجه می‌شود که در حقیقت یک جادوگر است. او
                            وارد مدرسه‌ای به نام هاگوارتز می‌شود؛ جایی که با دوستان جدیدش، هرمیون و رون، همراه می‌شود و
                            ماجراهای شگفت‌انگیزی را تجربه می‌کند.
                        </p>
                        <p className="mt-3">
                            رولینگ با قلمی بسیار توانمند، دنیایی را خلق کرده است که هر صفحه‌اش خواننده را به خود جذب
                            می‌کند. دنیای جادوگران با تمامی جزئیات، از چوبدستی‌های جادویی گرفته تا مسابقات کوییدیچ، همه
                            و همه با چنان دقتی توصیف شده‌اند که گویی شما خودتان در این دنیا زندگی می‌کنید. شخصیت‌های
                            کتاب نیز عمیق و چندلایه هستند؛ از دلیرانه‌های هری گرفته تا درایت هرمیون و شوخ‌طبعی رون.
                        </p>
                        <p className="mt-3">
                            این کتاب صرفاً یک داستان ماجراجویی نیست؛ بلکه درس‌هایی از دوستی، شجاعت، و رویارویی با ترس‌ها
                            را نیز در دل خود جای داده است. "هری پاتر و سنگ جادو" سفری است به قلب دنیایی که به هرکس
                            یادآوری می‌کند که حتی در تاریک‌ترین لحظات، جادو همیشه وجود دارد—اگر بدانیم کجا به دنبالش
                            بگردیم.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    {/*  buttons   */}
        <div className="w-full gap-4 grid grid-cols-2">
            <Link href="#" className="w-full h-[50px] lg:h-[100px] bg-black flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-black hover:bg-white transition-all duration-500 border-4 border-black">
                دانلود کتاب
            </Link>
            <Link href="/literarywritings/book/bookid" className="w-full h-[50px] lg:h-[100px] bg-footerBtn flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-footerBtn hover:bg-white transition-all duration-500 border-4 border-footerBtn">
                خلاصه کتاب
            </Link>
        </div>
    </div>
    );
}