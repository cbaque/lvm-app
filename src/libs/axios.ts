'use server';

import axiosBase from 'axios'
import { cookies } from 'next/headers';

const instance = axiosBase.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
  (config) => {

    const token = cookies().get("token")?.value
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
)
export { instance as axios };