import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const searchData = [
  {
    id: 1,
    title: "Growth",
  },
  {
    id: 2,
    title: "Inflation",
  },
  {
    id: 3,
    title: "Cyclical Conditions",
  },
  {
    id: 4,
    title: "Yield",
  },
  {
    id: 5,
    title: "Monetary Policy",
  },
  {
    id: 6,
    title: "What's Discounted?",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} />;

function Search({ navigation }) {
  //fonts
  const [loaded] = useFonts({
    Mercury: require("../../assets/fonts/Mercury.otf"),
    WhitneyBold: require("../../assets/fonts/whitneybold.otf"),
    WhitneyMedium: require("../../assets/fonts/whitneymedium.otf"),
  });

  if (!loaded) {
    return null;
  }
  //fonts
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          {/* <InputItem clear placeholder="Search" last /> */}
        </View>
      </View>
      <View style={styles.results}>
        <View style={styles.resultsPort}>
          <Text style={styles.trending}>MY PORTFOLIO</Text>
          <View style={styles.tradPort}>
            <TouchableOpacity>
              <Text style={styles.trad}>Traditional Portfolio</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.trending}>TRENDING TOPICS</Text>
        </View>
        <FlatList
          data={searchData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  searchBar: {
    marginVertical: 12,
    marginHorizontal: 24,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
  },
  results: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  trending: {
    color: "#990024",
    fontWeight: "700",
    fontSize: 13,
    marginTop: 12,
    fontFamily: "WhitneyBold",
  },
  item: {
    marginVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "WhitneyBold",
    marginBottom: 10,
  },
  resultsPort: {},
  tradPort: {
    fontSize: 17,
    fontWeight: "700",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    marginVertical: 10,
  },
  trad: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "WhitneyBold",
    marginBottom: 10,
  },
});
