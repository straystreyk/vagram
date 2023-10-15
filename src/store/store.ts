import { create } from 'zustand'

interface IStore {
    activeSection:string
    setActiveSection: (a:string) => void
}

export const useBearStore = create<IStore>((set) => ({
    activeSection: "",
    setActiveSection: (activeSection:string) => set(() => ({ activeSection })),
}))