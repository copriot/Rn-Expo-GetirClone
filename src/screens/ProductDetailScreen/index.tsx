import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import ImageCarousel from "../../components/ImageCarousel";
import { Product } from "../../models";
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
    </View>
  );
};

export default index;
