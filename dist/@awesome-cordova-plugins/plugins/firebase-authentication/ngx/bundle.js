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

var FirebaseAuthentication = /** @class */ (function (_super) {
    tslib.__extends(FirebaseAuthentication, _super);
    function FirebaseAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAuthentication.prototype.getCurrentUser = function () { return core.cordova(this, "getCurrentUser", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.getIdToken = function (forceRefresh) { return core.cordova(this, "getIdToken", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.createUserWithEmailAndPassword = function (email, password) { return core.cordova(this, "createUserWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.sendEmailVerification = function () { return core.cordova(this, "sendEmailVerification", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.sendPasswordResetEmail = function (email) { return core.cordova(this, "sendPasswordResetEmail", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithEmailAndPassword = function (email, password) { return core.cordova(this, "signInWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.verifyPhoneNumber = function (phoneNumber, timeout) { return core.cordova(this, "verifyPhoneNumber", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithVerificationId = function (verificationId, smsCode) { return core.cordova(this, "signInWithVerificationId", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInAnonymously = function () { return core.cordova(this, "signInAnonymously", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithGoogle = function (idToken, accessToken) { return core.cordova(this, "signInWithGoogle", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithApple = function (identityToken, rawNonce) { return core.cordova(this, "signInWithApple", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithFacebook = function (accessToken) { return core.cordova(this, "signInWithFacebook", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signInWithTwitter = function (token, secret) { return core.cordova(this, "signInWithTwitter", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.onAuthStateChanged = function () { return core.cordova(this, "onAuthStateChanged", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseAuthentication.prototype.setLanguageCode = function (languageCode) { return core.cordova(this, "setLanguageCode", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.useAppLanguage = function () { return core.cordova(this, "useAppLanguage", { "sync": true }, arguments); };
    FirebaseAuthentication.prototype.signOut = function () { return core.cordova(this, "signOut", { "sync": true }, arguments); };
    FirebaseAuthentication.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FirebaseAuthentication, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FirebaseAuthentication.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FirebaseAuthentication });
    FirebaseAuthentication.pluginName = "FirebaseAuthentication";
    FirebaseAuthentication.plugin = "cordova-plugin-firebase-authentication";
    FirebaseAuthentication.pluginRef = "cordova.plugins.firebase.auth";
    FirebaseAuthentication.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-authentication";
    FirebaseAuthentication.install = "ionic cordova plugin add cordova-plugin-firebase-authentication --variable FIREBASE_AUTH_VERSION=version";
    FirebaseAuthentication.installVariables = ["FIREBASE_AUTH_VERSION"];
    FirebaseAuthentication.platforms = ["Android", "iOS"];
    FirebaseAuthentication = tslib.__decorate([], FirebaseAuthentication);
    return FirebaseAuthentication;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FirebaseAuthentication, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getCurrentUser: [], getIdToken: [], createUserWithEmailAndPassword: [], sendEmailVerification: [], sendPasswordResetEmail: [], signInWithEmailAndPassword: [], verifyPhoneNumber: [], signInWithVerificationId: [], signInAnonymously: [], signInWithGoogle: [], signInWithApple: [], signInWithFacebook: [], signInWithTwitter: [], onAuthStateChanged: [], setLanguageCode: [], useAppLanguage: [], signOut: [] } });

exports.FirebaseAuthentication = FirebaseAuthentication;
