import Filter from "@/app/components/filter/filter";
import Heading1 from "@/app/components/heading-1/heading-1";
import {motion} from "framer-motion";
import Image from "next/image";
import StoryCard from "@/app/components/story-card/story-card";

export default function Page() {
    return(
        // the main container of the page
        <div className="container container-main mx-auto">
        {/*  filter  */}
            <div>
                <Filter
                    title="انواع نقد و نظر ها"
                    items={['کتاب ها' , 'مقاله ها' , 'نوشته های نویسنده های مان']}
                    genre={[]}
                />
            </div>
        {/*  title of the page  */}
            <div className="flex flex-row-reverse mt-7">
                <Heading1 title="نقد و نظر ها" />
            </div>
         {/* list of review of the story  */}
         <div className="w-full flex flex-col items-end pb-14">
            <div className="w-full xl:w-[75%]">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
         </div>
        </div>
    );
}