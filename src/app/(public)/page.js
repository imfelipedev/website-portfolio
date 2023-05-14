"use client";

import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Animation } from "@/app/interface/components/Animation";

export default function Home() {
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

    const evaluation = [
        {
            author: "Ygot",
            description: "O website foi entregue e testado. Com um design atraente, moderno e responsivo, excelente funcionalidade. Além disso, as medidas de segurança adequadas garantem a privacidade e a segurança dos jogadores.",
            note: 5,
        },
        {
            author: "String",
            description: "Eu recentemente comprei um website. Fiquei impressionado com o resultado do projeto, desde a escolha do template até a personalização do layout.",
            note: 4,
        },
        {
            author: "Leandro",
            description: "Eu tive uma experiência incrível comprando um website para meu servidor de RP. Ótimo atendimento, muito prestativo e atencioso em relação às minhas necessidades e dúvidas.",
            note: 5,
        },
        {
            author: "Tioow",
            description: "Eu tive a sorte de encontrar o Felipe para criar o meu site. Ele me guiou em todo o processo de criação, desde a criação até a publicação do site. Ele foi muito atencioso e atualizou eu em cada etapa do projeto.",
            note: 5,
        },
    ];

    function convertNoteInIcon(note) {
        const filledStars = Array(note).fill(<AiFillStar size={25} />);
        const outlinedStars = Array(5 - note).fill(<AiOutlineStar size={25} />);
        return [...filledStars, ...outlinedStars];
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

                        <a href="#projects" aria-label="Redirecionar para sessão de projeto." className="mt-20 px-32 py-5 rounded-lg bg-[#1A1A1A] border-2 border-[#242424] text-[#9A9A9A] text-[1.0rem] sm:text-[2.0rem]">
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
                                Sou desenvolvedor há 6 anos e tenho conhecimento em diversas tecnologias. Possuo habilidades para criar projetos eficientes, otimizados e funcionais, do front-end ao back-end, com qualidade e responsividade
                                no layout.
                            </p>

                            <p className="mt-[2.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                                Meu objetivo é garantir a satisfação do cliente, entregando projetos de qualidade e escaláveis que atendam às necessidades específicas do projeto.
                            </p>

                            <p className="mt-[2.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                                Estou aberto a oportunidades de trabalho onde possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em entrar em contato
                                comigo.
                            </p>

                            <div className="mt-[3.0rem]">
                                <a href="#contact" aria-label="Redirecionar para sessão de contato." className="px-28 py-5 rounded-lg bg-[#1A1A1A] text-[#9A9A9A] text-[1.3rem] sm:text-[2.0rem]">
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
                                        <a href={value.link} aria-label="Redirecionar para um site." className="px-32 py-5 rounded-lg bg-[#1A1A1A] border-2 border-[#242424] text-[#9A9A9A] text-[1.0rem] sm:text-[2.0rem]">
                                            VISITAR
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Animation>
            </section>

            <section id="evaluation" className="w-full h-full bg-[#242424]">
                <Animation>
                    <div className="pt-[12.0rem] mx-auto max-w-[95.0rem]">
                        <h1 className="text-[#9A9A9A] text-[3.5rem] text-center font-extrabold">Avaliações</h1>

                        <hr className="mx-auto mt-[2.0rem] w-[2.5rem] h-[0.5rem] rounded-lg border-0 bg-[#9A9A9A]" />

                        <h2 className="mx-auto mt-[2.0rem] max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                            Encontre avaliações de clientes satisfeitos com os projetos que desenvolvi, e tome uma decisão confiante para o seu próximo projeto.
                        </h2>
                    </div>

                    <div className="p-4 mx-auto py-[12.0rem] max-w-[140.0rem] grid gap-5 justify-items-center lg:grid-flow-col">
                        {evaluation.map((value, index) => (
                            <div key={index} className="max-w-[30.0rem] w-full h-[20.0rem] rounded-xl bg-[#1A1A1A] border-2 border-[#242424] grid">
                                <h1 className="pt-6 text-[#9A9A9A] text-[1.5rem] text-center font-bold lg:text-[2.0rem]">{value.author}</h1>

                                <p className="px-10 text-[#8A8A8A] text-[0.9rem] lg:text-[1.1rem]">{value.description}</p>

                                <div className="mx-auto flex gap-5 text-yellow-300">
                                    {convertNoteInIcon(value.note).map((star, index2) => (
                                        <span key={index2}>{star}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Animation>
            </section>

            <section id="contact" className="w-full h-full relative">
                <Image className="-z-10 bg-[#161616]" src="/main/background.svg" alt="Background" style={{ objectFit: "cover" }} fill={true} quality={100} priority />
                <Animation>
                    <div className="pt-[12.0rem] mx-auto max-w-[95.0rem]">
                        <h1 className="text-[#9A9A9A] text-[3.5rem] text-center font-extrabold">CONTATO</h1>

                        <hr className="mx-auto mt-[2.0rem] w-[2.5rem] h-[0.5rem] rounded-lg border-0 bg-[#9A9A9A]" />

                        <h2 className="mx-auto mt-[2.0rem] max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e retornarei o mais breve possível</h2>
                    </div>

                    <div className="px-10 py-[12.0rem] max-w-[80.0rem] mx-auto">
                        <form className="p-10 rounded-xl bg-[#1A1A1A] border-2 border-[#242424]">
                            <div>
                                <label className="text-[1.6rem] text-[#9A9A9A]">Nome</label>

                                <input
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
                                    id="email"
                                    name="email"
                                    type="text"
                                    autoComplete="current-email"
                                    placeholder="Informe seu E-mail"
                                    required
                                    className="mt-4 pl-4 w-full h-[6.0rem] rounded-lg border-2 border-[#242424] bg-transparent text-[1.3rem] text-[#8A8A8A] placeholder-[#8A8A8A] focus:outline-none"
                                />
                            </div>

                            <div className="mt-8">
                                <label className="text-[1.6rem] text-[#9A9A9A]">Mensagem</label>

                                <textarea
                                    cols="30"
                                    rows="10"
                                    id="mensagem"
                                    name="mensagem"
                                    placeholder="Informe sua mensagem"
                                    required
                                    className="resize-none mt-4 p-4 w-full h-[32.0rem] rounded-lg border-2 border-[#242424] bg-transparent text-[1.3rem] text-[#8A8A8A] placeholder-[#8A8A8A] focus:outline-none"
                                />
                            </div>

                            <button className="mt-[2.5rem] w-full py-5 rounded-lg bg-[#1A1A1A] border-2 border-[#242424] text-[#9A9A9A] text-[1.0rem] sm:max-w-[20.0rem] sm:text-[2.0rem]">ENVIAR</button>
                        </form>
                    </div>
                </Animation>
            </section>
        </>
    );
}
