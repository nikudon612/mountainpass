import * as React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const user = {
  id: "jane",
  firstName: "Jane",
  lastName: "Done",
  age: 25,
};

const buttonarticles = {
  id: 1,
  kind: "PODCAST",
  title: "Will Central Banks Really Be Easing in Nine Months?",
  author: "By Larry Cofsky, Danny Newman",
  date: "August 12th 2022 4:45pm",
  text: "At the end of last year, we described a liquidity hole that we expected would grow and envelop most assets. Last year, the fundamental conditions for assets (particularly bonds) deteriorated quickly, but asset purchases by the Fed combined with huge purchases by banks left asset markets swamped with money. That money worked its way to every corner of asset markets, leaving the pricing of many assets dependent on the continual flow of new purchases. The Fed’s late but abrupt reaction to inflation is now rippling through financial markets and, by our measures, is about to push the US economy into a recession and a significant decline in profits. In a Bloomberg interview Thursday, co-CIO Greg Jensen discussed the implications of this liquidity pullback and the Fed reaction function for different financial assets. In this report, we give an update on the big ongoing shifts we have discussed before that are behind what we are seeing today:",
  button: "Play Podcast",
};

const articles = [
  {
    id: 1,
    kind: "PODCAST",
    title: "Will Central Banks Really Be Easing in Nine Months?",
    author: "By Larry Cofsky, Danny Newman",
    date: "August 12th 2022 4:45pm",
    text: "At the end of last year, we described a liquidity hole that we expected would grow and envelop most assets. Last year, the fundamental conditions for assets (particularly bonds) deteriorated quickly, but asset purchases by the Fed combined with huge purchases by banks left asset markets swamped with money. That money worked its way to every corner of asset markets, leaving the pricing of many assets dependent on the continual flow of new purchases. The Fed’s late but abrupt reaction to inflation is now rippling through financial markets and, by our measures, is about to push the US economy into a recession and a significant decline in profits. In a Bloomberg interview Thursday, co-CIO Greg Jensen discussed the implications of this liquidity pullback and the Fed reaction function for different financial assets. In this report, we give an update on the big ongoing shifts we have discussed before that are behind what we are seeing today:",
    button: "Play Podcast",
  },
  {
    id: 2,
    kind: "INTERACTIVE",
    title:
      "Building a Beta Portfolio in an Environment that Looks Difficult for Assets",
    author: "By Larry Cofsky, Danny Newman",
    date: "August 12th 2022 4:45pm",
    text: "Investors now face drastically different circumstances compared to the last decades favorable environment for beta in general and equities in particular. From an alpha perspective, our outlook for assets is dim. We worry about the impact of the ongoing withdrawal of liquidity on assets (more so than on the economy itself ), believe that markets are underpricing the amount of tightening that will be required to tame inflation, and see developed world policy makers as highly constrained. At the same time, for most investors, not holding assets is not an option.Holding cash isnt viable for most in a world in which it is destroying wealth at rate of 5% per year.Alpha can be extremely valuable, but it is  difficult to generate and difficult to find at scale, as it requires unique insight not already priced into markets.That explains why roughly 90% of the risk in a typical institutional portfolio comes from the strategic asset  allocation.Additionally, alpha views will often be wrong.Even the highest- conviction alpha views are at best  60 / 40 propositions.And those views can change quickly as market conditions unfold.So, we would hesitate to  make big portfolio shifts on the basis of a handful of alpha views, including our own.Our approach to building  a total portfolio has always been to build the best beta you can, independent of any active views, and then  carefully layer in a diversified set of alphas to the degree that you have them or can find them in manager alpha.That is to say, alpha is not to be ignored—just the opposite—but the most important question for most  investors right now is: What is the best way to build a robust beta portfolio in an environment that  seems likely to be difficult for assets for some time?",
  },
  {
    id: 3,
    kind: "PODCAST",
    title: "Will Central Banks Really Be Easing in Nine Months?",
    author: "By Larry Cofsky, Danny Newman",
    date: "August 12th 2022 4:45pm",
    text: "At the end of last year, we described a liquidity hole that we expected would grow and envelop most assets. Last year, the fundamental conditions for assets (particularly bonds) deteriorated quickly, but asset purchases by the Fed combined with huge purchases by banks left asset markets swamped with money. That money worked its way to every corner of asset markets, leaving the pricing of many assets dependent on the continual flow of new purchases. The Fed’s late but abrupt reaction to inflation is now rippling through financial markets and, by our measures, is about to push the US economy into a recession and a significant decline in profits. In a Bloomberg interview Thursday, co-CIO Greg Jensen discussed the implications of this liquidity pullback and the Fed reaction function for different financial assets. In this report, we give an update on the big ongoing shifts we have discussed before that are behind what we are seeing today:",
    button: "Play Podcast",
  },
];

const renderItem = ({ item, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Detail2", { Item })}>
    <View style={styles.item}>
      <View style={styles.articleTop} onPress={() => {}}>
        <Text style={styles.kind}>{item.kind}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.text} numberOfLines={4} ellipsizeMode="tail">
          {item.text}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    Mercury: require("../../assets/fonts/Mercury.otf"),
    WhitneyBold: require("../../assets/fonts/whitneybold.otf"),
    WhitneyMedium: require("../../assets/fonts/whitneymedium.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item })}
          >
            <View style={styles.item}>
              <View style={styles.articleTop} onPress={() => {}}>
                <Text style={styles.kind}>{item.kind}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <Text
                  style={styles.text}
                  numberOfLines={4}
                  ellipsizeMode="tail"
                >
                  {item.text}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default HomeScreen;

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
    height: "100%",
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
    fontFamily: "WhitneyBold",
  },
  closeTab: {
    textAlign: "left",
  },
  closeTabContainer: {
    marginTop: 60,
    marginBottom: 24,
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
});
