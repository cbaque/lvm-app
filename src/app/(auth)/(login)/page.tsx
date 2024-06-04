"use client";

import { AlertProvider } from "@/context/alertContext";
import LoginForm from "./LoginForm";
import { titleFont } from "@/config/fonts";

export default function loginPage() {

  return (
    <AlertProvider>

      <div className="flex flex-col min-h-max pt-20 sm:pt-28">
        <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Iniciar Sesi&oacute;n</h1>
        <LoginForm />
      </div>
      
    </AlertProvider>
  );
}
