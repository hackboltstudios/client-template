import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Background from "@/components/shared/Background";

interface SiteLayoutProps {
    children: ReactNode;
}

export default function SiteLayout({
                                       children,
                                   }: SiteLayoutProps) {
    return (
        <div>
            <Background/>
            <div className="flex min-h-screen flex-col">
                <Navbar />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    );
}