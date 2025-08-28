import { WebPlugin } from '@capacitor/core';
import type { SafeAreaPatchPlugin } from './definitions';
export declare class SafeAreaPatchWeb extends WebPlugin implements SafeAreaPatchPlugin {
    reconstructInsets(): Promise<void>;
}
