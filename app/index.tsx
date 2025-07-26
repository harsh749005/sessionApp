import { Alert, Pressable, SafeAreaView, Text, TextInput } from "react-native";
import { useAuth } from "../context/AuthContext";
import { Redirect } from "expo-router";
import { useState } from "react";
export default function Index() {
  const { session, signin } = useAuth();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleLogin = () => {
    if (!name || !password || !email) {
      Alert.alert("Please fill all the fields");
      return;
    }
    Alert.alert("hello ", name);
    signin({email,password});
  };
  if(session) return <Redirect href="/(tabs)/Home"/>
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TextInput
        style={{
          borderColor: "#606060ff",
          borderWidth: 2,
          width: "80%",
          borderRadius: 50,
          paddingLeft: 10,
        }}
        placeholder="name"
        value={name}
        onChangeText={setName}
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
        value={email}
        onChangeText={setEmail}
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
        value={password}
        onChangeText={setPassword}
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
  );
}
