import { NativeModule, requireNativeModule } from "expo";

declare class DeviceDataModule extends NativeModule {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<DeviceDataModule>("DeviceDataModule");
