import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const index = () => {
  return (
    <View
      style={{
        width: "100%",
        height: height * 0.1,

        marginTop: 40,
      }}
    >
      <TouchableOpacity
        style={{
          height: height * 0.06,
          width: "88%",
          backgroundColor: "#5D3EBD",
          marginHorizontal: "6%",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
