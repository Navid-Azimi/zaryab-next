import Heading1 from "../../components/heading-1/heading-1";
import StoryCard from "@/app/components/story-card/story-card";


export default function SimilarStories() {
    return (
        // the main container of the section
        <div className="mt-14">
            <div className="w-full flex flex-row-reverse">
                <Heading1 title="داستان های مشابه" />
            </div>
            <div className="w-full">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
        </div>
    );
}