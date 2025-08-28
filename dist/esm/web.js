import { WebPlugin } from '@capacitor/core';
export class SafeAreaPatchWeb extends WebPlugin {
    patchInsets() {
        console.log('Not implemented for web');
        return Promise.resolve();
    }
}
//# sourceMappingURL=web.js.map