"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { VscGithubAlt } from "react-icons/vsc";

import { Redirect } from "@/app/interface/components/Redirect";

export default function Projetos() {
    const projets = [
        {
            name: "Website - 171 Roleplay",
            description: "Projeto desenvolvido em Nextjs e React, esse website foi desenvolvido para um servidor de MTA:SA, totalmente vinculado com o servidor.",
            path: "/projetos/171roleplay.png",
            link: "https://171-website.vercel.app/",
        },
        {
            name: "Website - Mistic Protection",
            description: "Projeto desenvolvido em Nextjs e React, esse website foi desenvolvido para uma loja de MTA:SA, com sistema de gerencimando de planos, contas e proteções.",
            path: "/projetos/mistic.png",
            link: "https://website-mistic.vercel.app/",
        },
        {
            name: "Website - Events",
            description: "Projeto desenvolvido em Nextjs e React, esse website foi desenvolvido para divulgação de eventos e outros afins.",
            path: "/projetos/events.png",
            link: "https://website-events.vercel.app/",
            github: "https://github.com/zFelpszada/website-events",
        },
        {
            name: "Website - FIGMA TO MTA",
            description: "Projeto desenvolvido em NextJS e React, esse website foi desenvolvido para converter design do FIGMA para o MTA:SA, porém com um diferencial dos outros, ele converte em hierarquia e escala.",
            path: "/projetos/figma.png",
            link: "https://website-figma.vercel.app/",
        },
    ];

    return (
        <section className="bg-[#1F2127] grow">
            <motion.div initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: "spring" }} className="mt-10">
                <h1 className="text-[#f1f1f1] font-bold text-2xl text-center">Minhas criações de projetos exclusivos</h1>
            </motion.div>
            <motion.div initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }} className="my-24 px-4 space-y-36">
                {projets.map((value, index) => (
                    <>
                        {index % 2 === 0 ? (
                            <div key={index} className="mx-auto max-w-[900px] sm:flex">
                                <div className="mx-auto max-w-[350px] w-full h-[200px] rounded-lg relative overflow-hidden">
                                    <Image src={value.path} fill={true} style={{ objectFit: "cover" }} alt="Imagem ilustrativa" priority />
                                </div>
                                <div className="mt-10 sm:mt-0 sm:ml-10 flex flex-col">
                                    <Link href={value.link} className="text-[#f1f1f1] font-bold text-xl flex-1">
                                        {value.name}
                                    </Link>
                                    <p className="mt-5 text-[#f1f1f1]/80 font-medium flex-1">{value.description}</p>
                                    <div className="mt-8 flex gap-4 flex-1">
                                        <Redirect link={value.link}>
                                            <CgWebsite size={25} />
                                        </Redirect>
                                        {value.github && (
                                            <Redirect link={value.github}>
                                                <VscGithubAlt size={25} />
                                            </Redirect>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={index} className="mx-auto max-w-[900px] md:flex">
                                <div className="sm:mr-10 flex flex-col">
                                    <Link href={value.link} className="text-[#f1f1f1] font-bold text-xl flex-1 text-right">
                                        {value.name}
                                    </Link>
                                    <p className="mt-5 text-[#f1f1f1]/80 font-medium flex-1 text-right">{value.description}</p>
                                    <div className="mt-8 flex gap-4 justify-end flex-1">
                                        <Redirect link={value.link}>
                                            <CgWebsite size={25} />
                                        </Redirect>
                                        {value.github && (
                                            <Redirect link={value.github}>
                                                <VscGithubAlt size={25} />
                                            </Redirect>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-0 mx-auto max-w-[350px] w-full h-[200px] rounded-lg relative overflow-hidden">
                                    <Image src={value.path} fill={true} style={{ objectFit: "cover" }} alt="Imagem ilustrativa" priority />
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </motion.div>
        </section>
    );
}
