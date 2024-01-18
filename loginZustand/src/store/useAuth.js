import { create } from "zustand";
import { auth } from "../firebase/firebaseConfig"; //importamos el auth de la configuracion de firebase
import { createUserWithEmailAndPassword } from "firebase/auth";

export const userAuth = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (dataUser) => set(() => ({ isAuthenticated: true, user: dataUser })),
  logout: () => set(() => ({ isAuthenticated: false, user: null })),
}));

export const useRegister = create((set) => ({
  user: null,
  signIn: async (email, password) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      set(() => ({ user: credentials }));
    } catch (error) {
      console.log(error);
    }
  },
}));
