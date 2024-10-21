import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
import { Product } from "../../models";
const { width, height } = Dimensions.get("window");
type CardButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};
const index = ({ item, addItemToCart }: CardButtonType) => {
  return (
    <View
      style={{
        width: "100%",
        height: height * 0.1,

        marginTop: 40,
      }}
    >
      <TouchableOpacity
        onPress={() => addItemToCart(item)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};
export default connect(null, mapDispatchToProps)(index);
