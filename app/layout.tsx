import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto_mono = Roboto_Mono();

export const metadata: Metadata = {
    title: "Rokr0k",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto_mono.className} antialiased`}>
                {children}
            </body>
        </ html>
    );
}
