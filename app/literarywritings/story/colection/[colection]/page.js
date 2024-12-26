import Filter from "@/app/components/filter/filter";
import StoryPageCard from "@/app/components/story-page-card/story-page-card";
import Heading1 from "@/app/components/heading-1/heading-1";

export default function StoryCollectionPage() {
    return (
        // the main container of the page
        <div className="container container-main mx-auto">
        {/*  filter of the page  */}
            <Filter
                items={['داستانک' , "داستان کوتاه" , "داستان بلند" , "رمان کوتاه" , "قصه" , "رمان" , "نمایش نامه" , "فیلم نامه"]}
                title="انواع داستان ها"
                genre={[]}
            />

            {/* the title of the story collection */}
            <div className="flex flex-row-reverse mt-7">
                <Heading1 title="مجموعه داستان هری پاتر" />
            </div>

            <div className="w-full flex flex-wrap justify-between mt-7 pb-14">
                <StoryPageCard />
                <StoryPageCard />
                <StoryPageCard />
                <StoryPageCard />
                <StoryPageCard />
                <StoryPageCard />
                <StoryPageCard />
                <StoryPageCard />
                <StoryPageCard />
            </div>
        </div>
    );
}