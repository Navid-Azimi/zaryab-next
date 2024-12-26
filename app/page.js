
// components
import Mail from './components/mail/mail';
import StoryDay from './components/story-of-the-day/story-day-section';
import ArrowLink from './components/arrow-link/arrow-link';
import AuthorWeek from './components/author-week/author-week';
import StoryCard from './components/story-card/story-card';
import Authors from './components/authors/authors';
import Book from "./components/book/book";
import Podcasts from "./components/podcasts/podcasts";
import HorizontalLine from "./components/horizontal-line/horizontal-line";
import MailT from "./components/mail-T/mail-T";
import BookT from "./components/book-T/book-T";

export default function Home() {
    const cards = [1,2,3,4,5];
  return (
    <main className="mb-28">
      {/* the story of the day section */}
      <StoryDay />

      {/* the stories section */}
      <section className="container container-main mx-auto mt-14 flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* mail section */}
          <div className="w-full mt-9 md:mt-0 md:w-1/2 lg:w-1/4 md:hidden xl:block">
            <Mail />
          </div>
          {/* stories section */}

            <div className="w-full xl:w-3/4 xl:ml-6">
                <StoryCard/>
                <StoryCard/>
                <StoryCard/>
                <StoryCard/>
                <StoryCard/>
                {/* link to all paper */}
                <div className="flex justify-end mt-7">
                    <ArrowLink title="همه نوشته ها"/>
                </div>
            </div>
        </div>
        {/* the author of the week section */}
      </section>
      {/* the book section */}
        <section className="container container-main mx-auto mt-14 md:hidden xl:block">
            <Book />
        </section>
      {/* the book and mail section for tablet */}
        <section className="hidden md:flex flex-row-reverse justify-between xl:hidden container container-main mx-auto">
            <MailT />
            <BookT />
        </section>
      {/* the author of the week section */}
      <section className="container container-main mx-auto mt-14">
        <AuthorWeek />
      </section>
      {/* the authors section */}
      <section className="container container-main mx-auto mt-14">
        <Authors />
      </section>
            <HorizontalLine />
        {/*  podcasts section  */}
        <section className="container container-main mx-auto mt-14">
            <Podcasts />
        </section>
    </main>
  );
}
