export interface SafeAreaPatchPlugin {
    patchInsets(): Promise<void>;
}
