'use server';

import axiosBase from 'axios'
import { cookies } from 'next/headers';



const instance = axiosBase.create({
    baseURL: 'http://lvm-api.test/api',
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