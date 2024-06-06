'use server';

import { FileResponseI } from "@/interfaces/file";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";


export async function getFiles() {

    try {

        const { data } = await axios.get<FileResponseI>(`/file`);
        return data;

    } catch (error: any) {

        const { data, message, code } = await ErrorHandler(error);
        
        return { data, message, code }
        
    }
}