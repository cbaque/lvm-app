import { ResponseI } from "./responseI";

export interface UserResponseI extends ResponseI {
    data: UserI,
}

export interface UserI {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  business_id: number;
  people_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  people: PeopleI;
}

export interface PeopleI {
  id: number;
  name: string;
  dni: string;
  phone: string;
  address: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}