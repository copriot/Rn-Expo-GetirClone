import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";
const { height, width } = Dimensions.get("window");
console.log("the windwo size ", width, height);
const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 9,
        },
        item.name == active.name && {
          borderBottomColor: "red",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
        {item.name}
      </Text>
    </View>
  );
};

function index({ category }: { category: Category }) {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        <CategoryBox item={item} key={item.id} active={category} />
      ))}
    </ScrollView>
  );
}

export default index;
