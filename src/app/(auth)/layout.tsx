import FooterCustom from "@/components/ui/footer/Footer";
import { titleFont } from "@/config/fonts";
import Image from 'next/image';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav className="flex px-5 justify-between items-center w-full">
        <div>
          
          {/* <Image src={ `/logo.png` } alt="logo" width={100} height={50} className="h-full w-full mr-3"/> */}
          <span className={`${titleFont.className} antialiased font-bold`}>
            Lia Visual Medic
          </span>
        </div>
      </nav>

      <div className="flex justify-center">
        <div className="w-full sm:w-[350px] px-10">{children}</div>
      </div>

      <FooterCustom />
    </main>
  );
}
