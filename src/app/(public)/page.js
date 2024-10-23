"use client";

import Image from "next/image";

export default function Home() {
    const skills = [
        { name: "Java" },
        { name: "Sprint Boot" },
        { name: "Node.js" },
        { name: "JavaScript" },
        { name: "Next.js" },
        { name: "React" },
        { name: "Vue.js" },
        { name: "MySQL" },
        { name: "SQLite" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Git" },
        { name: "SEO" },
        { name: "Responsive Design" },
    ];

    const projets = [
        {
            name: "Website - Fantasy Resources",
            description:
                "Este projeto foi desenvolvido para um cliente. O website é um modelo de loja online, aonde todo processo de pagamento e entrega foi totalmente automatizado, utilizando as APIs do Mercado Pago e PicPay.",
            path: "/projetos/fantasy.png",
            link: "https://fantasyresources.net/",
        },
        {
            name: "Website - Processo RP",
            description:
                "Este projeto foi desenvolvido para um cliente. O website é um modelo de loja online, aonde todo processo de pagamento e entrega foi totalmente automatizado para o jogo MTA:SA, utilizando as APIs do Mercado Pago e Paypal.",
            path: "/projetos/processo-rp.png",
            link: "https://processoroleplay.com/",
        },
        {
            name: "Website - Ilhabela Roleplay",
            description: "Este projeto foi desenvolvido para um cliente. O website é um modelo de loja online, com sistema de Whitelist (questionário para ingressar ao servidor), para o jogo MTA:SA.",
            path: "/projetos/ilhabela.png",
            link: "https://website-ilhabela.vercel.app/",
        },
        {
            name: "Website - CHAT WS",
            description:
                "Este projeto foi concebido para destacar minhas habilidades e conhecimentos, sendo construído com a elegância do React no front-end e o poder do Node.js no back-end, utilizando WebSocket para uma experiência excepcional.",
            path: "/projetos/chat-ws.png",
            link: "https://website-chat-ws.vercel.app/",
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
            github: "https://github.com/zFelipeA/website-events",
        },
    ];

    return (
        <>
            <section id="home" className="py-[17.0rem] w-full h-full flex items-center justify-center relative md:min-h-screen md:py-0">
                <Image className="-z-10 bg-[#F2F2F2]" src="/main/background.svg" alt="Background" style={{ objectFit: "cover" }} fill={true} priority />

                <div className="p-5 max-w-[90.0rem] flex flex-col items-center">
                    <h1 className="text-[#212121] text-[2.5rem] text-center font-extrabold sm:text-[6.0rem]">E AÍ, EU SOU FELIPE AUGUSTO</h1>

                    <h2 className="mt-8 max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                        Sou um desenvolvedor full-stack especializado em criar websites escaláveis e responsivos, adaptados perfeitamente às suas necessidades e preferências.
                    </h2>

                    <a
                        href="#projects"
                        aria-label="Redirecionar para sessão de projeto."
                        className="mt-20 px-32 py-5 border-2 border-[#212121] rounded-lg bg-[#212121] text-[#f1f1f1] text-[1.0rem] font-medium hover:bg-transparent hover:text-[#212121] transition-all duration-300 sm:text-[2.0rem]"
                    >
                        PROJETOS
                    </a>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform w-10 h-20 border-2 border-[#212121] rounded-full flex items-center justify-center">
                    <div className="min-w-[0.5rem] min-h-[0.5rem] rounded-full bg-[#212121] animate-bounce-slow" />
                </div>
            </section>

            <section id="about" className="w-full h-full bg-[#212121]">
                <div className="pt-[12.0rem] mx-auto max-w-[95.0rem]">
                    <h1 className="text-[#9A9A9A] text-[3.5rem] text-center font-medium">SOBRE MIM</h1>

                    <hr className="mx-auto mt-[2.0rem] w-[2.5rem] h-[0.5rem] rounded-lg border-0 bg-[#9A9A9A]" />

                    <h2 className="mx-auto mt-[2.0rem] max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                        Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais principalmente em termos de programação e tecnologia
                    </h2>
                </div>

                <div className="px-[2.0rem] py-[12.0rem] mx-auto max-w-[120.0rem] grid gap-40 sm:grid-cols-2">
                    <div className="w-full h-full">
                        <h3 className="text-[2.6rem] text-[#9A9A9A]">Conheça-me</h3>

                        <p className="mt-[3.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                            Sou desenvolvedor há 5 anos e tenho conhecimento em diversas tecnologias. Possuo habilidades para criar projetos eficientes, otimizados e funcionais, do front-end ao
                            back-end, com qualidade e responsividade no layout.
                        </p>

                        <p className="mt-[2.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                            Meu objetivo é garantir a satisfação do cliente, entregando projetos de qualidade e escaláveis que atendam às necessidades específicas do projeto.
                        </p>

                        <p className="mt-[2.0rem] text-[#8A8A8A] text-[1.3rem] sm:text-[1.6rem]">
                            Estou aberto a oportunidades de trabalho onde possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência,
                            não hesite em entrar em contato comigo.
                        </p>

                        <div className="mt-[4.5rem]">
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
            </section>

            <section id="projects" className="w-full h-full relative">
                <Image className="-z-10 bg-[#F2F2F2]" src="/main/background.svg" alt="Background" style={{ objectFit: "cover" }} fill={true} quality={100} priority />

                <div className="pt-[12.0rem] mx-auto max-w-[95.0rem]">
                    <h1 className="text-[#212121] text-[3.5rem] text-center font-extrabold">PROJETOS</h1>

                    <hr className="mx-auto mt-[2.0rem] w-[2.5rem] h-[0.5rem] rounded-lg border-0 bg-[#212121]" />

                    <h2 className="mx-auto mt-[2.0rem] max-w-[90%] text-[1.5rem] text-center sm:text-[2.2rem]">
                        Aqui você encontrará uma seleção dos projetos que desenvolvi para clientes, assim como alguns dos meus projetos pessoais.
                    </h2>
                </div>

                <div className="px-5 py-[12.0rem] mx-auto max-w-[120.0rem] flex flex-col gap-52">
                    {projets.map((value, index) => (
                        <div key={index} className="mx-auto grid gap-16 md:grid-cols-2">
                            <Image src={value.path} width={566} height={396} priority={true} alt="Imagem ilustrativa" className="border-2 border-[#212121] rounded-xl" />

                            <div className="my-auto">
                                <p className="text-[#212121] text-[2.0rem] sm:text-[2.8rem]">{value.name}</p>

                                <h2 className="mt-[1.0rem] text-[1.5rem] sm:text-[1.8rem]">{value.description}</h2>

                                <div className="mt-[4.0rem]">
                                    <a
                                        href={value.link}
                                        aria-label="Redirecionar para um site."
                                        className="px-32 py-5 border-2 border-[#212121] rounded-lg bg-[#212121] text-[#f1f1f1] text-[1.0rem] font-medium hover:bg-transparent hover:text-[#212121] transition-all duration-300 sm:text-[2.0rem] "
                                    >
                                        VISITAR
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
