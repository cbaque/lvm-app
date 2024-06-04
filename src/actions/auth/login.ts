'use server';

import { AuthResponseI } from "@/interfaces/authI";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";
import { cookies } from "next/headers";


export async function authenticate(
    prevState: AuthResponseI | undefined,
    formData: FormData,
) {

    try {

        const { data } = await axios.post<AuthResponseI>(`/auth`, formData);
        cookies().set("token", data.data.token)
        return data;

    } catch (error: any) {

        const { data, message, code } = await ErrorHandler(error);
        
        return { data, message, code }
        
    }
}