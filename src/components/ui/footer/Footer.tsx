import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

const FooterCustom = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold `}>
          Lia Visual Medic{" "}
        </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>
    </div>
  );
};

export default FooterCustom;
