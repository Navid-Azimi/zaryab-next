'use client';
import Image from "next/image";
import {motion, useInView} from "framer-motion";
import Link from "next/link";
import ArrowLink from "@/app/components/arrow-link/arrow-link";
import Heading1 from "@/app/components/heading-1/heading-1";
import StoryPageCard from "@/app/components/story-page-card/story-page-card";
import Authors from "@/app/components/authors/authors";
import {useRef} from "react";
import SimilarStories from "@/app/components/similar-storyies/similar-stories";

export default function ArticleSinglePage() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1 , {once : true});
    return (
        // the main container of the page
        <div className="container container-main mx-auto">
        {/*  the picture of the article  */}
            <motion.div
                ref={ref1}
                initial={{y : 50 , opacity : 0}}
                animate={isInView1 ? {y : 0 , opacity : 1} : {}}
                transition={{duration : 0.5}}
                className="w-full px-5 py-3 md:px-10 md:py-6 lg:px-16 lg:py-10 border-2 border-black mt-14">
                <div className="w-full bg-red-500 h-[150px] md:h-[310px] lg:h-[400px] xl:h-[528px] relative">
                    <Image src="/assets/img/article-single-page-picture.png" layout="fill" objectFit="cover" alt="" fill className="absolute" />
                </div>
            </motion.div>
            {/*  the title section of the article  */}
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
                            className="w-full flex flex-row-reverse">
                            <Heading1 title="عنوان مقاله" />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{y : 50 , opacity : 0}}
                            animate={isInView ? {y : 0 , opacity : 1} : {}}
                            transition={{duration : 0.5 , delay : 1}}
                            className="w-full flex flex-row-reverse items-center mt-14">
                            {/* time */}
                            <div className="w-[22%] flex flex-row-reverse justify-between pl-3 items-end">
                                <div className="rtl flex text-right">
                                    <b className="font-common-bold text-6px md:text-7px lg:text-12px mt-2 md:mt-1 lg:mt-0">زمان:</b>
                                    <p className="font-common-thin text-6px md:text-7px lg:text-12px">12</p>
                                    <p className="font-common-thin text-6px md:text-7px lg:text-12px">دقیقه</p>
                                </div>
                                <div className="rtl flex text-right">
                                    <b className="font-common-bold text-6px md:text-7px lg:text-12px mt-2 md:mt-1 lg:mt-0">تاریخ:</b>
                                    <p className="font-common-thin text-6px md:text-7px lg:text-12px">1403/12/05</p>
                                </div>
                            </div>
                            {/* genre */}
                            <div className="w-[78%] flex justify-between items-center mr-3 md:mr-0">
                                <div className="w-[10%] relative flex justify-center items-center group pb-1">
                                    <Link
                                        href="#"
                                        className="font-common-thin text-5px md:text-10px lg:text-14px"
                                    >
                                        علمی تخیلی
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
                                <div className="w-[10%] relative flex justify-center items-center group pb-1">
                                    <Link
                                        href="#"
                                        className="font-common-thin text-5px md:text-10px lg:text-14px"
                                    >
                                        علمی تخیلی
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
                                <div className="w-[10%] relative flex justify-center items-center group pb-1">
                                    <Link
                                        href="#"
                                        className="font-common-thin text-5px md:text-10px lg:text-14px"
                                    >
                                        علمی تخیلی
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
                                <div className="w-[10%] relative flex justify-center items-center group pb-1">
                                    <Link
                                        href="#"
                                        className="font-common-thin text-5px md:text-10px lg:text-14px"
                                    >
                                        علمی تخیلی
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
                                <div className="w-[10%] relative flex justify-center items-center group pb-1">
                                    <Link
                                        href="#"
                                        className="font-common-thin text-5px md:text-10px lg:text-14px"
                                    >
                                        علمی تخیلی
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
                                <div className="w-[10%] relative flex justify-center items-center group pb-1">
                                    <Link
                                        href="#"
                                        className="font-common-thin text-5px md:text-10px lg:text-14px"
                                    >
                                        علمی تخیلی
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
                            </div>
                        </motion.div>
                    </div>
                    {/*  the story text  */}
                    <motion.div
                        ref={ref}
                        initial={{y : 50 , opacity : 0}}
                        animate={isInView ? {y : 0 , opacity : 1} : {}}
                        transition={{duration : 0.5 , delay : 0.5}}
                        className="font-common-lg text-10px md:text-18px rtl mt-7">
                        خُردسال بودیم که زن‌های خانواده بی‌‌بی را شستند و مرد ها تابوتش را روی شانه‌ها بردند و به گور سپردند. بی‌بی را این‌طور به یاد می‌آورم: زنی با صورت پر از چروک، چشم‌های میشی و درشت، بینی کشیده و با خال سیاهی زیر لب پایین. همین و بس! هر بار که به او فکر می‌کنم سیمای او با همین جزئیات در نظرم مجسم می‌شود.  بعد سیمای او صندوقچه کوچک او دم نظرم می‌آید و یک قفل سبزرنگ که همیشه از این صندوقچه آویزان بود. کلید اتاقش و کلید آن قفل زنگ‌زده با تاری که سال‌ها می‌شد رنگش را باخته بود، مدام از گردنش آویزان بود. صندوقچه او به راز سرمهری تبدیل شده بود. هیچ‌کسی نمی‌دانست داخل آن بی‌بی چه دارد. تا چشم کسی به کلیدهای گردن بی‌بی می‌افتاد، می‌گفت:
                        «بی‌بی گنج  "قایم" داری؟!»
                        این‌طور می‌گفتند و می‌خندیدند و بی‌بی پاسخ همیشگی‌اش را می‌داد. نه رد می‌کرد و نه تائید.

                        «کار از محکم‌کاری عیب نمی‌کند. روز مبادایی دارم.»
                        ما نمی‌دانستیم این روز "مبادا" چیست و کدام روز است. تا این که در یک نیمه‌شب زمستان سرد و خشک بی بی مُرد.
                        «بی بی مُرد!»
                        پدر همین‌طور ساده و خالی از احساسات خبر مرگ او را به ما رساند. آن‌روزها ما در کمر کوه زندگی می‌کردیم و شهر پایین کوه بود. کودک‌ها به ندرت به شهر می‌رفتند و اکثراً هیچ تصوری از شهر نداشتند. پدر می‌گفت وقتی از کوه پایین شوی و به شهر بروی خانه ما از همه جا معلوم و با انگشت اشاره می‌توانی به هرکسی آدرس بدهی.
                        سال‌ها بعد وقتی از آن خانه کوچ کردیم و شهری شدیم من دوست داشتم آن خانه را به همه نشان بدهم و بگویم:
                        «نگاه کن! وقتی من خردسال بودم، در آن خانه زندگی می‌کردم.»
                        صبح بی‌بی را از کوه پایین بُردند و ما دیگر او را ندیدیم. شب زن‌ها و مردهای زیادی از کوه و شهر به خانه ما آمدند. در خانه ما تا سه روز  به روی هیچ‌کسی بسته نشد.
                        این همه آدم برای چه به خانه ما می‌آیند؟»
                        «برای بی‌بی»
                        «بی بی که مُرد!»
                        «برای غمشریکی و تسلیت»
                        مادر بیشتر از این چیزی نمی‌گفت و پدر انگار با آمدن مردم تازه فهمیده بود دوست‌داشتنی‌ترین موجود دنیا را از دست داده، گاهی اشک می‌ریخت و حال و هوای گپ‌زدن نداشت.من اما همه گرد مادر می‌گشتم تا باز چیزی بپرسم. او پیاله‌ها را صافی می‌زد که پرسیدم:
                        «بی‌بی را کجا بردند؟»
                        «گورستان»
                        عجیب بود. حیرت‌زده پرسیدم:
                        «چرا این مردم پیش او، گورستان نمی‌روند؟»
                        دست مادر با صافی و پیاله در هوا ماند. گاهی به من نگاه کرد و گاهی به انبوه ظرفی که در انتظار صافی‌زدن بودند. چندبار من‌من کرد و بالاخره گفت:
                        «برو بازی کن! تو هنوز یک خاشه هستی، کلان که شدی می‌فهمی.»
                        وقتی می‌گفت برو بازی کن، می‌دانستم که کجا را می‌گوید. هیچ‌وقتی اجازه نداشتیم به کوچه برویم. به ما گفته بودند کوچه جای لچک‌هاست. هرچند معنی لچک را نمی‌فهمیدیم، اما گمان ما این بود که به آدم‌های بد را لچک می‌گویند. بخاطر همین لُچَکّ‌ها بود که پدرم همیشه می‌گفت دَر حویلی قفل باشد. در بزرگ حویلی ما در طول یک شبانه‌روز دو بار باز می‌شد. یک‌بار وقتی پدر به خانه می‌آمد و یک‌بار هم وقتی که پدر از خانه می‌رفت.
                        روز سوم بود و باز هم در حویلی قفل نشد و پدر سرگردان می‌گشت و خستگی را می‌شد در سیمایش خواند که از او پرسیدم:
                        «این همه آدم برای چه به خانه ما می‌آیند؟»
                        «برای ختم بی‌بی»
                        «ختم؟! چند شب پیش ختم نشد؟»
                        «ختم قرآن، برای شادی روح بی‌بی.»
                        روز چهارم که شد، دیگر کسی به خانه ما نیامد. صبح شده بود و همه به جنب و جوش افتاده بودند؛ اما من دل برخاستن نداشتم و می‌خواستم ساعت دیگری هم خواب شوم که صدای مادر در گوشم پیچید:
                        «لباس‌هایش را خیرات می‌کنیم.»
                        صدای پدر آمد که با بی‌حوصلگی گفت:
                        «صندوقچه را هم باز کن!»
                        کنجکاوی نگذاشت که در زیر جایم بیشتر بمانم. فوری برخاستم و نشستم. دلم می‌خواست زودتر صندوقچه بی‌بی را باز کنند و من ببینم که او در آن صندوقچه پر رمز و راز چه دارد.

                    </motion.div>
                </div>
                {/* the author section */}
                <motion.div
                    ref={ref}
                    initial={{y : 50 , opacity : 0}}
                    animate={isInView ? {y : 0 , opacity : 1} : {}}
                    transition={{duration : 0.5 , delay : 2.5}}
                    className="w-full xl:w-[25%] mt-14 xl:mt-36 flex flex-row-reverse md:items-center xl:flex-col items-end">
                    {/*  it has 7 rows  */}
                    <div className="w-1/2 xl:w-full border-2 border-black p-3 md:p-7">
                        <div className='w-full h-[130px] md:h-[250px] lg:h-[350px] xl:h-[213px] relative'>
                            <Image src='/assets/img/authorPic.png' alt="" fill className="absolute object-contain"/>
                        </div>
                    </div>
                    <div className="w-1/2 xl:w-full flex flex-col items-end mr-7 xl:mr-0">
                        <div className="font-common-heavy text-25px md:text-50px rtl mt-7 md:mt-0 xl:mt-7 text-black">
                            باسط یزدانی
                        </div>
                        <div className="flex rtl md:mt-7 text-black">
                            <div className="font-common-heavy text-10px md:text-18px">موقعیت:</div>
                            <div className="font-common-regular text-10px md:text-18px">هرات، اففانستان</div>
                        </div>
                        <div className="flex rtl mt-3 text-black">
                            <div className="font-common-heavy text-10px md:text-18px">وظیفه:</div>
                            <div className="font-common-regular text-10px md:text-18px">انجینیر ساختمان</div>
                        </div>
                        <div className="flex rtl mt-3 text-black">
                            <div className="font-common-heavy text-10px md:text-18px">تعداد نوشته ها:</div>
                            <div className="font-common-regular text-10px md:text-18px">3000</div>
                        </div>
                        <div className="flex rtl mt-3 text-black">
                            <div className="font-common-heavy text-10px md:text-18px">سن:</div>
                            <div className="font-common-regular text-10px md:text-18px">19</div>
                        </div>
                        <div className="flex md:mt-3">
                            <Link href="#">
                                <Image
                                    src='/assets/svg/facebook.svg'
                                    alt="facebook logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src='/assets/svg/instagram.svg'
                                    alt="instagram logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src='/assets/svg/telegram.svg'
                                    alt="telegram logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href="#">
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
                    <SimilarStories/>
                </div>
            </div>
            {/* the poems section of the page */}
            <div>
                <div className="flex justify-between flex-row-reverse mt-14">
                    <Heading1 title="اشعار" />
                    <ArrowLink title="همه اشعار" />
                </div>
                <div className="w-full flex justify-between mt-7 flex-wrap">
                    <StoryPageCard />
                    <StoryPageCard />
                    <StoryPageCard />
                </div>
            </div>
            {/*  the author section  */}
            <div className="mt-14 mb-14">
                <Authors />
            </div>
        </div>
    );
}