import ExpoModulesCore

public class DeviceDataModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('DeviceDataModule')` in JavaScript.
    Name("DeviceDataModule")

    // 값을 저장하는 함수
    Function("setItem") { (key: String, value: String) in
      getUserDefaults()?.set(value, forKey: key)
    }

    // 값을 가져오는 함수
    Function("getItem") { (key: String) -> String? in
      return getUserDefaults()?.string(forKey: key)
    }

    // 값을 삭제하는 함수
    Function("removeItem") { (key: String) in
      getUserDefaults()?.removeObject(forKey: key)
      }
    }

    private func getUserDefaults() -> UserDefaults? {
      if let suiteName = suiteName {
        return UserDefaults(suiteName: suiteName)
      }
      return UserDefaults.standard
    }
  }
}
