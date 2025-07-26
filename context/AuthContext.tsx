import { useContext, createContext, useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { account } from "../lib/appwriteConfig";

type User = {
  name: string;
  email: string;
  //   $id: string;
  // Add other fields as needed
};

// type Session = {
//   $id: string;
//   userId: string;
//   expire: number;
//   // Add other session fields you use
// };

type AuthContextType = {
  loading: boolean | null;
  session: object | null;
  user: User | null;
  signin: ({ email, password }: SignInParams) => Promise<void>;
  signout: () => void;
};
type SignInParams = {
  email: string;
  password: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [session, setSession] = useState<object | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const init = async () => {
      checkAuth();
    };
    init();
  }, []);
  const checkAuth = async () => {
    try {
      const responseSession = await account.getSession("current");
      setSession(responseSession);

      const responseUser = await account.get();
      setUser(responseUser);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const signin = async ({ email, password }: SignInParams) => {
    setLoading(true);
    try {
      const responseSession = await account.createEmailPasswordSession(
        email,
        password
      );
      setSession(responseSession);
      const responseUser = await account.get();
      setUser(responseUser);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const signout = async () => {
    setLoading(true);
    await account.deleteSession("current");
    setTimeout(() => {
      setSession(null);
      setUser(null);
      setLoading(false);
    }, 2000);
  };

  const contextData = { loading, session, user, signin, signout };
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

export { useAuth, AuthProvider };
