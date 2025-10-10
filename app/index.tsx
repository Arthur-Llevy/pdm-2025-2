import { Spinner } from "@/components/ui/spinner";
import { Link } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from "react-native";

import { PizzaTranslator } from "@/components/PizzaTranslator";
import { SectionListExample } from "@/components/SectionListExample";
import { useStore } from "@/zustand";

import { Switch as RPSwitch } from 'react-native-paper';

console.log("window dimensions: ", Dimensions.get("window"));

export default function Index() {
  const isEnabled = useStore((state) => state.isEnabled);
  const toggleIsEnabled = useStore((state) => state.toggleIsEnabled);

  return (
    <View style={styles.rootContainer}>
      <RPSwitch
        onValueChange={toggleIsEnabled}
        value={isEnabled}
        color="purple"
      />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
      <Spinner size="large" color="orange" />
      {isEnabled ? (
        <SectionListExample />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Olá Turma!!!</Text>
          <Link href="/list">Section List Example</Link>
          <Link href="/tarefas">Tasks Example</Link>
          <PizzaTranslator />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
  },
});
