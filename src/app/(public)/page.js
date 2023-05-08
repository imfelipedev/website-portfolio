"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { VscGithubAlt } from "react-icons/vsc";
import { Redirect } from "@/app/interface/components/Redirect";

import animationData from "public/lotties/developer";

export default function Home() {
    return (
        <section className="w-full h-full min-h-full bg-[#1F2127] grow flex flex-col">
            <div className="p-4 mx-auto flex flex-1 xl:max-w-[1400px] xl:gap-48">
                <motion.div initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }} className="max-w-2xl my-auto">
                    <h1 className="text-[#f1f1f1] text-3xl font-bold lg:text-5xl">E aí, eu sou Felipe Augusto</h1>
                    <motion.h2 initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} className="my-4 text-[#9555fd] text-base font-medium max-w-min w-full overflow-hidden whitespace-nowrap border-r-2 border-[#9555fd] sm:text-2xl lg:text-3xl">
                        Desenvolvedor Full-Stack
                    </motion.h2>
                    <p className="text-[#f1f1f1]/90 font-medium text-sm lg:text-base">
                        Sou desenvolvedor full-stack há 6 anos e tenho conhecimento em diversas tecnologias, incluindo Next.js, React, Node.js e Lua. Possuo habilidades para criar projetos eficientes, otimizados e funcionais, do front-end ao back-end, com qualidade e responsividade no layout. Meu objetivo é garantir a satisfação do cliente, entregando projetos de qualidade e escaláveis que atendam às necessidades específicas do projeto.
                    </p>
                </motion.div>

                <motion.div initial={{ x: "7rem", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }} className="my-auto hidden sm:block">
                    <Lottie animationData={animationData} loop={true} />
                </motion.div>
            </div>

            <motion.div initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }} className="mx-auto mb-10 flex">
                <Redirect link="https://github.com/zFelpszada">
                    <VscGithubAlt size={25} />
                </Redirect>
            </motion.div>
        </section>
    );
}
