import "@/styles/global.css";

import { Poppins } from "next/font/google";
import { Navbar } from "@/app/interface/components/Navbar";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Felipe | Portfólio",
    description: "Portfólio pessoal",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br" className={poppins.className}>
            <body>
                <main id="app" className="max-w-full max-h-full min-h-[100vh] flex flex-col">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
