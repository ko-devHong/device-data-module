import { useState } from "react";
import DeviceDataModule from "device-data-module";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";

export default function App() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [storedValue, setStoredValue] = useState<string | null>(null);

  const handleSetItem = async () => {
    if (key && value) {
      await DeviceDataModule.setItem(key, value);
      alert(`${key} 저장 완료!`);
    }
  };

  const handleGetItem = async () => {
    if (!key) return;
    const result = await DeviceDataModule.getItem(key);
    setStoredValue(result || "값이 존재하지 않습니다");
  };

  const handleRemoveItem = async () => {
    if (!key) return;
    await DeviceDataModule.removeItem(key);
    setStoredValue(null);
    alert(`${key} 삭제 완료!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.header}>Device Data Storage Example</Text>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Key"
            value={key}
            onChangeText={setKey}
          />
          <TextInput
            style={styles.input}
            placeholder="Value"
            value={value}
            onChangeText={setValue}
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button title="Set Item" onPress={handleSetItem} />
          <Button title="Get Item" onPress={handleGetItem} />
          <Button title="Remove Item" onPress={handleRemoveItem} />
        </View>

        {storedValue && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {key}: {storedValue}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  inputGroup: {
    gap: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buttonGroup: {
    gap: 10,
    marginBottom: 20,
  },
  resultContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  resultText: {
    fontSize: 16,
    color: "#333",
  },
});
