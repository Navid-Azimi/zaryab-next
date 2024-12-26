'use client';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import Link2 from "@/app/components/link2/link2";

export default function Footer() {
    const [inputDisable , setInputDisable] = useState(true);
    return (
        <footer className="bg-footer">
            {/*main div of footer*/}
            <div className="w-full bg-footerPic bg-no-repeat bg-right-bottom bg-auto container-main mx-auto flex items-end flex-col">
            {/*  it has two rows  */}
                <div className="w-full flex flex-col lg:flex-row-reverse">
                {/*  it has two columns  */}
                    <div
                        className="flex w-full lg:w-1/3 flex-col md:flex-row-reverse md:justify-between lg:flex-col items-center md:items-start lg:items-end lg:p-7">
                        {/*  it has two rows  */}
                        <div className="w-full md:hidden lg:block md:w-1/2 h-[250px] lg:w-full relative md:mt-8 lg:mt-0 ml-2">
                            <Image src="/assets/svg/footerLogo.svg" alt="" layout="fill" objectFit="contain"
                                   className="absolute"/>
                        </div>
                        <div className="w-full hidden md:block lg:hidden md:w-1/2 h-[250px] lg:w-full relative md:mt-20 lg:mt-0 ml-2">
                            <Image src="/assets/svg/tablet-logo.svg" alt="" layout="fill" objectFit="contain"
                                   className="absolute"/>
                        </div>
                        <div className="flex flex-col md:w-1/2 w-full lg:w-full md:mt-20 lg:mt-0">
                            <div className="relative w-full h-[450px] lg:h-[430px]">
                                <Image src="/assets/img/mail.png" alt="" layout="fill" objectFit="cover" className="absolute"/>
                            </div>
                            <Link href="#" className="w-full h-10 mt-3 flex justify-center items-center font-common-heavy text-white
                            bg-footerBtn hover:bg-footer transition-all duration-500 border-2 border-footerBtn text-27px md:text-28px
                            ">خواندن
                                نامه</Link>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-2/3 flex-col items-end p-5 text-white">
                        {/*  it has three rows  */}
                        <div className="w-full flex flex-col items-end mt-10">
                        <h3 className="font-common-heavy text-26px md:text-36px">
                                ارسال نوشته ها
                            </h3>
                            <div className="rtl font-common-thin text-12 md:text-17 mt-7">
                                <p>نوشته های ادبی خود را جهت پخش با توجه به نوکات ذیل به ایمیل farsiwritings@avayezaryab.com ارسال نمایید.</p>
                                <p>۱.   نوشته های تان باید در فورمت های  docx. , .doc و txt. باشند.</p>
                                <p>۲. ایمیل ارسالی باید با موضوع (درخواست نشر) شروع شود.</p>
                                <p>۴. نوشته باید با ذکر کتگوری (ها) باشد.</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-end mt-14">
                            <h3 className="font-common-heavy text-26px md:text-36px">
                                ارسال مقاله
                            </h3>
                            <div className="rtl font-common-thin text-12 md:text-17 mt-7">
                                <p>نوشته های ادبی خود را جهت پخش با توجه به نوکات ذیل به ایمیل
                                    farsiwritings@avayezaryab.com ارسال نمایید.</p>
                                <p>۱. نوشته های تان باید در فورمت های docx. , .doc و txt. باشند.</p>
                                <p>۲. ایمیل ارسالی باید با موضوع (درخواست نشر) شروع شود.</p>
                                <p>۴. نوشته باید با ذکر کتگوری (ها) باشد.</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-end mt-14">
                            <h3 className="font-common-heavy text-26px md:text-36px">
                                عضویت در خبرنامه مان
                            </h3>
                            <div className="w-full rtl font-common-thin text-sm mt-7 lg:pl-28">
                                {inputDisable ? <div className="w-full"  onClick={() => {setInputDisable(false)}}>
                                 <input type="text" placeholder="yourmail@gmail.com" className="w-full p-1 md:p-3 border-4 border-footerBtn
                                bg-footer text-left outline-none cursor-pointer disabled"/>
                                </div>
                                    :
                                    <div className="w-full relative">
                                    <input type="text" className="w-full p-1 md:p-3 border-4 border-footerBtn
                                bg-white text-left outline-none text-footer ltr transition-all duration-700"/>
                                    <button
                                        className=" absolute h-[90%] pr-2 top-1 right-2 border-r-2 border-footerBtn rotate-180">
                                        <svg
                                            width="45"
                                            height="13"
                                            viewBox="0 0 45 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M6.74372 0.631282C6.40201 0.289573 5.84799 0.289573 5.50628 0.631282L0.256281 5.88128C-0.0854271 6.22299 -0.0854271 6.77701 0.256281 7.11872L5.50628 12.3687C5.84799 12.7104 6.40201 12.7104 6.74372 12.3687C7.08543 12.027 7.08543 11.473 6.74372 11.1313L2.9874 7.37497H44.125C44.6082 7.37497 45 6.98322 45 6.49997C45 6.01672 44.6082 5.62497 44.125 5.62497H2.98747L6.74372 1.86872C7.08543 1.52701 7.08543 0.97299 6.74372 0.631282Z"
                                                fill="#2F3030"
                                            />
                                        </svg>
                                    </button>
                                </div>}
                                <p className="mt-3 rtl font-common-thin text-12 md:text-17">با وارد کردن ایمیل تان در این جا شما به
                                    دریافت
                                    ایمل خبری در مورد آوای زریاد و موضوعات دیگر رضایت میدهید.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*footer links*/}
                <div className="w-full mt-7 mb-14">
                    <ul className="font-common-med text-footerBorder text-xl border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 border-footerBorder w-full mb-3
                    flex justify-end">
                        <div className="text-2xl py-3">
                            <Link2 title="کلبه"/>
                        </div>
                    </ul>

                    <ul className="font-common-med text-footerBorder text-xl border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 border-footerBorder w-full mb-3 py-3">
                        <table className="w-full text-right">
                            <tbody>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="نوشته های ادبی"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="شعر"/>
                                    </div>
                                </td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="داستان"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="نیمایی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="ترکیب بند"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="دوبیتی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="قصیده"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="قصه"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="داستانک"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="سپید"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="مستزاد"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="مثنوی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="غزل"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="رمان"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="داستان کوتاه"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="موج نو"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="چهارپاره"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="مسمط"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="قطع"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="نمایشنامه"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="داستان بلند"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">

                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="بهرطویل"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="ترجیع بند"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="رباعی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="فیلم نامه"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="رمان کوتاه"/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ul>

                    <ul className="font-common-med text-footerBorder text-xl border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 border-footerBorder w-full mb-3 py-3">
                        <table className="w-full text-right">
                            <tbody>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="مقاله ها"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="خبری"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="تحقیقی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="علمی"/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ul>

                    <ul className="font-common-med text-footerBorder text-xl border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 border-footerBorder w-full mb-3 py-3">
                        <table className="w-full text-right">
                            <tbody>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="نقد و نظر ها"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-2/6" colSpan="2">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="نوشته های نویسندگان مان"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="مقاله ها"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="کتاب ها"/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ul>

                    <ul className="font-common-med text-footerBorder text-xl border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 border-footerBorder w-full mb-3 py-3">
                        <table className="w-full text-right">
                            <tbody>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="نشست ها"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="خودمانی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="آموزشی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="ادبی"/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ul>

                    <ul className="font-common-med text-footerBorder text-xl border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 border-footerBorder w-full mb-3 py-3">
                        <table className="w-full text-right">
                            <tbody>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="نامه ها"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="آرشیو"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="پر بازدید ترین ها"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="جدید"/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ul>

                    <ul className="font-common-med text-footerBorder text-xl border-t-2 border-b-2 lg:border-t-4 lg:border-b-4 border-footerBorder w-full mb-3 py-3">
                        <table className="w-full text-right">
                            <thead></thead>
                            <tbody>
                            <tr className="h-10">
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6"></td>
                                <td className="w-1/6">
                                    <div className="text-2xl">
                                        <Link2 title="کتگوری ها"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="کامیک"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="دینی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="کودکان"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="تجارت"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="بیوگرافی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="هنر"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="تاریخی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="تاریخی تخیلی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="رمان تصویری"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="تخیلی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="رویایی(فانتزی)"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="رهنمای آشپزی"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="شاعرانه"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="غیرتخیلی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="رمزآلود"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="موسیقی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="خاطرات"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="ترسناک"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="خودسازی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="کمک به خود"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="علمی تخیلی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="علمی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="عاشقانه"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="روانشناسی"/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-10">
                                <td className="w-1/6">
                                </td>
                                <td className="w-1/6">
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="وطن دوستی"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="سفرنامه"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="هیجان انگیز"/>
                                    </div>
                                </td>
                                <td className="w-1/6">
                                    <div className="text-2xl font-thin">
                                        <Link2 title="ورزشی"/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
            <div className="bg-footerBorder hidden xl:flex">
                <div className="container container-main mx-auto flex justify-between py-7">
                    <div>
                        <p className="font-common-heavy text-30px">Designed and developred by Cyborg Tech</p>
                    </div>
                    <div>
                        <p className="font-common-heavy text-30px">دیزاین و ساخت وبسایت توست سایبُرگ تِک</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}