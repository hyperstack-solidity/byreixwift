import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    login: (email: string) => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));
