import { registerWebModule, NativeModule } from 'expo';

import { DeviceDataModuleEvents } from './DeviceDataModule.types';

class DeviceDataModule extends NativeModule<DeviceDataModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(DeviceDataModule, 'DeviceDataModule');
