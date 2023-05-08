"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export function Navbar() {
    const [showMenu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!showMenu);
    }

    return (
        <navbar>
            <div className={`w-full h-[87px] flex items-center justify-center bg-[#1F2127]`}>
                <div className="p-5 max-w-[1400px] w-full flex items-center justify-between">
                    <div className="text-[#9555fd] text-opacity-90 text-base sm:text-2xl font-bold">
                        <Link href="/">Felipe DEV.</Link>
                    </div>
                    <div className={`cursor-pointer text-white md:hidden`}>
                        <HiOutlineMenuAlt3 size={30} onClick={toggleMenu} />
                    </div>
                    <div className={`hidden md:block`}>
                        <ul className="flex items-center gap-10">
                            <li className="text-[#F1F1F1] text-sm font-semibold hover:text-[#9555fd] transition-all duration-500">
                                <Link href="/">HOME</Link>
                            </li>
                            <li className="text-[#F1F1F1] text-sm font-semibold hover:text-[#9555fd] transition-all duration-500">
                                <Link href="/projetos">PROJETOS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {showMenu && (
                <div className="top-0 left-0 w-screen h-screen absolute bg-[#F1F1F1] z-10">
                    <div className="p-5 w-full flex items-center justify-between">
                        <div className="text-black text-opacity-90 text-base sm:text-2xl font-bold">
                            <Link href="/">Felipe DEV.</Link>
                        </div>
                        <div className={`cursor-pointer text-black md:hidden`}>
                            <AiOutlineClose size={30} onClick={toggleMenu} />
                        </div>
                    </div>
                    <ul className="p-5 space-y-10">
                        <li className="text-black text-base font-semibold hover:text-[#9555fd] transition-all duration-500">
                            <Link href="/" onClick={toggleMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="text-black text-base font-semibold hover:text-[#9555fd] transition-all duration-500">
                            <Link href="/projetos" onClick={toggleMenu}>
                                PROJETOS
                            </Link>
                        </li>
                    </ul>
                    <div className="w-full absolute bottom-5">
                        <h1 className="text-black text-center text-sm">Todos os direitos reservados 💖</h1>
                    </div>
                </div>
            )}
        </navbar>
    );
}
