'use server';

import { FileResponseI } from "@/interfaces/file";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";

export async function deleteFiles(id?: number) {
    try {

        const { data } = await axios.delete<FileResponseI>(`/file/${id}`);
        return data;
        
    } catch (error) {
        const { data, message, code } = await ErrorHandler(error);

        return { data, message, code };
    }
}