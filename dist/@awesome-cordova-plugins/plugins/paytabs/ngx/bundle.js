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

/**
 * TokeniseType: define the behaviour of of saving card option inside the SDKs.
 */
exports.TokeniseType = void 0;
(function (TokeniseType) {
    /**
     * none: tokenise is off
     */
    TokeniseType["none"] = "none";
    /**
     * merchantMandatory: tokenise is forced
     */
    TokeniseType["merchantMandatory"] = "merchantMandatory";
    /**
     * userMandatory: tokenise is forced as per user approval
     */
    TokeniseType["userMandatory"] = "userMandatory";
    /**
     * userOptinoal: tokenise if optional as per user approval
     */
    TokeniseType["userOptinoal"] = "userOptinoal";
})(exports.TokeniseType || (exports.TokeniseType = {}));
/**
 * TokeniseFromat: the returned token format
 */
exports.TokeniseFromat = void 0;
(function (TokeniseFromat) {
    /**
     * none: no format
     */
    TokeniseFromat["none"] = "1";
    /**
     * hex32: Hex with 32 length
     */
    TokeniseFromat["hex32"] = "2";
    /**
     * alphaNum20: alpha numeric 20 length
     */
    TokeniseFromat["alphaNum20"] = "3";
    /**
     * digit22: digits with 22 length
     */
    TokeniseFromat["digit22"] = "3";
    /**
     * digit16: digits with 16 length
     */
    TokeniseFromat["digit16"] = "5";
    /**
     * alphaNum32: alpha numeric 32 length
     */
    TokeniseFromat["alphaNum32"] = "6";
})(exports.TokeniseFromat || (exports.TokeniseFromat = {}));
/**
 * TransactionType
 */
exports.TransactionType = void 0;
(function (TransactionType) {
    /**
     * sale
     */
    TransactionType["sale"] = "sale";
    /**
     * authorize / capture option
     */
    TransactionType["authorize"] = "auth";
})(exports.TransactionType || (exports.TransactionType = {}));
/**
 * TransactionClass
 */
exports.TransactionClass = void 0;
(function (TransactionClass) {
    /**
     * ecom: default transaction
     */
    TransactionClass["ecom"] = "ecom";
    /**
     * recurring: recurring transaction
     */
    TransactionClass["recurring"] = "recur";
})(exports.TransactionClass || (exports.TransactionClass = {}));
/**
 * AlternativePaymentMethod
 */
exports.AlternativePaymentMethod = void 0;
(function (AlternativePaymentMethod) {
    /**
     * unionpay: for supporting payment with unionpay
     */
    AlternativePaymentMethod["unionPay"] = "unionpay";
    /**
     * stcpay: for supporting payment with stcpay
     */
    AlternativePaymentMethod["stcPay"] = "stcpay";
    /**
     * valu: for supporting payment with valu
     */
    AlternativePaymentMethod["valu"] = "valu";
    /**
     * meezaqr: for supporting payment with meezaqr
     */
    AlternativePaymentMethod["meezaQR"] = "meezaqr";
    /**
     * omannet: for supporting payment with omannet
     */
    AlternativePaymentMethod["omannet"] = "omannet";
    /**
     * knetcredit: for supporting payment with knetcredit
     */
    AlternativePaymentMethod["knetCredit"] = "knetcredit";
    /**
     * knetdebit: for supporting payment with knetdebit
     */
    AlternativePaymentMethod["knetDebit"] = "knetdebit";
    /**
     * fawry: for supporting payment with fawry
     */
    AlternativePaymentMethod["fawry"] = "fawry";
})(exports.AlternativePaymentMethod || (exports.AlternativePaymentMethod = {}));
var PayTabs = /** @class */ (function (_super) {
    tslib.__extends(PayTabs, _super);
    function PayTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayTabs.prototype.startCardPayment = function (configuration) { return core.cordova(this, "startCardPayment", {}, arguments); };
    PayTabs.prototype.startApplePayPayment = function (configuration) { return core.cordova(this, "startApplePayPayment", {}, arguments); };
    PayTabs.prototype.startAlternativePaymentMethod = function (configuration) { return core.cordova(this, "startAlternativePaymentMethod", {}, arguments); };
    PayTabs.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PayTabs, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PayTabs.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PayTabs });
    PayTabs.pluginName = "PayTabs";
    PayTabs.plugin = "com.paytabs.cordova.plugin";
    PayTabs.pluginRef = "com.paytabs.cordova.plugin";
    PayTabs.repo = "https://github.com/paytabscom/paytabs-cordova";
    PayTabs.platforms = ["Android", "iOS"];
    PayTabs = tslib.__decorate([], PayTabs);
    return PayTabs;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PayTabs, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startCardPayment: [], startApplePayPayment: [], startAlternativePaymentMethod: [] } });

exports.PayTabs = PayTabs;
