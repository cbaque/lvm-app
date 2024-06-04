
import "./globals.css";
import { inter } from "@/config/fonts";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Lia Visual Medic",
  description: "Desarrollado por Primarys Soft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
