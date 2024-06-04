'use server';

import { AuthResponseI } from "@/interfaces/authI";
import { UserResponseI } from "@/interfaces/user";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";


export async function getUsers() {

    try {

        const { data } = await axios.get<UserResponseI>(`/user`);
        return data;

    } catch (error: any) {

        const { data, message, code } = await ErrorHandler(error);
        
        return { data, message, code }
        
    }
}