import { Text, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthContext";
const Home = () => {
  const {user,signout} = useAuth();
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
          
        }}
      >
        Welcome {" "}
        {user?.name} !
      </Text>
      <Pressable
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 5,
          backgroundColor: "red",
          
        }}
        onPress={()=>{
          signout();
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight:700
          }}
        >
          
          Log out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
