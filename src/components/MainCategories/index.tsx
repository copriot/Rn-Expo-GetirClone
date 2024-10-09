import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Category } from "../../models";
import categoriesGetir from "../../../assets/categoriesGetir";
import CategoryItem from "../CategoryItem";

const Index = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default Index;
