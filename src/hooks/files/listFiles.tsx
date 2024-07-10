import { getFiles } from "@/actions";
import { FileI } from "@/interfaces/file";
import { tokenStore } from "@/store";
import { useEffect, useState } from "react";

export const useFetchToFiles = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<FileI[]>([]);
  
    const loadFiles = async () => {
      try {
        debugger
        setLoading(true);
        const { data } = await getFiles();
        setData(data);
  
      } catch (error) {
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      tokenStore.persist.rehydrate();
      loadFiles();
  
    }, []);
  
  
    return { data,  loading, loadFiles }
  
  }