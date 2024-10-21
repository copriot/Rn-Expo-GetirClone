import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react"; // useEffect ve useState'i içe aktardık
import { FlatList } from "react-native-gesture-handler";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

const Index = ({
  cartItems,
}: {
  cartItems: { product: Product; quantity: number }[];
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.fiyatIndirimli;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem product={item.product} quantity={item.quantity} />
          )}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5d3ebd" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#fefefe",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5D3eBD",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderColor: "gray",
            borderWidth: 0.4,
          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            {totalPrice.toFixed(2)} <Text> {"\u20ba"}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(Index);
