'use client';
import Image from 'next/image';
import React, {useRef} from 'react';
import ArrowLink from '../arrow-link/arrow-link';
import {motion , useInView} from "framer-motion";

export default function AuthorCard() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});

    function text (text) {
        text = text.split(" ");
        let i =0;
        let result = "";
        if(window.innerWidth > 765 && window.innerWidth < 1280) {
            while (i<40) {
                result += text[i] + "\t";
                i++;
            }
        } else if (window.innerWidth > 1280 && window.innerWidth < 1366){
            while (i<60) {
                result += text[i] + "\t";
                i++;
            }
            } else if (window.innerWidth > 1366) {
            while (i<text.length) {
                result += text[i] + "\t";
                i++;
            }
        } else {
            while (i<text.length) {
                result += text[i] + "\t";
                i++;
            }
        }
        return result;
    }
  return (
    <motion.div
        ref={ref}
        initial={{y : 50 , opacity : 0}}
        animate={isInView ? {y : 0 , opacity :1} : {}}
        transition={{duration : 0.5 , delay : 0.5}}
        className="border-4 border-black p-8 w-full md:w-[48%] mt-7 flex flex-col items-end">
      {/* it has four rows */}
      <div className="w-full h-[200px] lg:h-[350px] relative overflow-hidden">
        <Image
          src="/assets/img/rahnavard.png"
          alt=""
          fill
          className="absolute object-contain hover:scale-110 transition-all duration-300"
        />
      </div>
      <div>
        <h3 className="font-common-lg mt-5 text-28px md:text-30px lg:text-59px">رهنورد زریاب</h3>
      </div>
      <div>
        <p className="rtl mt-4 font-common text-10px md:text-12px lg:text-17px">
            {text("حمداعظم رهنورد زریاب در سوم سنبله سال ۱۳۲۳ در کابل چشم به جهان گشود. پدرش از غزنی و مادرش از شمال کشور بود. وی از تاجکی اهل سنت افغانستان بود. زریاب بعد از به پایان رساندن لیسه حبیبیه وارد دانشگاه کابل شد و رشته خبرنگاری را انتخاب کرد. مدتی پس از پایان تحصیل با استفاده از یک بورس تحصیلی به بریتانیا رفت و از دانشگاه ویلز جنوبی گواهی‌نامه کارشناسی ارشد گرفت. رهنورد زریاب در اوایل ده ۱۳۷۰ خورشیدی به فرانسهٔ مهاجرت کرد و پس از سقوط طالبان به کابل بازگشت و برای مدتی به عنوان  مشاور وزارت اطلاعات و فرهنگ کار کرد.")}
        </p>
      </div>
      <div className="w-full flex justify-center items-center mt-7">
        <ArrowLink title="بیشتر بخوانید" />
      </div>
    </motion.div>
  );
}
