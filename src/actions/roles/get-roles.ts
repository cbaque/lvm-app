'use server';

import { RoleResponseI } from "@/interfaces/role";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";


export async function getRoles() {

    try {

        const { data } = await axios.get<RoleResponseI>(`/role`);
        return data;

    } catch (error: any) {
        const { data, message, code } = await ErrorHandler(error);
        return { data, message, code }
    }
}