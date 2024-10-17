"use client";

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
            <div className="fixed w-full h-[8.0rem] flex items-center justify-center bg-[#212121] shadow-xl z-10">
                <div className="p-5 max-w-[90%] w-full flex items-center justify-between">
                    <div className="text-[#F2F2F2] text-[1.6rem] font-bold">
                        <a href="/" aria-label="Logo marca e redirecioanr para home.">
                            Felipe DEV.
                        </a>
                    </div>

                    <div className={`cursor-pointer text-white md:hidden`}>
                        <HiOutlineMenuAlt3 size={30} onClick={toggleMenu} />
                    </div>

                    <div className={`hidden md:block`}>
                        <ul className="flex items-center gap-24">
                            <li className="text-[#F2F2F2] text-[1.6rem] font-semibold hover:text-[#9A9A9A] transition-all duration-500">
                                <a href="#home" aria-label="Redirecionar para home.">
                                    HOME
                                </a>
                            </li>

                            <li className="text-[#F2F2F2] text-[1.6rem] font-semibold hover:text-[#9A9A9A] transition-all duration-500">
                                <a href="#about" aria-label="Redirecionar para sessão de sobre.">
                                    SOBRE
                                </a>
                            </li>

                            <li className="text-[#F2F2F2] text-[1.6rem] font-semibold hover:text-[#9A9A9A] transition-all duration-500">
                                <a href="#projects" aria-label="Redirecionar para sessão de projetos.">
                                    PROJETOS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {showMenu && (
                <div className="fixed w-screen h-screen bg-[#212121] z-10">
                    <div className="p-10 w-full flex items-center justify-between">
                        <div className="text-[#F2F2F2] text-opacity-90 text-[2.0rem] font-bold">
                            <a href="/" aria-label="Redirecionar para sessão de projeto.">
                                Felipe DEV.
                            </a>
                        </div>

                        <div className={`cursor-pointer text-[#f2f2f2] md:hidden hover:text-red-500 transition-all duration-500`}>
                            <AiOutlineClose size={30} onClick={toggleMenu} />
                        </div>
                    </div>

                    <ul className="px-10 space-y-10">
                        <li className="text-[#F2F2F2] text-[1.5rem] font-semibold">
                            <a href="#home" aria-label="Redirecionar para home." onClick={toggleMenu}>
                                HOME
                            </a>
                        </li>

                        <li className="text-[#F2F2F2] text-[1.5rem] font-semibold">
                            <a href="#about" aria-label="Redirecionar para sessão de sobre." onClick={toggleMenu}>
                                SOBRE
                            </a>
                        </li>

                        <li className="text-[#F2F2F2] text-[1.5rem] font-semibold">
                            <a href="#projects" aria-label="Redirecionar para sessão de projetos." onClick={toggleMenu}>
                                PROJETOS
                            </a>
                        </li>

                        <li className="text-[#F2F2F2] text-[1.5rem] font-semibold">
                            <a href="#contact" aria-label="Redirecionar para sessão de contato." onClick={toggleMenu}>
                                CONTATO
                            </a>
                        </li>
                    </ul>

                    <div className="w-full absolute bottom-5">
                        <h1 className="text-[#F2F2F2] text-center text-[1.3rem]">Todos os direitos reservados 💖</h1>
                    </div>
                </div>
            )}
        </navbar>
    );
}
