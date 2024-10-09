import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children }) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: "#5C3EBC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        marginTop: -9,
        borderWidth: 2,
        borderColor: "white",
      }}
    >
      <Entypo name="list" size={32} color="#FFD00C" />
    </TouchableOpacity>
  );
};
const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
