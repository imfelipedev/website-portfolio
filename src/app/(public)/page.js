"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { Animation } from "@/app/interface/components/Animation";

export default function Home() {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");
    const [isLoading, setLoading] = useState(false);

    const skills = [
        { name: "Next.js" },
        { name: "React" },
        { name: "Vue.js" },
        { name: "Node.js" },
        { name: "Tailwind CSS" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript" },
        { name: "Lua" },
        { name: "MySQL" },
        { name: "SQlite" },
        { name: "MongoDB" },
        { name: "Git" },
        { name: "Github" },
        { name: "Responsive Design" },
        { name: "SEO" },
    ];

    const projets = [
        {
            name: "Website - FPL",
            description:
                "Este projeto foi concebido para destacar minhas habilidades e conhecimentos, sendo construído com a elegância do React no front-end e o poder do Node.js no back-end, utilizando WebSocket para uma experiência excepcional.",
            path: "/projetos/chat-ws.png",
            link: "https://website-chat-ws.vercel.app/",
        },
        {
            name: "Website - FPL",
            description: "Projeto realizado para minha empresa, desenvolvido em Nextjs e React, esse website foi desenvolvido para minha empresa pessoal e clientes da mesma.",
            path: "/projetos/fpl.png",
            link: "https://website-fpl.vercel.app/",
        },
        {
            name: "Website - WAZE RP",
            description: "Projeto realizado para um client, desenvolvido em Nextjs e React, esse website foi desenvolvido para um servidor de MTA:SA.",
            path: "/projetos/wazerp.png",
            link: "https://website-waze.vercel.app/",
        },
        {
            name: "Website - 171 Roleplay",
            description: "Projeto desenvolvido em Nextjs e React, esse website foi desenvolvido para um servidor de MTA:SA, totalmente vinculado com o servidor.",
            path: "/projetos/171roleplay.png",
            link: "https://website-171-rp.vercel.app",
        },
        {
            name: "Website - Mistic Protection",
            description:
                "Projeto desenvolvido em Nextjs e React, esse website foi desenvolvido para uma loja de MTA:SA, com sistema de gerencimando de planos, contas e proteções.",
            path: "/projetos/mistic.png",
            link: "https://website-mistic.vercel.app/",
        },
        {
            name: "Website - Events",
            description: "Projeto desenvolvido em Nextjs e React, esse website foi desenvolvido para divulgação de eventos e outros afins.",
            path: "/projetos/events.png",
            link: "https://website-events.vercel.app/",
            github: "https://github.com/zFelipeA/website-events",
        },
        {
            name: "Website - FIGMA TO MTA",
            description:
                "Projeto desenvolvido em NextJS e React, esse website foi desenvolvido para converter design do FIGMA para o MTA:SA, porém com um diferencial dos outros, ele converte em hierarquia e escala.",
            path: "/projetos/figma.png",
            link: "https://website-figma.vercel.app/",
        },
    ];

    function validMessage(object) {
        let newObject = {};
        const nameRegex = /^[a-zA-Z]+$/;
        if (object.name && nameRegex.test(object.name)) {
            newObject.name = object.name;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (object.email && emailRegex.test(object.email)) {
            newObject.email = object.email;
        }

        const messageRegex = /\S+/;
        if (object.message && messageRegex.test(object.message)) {
            newObject.message = object.message;
        }

        if (!newObject.name || !newObject.email || !newObject.message) {
            throw new Error("Alguma informação está incorreta!");
        }
        return newObject;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (isLoading) {
            return false;
        }

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        setLoading(true);

        try {
            const object = validMessage({
                name: name,
                email: email,
                message: message,
            });

            const response = await fetch(`/api/contact`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: object.name,
                    email: object.email,
                    message: object.message,
                }),
            });

            if (response.status === 200) {
                setLoading(false);
                return toast.success("Mensagem enviada com sucesso!");
            }
        } catch (error) {
            setLoading(false);
            return toast.error("Alguma informação está incorreta!");
        }
    }

    return (
        <>
            <section id="home" className="py-[17.0rem] w-full h-full flex items-center justify-center relative md:min-h-screen md:py-0">
                <Image className="-z-10 bg-[#161616]" src="/main/background.svg" alt="Background" style={{ objectFit: "cover" }} fill={true} quality={100} priority />
                <Animation>
                    <div className="p-4 max-w-[90.0rem] flex flex-col items-center">
                        <h1 className="text-[#9A9A9A] text-[2.5rem] text-center font-extrabold sm:text-[6.0rem]">E AÍ, EU SOU FELIPE AUGUSTO</h1>

                        <h2 className="mt-16 mx-auto max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                            Sou um desenvolvedor full-stack especializado em criar websites escaláveis e responsivos, adaptados perfeitamente às suas necessidades e preferências.
                        </h2>

                        <a
                            href="#projects"
                            aria-label="Redirecionar para sessão de projeto."
                            className="mt-20 px-32 py-5 rounded-lg bg-[#1A1A1A] border-2 border-[#242424] text-[#9A9A9A] text-[1.0rem] sm:text-[2.0rem]"
                        >
                            PROJETOS
                        </a>
                    </div>
                </Animation>
            </section>

            <section id="about" className="w-full h-full bg-[#242424]">
                <Animation>
                    <div className="pt-[12.0rem] mx-auto max-w-[95.0rem]">
                        <h1 className="text-[#9A9A9A] text-[3.5rem] text-center font-extrabold">SOBRE MIM</h1>

                        <hr className="mx-auto mt-[2.0rem] w-[2.5rem] h-[0.5rem] rounded-lg border-0 bg-[#9A9A9A]" />

                        <h2 className="mx-auto mt-[2.0rem] max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                            Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais principalmente em termos de programação e tecnologia
                        </h2>
                    </div>

                    <div className="px-[2.0rem] py-[12.0rem] mx-auto max-w-[120.0rem] grid gap-40 sm:grid-cols-2">
                        <div className="w-full h-full">
                            <h3 className="text-[2.6rem] text-[#9A9A9A]">Conheça-me</h3>

                            <p className="mt-[3.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                                Sou desenvolvedor há 7 anos e tenho conhecimento em diversas tecnologias. Possuo habilidades para criar projetos eficientes, otimizados e
                                funcionais, do front-end ao back-end, com qualidade e responsividade no layout.
                            </p>

                            <p className="mt-[2.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                                Meu objetivo é garantir a satisfação do cliente, entregando projetos de qualidade e escaláveis que atendam às necessidades específicas do projeto.
                            </p>

                            <p className="mt-[2.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                                Estou aberto a oportunidades de trabalho onde possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas
                                habilidades e experiência, não hesite em entrar em contato comigo.
                            </p>

                            <div className="mt-[4.5rem]">
                                <a
                                    href="#contact"
                                    aria-label="Redirecionar para sessão de contato."
                                    className="px-28 py-5 rounded-lg bg-[#1A1A1A] text-[#9A9A9A] text-[1.3rem] sm:text-[2.0rem]"
                                >
                                    CONTATO
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[2.6rem] text-[#9A9A9A]">Minhas habilidades</h3>

                            <div className="mt-[3.0rem] flex flex-wrap gap-5">
                                {skills.map((value, index) => (
                                    <div key={index} className="px-[2.0rem] py-[1.0rem] bg-[#1A1A1A] rounded-lg text-[#9A9A9A] text-[1.3rem] sm:text-[1.6rem]">
                                        {value.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Animation>
            </section>

            <section id="projects" className="w-full h-full relative">
                <Image className="-z-10 bg-[#161616]" src="/main/background.svg" alt="Background" style={{ objectFit: "cover" }} fill={true} quality={100} priority />
                <Animation>
                    <div className="pt-[12.0rem] mx-auto max-w-[95.0rem]">
                        <h1 className="text-[#9A9A9A] text-[3.5rem] text-center font-extrabold">PROJETOS</h1>

                        <hr className="mx-auto mt-[2.0rem] w-[2.5rem] h-[0.5rem] rounded-lg border-0 bg-[#9A9A9A]" />

                        <h2 className="mx-auto mt-[2.0rem] max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                            Aqui você encontrará uma seleção dos projetos que desenvolvi para clientes, assim como alguns dos meus projetos pessoais.
                        </h2>
                    </div>

                    <div className="px-4 py-[12.0rem] mx-auto max-w-[120.0rem] flex flex-col gap-52">
                        {projets.map((value, index) => (
                            <div key={index} className="mx-auto grid gap-16 md:grid-cols-2">
                                <Image src={value.path} width={566} height={396} alt="Imagem ilustrativa" priority />

                                <div className="my-auto">
                                    <h3 className="text-[#9A9A9A] text-[2.0rem] sm:text-[2.8rem]">{value.name}</h3>

                                    <h2 className="mt-[3.0rem] text-[1.5rem] sm:text-[1.8rem]">{value.description}</h2>

                                    <div className="mt-[3.0rem]">
                                        <a
                                            href={value.link}
                                            aria-label="Redirecionar para um site."
                                            className="px-32 py-5 rounded-lg bg-[#1A1A1A] border-2 border-[#242424] text-[#9A9A9A] text-[1.0rem] sm:text-[2.0rem]"
                                        >
                                            VISITAR
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Animation>
            </section>

            <section id="contact" className="w-full h-full bg-[#242424]">
                <Animation>
                    <div className="pt-[12.0rem] mx-auto max-w-[95.0rem]">
                        <h1 className="text-[#9A9A9A] text-[3.5rem] text-center font-extrabold">CONTATO</h1>

                        <hr className="mx-auto mt-[2.0rem] w-[2.5rem] h-[0.5rem] rounded-lg border-0 bg-[#9A9A9A]" />

                        <h2 className="mx-auto mt-[2.0rem] max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                            Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e retornarei o mais breve possível
                        </h2>
                    </div>

                    <div className="px-10 py-[12.0rem] max-w-[80.0rem] mx-auto">
                        <form onSubmit={handleSubmit} className="p-10 rounded-xl bg-[#1A1A1A] border-2 border-[#242424]">
                            <div>
                                <label className="text-[1.6rem] text-[#9A9A9A]">Nome</label>

                                <input
                                    ref={nameRef}
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    autoComplete="current-password"
                                    placeholder="Informe seu Nome"
                                    required
                                    className="mt-4 pl-4 w-full h-[6.0rem] rounded-lg border-2 border-[#242424] bg-transparent text-[1.3rem] text-[#8A8A8A] placeholder-[#8A8A8A] focus:outline-none"
                                />
                            </div>

                            <div className="mt-8">
                                <label className="text-[1.6rem] text-[#9A9A9A]">Email</label>

                                <input
                                    ref={emailRef}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="current-email"
                                    placeholder="Informe seu E-mail"
                                    required
                                    className="mt-4 pl-4 w-full h-[6.0rem] rounded-lg border-2 border-[#242424] bg-transparent text-[1.3rem] text-[#8A8A8A] placeholder-[#8A8A8A] focus:outline-none"
                                />
                            </div>

                            <div className="mt-8">
                                <label className="text-[1.6rem] text-[#9A9A9A]">Mensagem</label>

                                <textarea
                                    ref={messageRef}
                                    cols="30"
                                    rows="10"
                                    id="mensagem"
                                    name="mensagem"
                                    placeholder="Informe sua mensagem"
                                    required
                                    className="resize-none mt-4 p-4 w-full h-[32.0rem] rounded-lg border-2 border-[#242424] bg-transparent text-[1.3rem] text-[#8A8A8A] placeholder-[#8A8A8A] focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-[2.5rem] w-full py-5 rounded-lg bg-[#1A1A1A] border-2 border-[#242424] text-[#9A9A9A] text-[1.0rem] sm:max-w-[20.0rem] sm:text-[2.0rem]"
                            >
                                {isLoading ? (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="relative animate-spin w-[23px] h-[23px] border-4 border-l-white/75 border-white/25 rounded-full bg-transparent" />
                                        <span className="relative p-2 text-[1.5rem]">Carregando...</span>
                                    </div>
                                ) : (
                                    "ENVIAR"
                                )}
                            </button>
                        </form>
                    </div>
                </Animation>
            </section>
        </>
    );
}
