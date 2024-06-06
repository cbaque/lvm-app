import { ResponseI } from "./responseI";

export interface RoleResponseI extends ResponseI {
  data: RoleI[];
}

export interface RoleI {
  id?: number;
  name?: string;
  description?: string;
}