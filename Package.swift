// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "SafeAreaPatch",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "SafeAreaPatch",
            targets: ["SafeAreaPatchPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "SafeAreaPatchPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/SafeAreaPatchPlugin"),
        .testTarget(
            name: "SafeAreaPatchPluginTests",
            dependencies: ["SafeAreaPatchPlugin"],
            path: "ios/Tests/SafeAreaPatchPluginTests")
    ]
)