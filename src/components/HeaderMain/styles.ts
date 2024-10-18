import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#F7D102",
  },
  headerOne: {
    backgroundColor: "white",
    width: "80%",
    height: height * 0.064,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "6%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    borderLeftColor: "gray",
    borderLeftWidth: 3,
    paddingLeft: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerTwo: {
    width: "40%",
    height: height * 0.064,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: width * 0.12,
  },
});
export default styles;
