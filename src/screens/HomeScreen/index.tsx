import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderMain from "../../components/HeaderMain";
import BannerCarrousel from "../../components/BannerCarrousel";
import MainCategories from "../../components/MainCategories";
const index = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarrousel />
      <MainCategories />
    </ScrollView>
  );
};

export default index;
