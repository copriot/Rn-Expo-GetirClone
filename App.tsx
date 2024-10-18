import { StyleSheet, Text, View, LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import "react-native-gesture-handler";
import store from "./src/redux/store";
import { Provider } from "react-redux";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //marginTop: "15%",
  },
});
