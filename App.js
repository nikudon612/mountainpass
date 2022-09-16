// In App.js in a new project
import React, { useCallback } from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home.screen";
import DetailsScreen from "./src/screens/Details.screen";
import MediaScreen from "./src/screens/Media.screen";
import SearchScreen from "./src/screens/Search.screen";
import PortfolioScreen from "./src/screens/Portfolio.screen";
import ProfileScreen from "./src/screens/Profile.screen";
import Icon from "react-native-vector-icons/FontAwesome";

//navigation stack variables//
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//navigation stack variables//

//Screen Stacks//
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const MediaStack = createNativeStackNavigator();

function MediaStackScreen() {
  return (
    <MediaStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <MediaStack.Screen name="Settings" component={SettingsScreen} />
      <MediaStack.Screen name="Details" component={DetailsScreen} />
    </MediaStack.Navigator>
  );
}
const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="Settings" component={SettingsScreen} />
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
}
const PortfolioStack = createNativeStackNavigator();

function PortfolioStackScreen() {
  return (
    <PortfolioStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <PortfolioStack.Screen name="Settings" component={SettingsScreen} />
      <PortfolioStack.Screen name="Details" component={DetailsScreen} />
    </PortfolioStack.Navigator>
  );
}
const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
    </ProfileStack.Navigator>
  );
}
//Screen Stacks//

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Overview"
          component={HomeStackScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarIcon: () => (
              <Image source={require("./assets/icons/home.png")} />
            ),
          }}
        />
        <Tab.Screen
          name="Media"
          component={MediaScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarIcon: () => (
              <Image source={require("./assets/icons/clapperboard-play.png")} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarIcon: () => (
              <Image source={require("./assets/icons/Search.png")} />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarIcon: () => (
              <Image source={require("./assets/icons/chart-pie.png")} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarIcon: () => (
              <Image source={require("./assets/icons/user-circle.png")} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
