'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var Vibes = /** @class */ (function (_super) {
    tslib.__extends(Vibes, _super);
    function Vibes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibes.prototype.registerDevice = function () { return core.cordova(this, "registerDevice", {}, arguments); };
    Vibes.prototype.unregisterDevice = function () { return core.cordova(this, "unregisterDevice", {}, arguments); };
    Vibes.prototype.associatePerson = function (externalPersonId) { return core.cordova(this, "associatePerson", {}, arguments); };
    Vibes.prototype.registerPush = function () { return core.cordova(this, "registerPush", {}, arguments); };
    Vibes.prototype.unregisterPush = function () { return core.cordova(this, "unregisterPush", {}, arguments); };
    Vibes.prototype.getVibesDeviceInfo = function () { return core.cordova(this, "getVibesDeviceInfo", {}, arguments); };
    Vibes.prototype.getPerson = function () { return core.cordova(this, "getPerson", {}, arguments); };
    Vibes.prototype.onNotificationOpened = function () { return core.cordova(this, "onNotificationOpened", { "observable": true }, arguments); };
    Vibes.prototype.fetchInboxMessages = function () { return core.cordova(this, "fetchInboxMessages", {}, arguments); };
    Vibes.prototype.fetchInboxMessage = function (message_uid) { return core.cordova(this, "fetchInboxMessage", {}, arguments); };
    Vibes.prototype.expireInboxMessage = function (message_uid, date) { return core.cordova(this, "expireInboxMessage", {}, arguments); };
    Vibes.prototype.markInboxMessageAsRead = function (message_uid) { return core.cordova(this, "markInboxMessageAsRead", {}, arguments); };
    Vibes.prototype.onInboxMessageOpen = function (inbox_message_stringified) { return core.cordova(this, "onInboxMessageOpen", {}, arguments); };
    Vibes.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Vibes, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Vibes.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Vibes });
    Vibes.pluginName = "Vibes";
    Vibes.plugin = "vibes-cordova";
    Vibes.pluginRef = "Vibes";
    Vibes.repo = "https://github.com/vibes/vibes-cordova.git";
    Vibes.install = "ionic cordova plugin add vibes-cordova --variable VIBES_APP_ID=MY_APP_ID --variable VIBES_API_URL=MY_ENVIRONMENT_URL";
    Vibes.installVariables = ["VIBES_APP_ID", "VIBES_API_URL"];
    Vibes.platforms = ["Android", "iOS"];
    Vibes = tslib.__decorate([], Vibes);
    return Vibes;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Vibes, decorators: [{
            type: i0.Injectable
        }], propDecorators: { registerDevice: [], unregisterDevice: [], associatePerson: [], registerPush: [], unregisterPush: [], getVibesDeviceInfo: [], getPerson: [], onNotificationOpened: [], fetchInboxMessages: [], fetchInboxMessage: [], expireInboxMessage: [], markInboxMessageAsRead: [], onInboxMessageOpen: [] } });

exports.Vibes = Vibes;
