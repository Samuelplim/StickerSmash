import { StyleSheet, Text, View } from "react-native";

export const Login = () => {
  return (
    <View>
      <Text>{titleName}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
