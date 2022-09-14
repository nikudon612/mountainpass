import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { user, buttonarticles, articles, item } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
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
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>

          {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
          {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    // fontFamily: "WhitneyBold",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
    // fontFamily: "WhitneyBold",
  },
  author: {
    fontSize: 14,
    fontWeight: "500",
    color: "grey",
    // fontFamily: "WhitneyMedium",
    marginBottom: 10,
  },
  date: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 0,
    // fontFamily: "WhitneyMedium",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    // fontFamily: "Mercury",
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
    // fontFamily: "WhitneyMedium",
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
    // fontFamily: "WhitneyBold",
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
