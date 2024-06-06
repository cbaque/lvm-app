import { ResponseI } from "./responseI";

export interface FileResponseI  extends ResponseI {
  data?: FileI;
}

export interface FileI {
  id?: number;
  description?: string;
}