import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useStore} from "../store";

const {width: screenWidth} = Dimensions.get("window");
export default function BidScreen({navigation}) {
  const bid = useStore((state) => state.bid);
  const updateBid = useStore((state) => state.updateBid);
  const handleNext = () => {
    console.log("goto AvatarScreen");
    navigation.navigate("AvatarScreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Starting bid per hour</Text>
        <Text style={styles.subHeader}>
          The minimum bid you're willing to work for
        </Text>
        <TextInput
          placeholder={"$0.00"}
          keyboardType={"decimal-pad"}
          value={bid ? String(bid) : ""}
          style={styles.textInput}
          multiline={true}
          onChangeText={(text) => {
            updateBid(parseInt(text));
          }}
        />
        <PrimaryButton title="Next" onPress={handleNext}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  scrollView: {
    alignItems: "center",
    marginTop: 150,
    width: screenWidth,
  },
  header: {
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 6,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 30,
  },
  textInput: {
    width: 260,
    height: 140,
    borderRadius: 30,
    marginBottom: 12,
    paddingHorizontal: 12,
    fontSize: 60,
    textAlign: "center",
    paddingTop: 35,
    backgroundColor: "#fcfcfc",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: {width: 3, height: 4},
    shadowRadius: 4,
  },
});
