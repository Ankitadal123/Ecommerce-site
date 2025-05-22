import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  email: null,
  login: (email) => set({ isLoggedIn: true, email }),
  logout: () => set({ isLoggedIn: false, email: null }),
}));

export default useAuthStore;

