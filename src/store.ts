import { create } from 'zustand'

type NavbarState = "about" | "projects" | "resume";

export interface NavbarProps {
  navbarState: NavbarState;
  setNavbarState: (state: NavbarState) => void;
};

export const useNavbarStore = create<NavbarProps>((set) => ({
    navbarState: 'about',
    setNavbarState: (state: NavbarState) => set({ navbarState: state }),

}));
