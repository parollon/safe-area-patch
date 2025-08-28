export interface SafeAreaPatchPlugin {
  // echo(options: { value: string }): Promise<{ value: string }>;
  patchInsets(): Promise<void>;

}
