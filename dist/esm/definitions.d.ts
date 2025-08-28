export interface SafeAreaPatchPlugin {
    reconstructInsets(): Promise<void>;
}
