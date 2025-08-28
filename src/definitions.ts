export interface SafeAreaPatchPlugin {
  // echo(options: { value: string }): Promise<{ value: string }>;
  reconstructInsets(): Promise<void>;

}
