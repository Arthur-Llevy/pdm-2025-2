import { PEOPLE_LIST as DATA } from "@/data";
import { transformListToSectionList } from "@/utils";
import { useStore } from "@/zustand";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "beige",
    padding: 8,
  },
});

const TRANSFORMED_DATA = transformListToSectionList(DATA);

export const SectionListExample = () => {
  const isEnabled = useStore((state) => state.isEnabled);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        {isEnabled ? "Enabled" : "Disabled"}
      </Text>
      <ScrollView>
        {TRANSFORMED_DATA.map(section => (
          <List.Section
            key={section.title}
            title={<Text style={styles.sectionHeader}>{section.title}</Text>}
          >
            {section.data.map(item => (
              <List.Item
                key={item}
                title={item}
                left={props => <List.Icon {...props} icon="account" />}
              />
            ))}
          </List.Section>
        ))}
      </ScrollView>
    </View>
  );
};