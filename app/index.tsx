import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../global.css";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-9xl">Airakaz - React is awesome22</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}
