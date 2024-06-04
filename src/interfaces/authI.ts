import { ResponseI } from "./responseI";

export interface AuthResponseI extends ResponseI {
    data: UserInfoI,
}

interface UserInfoI  {
  user: string;
  business: string;
  token: string;
  rol: string[];
  menu: MenuI[];
}

export interface MenuI {
  id?: number;
  name?: string;
  icon?: string;
  link?: string;
  tab?: number;
  selected?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: null;
}

export interface UserInfoStoreI {
  user?: string;
  business?: string;
  rol?: string;
}