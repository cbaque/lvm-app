'use server';

import { FileResponseI } from "@/interfaces/file";
import { axios } from "@/libs/axios";
import { ErrorHandler } from "@/utils";

export async function saveFiles(
    prevState: FileResponseI | undefined,
    formData: FormData,
) {
    try {
        let reponse;
        const id = formData.get('id');

        if (!id) {
            reponse = await axios.post<FileResponseI>(`/file`, formData);
        } else {
            reponse = await axios.put<FileResponseI>(`/file/${Number(id)}`, formData);
        }
        return reponse.data;
        
    } catch (error) {
        const { data, message, code } = await ErrorHandler(error);

        return { data, message, code };
    }
}