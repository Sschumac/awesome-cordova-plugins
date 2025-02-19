'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

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

exports.ConnectionType = void 0;
(function (ConnectionType) {
    /**
     * Clear-text connection for the protocol.
     */
    ConnectionType["Clear"] = "Clear";
    /**
     * Starts with clear-text connection at the beginning, then switch to encrypted connection using TLS/SSL.
     */
    ConnectionType["StartTLS"] = "StartTLS";
    /**
     * Encrypted connection using TLS/SSL.
     */
    ConnectionType["TLSSSL"] = "TLS/SSL";
})(exports.ConnectionType || (exports.ConnectionType = {}));
exports.Comparison = void 0;
(function (Comparison) {
    /**
     * Android ONLY
     * The less than or equal to operator.
     */
    Comparison["LE"] = "LE";
    /**
     * The less than operator.
     */
    Comparison["LT"] = "LT";
    /**
     * The equality operator.
     */
    Comparison["EQ"] = "EQ";
    /**
     * The not equal to operator.
     */
    Comparison["NE"] = "NE";
    /**
     * Android ONLY
     * The greater than operator.
     */
    Comparison["GT"] = "GT";
    /**
     * The greater than or equal to operator.
     */
    Comparison["GE"] = "GE";
})(exports.Comparison || (exports.Comparison = {}));
/**
 * All available message flags. Set or remove flag using "setFlag()".
 */
exports.FlagEnum = void 0;
(function (FlagEnum) {
    /**
     * "ANSWERED" message flag
     */
    FlagEnum["ANSWERED"] = "ANSWERED";
    /**
     * "DRAFT" message flag
     */
    FlagEnum["DRAFT"] = "DRAFT";
    /**
     * "FLAGGED" message flag
     */
    FlagEnum["FLAGGED"] = "FLAGGED";
    /**
     * Android ONLY
     * "RECENT" message flag
     */
    FlagEnum["RECENT"] = "RECENT";
    /**
     * "SEEN" message flag
     */
    FlagEnum["SEEN"] = "SEEN";
    /**
     * Android ONLY
     * "USER" message flag
     */
    FlagEnum["USER"] = "USER";
    /**
     * "DELETED" message flag. Note: Add this flag to delete the message from the mailbox
     */
    FlagEnum["DELETED"] = "DELETED";
    /**
     * iOS ONLY
     * "SENT" message flag.
     */
    FlagEnum["SENT"] = "Sent";
    /**
     * iOS ONLY
     * "FORWARDED" message flag.
     */
    FlagEnum["FORWARDED"] = "Forwarded";
    /**
     * iOS ONLY
     * "SubmitPending" message flag.
     */
    FlagEnum["SubmitPending"] = "SubmitPending";
    /**
     * iOS ONLY
     * "SUBMITTED" message flag.
     */
    FlagEnum["SUBMITTED"] = "Submitted";
})(exports.FlagEnum || (exports.FlagEnum = {}));
var Imap = /** @class */ (function (_super) {
    tslib.__extends(Imap, _super);
    function Imap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imap.prototype.connect = function (clientData) { return core.cordova(this, "connect", {}, arguments); };
    Imap.prototype.disconnect = function () { return core.cordova(this, "disconnect", {}, arguments); };
    Imap.prototype.isConnected = function () { return core.cordova(this, "isConnected", {}, arguments); };
    Imap.prototype.listMailFolders = function (pattern) { return core.cordova(this, "listMailFolders", {}, arguments); };
    Imap.prototype.getMessageCountByFolderName = function (folderName) { return core.cordova(this, "getMessageCountByFolderName", {}, arguments); };
    Imap.prototype.searchMessagesByDatePeriod = function (folderName, dateInMilliseconds, comparison) { return core.cordova(this, "searchMessagesByDatePeriod", {}, arguments); };
    Imap.prototype.listMessagesHeadersByConsecutiveNumber = function (folderName, start, end) { return core.cordova(this, "listMessagesHeadersByConsecutiveNumber", {}, arguments); };
    Imap.prototype.listMessagesHeadersByDate = function (folderName, dateInMilliseconds, comparison) { return core.cordova(this, "listMessagesHeadersByDate", {}, arguments); };
    Imap.prototype.getFullMessageData = function (folderName, messageNumber) { return core.cordova(this, "getFullMessageData", {}, arguments); };
    Imap.prototype.getFullMessageDataOnNewSession = function (clientData, folderName, messageNumber) { return core.cordova(this, "getFullMessageDataOnNewSession", {}, arguments); };
    Imap.prototype.copyToFolder = function (sourceFolder, destinationFolder, messageNums) { return core.cordova(this, "copyToFolder", {}, arguments); };
    Imap.prototype.setFlag = function (folderName, messageNums, flag, status) { return core.cordova(this, "setFlag", {}, arguments); };
    Imap.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Imap, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Imap.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Imap });
    Imap.pluginName = "Imap";
    Imap.plugin = "cordova-plugin-imap";
    Imap.pluginRef = "imap";
    Imap.repo = "https://github.com/aleksandar888/cordova-plugin-imap.git";
    Imap.platforms = ["Android", "iOS"];
    Imap = tslib.__decorate([], Imap);
    return Imap;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: Imap, decorators: [{
            type: i0.Injectable
        }], propDecorators: { connect: [], disconnect: [], isConnected: [], listMailFolders: [], getMessageCountByFolderName: [], searchMessagesByDatePeriod: [], listMessagesHeadersByConsecutiveNumber: [], listMessagesHeadersByDate: [], getFullMessageData: [], getFullMessageDataOnNewSession: [], copyToFolder: [], setFlag: [] } });

exports.Imap = Imap;
