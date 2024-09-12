'use server';

import { FileResponseI } from "@/interfaces/file";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";


export async function postFiles(
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



export async function putFiles(
    prevState: FileResponseI | undefined,
    formData: FormData,
) {

    try {
        const id = formData.get('id');
        if (!id) throw new Error('Error al actualizar...');

        const { data } = await axios.put<FileResponseI>(`/file/${Number(id)}`, formData);
        return data;

    } catch (error: any) {

        const { data, message, code } = await ErrorHandler(error);
        
        return { data, message, code }
        
    }
}