import { registerPlugin } from '@capacitor/core';
const SafeAreaPatch = registerPlugin('SafeAreaPatch', {
    web: () => import('./web').then((m) => new m.SafeAreaPatchWeb()),
});
export * from './definitions';
export { SafeAreaPatch };
//# sourceMappingURL=index.js.map