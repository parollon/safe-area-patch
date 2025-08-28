import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SafeAreaPatchPlugin)
public class SafeAreaPatchPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "SafeAreaPatchPlugin"
    public let jsName = "SafeAreaPatch"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = SafeAreaPatch()

    // @objc func echo(_ call: CAPPluginCall) {
    //     let value = call.getString("value") ?? ""
    //     call.resolve([
    //         "value": implementation.echo(value)
    //     ])
    // }
}
