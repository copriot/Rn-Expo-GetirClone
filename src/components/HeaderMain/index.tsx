import { Text, View, Image } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />

        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#6E7480",
              marginRight: 3,
              marginLeft: 6,
            }}
          >
            Tekirdağ Hayrabolu ilyas Mah
          </Text>
          <Entypo name="chevron-right" size={24} color="#5D3EBD" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5D3EBD" }}>
            TWS
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5D3EBD" }}>
            25 dk
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;
