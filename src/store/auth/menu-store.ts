
import { MenuI } from '@/interfaces/authI';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface menuStateI {
    menu: MenuI[];
    updateMenu: (data:MenuI[]) => void;
    resetMenu: () => void;
}

const menuState: StateCreator<menuStateI> = (set) => ({
    menu : [],
    updateMenu: (data:MenuI[]) =>  set( (state) => ({ menu: data })),
    resetMenu: () => set({ menu: [] }),
})

export const MenuStore = create(
  persist(
    menuState,
    {
      name: 'menu-storage',
      skipHydration : true
    },
  ),
)