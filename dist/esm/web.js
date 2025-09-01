import { WebPlugin } from '@capacitor/core';
export class SafeAreaPatchWeb extends WebPlugin {
    patchInsets() {
        return Promise.resolve();
    }
}
//# sourceMappingURL=web.js.map