import { createContext } from 'react';
import { User } from '../dtos/User';

interface loginInterface{
  connect: boolean;
  error?: string;
}

export type AuthContextType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<loginInterface>
  signout: () => void
}

export const AuthContext = createContext <AuthContextType>(null!);