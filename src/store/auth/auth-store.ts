
import { UserInfoStoreI } from '@/interfaces/authI';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStateI {
  userData: UserInfoStoreI;
  updateUser: (data:UserInfoStoreI) => void;
  resetUser: () => void;
}

const userState: StateCreator<UserStateI> = (set) => ({
    userData : { user: "", business: "", rol:"" } ,
    updateUser: (data:UserInfoStoreI) => set( (state) => ({ userData: data })),
    resetUser: () => set({ userData: {} }),

})

export const userStore = create(
  persist(
    userState,
    {
      name: 'user-storage',
      skipHydration : true
    },
  ),
)