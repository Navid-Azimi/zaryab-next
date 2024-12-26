
import Link from "next/link";

export default function Link2({ link , title }) {
    return (
        <li className="h-8 text-8px md:text-16px lg:text-20px lg:leading-9 cursor-pointer overflow-hidden group">
            <p className="lg:group-hover:-translate-y-7 transition-all duration-300 text-white">
                {title}
            </p>
            <p className="lg:group-hover:-translate-y-9 transition-all duration-300 text-white">
                <Link href={`${link}`}>{title}</Link>
            </p>
        </li>
    );
}