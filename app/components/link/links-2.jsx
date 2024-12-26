import Link from "next/link";

export default function Links2({ link , title , active }){
    return (
        <li className="h-8 cursor-pointer overflow-hidden group">
            <p className={`group-hover:-translate-y-7 transition-all duration-300 ${active ? 'text-footerBtn' : 'text-black'}`}>
                {title}
            </p>
            <p className={`group-hover:-translate-y-9 transition-all duration-300 ${active ? 'text-footerBtn' : 'text-black'}`}>
                <Link href={`${link}`}>{title}</Link>
            </p>
        </li>
    );
}