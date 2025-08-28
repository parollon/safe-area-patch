'use strict';

var core = require('@capacitor/core');

const SafeAreaPatch = core.registerPlugin('SafeAreaPatch', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.SafeAreaPatchWeb()),
});

class SafeAreaPatchWeb extends core.WebPlugin {
    patchInsets() {
        console.log('Not implemented for web');
        return Promise.resolve();
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SafeAreaPatchWeb: SafeAreaPatchWeb
});

exports.SafeAreaPatch = SafeAreaPatch;
//# sourceMappingURL=plugin.cjs.js.map
