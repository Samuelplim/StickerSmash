import { StyleSheet, Text, View } from "react-native";

export const Login = () => {
  const titleName = process.env.TITULO_APP;
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
