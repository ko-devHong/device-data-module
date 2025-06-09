import { NativeModule, requireNativeModule } from 'expo';

import { DeviceDataModuleEvents } from './DeviceDataModule.types';

declare class DeviceDataModule extends NativeModule<DeviceDataModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<DeviceDataModule>('DeviceDataModule');
