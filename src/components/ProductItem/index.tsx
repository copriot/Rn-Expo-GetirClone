import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
type productItemType = {
  item: Product;
};

const index = ({ item }: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.28,
        marginTop: 12,
        // backgroundColor: "red",
        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.2,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 4,
            color: "#5D3EBD",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 5 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "500",
        }}
      >
        {item.miktar}
      </Text>
      <View
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgray",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.2,
        }}
      >
        <Entypo name="circle-with-plus" size={24} color="#747990" />
      </View>
    </TouchableOpacity>
  );
};

export default index;
