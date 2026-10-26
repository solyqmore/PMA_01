import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Item({ title }) {
  const [completed, setCompleted] = useState(false);
  const [clicks, setClicks] = useState(0);

  function handlePress() {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks === 2) {
      setCompleted((previous) => !previous);
      setClicks(0);
    }
  }

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.taskItem, completed && styles.completedItem]}
    >
      <Text style={styles.taskText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "red",
    margin: 5,
    borderRadius: 8,
    padding: 10,
  },
  completedItem: {
    backgroundColor: "green",
  },
  taskText: {
    fontSize: 16,
    color: "white",
  },
});
