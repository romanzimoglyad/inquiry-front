import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState("");

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
