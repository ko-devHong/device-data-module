import * as React from 'react';

import { DeviceDataModuleViewProps } from './DeviceDataModule.types';

export default function DeviceDataModuleView(props: DeviceDataModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
