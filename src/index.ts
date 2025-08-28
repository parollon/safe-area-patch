import { registerPlugin } from '@capacitor/core';

import type { SafeAreaPatchPlugin } from './definitions';

const SafeAreaPatch = registerPlugin<SafeAreaPatchPlugin>('SafeAreaPatch', {
  web: () => import('./web').then((m) => new m.SafeAreaPatchWeb()),
});

export * from './definitions';
export { SafeAreaPatch };
