
import { UserInfoStoreI } from '@/interfaces/authI';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface TokenStateI {
    token: string;
    updateToken: (data:string) => void;
    resetToken: () => void;
}

const tokenState: StateCreator<TokenStateI> = (set) => ({
    token : '',
    updateToken: (data:string) =>  set( (state) => ({ token: data })),
    resetToken: () => set({ token: '' }),
})

export const tokenStore = create(
  persist(
    tokenState,
    {
      name: 'token-storage',
      skipHydration : true
    },
  ),
)