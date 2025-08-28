import Foundation

@objc public class SafeAreaPatch: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
