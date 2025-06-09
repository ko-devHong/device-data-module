import { requireNativeView } from 'expo';
import * as React from 'react';

import { DeviceDataModuleViewProps } from './DeviceDataModule.types';

const NativeView: React.ComponentType<DeviceDataModuleViewProps> =
  requireNativeView('DeviceDataModule');

export default function DeviceDataModuleView(props: DeviceDataModuleViewProps) {
  return <NativeView {...props} />;
}
