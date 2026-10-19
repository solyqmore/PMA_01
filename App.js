import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);

  function handleAddItem() {
    const newItem = item.trim();

    if (newItem === "") return;

    setTask([...task, newItem]);
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
        <FlatList
          data={task}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.taskItem}>({item})</Text>
          )}
          ListEmptyComponent={<Text>Zatiaľ žiadne udalosti.</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderWidth: 3,
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
  taskItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
