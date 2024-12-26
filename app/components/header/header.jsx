'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import Links from '../link/link';
import {useState} from "react";
import {usePathname} from "next/navigation";


export default function Header() {
  const [menu , setMenu] = useState(true);
  const pathname = usePathname();
  return (
    //the header tag is a row that has two column
      <header className="container mx-auto container-main flex flex-col mt-4">
        <div className="flex justify-between w-full">
          {/* the first column is for links search box and user icon it has two rows one for search box and user icon  and one for links and social media icons*/}
          <div className="w-10/12 h-28 hidden xl:block">
            {/* first row */}
            <div className="w-full h-1/2 flex justify-between items-center px-5">
              {/* user icon */}
              <Link
                  href={'#'}
                  className="cursor-pointer"
              >
                <Image
                    src={`${pathname === '/about' ? '/assets/svg/user-icon-white.svg' : '/assets/svg/user-icon.svg'}`}
                    alt="user icon"
                    width={25}
                    height={25}
                />
              </Link>
              {/* search box */}
              <div className={`flex border-b-2 w-1/2 ${pathname === '/about' ? 'border-white' : 'border-black'}`}>
                <input
                    type="text"
                    className={`outline-none w-full rtl px-1  ${pathname === '/about' ? 'bg-black text-white' : 'bg-white text-black'}`}
                />
                <IoIosSearch className={`text-xl ${pathname === '/about' ? 'text-white' : 'text-black'}`}/>
              </div>
            </div>

            {/* second row */}
            <div className="w-full h-1/2 flex justify-between items-center">
              {/* social media links */}
              <div className="flex w-[10%] justify-between items-center">
                <div className="flex">
                  <Link href="#">
                    <Image
                        src={`${pathname === '/about' ? '/assets/svg/facebook-white.svg' : '/assets/svg/facebook.svg'}`}
                        alt="facebook logo"
                        width={20}
                        height={20}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                        src={`${pathname === '/about' ? '/assets/svg/instagram-white.svg' : '/assets/svg/instagram.svg'}`}
                        alt="instagram logo"
                        width={20}
                        height={20}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                        src={`${pathname === '/about' ? '/assets/svg/telegram-white.svg' : '/assets/svg/telegram.svg'}`}
                        alt="telegram logo"
                        width={20}
                        height={20}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                        src={`${pathname === '/about' ? '/assets/svg/youtube-white.svg' : '/assets/svg/youtube.svg'}`}
                        alt="youtube logo"
                        width={20}
                        height={20}
                    />
                  </Link>
                </div>
                <div className={`h-[1px] w-5 ${pathname === '/about' ? 'bg-white' : 'bg-black'}`}></div>
              </div>
              {/* pages links */}
              <div className="w-[90%]">
                <ul className="flex justify-between items-center w-full font-common-med pl-2">
                  <Links title="درباره ما" link={'/about'}/>
                  <Links title="نامه ها" link={'/letters'}/>
                  <Links title="نشست ها" link={'/podcasts'}/>
                  <Links title="نقد و نظر ها" link={'/reviewsandopinions'}/>
                  <Links title="مقاله ها" link={'/articles'}/>
                  <Links title="نوشته های ادبی" link={'/literarywritings'}/>
                  <Links title="کلبه" link={'/'}/>
                </ul>
              </div>
            </div>
          </div>
          {/* the menu icon in mobile */}
          <div className="w-12 h-8 flex flex-col justify-between items-end cursor-pointer xl:hidden mt-1 lg:mt-1"
               onClick={() => setMenu(!menu)}>
            <div className={`w-10 h-1 ${menu ? '' : 'translate-y-3 -rotate-45'} transition-all duration-700 delay-700 
          ${pathname === '/about' ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`h-1 ${menu ? 'w-10' : 'w-0'} transition-all duration-700 
          ${pathname === '/about' ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`w-10 h-1 ${menu ? '' : '-translate-y-4 rotate-45'} transition-all duration-700 delay-700
          ${pathname === '/about' ? 'bg-white' : 'bg-black'}`}></div>
          </div>
          {/* the second column is for the site logo */}
          <div className="w-2/12 md:w-1/12">
            <div className="w-full h-[50px] md:h-[50px] xl:h-[100px] relative">
              <Image
                  src={`${pathname === '/about' ? '/assets/svg/whiteLogo.svg' : '/assets/svg/logo.svg'}`}
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                  className="absolute"
              />
            </div>
          </div>
        </div>
        <div className={`w-full xl:border-b-2 mt-4 ${pathname === '/about' ? 'border-white' : 'border-black'}`}></div>
        {/* the dropdown links for mobile */}

        <div className={`container container-main mx-auto border-b-2 xl:border-b-0 
      ${pathname === '/about' ? 'border-white' : 'border-black'}`}>
          <div className={`w-full flex flex-col items-end xl:hidden overflow-hidden transition-all duration-700 absolute 
      top-20 ${pathname === '/about' ? 'bg-black border-white' : 'bg-white border-black'} z-50 left-0 ${menu ? 'h-0' : 'h-[330px]'} 
      container-main`}>
            <ul className="flex flex-col-reverse items-end w-full mt-1 font-common-med pl-2">
              <Links link={'/about'} title={'در باره ما'}/>
              <Links link={'/letters'} title={'نامه ها'}/>
              <Links link={'/podcasts'} title={'نشست ها'}/>
              <Links link={'/reviewsandopinions'} title={'نقد و نظر ها'}/>
              <Links link={'/articles'} title={'مقاله ها'}/>
              <Links link={'/literarywritings'} title={'نوشته های ادبی'}/>
              <Links link={'/'} title={'کلبه'}/>
            </ul>
            <div className="flex w-full flex-row-reverse justify-between">
              <div className={`flex border-b-2 w-full mt-3 ${pathname === '/about' ? 'border-white' : 'border-black'}`}>
                <input
                    type="text"
                    className={`outline-none w-full rtl px-1 ${pathname === '/about' ? 'bg-black text-white' : 'bg-white text-black'}`}
                />
                <IoIosSearch className={`text-xl ${pathname === '/about' ? 'text-white' : 'text-black'}`}/>
              </div>
            </div>
            <div className="flex flex-row-reverse w-full justify-between mt-7">
              <div className="flex">
                <Link href="#">
                  <Image
                      src={pathname === '/about' ? '/assets/svg/facebook-white.svg' : '/assets/svg/facebook.svg'}
                      alt="facebook logo"
                      width={20}
                      height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                      src={pathname === '/about' ? '/assets/svg/instagram-white.svg' : '/assets/svg/instagram.svg'}
                      alt="instagram logo"
                      width={20}
                      height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                      src={pathname === '/about' ? '/assets/svg/telegram-white.svg' : '/assets/svg/telegram.svg'}
                      alt="telegram logo"
                      width={20}
                      height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                      src={`${pathname === '/about' ? '/assets/svg/youtube-white.svg' : '/assets/svg/youtube.svg'}`}
                      alt="youtube logo"
                      width={20}
                      height={20}
                  />
                </Link>
              </div>
              <div>
                <Link
                    href={'#'}
                    className="cursor-pointer"
                >
                  <Image
                      src={`${pathname === '/about' ? '/assets/svg/user-icon-white.svg' : '/assets/svg/user-icon.svg'}`}
                      alt="user icon"
                      width={25}
                      height={25}
                  />
                </Link>
              </div>
            </div>
            <div className={`w-full h-1 ${pathname === '/about' ? 'bg-white' : 'bg-black'} mt-2`}></div>
          </div>
        </div>

      </header>
  );
}
