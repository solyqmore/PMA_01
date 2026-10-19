import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  function handleAddItem() {
    console.log(item);
    setItem("");
  }
  function handleInputText(text) {
    setItem(text);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          value={item}
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="PROJEKT PMA"
        />
        <Button title="ADD" onPress={handleAddItem} />
      </View>
      <View style={styles.udalosti}>
        <Text>UDALOST</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "black",
    padding: 8,
  },
  udalosti: {
    flex: 2,
    backgroundColor: "white",
    padding: 10,
  },
});
