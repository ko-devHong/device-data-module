# Device Data Module

[![npm version](https://img.shields.io/npm/v/device-data-module.svg)](https://www.npmjs.com/package/device-data-module)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 설명

`device-data-module`은 React Native 애플리케이션이 Android의 네이티브 `SharedPreferences`에 접근할 수 있도록 설계된 모듈입니다. 기존 네이티브 앱에서 사용하던 데이터를 Expo 모듈에서 읽거나 써야 할 때 유용하며, 점진적인 앱 마이그레이션 시 데이터 공유를 원활하게 해줍니다.

주요 기능은 네이티브 `SharedPreferences` 파일에 직접 접근하여 키-값 데이터를 저장, 조회, 삭제하는 것입니다.

---

## 설치

```bash
npm install device-data-module
```
또는
```bash
yarn add device-data-module
```

---

## 사용법

아래 예제는 `device-data-module`을 사용하여 데이터를 저장, 조회, 삭제하는 방법을 보여줍니다.

```tsx
import { useState } from 'react';
import DeviceDataModule from "device-data-module";
import { Button, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet } from "react-native";

export default function App() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [storedValue, setStoredValue] = useState<string | null>(null);

  // 주어진 키로 값을 저장합니다.
  const handleSetItem = async () => {
    if (key && value) {
      await DeviceDataModule.setItem(key, value);
      alert(`${key} 저장 완료!`);
    }
  };

  // 주어진 키의 값을 가져옵니다.
  const handleGetItem = async () => {
    if (!key) return;
    const result = await DeviceDataModule.getItem(key);
    setStoredValue(result || '값이 존재하지 않습니다');
  };

  // 주어진 키의 항목을 삭제합니다.
  const handleRemoveItem = async () => {
    if (!key) return;
    await DeviceDataModule.removeItem(key);
    setStoredValue(null);
    alert(`${key} 삭제 완료!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Device Data Storage 예제</Text>
        
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="키 (Key)"
            value={key}
            onChangeText={setKey}
          />
          <TextInput
            style={styles.input}
            placeholder="값 (Value)"
            value={value}
            onChangeText={setValue}
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button title="값 저장 (Set Item)" onPress={handleSetItem} />
          <Button title="값 조회 (Get Item)" onPress={handleGetItem} />
          <Button title="값 삭제 (Remove Item)" onPress={handleRemoveItem} />
        </View>

        {storedValue && (
          <View style={styles.resultContainer}>
            <Text>저장된 값:</Text>
            <Text>{storedValue}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  inputGroup: { marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  buttonGroup: { gap: 10, marginBottom: 20 },
  resultContainer: { padding: 10, backgroundColor: '#eee' },
});
```

---

## API

### `setItem(key: string, value: string): Promise<void>`
지정된 키(key)에 문자열 값(value)을 저장합니다.
- `key`: 저장할 데이터의 키입니다.
- `value`: 저장할 데이터의 값입니다.

### `getItem(key: string): Promise<string | null>`
지정된 키(key)에 해당하는 값을 가져옵니다. 값이 없으면 `null`을 반환합니다.
- `key`: 가져올 데이터의 키입니다.

### `removeItem(key: string): Promise<void>`
지정된 키(key)에 해당하는 값을 삭제합니다.
- `key`: 삭제할 데이터의 키입니다.


---

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요. 