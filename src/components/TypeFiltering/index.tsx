import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const { height, width } = Dimensions.get("screen");
const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 12,
          marginRight: 12,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 6,
          height: height * 0.044,
          borderColor: "grey",
        },
        item == active
          ? { backgroundColor: "#7849F7" }
          : { borderColor: "gray", borderWidth: 0.2 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849F7", fontWeight: "600" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};
const index = () => {
  const [category, setCategory] = useState<String>("Birlikte iyi gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.072,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        backgroundColor: "white",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 2,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte iyi gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        ),
      )}
    </ScrollView>
  );
};

export default index;
