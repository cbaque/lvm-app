'use server';

import { FileResponseI } from "@/interfaces/file";
import { UserResponseI } from "@/interfaces/user";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";


export async function   postFiles(
    prevState: FileResponseI | undefined,
    formData: FormData,
) {

    try {
        const { data } = await axios.post<FileResponseI>(`/file`, formData);
        return data;

    } catch (error: any) {

        const { data, message, code } = await ErrorHandler(error);
        
        return { data, message, code }
        
    }
}