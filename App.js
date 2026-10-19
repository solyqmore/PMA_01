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

import Item from "./src/components/items";

export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);

  function handleAddItem() {
    const newItem = item.trim();

    if (newItem === "") return;

    setTask((currentTasks) => [
      ...currentTasks,
      { id: Date.now().toString(), title: newItem },
    ]);

    setItem("");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputContainer}>
        <TextInput
          value={item}
          onChangeText={setItem}
          style={styles.input}
          placeholder="PROJEKT PMA"
        />

        <Button title="ADD" onPress={handleAddItem} />
      </View>

      <View style={styles.udalosti}>
        <FlatList
          data={task}
          keyExtractor={(taskItem) => taskItem.id}
          renderItem={({ item }) => <Item title={item.title} />}
          ListEmptyComponent={<Text>Zatiaľ žiadne udalosti.</Text>}
        />
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
