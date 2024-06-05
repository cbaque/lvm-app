'use server';

import { AuthResponseI } from "@/interfaces/authI";
import { UserResponseI } from "@/interfaces/user";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";


export async function postUsers(
    prevState: AuthResponseI | undefined,
    formData: FormData,
) {

    try {
        console.log(formData);

        const { data } = await axios.post<UserResponseI>(`/user`, formData);
        return data;

    } catch (error: any) {

        const { data, message, code } = await ErrorHandler(error);
        
        return { data, message, code }
        
    }
}