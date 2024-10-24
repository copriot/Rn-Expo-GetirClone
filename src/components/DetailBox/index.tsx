import { View, Text } from "react-native";
import React from "react";

type DetailBoxProps = { price: number; name: string; quantity: string };

const index = ({ price, name, quantity }: DetailBoxProps) => {
  return (
    <View
      style={{ width: "100%", backgroundColor: "white", alignItems: "center" }}
    >
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          marginTop: 12,
          fontSize: 20,
        }}
      >
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 12 }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "600",
          marginTop: 8,
          paddingBottom: 18,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
};

export default index;
