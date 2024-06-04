"use client";

import { authenticate } from "@/actions";
import { useAlert } from "@/context/alertContext";
import { Button } from "antd";

import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { useRouter } from 'next/navigation';
import { MenuStore, tokenStore, userStore } from "@/store";


const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const { showAlert } = useAlert();
  const router = useRouter();
  const addUser = userStore( (state) => state.updateUser );
  const addToken = tokenStore( (state) => state.updateToken );
  const addMenu = MenuStore( (state) => state.updateMenu );

  const [inputValues, setInputValues] = useState({
    email: "admin@primarys.soft",
    password: "admin",
    business: "0993384053001",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid = Object.values(inputValues).every(
    (value) => value.trim() !== ""
  );

  useEffect(() => {

    userStore.persist.rehydrate();

    if ( state !== undefined ) {
      if (!state?.code) {
        showAlert(state?.message, "error");
      } else {
        addUser({user: state.data.user, business: state.data.business, rol: state.data.rol[0]});
        addToken( state.data.token );
        addMenu( state.data.menu );
        router.push('/dashboard');
      }
    }
  }, [state]);

  return (
    <form className="flex flex-col" action={dispatch}>
      <label htmlFor="email">Email</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        placeholder="example@email.com"
        type="email"
        name="email"
        value={inputValues.email}
        onChange={handleInputChange}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
        value={inputValues.password}
        onChange={handleInputChange}
      />

      <label htmlFor="business">Empresa</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="number"
        name="business"
        value={inputValues.business}
        onChange={handleInputChange}
      />

      <LoginButton isFormValid = {isFormValid}/>
    </form>
  );
};

function LoginButton({isFormValid} : {isFormValid: Boolean}) {
  const { pending } = useFormStatus();
 
  return (
    <Button
    type="primary"
    disabled={!isFormValid || pending}
    htmlType="submit"
    size="large"
    className="mb-10"
    loading={!!pending}
  >
    Iniciar
  </Button>
  );
}

export default LoginForm;
