import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const { width, height } = Dimensions.get("window");
const index = ({ images }: { images: string[] }) => {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        height: height * 0.25,
        paddingTop: 22,
      }}
    >
      <FlatList
        data={images}
        style={{ width: width * 0.5, height: height * 0.2 }}
        renderItem={(item) => (
          <Image
            source={{ uri: item.item }}
            style={{
              width: width * 0.5,
              height: height * 0.2,
              resizeMode: "stretch",
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
      ></FlatList>
    </View>
  );
};

export default index;
