import { createContext, useState, type ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextType {
  isAuthenticated: boolean;
  userDetails: Record<string, unknown> | null;
  setUserDetails: (details: Record<string, unknown> | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState<Record<
    string,
    unknown
  > | null>(null);

  const logout = async () => {
    setIsAuthenticated(false);
    setUserDetails(null);
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userDetails,
        setUserDetails,
        setIsAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
