'use client';
import {motion , useInView} from "framer-motion";
import {useRef} from "react";

export default  function HorizontalLine() {
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});
    return (
        <div className="container container-main mx-auto mt-20 mb-20">
            <motion.hr
                ref={ref}
                initial={{width : 0 , opacity : 0}}
                animate={isInView ? {width : '100%' , opacity : 1} : {}}
                transition={{duration : 0.5 , delay : 1}}
                className="border-black w-full border-1"/>
        </div>
    );
}