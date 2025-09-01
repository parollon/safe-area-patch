var capacitorSafeAreaPatch = (function (exports, core) {
    'use strict';

    const SafeAreaPatch = core.registerPlugin('SafeAreaPatch', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.SafeAreaPatchWeb()),
    });

    class SafeAreaPatchWeb extends core.WebPlugin {
        patchInsets() {
            return Promise.resolve();
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SafeAreaPatchWeb: SafeAreaPatchWeb
    });

    exports.SafeAreaPatch = SafeAreaPatch;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
