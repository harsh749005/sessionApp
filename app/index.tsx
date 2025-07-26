import { Alert, Pressable, SafeAreaView, Text, TextInput } from "react-native";
import { useAuth } from "../context/AuthContext";
import { Redirect } from "expo-router";
export default function Index() {
  const { session } = useAuth();
  const handleLogin = () => {
    Alert.alert("hello , Harsh !");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      {session ? (
        <Redirect href="/(tabs)/Home" />
      ) : (
        <SafeAreaView  style={{
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}>
          <TextInput
            style={{
              borderColor: "#606060ff",
              borderWidth: 2,
              width: "80%",
              borderRadius: 50,
              paddingLeft: 10,
            }}
            placeholder="name"
          />

          <TextInput
            style={{
              borderColor: "#606060ff",
              borderWidth: 2,
              width: "80%",
              borderRadius: 50,
              paddingLeft: 10,
            }}
            placeholder="email"
          />

          <TextInput
            style={{
              borderColor: "#606060ff",
              borderWidth: 2,
              width: "80%",
              borderRadius: 50,
              paddingLeft: 10,
            }}
            placeholder="password"
            keyboardType="visible-password"
          />
          <Text>{session}</Text>
          <Pressable
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 5,
              backgroundColor: "blue",
            }}
            onPress={() => {
              handleLogin();
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Sign in
            </Text>
          </Pressable>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}
