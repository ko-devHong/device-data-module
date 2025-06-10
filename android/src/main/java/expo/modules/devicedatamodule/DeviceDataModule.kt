package expo.modules.devicedatamodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class DeviceDataModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('DeviceDataModule')` in JavaScript.
    Name("DeviceDataModule")

     // 값을 저장하는 함수
    Function("setItem") { key: String, value: String ->
      getPreferences().edit().putString(key, value).apply()
    }

    // 값을 가져오는 함수
    Function("getItem") { key: String ->
      return@Function getPreferences().getString(key, null)
    }

    // 값을 삭제하는 함수
    Function("removeItem") { key: String ->
      getPreferences().edit().remove(key).apply()
    }

    private val context: Context
    get() = requireNotNull(appContext.reactContext)

    private fun getPreferences(): SharedPreferences {
      // 기존 네이티브 앱에서 사용하던 SharedPreferences 파일을 이름으로 직접 접근합니다.
      return context.getSharedPreferences(context.packageName, Context.MODE_PRIVATE)
    }
  }
}
