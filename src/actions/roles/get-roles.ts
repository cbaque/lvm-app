'use server';

import { RoleI, RoleResponseI } from "@/interfaces/role";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";
import { cache } from "react";


export const getRoles = cache( async() =>    
{
    try {

        const { data } = await axios.get<RoleResponseI>(`/role`);
        return data;

    } catch (error: any) {
        const { data, message, code } = await ErrorHandler(error);
        return { data, message, code }
    }
});