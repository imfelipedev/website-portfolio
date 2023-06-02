import "@/styles/global.css";

import { Poppins } from "next/font/google";
import { Navbar } from "@/app/interface/components/Navbar";
import { Footer } from "@/app/interface/components/Footer";
import { Toastify } from "@/app/interface/components/Toastify";

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
                <main id="app">
                    <Navbar />
                    {children}
                    <Footer />
                    <Toastify />
                </main>
            </body>
        </html>
    );
}
