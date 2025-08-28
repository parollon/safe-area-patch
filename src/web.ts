import { WebPlugin } from '@capacitor/core';

import type { SafeAreaPatchPlugin } from './definitions';

export class SafeAreaPatchWeb extends WebPlugin implements SafeAreaPatchPlugin {
  reconstructInsets(): Promise<void> {
    console.log('Not implemented for web');
    
    return Promise.resolve();
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
/*
  "repository": {
    "type": "git",
    "url": "git+https://github.com/parollon/safe-area-patch.git"
  },
  "bugs": {
    "url": "https://github.com/parollon/safe-area-patch/issues"
  },

*/