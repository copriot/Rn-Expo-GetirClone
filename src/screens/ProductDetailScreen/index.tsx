import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import ImageCarousel from "../../components/ImageCarousel";
import { Product } from "../../models";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
const index = (props) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  console.log("product İSS", product);
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }
  return (
    <View>
      <ImageCarousel images={product?.images} />
      <DetailBox
        price={product.fiyat}
        name={product.name}
        quantity={product.miktar}
      />
      <Text
        style={{
          paddingHorizontal: 10,
          paddingVertical: 14,
          color: "gray",
          fontWeight: "600",
        }}
      >
        Detaylar
      </Text>
      <DetailProperty />
    </View>
  );
};

export default index;
