import { create } from 'zustand'

export type NavbarState = "about" | "projects" | "resume";

export interface NavbarProps {
  navbarState: NavbarState;
  setNavbarState: (state: NavbarState) => void;
};

export const useNavbarStore = create<NavbarProps>((set) => ({
    navbarState: "about",
    setNavbarState: (state: NavbarState) => set({ navbarState: state }),

}));

// 

interface HeroAniCompleteState {
  heroComplete: boolean;
  hasAnimationRun: boolean; 
  setHeroComplete: (state: boolean) => void;
  setHasAnimationRun: (state: boolean) => void;

}

export const heroAniCompleteStore = create<HeroAniCompleteState>((set) => ({
  heroComplete: false,
  hasAnimationRun: false, 
  setHeroComplete: (state: boolean) => set({ heroComplete: state }),
  setHasAnimationRun: (state: boolean) => set({ hasAnimationRun: state })
}))

