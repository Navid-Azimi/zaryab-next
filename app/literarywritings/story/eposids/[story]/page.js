import Filter from "@/app/components/filter/filter";
import Heading1 from "@/app/components/heading-1/heading-1";
import {IoIosSearch} from "react-icons/io";
import Episode from "@/app/components/episode/episode";
import Authors from "@/app/components/authors/authors";

export default function EposidesPage() {
    return(
        // main container of the page
        <div className="container container-main mx-auto">
        {/*  the filter of the page  */}
          <div className="w-full">
              <Filter
                  items={['داستانک' , "داستان کوتاه" , "داستان بلند" , "رمان کوتاه" , "قصه" , "رمان" , "نمایش نامه" , "فیلم نامه"]}
                  title="انواع داستان ها"
                  genre={[]}
              />
          </div>
        {/*  title of the page  */}
            <div className="w-full flex flex-row-reverse justify-between mt-7">
                <Heading1 title="داستان هری پاتر"/>

                {/*  the search bar of the eposides  */}
                <div
                    className='flex border-b-2 w-[40%] mt-3 border-black '>
                    <input
                        type="text"
                        className='outline-none w-full rtl px-1 bg-white text-black'
                    />
                    <IoIosSearch className='text-xl text-black' />
                </div>
            </div>

        {/*  list of the   episodes*/}
            <div className="mt-7 w-full flex justify-between flex-wrap">
                <Episode />
                <Episode />
                <Episode />
                <Episode />
                <Episode />
                <Episode />
                <Episode />
                <Episode />
                <Episode />
            </div>

        {/*  the authors section  */}

            <div className="mt-14 w-full">
                <Authors />
            </div>
        </div>
    )
}