import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Category } from "../../models";
import categoriesGetir from "../../../assets/categoriesGetir";
import CategoryItem from "../CategoryItem";

const Index = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <TouchableOpacity>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </TouchableOpacity>
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
