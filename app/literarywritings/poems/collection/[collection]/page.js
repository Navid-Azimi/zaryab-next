import Filter from "@/app/components/filter/filter";
import Heading1 from "@/app/components/heading-1/heading-1";
import StoryPageCard from "@/app/components/story-page-card/story-page-card";

export default function PoemsCollectionPage() {
    return (
        // the main container of the page
        <div className="container container-main mx-auto">
            {/*  the filter of this section  */}
            <Filter
                items={['قصیده' , 'غزل' , 'قطعه' , 'رباعی' , 'دوبیتی' , 'مثنوی' , 'مسمط' , 'ترجیح بند' , 'ترکیب بند' , 'مستزاد' ,
                    'چهار پاره' , 'بهر طویل' , 'نیمایی' , 'سفید' , 'موج نو']}
                genre={[]}
                title="انواع شع"
            />

            {/* the title of the story collection */}
            <div className="flex flex-row-reverse mt-7">
                <Heading1 title="مجموعه اشعار حافظ" />
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