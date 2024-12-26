import StorySection from "../components/story-section/story-section";
import PoemsSection from "../components/poems-section/poems-section";
import Authors from "../components/authors/authors";

export default function LiteraryWritingsPage() {
    return (
        <section className="container container-main mx-auto">
            {/*  the stories section  */}
            <StorySection />

            {/*  poems section  */}
           <div className="mt-14">
               <PoemsSection />
           </div>

        {/*  the authors section  */}
            <div className="mt-14 mb-7">
                <Authors />
            </div>
        </section>
    );
}