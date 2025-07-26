import { Text, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useAuth } from "../../context/AuthContext";
const Home = () => {
  const {session} = useAuth();
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 20,
      }}
    >
      <Text
        style={{
          fontWeight: 700,
          fontSize: 24,
          color:"black",
          backgroundColor:'pink'
        }}
      >
        {session}
        Home
      </Text>
      <Pressable
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 5,
          backgroundColor: "blue",
        }}
        onPress={() => {
          router.push("/");
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          
          Index Page
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
