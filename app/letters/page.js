import LettersSection from "../components/letters-section/letters-section";
import ArchivedLettersSection from "../components/archived-letters-section/archived-letters-section";
import ArchiveAuthorsPoemsSection from "../components/archive-authors-poets-section/archive-authors-poems-section";
import Authors from "@/app/components/authors/authors";

export default function LettersPage() {
    return (
        // it has 5 sections
        <div className="container container-main mx-auto">
        {/*  letters section  */}
            <div className="mt-7">
                <LettersSection />
            </div>
        {/*  archive letters section */}
            <div className="mt-28">
                <ArchivedLettersSection />
            </div>

        {/*  archive of authors and poets  */}
            <div className="mt-28">
                <ArchiveAuthorsPoemsSection />
            </div>

            {/*  the authors section  */}
            <div className="mt-28 mb-14">
                <Authors />
            </div>
        </div>
    );
}