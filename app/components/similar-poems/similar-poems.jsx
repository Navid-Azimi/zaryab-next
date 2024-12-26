import Heading1 from "../../components/heading-1/heading-1";
import StoryCard from "@/app/components/story-card/story-card";
import {useState , useEffect} from "react";
import axios from "@/utils/api";

export default function SimilarPoems({slug}) {

    // fetch data
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/v1/similar-poems/${slug}?per_page=5`);
                setData(response.data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            }
        }
        fetchData();
    }, []);
    return (
        // the main container of the section
        <div className="mt-14">
            <div className="w-full flex flex-row-reverse">
                <Heading1 title="اشعار مشابه" />
            </div>
            <div className="w-full">
                {
                    data?.similar_poems.map((data , index) => (
                        <StoryCard data={data} key={index}/>
                    ))
                }
            </div>
        </div>
    );
}