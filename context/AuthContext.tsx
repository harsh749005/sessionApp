import { useContext, createContext, useState } from "react";
import { Text, SafeAreaView } from "react-native";

type AuthContextType = {
  loading: boolean | null;
  session: string | null;
  user: string | null;
  signin: () => void;
  signout: () => void;
};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children : React.ReactNode;
}

const AuthProvider = ({ children }:AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [session, setSession] = useState<string | null>("hisdsd");
  const [user, setUser] = useState<string | null>(null);
  const signin = async () => {};
  const signout = async () => {};

  const contextData = { loading,session, user, signin, signout };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <SafeAreaView>
          <Text>Loading ...</Text>
        </SafeAreaView>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export {useAuth,AuthProvider};
