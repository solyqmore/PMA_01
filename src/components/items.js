import { Text, StyleSheet, Pressable } from "react-native";

export default function Item({ title }) {
  return (
    <Pressable>
      <Text style={styles.taskItem}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "red",
    margin: 5,
    borderRadius: 8,
    padding: 5,
    fontSize: 16,
  },
});
