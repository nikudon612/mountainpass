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
      <MediaStack.Screen name="Media" component={MediaScreen} />
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
      <SearchStack.Screen name="Search" component={SearchScreen} />
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
      <PortfolioStack.Screen name="Portfolio" component={PortfolioScreen} />
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
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
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
            tabBarIcon: ({ tintColor, focused }) => (
              <Image
                source={
                  focused
                    ? require("./assets/icons/home.png")
                    : require("./assets/icons/inactive/home.png")
                }
                color={tintColor}
                size={50}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Media"
          component={MediaScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "#121414",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("./assets/icons/clapperboard-play.png")
                    : require("./assets/icons/inactive/clapperboard-play.png")
                }
                size={50}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarOptions: {
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("./assets/icons/Search.png")
                    : require("./assets/icons/inactive/Search.png")
                }
                size={50}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("./assets/icons/chart-pie.png")
                    : require("./assets/icons/inactive/chart-pie.png")
                }
                size={50}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarShowLabel: false,
            tabBarColor: "red",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("./assets/icons/user-circle.png")
                    : require("./assets/icons/inactive/user-circle.png")
                }
                size={50}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
