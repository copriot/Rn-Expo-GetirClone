import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Product } from "../../models";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
  addToCart: (product: Product) => void; // Yeni fonksiyonu ekledik
};

const { width, height } = Dimensions.get("window");

const Index = ({
  product,
  quantity,
  removeFromCart,
  addToCart,
}: CartItemProps) => {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          borderBottomWidth: 0.5,
          borderBottomColor: "gray",
          height: height * 0.13,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "gray",
              borderRadius: 10,
              padding: 4,
            }}
          >
            <Image
              style={{ width: height * 0.09, height: height * 0.09 }}
              source={{ uri: product.image }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{ fontSize: 13, fontWeight: "600", maxWidth: width * 0.4 }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: "#5D3BED",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              {product.fiyat} <Text>{"\u20BA"}</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: width * 0.21,
            borderColor: "lightgray",
            borderWidth: 0.5,
            height: height * 0.036,
            borderRadius: 10,
            shadowOpacity: 0.4,
            shadowRadius: 10,
            shadowColor: "gray",
          }}
        >
          <TouchableOpacity
            onPress={() => removeFromCart(product)}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5D3EBD",
              height: height * 0.037,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
              {quantity}
            </Text>
          </View>
          <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Redux ile bağlantı
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
    addToCart: (product: Product) => dispatch(actions.addToCart(product)), // Yeni fonksiyonu ekledik
  };
};

export default connect(null, mapDispatchToProps)(Index);
