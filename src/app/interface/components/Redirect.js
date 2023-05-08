import Link from "next/link";

export function Redirect({ link, children }) {
    return (
        <Link href={link} aria-label={link} className="w-12 h-12 rounded-full bg-transparent border-2 border-[#9555fd] flex items-center justify-center text-[#9555fd] hover:bg-[#9555fd] hover:text-black transition-all duration-500">
            {children}
        </Link>
    );
}
