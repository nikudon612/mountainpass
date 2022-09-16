import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";

function DetailsScreen({ route, navigation }) {
  //Modal State//
  const [modalOpen, setModalOpen] = useState(false);
  const [mediaModalOpen, setMediaModalOpen] = useState(false);

  function openMedia() {
    setMediaModalOpen(true);
    // togglePlayback(playbackState);
  }
  //Modal State//

  /* 2. Get the param */
  const { item } = route.params;
  const [loaded] = useFonts({
    Mercury: require("../../assets/fonts/Mercury.otf"),
    WhitneyBold: require("../../assets/fonts/whitneybold.otf"),
    WhitneyMedium: require("../../assets/fonts/whitneymedium.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.modalContainer}>
            <View style={styles.closeTabContainer}>
              <TouchableOpacity
                style={styles.closeTab}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="chevron-back-outline"
                  size={25}
                  style={{ marginBottom: 24 }}
                />
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                  <Ionicons
                    name="download"
                    size={25}
                    color="#878787"
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="bookmark"
                    size={25}
                    color="#878787"
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="share"
                    size={25}
                    color="#878787"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 20,
            }}
          >
            <View style={styles.item}>
              <View style={styles.articleTop} onPress={() => {}}>
                <Text style={styles.kind}>{item.kind}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <TouchableOpacity
                  style={styles.articleButtonContainer}
                  onPress={() => {
                    openMedia();
                  }}
                >
                  <Ionicons
                    // name={
                    //   playbackState === State.Playing
                    //     ? "ios-pause-circle"
                    //     : "ios-play-circle"
                    // }
                    name="ios-play-circle"
                    size={50}
                    color="white"
                  />
                  <Text style={styles.buttonText}>
                    {/* {playbackState === State.Playing
                    ? "Pause Podcast"
                    : "Play Podcast"} */}
                    Play Podcast
                  </Text>
                </TouchableOpacity>

                <Text style={styles.articleText}>{item.text}</Text>
              </View>
            </View>

            {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  card: {
    marginTop: 2,
    marginBottom: 75,
  },
  item: {
    marginHorizontal: 24,
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  kind: {
    fontSize: 13,
    fontWeight: "700",
    color: "#990024",
    marginBottom: 10,
    fontFamily: "WhitneyBold",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "WhitneyBold",
  },
  author: {
    fontSize: 14,
    fontWeight: "500",
    color: "grey",
    fontFamily: "WhitneyMedium",
    marginBottom: 10,
  },
  date: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 0,
    fontFamily: "WhitneyMedium",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Mercury",
  },
  articleFooter: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "WhitneyMedium",
    color: "#FFF",
  },
  buttonContainer: {
    width: 45,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  modalContainer: {
    backgroundColor: "white",
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    marginHorizontal: 24,
  },
  progressContainer: {
    width: 100,
    height: 40,
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 5,
  },
  articleBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 4,
  },
  articleButtonContainer: {
    backgroundColor: "#990024",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
    justifyContent: "center",
  },
  articleSubtext: {
    textAlign: "left",
  },
  articleText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Mercury",
    lineHeight: 28,
    marginBottom: 24,
  },
  articleTitle: {
    fontSize: 24,
    lineHeight: 33,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeTab: {
    textAlign: "left",
  },
  closeTabContainer: {
    marginTop: 10,
    // marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#878787",
  },
  buttonText: {
    color: "white",
  },
  secondModal: {
    height: 64,
    width: "100%",
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#EFEAE4",
  },
  secondModalArticle: {
    height: 64,
    width: "100%",
    bottom: 70,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#EFEAE4",
  },
  secondModalInfo: {
    flexDirection: "column",
    marginVertical: 15,
    marginLeft: 24,
  },
  secondTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "WhitneyBold",
  },
  secondAuthor: {
    fontSize: 14,
    fontWeight: "500",
    color: "#707070",
    fontFamily: "WhitneyMedium",
    marginBottom: 10,
  },
  secondIcons: {
    flexDirection: "row",
    marginVertical: 12,
    marginLeft: 10,
  },
  buttonTab: {
    height: 55,
    marginBottom: 50,
    bottom: 0,
    position: "absolute",
    backgroundColor: "white",
  },
  modalBottomContainer: {
    bottom: 0,
    position: "absolute",
    height: 88,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  mainContainer: {
    backgroundColor: "white",
  },
});
