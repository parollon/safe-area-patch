import { WebPlugin } from '@capacitor/core';

import type { SafeAreaPatchPlugin } from './definitions';

export class SafeAreaPatchWeb extends WebPlugin implements SafeAreaPatchPlugin {
  patchInsets(): Promise<void> {    
    return Promise.resolve();
  }
  // async echo(options: { value: string }): Promise<{ value: string }> {
  //   console.log('ECHO', options);
  //   return options;
  // }
}
 