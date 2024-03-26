import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Props} from "next/script";
import Providers from "@/components/Providers";
import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CPlanner",
  description: "Solves the problem of scheduling meetings with multiple people",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <AppBar />

            {children}
        </Providers>
        </body>
        </html>
    );
}
