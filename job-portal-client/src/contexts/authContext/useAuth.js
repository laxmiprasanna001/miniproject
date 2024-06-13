import { useContext } from 'react';
import { AuthContext } from './authContext';

export function useAuth() {
  const authContext = useContext(AuthContext);
  
  // Check if authContext is null or undefined
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthContext');
  }

  return authContext;
}
