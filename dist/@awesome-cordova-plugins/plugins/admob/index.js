var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var AdmobOriginal = /** @class */ (function (_super) {
    __extends(AdmobOriginal, _super);
    function AdmobOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdmobOriginal.prototype.setOptions = function (options) { return cordova(this, "setOptions", {}, arguments); };
    AdmobOriginal.prototype.createBannerView = function (options) { return cordova(this, "createBannerView", {}, arguments); };
    AdmobOriginal.prototype.showBannerAd = function (show) { return cordova(this, "showBannerAd", {}, arguments); };
    AdmobOriginal.prototype.destroyBannerView = function () { return cordova(this, "destroyBannerView", {}, arguments); };
    AdmobOriginal.prototype.requestInterstitialAd = function (options) { return cordova(this, "requestInterstitialAd", {}, arguments); };
    AdmobOriginal.prototype.showInterstitialAd = function () { return cordova(this, "showInterstitialAd", {}, arguments); };
    AdmobOriginal.prototype.requestRewardedAd = function (options) { return cordova(this, "requestRewardedAd", {}, arguments); };
    AdmobOriginal.prototype.showRewardedAd = function () { return cordova(this, "showRewardedAd", {}, arguments); };
    AdmobOriginal.prototype.onAdLoaded = function () { return cordova(this, "onAdLoaded", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdLoaded", "element": "document" }, arguments); };
    AdmobOriginal.prototype.onAdFailedToLoad = function () { return cordova(this, "onAdFailedToLoad", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdFailedToLoad", "element": "document" }, arguments); };
    AdmobOriginal.prototype.onAdOpened = function () { return cordova(this, "onAdOpened", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdOpened", "element": "document" }, arguments); };
    AdmobOriginal.prototype.onAdClosed = function () { return cordova(this, "onAdClosed", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdClosed", "element": "document" }, arguments); };
    AdmobOriginal.prototype.onAdLeftApplication = function () { return cordova(this, "onAdLeftApplication", { "eventObservable": true, "event": "appfeel.cordova.admob.onAdLeftApplication", "element": "document" }, arguments); };
    AdmobOriginal.prototype.onRewardedAd = function () { return cordova(this, "onRewardedAd", { "eventObservable": true, "event": "appfeel.cordova.admob.onRewardedAd", "element": "document" }, arguments); };
    AdmobOriginal.prototype.onRewardedAdVideoStarted = function () { return cordova(this, "onRewardedAdVideoStarted", { "eventObservable": true, "event": "appfeel.cordova.admob.onRewardedAdVideoStarted", "element": "document" }, arguments); };
    AdmobOriginal.prototype.onRewardedAdVideoCompleted = function () { return cordova(this, "onRewardedAdVideoCompleted", { "eventObservable": true, "event": "appfeel.cordova.admob.onRewardedAdVideoCompleted", "element": "document" }, arguments); };
    Object.defineProperty(AdmobOriginal.prototype, "AD_SIZE", {
        get: function () { return cordovaPropertyGet(this, "AD_SIZE"); },
        set: function (value) { cordovaPropertySet(this, "AD_SIZE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdmobOriginal.prototype, "AD_TYPE", {
        get: function () { return cordovaPropertyGet(this, "AD_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "AD_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    AdmobOriginal.pluginName = "AdMob";
    AdmobOriginal.plugin = "cordova-admob";
    AdmobOriginal.pluginRef = "admob";
    AdmobOriginal.repo = "https://github.com/appfeel/admob-google-cordova";
    AdmobOriginal.platforms = ["Android", "iOS", "Browser"];
    return AdmobOriginal;
}(AwesomeCordovaNativePlugin));
var Admob = new AdmobOriginal();
export { Admob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRtb2IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtTUCx5QkFBMEI7Ozs7SUFvQ25ELDBCQUFVLGFBQUMsT0FBdUM7SUFXbEQsZ0NBQWdCLGFBQUMsT0FBd0M7SUFXekQsNEJBQVksYUFBQyxJQUFjO0lBUzNCLGlDQUFpQjtJQVlqQixxQ0FBcUIsYUFBQyxPQUF3QztJQVU5RCxrQ0FBa0I7SUFjbEIsaUNBQWlCLGFBQUMsT0FBd0M7SUFVMUQsOEJBQWM7SUFzQmQsMEJBQVU7SUFzQlYsZ0NBQWdCO0lBdUJoQiwwQkFBVTtJQXVCViwwQkFBVTtJQXVCVixtQ0FBbUI7SUFzQm5CLDRCQUFZO0lBc0JaLHdDQUF3QjtJQXNCeEIsMENBQTBCOzBCQTVSakIsMEJBQU87Ozs7OzswQkFjUCwwQkFBTzs7Ozs7Ozs7Ozs7Z0JBMVRsQjtFQW9TMkIsMEJBQTBCO1NBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRtb2JCYXNlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAoT3B0aW9uYWwpIFlvdXIgaW50ZXJzdGl0aWFsIGlkIGNvZGUgZnJvbSB5b3VyIEFkTW9iIGFjY291bnQuIERlZmF1bHRzIHRvIGJhbm5lckFkSWRcbiAgICovXG4gIGludGVyc3RpdGlhbEFkSWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIChPcHRpb25hbCkgSW5kaWNhdGVzIHdoZXRoZXIgdG8gcHV0IGJhbm5lciBhZHMgYXQgdG9wIHdoZW4gc2V0IHRvIHRydWUgb3IgYXQgYm90dG9tIHdoZW4gc2V0IHRvIGZhbHNlLiBEZWZhdWx0cyB0byBmYWxzZVxuICAgKi9cbiAgYmFubmVyQXRUb3A/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAoT3B0aW9uYWwpIFNldCB0byB0cnVlIHRvIHJlY2VpdmUgdGVzdCBhZHMgKGRvIG5vdCB0ZXN0IHdpdGggcmVhbCBhZHMgYXMgeW91ciBhY2NvdW50IG1heSBiZSBiYW5uZWQpLiBEZWZhdWx0cyB0byBmYWxzZVxuICAgKi9cbiAgaXNUZXN0aW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBBdXRvIHNob3cgYmFubmVyIGFkcyB3aGVuIGF2YWlsYWJsZSAob25BZExvYWRlZCBldmVudCBpcyBjYWxsZWQpLiBEZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBhdXRvU2hvd0Jhbm5lcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIChPcHRpb25hbCkgQXV0byBzaG93IGludGVyc3RpdGlhbCBhZHMgd2hlbiBhdmFpbGFibGUgKG9uQWRMb2FkZWQgZXZlbnQgaXMgY2FsbGVkKS4gRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgYXV0b1Nob3dJbnRlcnN0aXRpYWw/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBBZG1vYk9wdGlvbnMgZXh0ZW5kcyBBZG1vYkJhc2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIFlvdXIgYmFubmVyIGlkIGNvZGUgZnJvbSB5b3VyIEFkTW9iIGFjY291bnQgKGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2FkbW9iL2Fuc3dlci83MzU2NDMxP2hsPWVuKVxuICAgKi9cbiAgYmFubmVyQWRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkLiBOb3cgaXMgb25seSB1c2VkIGluIHdlYi4gSXQgd2lsbCBiZSB1c2VkIGFzIGEgYmFubmVyQWRJZCBvbmx5IGluIGNhc2UgaXQgaXMgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGlzaGVySWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIChPcHRpb25hbCkgWW91ciB0YXBweCBpZCBmb3IgaU9TIGFwcHMuIElmIEFkbW9iIGlzIGNvbmZpZ3VyZWQsIGl0IGlzIGFsc28gdXNlZCB0byBiYWNrZmlsbCB5b3VyIGxvc3QgaW52ZW50b3J5ICh3aGVuIHRoZXJlIGFyZSBubyBBZG1vYiBhZHMgYXZhaWxhYmxlKVxuICAgKi9cbiAgdGFwcHhJZGlPUz86IHN0cmluZztcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBZb3VyIHRhcHB4IGlkIGZvciBBbmRyb2lkIGFwcHMuIEFkbW9iIGlzIGNvbmZpZ3VyZWQsIGl0IGlzIGFsc28gdXNlZCB0byBiYWNrZmlsbCB5b3VyIGxvc3QgaW52ZW50b3J5IHdoZW4gdGhlcmUgYXJlIG5vIEFkbW9iIGFkcyBhdmFpbGFibGVcbiAgICovXG4gIHRhcHB4SWRBbmRyb2lkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZE1vYiByZXdhcmRlZCBpZCAoaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYWRtb2IvYW5zd2VyLzczNTY0MzE/aGw9ZW4pXG4gICAqL1xuICByZXdhcmRlZEFkSWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIChPcHRpb25hbCkgQXV0byBzaG93IHJld2FyZGVkIGFkcyB3aGVuIGF2YWlsYWJsZSAob25BZExvYWRlZCBldmVudCBpcyBjYWxsZWQpLiBEZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBhdXRvU2hvd1Jld2FyZGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBJZiBhbnkgb2YgdGFwcHhJZCBpcyBwcmVzZW50LCBpdCB0ZWxscyB0aGUgcGVyY2VudGFnZSBvZiB0cmFmZmljIGRpdmVydGVkIHRvIHRhcHB4LiBEZWZhdWx0cyB0byAwLjUgKDUwJSBvZiB0aGUgdHJhZmZpYyB3aWxsIGJlIHJlcXVlc3RlZCB0byBUYXBweClcbiAgICovXG4gIHRhcHB4U2hhcmU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIChPcHRpb25hbCkgSW5kaWNhdGVzIHRoZSBzaXplIG9mIGJhbm5lciBhZHNcbiAgICovXG4gIGFkU2l6ZT86IHN0cmluZztcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBBbGxvdyBiYW5uZXIgb3ZlcmxhcCB3ZWJ2aWV3LiBEZWZhdWx0IGZhbHNlXG4gICAqL1xuICBvdmVybGFwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBTZXQgdG8gdHJ1ZSB0byBhdm9pZCBpb3M3IHN0YXR1cyBiYXIgb3ZlcmxhcC4gRGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgb2Zmc2V0U3RhdHVzQmFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKE9wdGlvbnMpIEEgSlNPTiBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIHtrZXk6IHZhbHVlfSBwYWlyc1xuICAgKi9cbiAgYWRFeHRyYXM/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRtb2JXZWJPcHRpb25zIGV4dGVuZHMgQWRtb2JCYXNlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAoUmVxdWlyZWQpIEFkU2Vuc2UgUHVibGlzaGVyIElEIChodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHNlbnNlL2Fuc3dlci8xMDU1MTYpXG4gICAqL1xuICBwdWJsaXNoZXJJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAoUmVxdWlyZWQpIFlvdXIgYWQgc2xvdCBjb2RlIGZyb20geW91ciBBZFNlbnNlIGFjY291bnQuIE9ubHkgZm9yIGJyb3dzZXIgcGxhdGZvcm0gaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYWRzZW5zZS9hbnN3ZXIvMTA1NTE2XG4gICAqL1xuICBhZFNsb3Q6IHN0cmluZztcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBJbmRpY2F0ZXMgaWYgc2hvdyBhIGNsb3NlIGJ1dHRvbiBvbiBpbnRlcnN0aXRpYWwgYnJvd3NlciBhZHMuIE9ubHkgZm9yIGJyb3dzZXIgcGxhdGZvcm1cbiAgICovXG4gIGludGVyc3RpdGlhbFNob3dDbG9zZUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIChPcHRpb25hbCkgSW5kaWNhdGVzIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0aGF0IHRoZSBpbnRlcnN0aXRpYWwgYWQgd2FpdHMgYmVmb3JlIHNob3cgdGhlIGNsb3NlIGJ1dHRvbi4gT25seSBmb3IgYnJvd3NlciBwbGF0Zm9ybVxuICAgKi9cbiAgc2Vjb25kc1RvU2hvd0Nsb3NlQnV0dG9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAoT3B0aW9uYWwpIEluZGljYXRlcyB0aGUgbnVtYmVyIG9mIHNlY29uZHMgdGhhdCB0aGUgaW50ZXJzdGl0aWFsIGFkIHdhaXRzIGJlZm9yZSBjbG9zZSB0aGUgYWQuIE9ubHkgZm9yIGJyb3dzZXIgcGxhdGZvcm1cbiAgICovXG4gIHNlY29uZHNUb0Nsb3NlSW50ZXJzdGl0aWFsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkTW9iRXZlbnQge1xuICAvKipcbiAgICogKE9wdGlvbmFsKSBBZE1vYiBzdXBwb3J0ZWQgdHlwZSBhcyBzZWVuIGluIEFEX1RZUEVcbiAgICovXG4gIGFkVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBBZE1vYiBlcnJvciBjb2RlXG4gICAqL1xuICBlcnJvcj86IG51bWJlcjtcblxuICAvKipcbiAgICogKE9wdGlvbmFsKSBBZE1vYiBlcnJvciByZWFzb25cbiAgICovXG4gIHJlYXNvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBZE1vYlxuICogQGRlc2NyaXB0aW9uXG4gKiBNb3N0IGNvbXBsZXRlIEFkbW9iIHBsdWdpbiB3aXRoIHN1cHBvcnQgZm9yIFtUYXBweF0oaHR0cDovL3d3dy50YXBweC5jb20vP2g9ZGVjMzM0ZDYzMjg3NzcyZGU4NTliZGI0ZTk3N2ZjZTYpIGFkcy5cbiAqIE1vbmV0aXplIHlvdXIgYXBwcyBhbmQgZ2FtZXMgd2l0aCBBZE1vYiBhZHMsIHVzaW5nIGxhdGVzdCBHb29nbGUgQWRNb2IgU0RLLiBXaXRoIHRoaXMgcGx1Z2luIHlvdSBjYW4gc2hvdyBBZE1vYiBhZHMgZWFzaWx5IVxuICpcbiAqIFN1cHBvcnRzOioqXG4gKiAtIEJhbm5lciBhZHMgKHRvcCBhbmQgYm90dG9tKVxuICogLSBJbnRlcnN0aXRpYWwgYWRzXG4gKiAtIFJld2FyZGVkIGFkc1xuICogLSBbVGFwcHhdKGh0dHA6Ly93d3cudGFwcHguY29tLz9oPWRlYzMzNGQ2MzI4Nzc3MmRlODU5YmRiNGU5NzdmY2U2KSBhZHNcbiAqIEB1c2FnZVxuICogTm90ZToqKiBObyBhZHMgd2lsbCBiZSBzZXJ2ZWQgb24gYXBwcyB3aXRoIHBhY2thZ2UgbmFtZSBgaW8uaW9uaWMuc3RhcnRlcmAuIFRoaXMgaXMgdGhlIGRlZmF1bHQgcGFja2FnZSBuYW1lIGZvciBuZXcgYGlvbmljYCBhcHBzLiBNYWtlIHN1cmUgdG8gcmVuYW1lIHRoZSBwYWNrYWdlIG5hbWUgc28gYWRzIGNhbiBiZSBkaXNwbGF5ZWQuXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBZG1vYiwgQWRtb2JPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FkbW9iJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhZG1vYjogQWRtb2IpIHtcbiAqICAgICAvLyBBZG1vYiBvcHRpb25zIGNvbmZpZ1xuICogICAgIGNvbnN0IGFkbW9iT3B0aW9uczogQWRtb2JPcHRpb25zID0ge1xuICogICAgICAgYmFubmVyQWRJZDogJ1hYWC1YWFhYLVhYWFgnLFxuICogICAgICAgaW50ZXJzdGl0aWFsQWRJZDogJ1hYWC1YWFhYLVhYWFgnLFxuICogICAgICAgcmV3YXJkZWRBZElkOiAnWFhYLVhYWFgtWFhYWCcsXG4gKiAgICAgICBpc1Rlc3Rpbmc6IHRydWUsXG4gKiAgICAgICBhdXRvU2hvd0Jhbm5lcjogZmFsc2UsXG4gKiAgICAgICBhdXRvU2hvd0ludGVyc3RpdGlhbDogZmFsc2UsXG4gKiAgICAgICBhdXRvU2hvd1Jld2FyZGVkOiBmYWxzZSxcbiAqICAgICAgIGFkU2l6ZTogdGhpcy5hZG1vYi5BRF9TSVpFLkJBTk5FUlxuICogICAgIH07XG4gKlxuICogICAgIC8vIFNldCBhZG1vYiBvcHRpb25zXG4gKiAgICAgdGhpcy5hZG1vYi5zZXRPcHRpb25zKGFkbW9iT3B0aW9ucylcbiAqICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdBZG1vYiBvcHRpb25zIGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgc2V0JykpXG4gKiAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNldHRpbmcgYWRtb2Igb3B0aW9uczonLCBlcnIpKTtcbiAqIH1cbiAqXG4gKlxuICpcbiAqIC8vIChPcHRpb25hbGx5KSBMb2FkIGJhbm5lciBhZCwgaW4gb3JkZXIgdG8gaGF2ZSBpdCByZWFkeSB0byBzaG93XG4gKiB0aGlzLmFkbW9iLmNyZWF0ZUJhbm5lclZpZXcoKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQmFubmVyIGFkIGxvYWRlZCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgYmFubmVyIGFkOicsIGVycikpO1xuICpcbiAqXG4gKiAvLyBTaG93IGJhbm5lciBhZCAoY3JlYXRlQmFubmVyVmlldyBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgYW5kIG9uQWRMb2FkZWQoKSBldmVudCByYWlzZWQpXG4gKiB0aGlzLmFkbW9iLm9uQWRMb2FkZWQoKS5zdWJzY3JpYmUoKGFkKSA9PiB7XG4gKiAgIGlmIChhZC5hZFR5cGUgPT09IHRoaXMuYWRtb2IuQURfVFlQRS5CQU5ORVIpIHtcbiAqICAgICB0aGlzLmFkbW9iLnNob3dCYW5uZXJBZCgpXG4gKiAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQmFubmVyIGFkIHNob3duJykpXG4gKiAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNob3dpbmcgYmFubmVyIGFkOicsIGVycikpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKlxuICogLy8gSGlkZSBiYW5uZXIgYWQsIGJ1dCBkbyBub3QgZGVzdHJveSBpdCwgc28gaXQgY2FuIGJlIHNob3duIGxhdGVyIG9uXG4gKiAvLyBTZWUgZGVzdHJveUJhbm5lclZpZXcgaW4gb3JkZXIgdG8gaGlkZSBhbmQgZGVzdHJveSBiYW5uZXIgYWRcbiAqIHRoaXMuYWRtb2Iuc2hvd0Jhbm5lckFkKGZhbHNlKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnQmFubmVyIGFkIGhpZGRlbicpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhpZGluZyBiYW5uZXIgYWQ6JywgZXJyKSk7XG4gKlxuICpcbiAqXG4gKiAvLyBSZXF1ZXN0IGFuIGludGVyc3RpdGlhbCBhZCwgaW4gb3JkZXIgdG8gYmUgc2hvd24gbGF0ZXIgb25cbiAqIC8vIEl0IGlzIHBvc3NpYmxlIHRvIGF1dG9zaG93IGl0IHZpYSBvcHRpb25zIHBhcmFtZXRlciwgc2VlIGRvY3NcbiAqIHRoaXMuYWRtb2IucmVxdWVzdEludGVyc3RpdGlhbEFkKClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ludGVyc3RpdGlhbCBhZCBsb2FkZWQnKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGludGVyc3RpdGlhbCBhZDonLCBlcnIpKTtcbiAqXG4gKlxuICogLy8gU2hvdyBhbiBpbnRlcnN0aXRpYWwgYWQgKHJlcXVlc3RJbnRlcnN0aXRpYWxBZCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUpXG4gKiB0aGlzLmFkbW9iLm9uQWRMb2FkZWQoKS5zdWJzY3JpYmUoKGFkKSA9PiB7XG4gKiAgIGlmIChhZC5hZFR5cGUgPT09IHRoaXMuYWRtb2IuQURfVFlQRS5JTlRFUlNUSVRJQUwpIHtcbiAqICAgICB0aGlzLmFkbW9iLnNob3dJbnRlcnN0aXRpYWxBZCgpXG4gKiAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnSW50ZXJzdGl0aWFsIGFkIHNob3duJykpXG4gKiAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNob3dpbmcgaW50ZXJzdGl0aWFsIGFkOicsIGVycikpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKlxuICogLy8gUmVxdWVzdCBhIHJld2FyZGVkIGFkXG4gKiB0aGlzLmFkbW9iLnJlcXVlc3RSZXdhcmRlZEFkKClcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1Jld2FyZGVkIGFkIGxvYWRlZCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgcmV3YXJkZWQgYWQ6JywgZXJyKSk7XG4gKlxuICpcbiAqIC8vIFNob3cgcmV3YXJkZWQgYWQgKHJlcXVlc3RSZXdhcmRlZEFkIG11c3QgYmUgY2FsbGVkIGJlZm9yZSlcbiAqIHRoaXMuYWRtb2Iub25BZExvYWRlZCgpLnN1YnNjcmliZSgoYWQpID0+IHtcbiAqICAgaWYgKGFkLmFkVHlwZSA9PT0gdGhpcy5hZG1vYi5BRF9UWVBFLlJFV0FSREVEKSB7XG4gKiAgICAgdGhpcy5hZG1vYi5zaG93UmV3YXJkZWRBZCgpXG4gKiAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnUmV3YXJkZWQgYWQgc2hvd24nKSlcbiAqICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2hvd2luZyByZXdhcmRlZCBhZDonLCBlcnIpKTtcbiAqICAgfVxuICogfSk7XG4gKlxuICpcbiAqIC8vIEhpZGUgYW5kIGRlc3Ryb3kgYmFubmVyIG9yIGludGVyc3RpdGlhbCBhZFxuICogdGhpcy5hZG1vYi5kZXN0cm95QmFubmVyVmlldygpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdCYW5uZXIgb3IgaW50ZXJzdGl0aWFsIGFkIGRlc3Ryb3llZCcpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlc3Ryb3lpbmcgYmFubmVyIG9yIGludGVyc3RpdGlhbCBhZDonLCBlcnIpKTtcbiAqXG4gKlxuICpcbiAqIC8vIE9uIEFkIGxvYWRlZCBldmVudFxuICogdGhpcy5hZG1vYi5vbkFkTG9hZGVkKCkuc3Vic2NyaWJlKChhZCkgPT4ge1xuICogICBpZiAoYWQuYWRUeXBlID09PSB0aGlzLmFkbW9iLkFEX1RZUEUuQkFOTkVSKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ0Jhbm5lciBhZCBpcyBsb2FkZWQnKTtcbiAqICAgICB0aGlzLmFkbW9iLnNob3dCYW5uZXJBZCgpO1xuICogICB9IGVsc2UgaWYgKGFkLmFkVHlwZSA9PT0gdGhpcy5hZG1vYi5BRF9UWVBFLklOVEVSU1RJVElBTCkge1xuICogICAgIGNvbnNvbGUubG9nKCdJbnRlcnN0aXRpYWwgYWQgaXMgbG9hZGVkJyk7XG4gKiAgICAgdGhpcy5hZG1vYi5zaG93SW50ZXJzdGl0aWFsQWQoKTtcbiAqICAgfSBlbHNlIGlmIChhZC5hZFR5cGUgPT09IHRoaXMuYWRtb2IuQURfVFlQRS5SRVdBUkRFRCkge1xuICogICAgIGNvbnNvbGUubG9nKCdSZXdhcmRlZCBhZCBpcyBsb2FkZWQnKTtcbiAqICAgICB0aGlzLmFkbW9iLnNob3dSZXdhcmRlZEFkKCk7XG4gKiAgIH1cbiAqIH0pO1xuICpcbiAqXG4gKlxuICogLy8gT24gYWQgZmFpbGVkIHRvIGxvYWRcbiAqIHRoaXMuYWRtb2Iub25BZEZhaWxlZFRvTG9hZCgpLnN1YnNjcmliZShlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIGxvYWRpbmcgYWQ6JywgZXJyKSk7XG4gKlxuICpcbiAqXG4gKiAvLyBPbiBpbnRlcnN0aXRpYWwgYWQgb3BlbmVkXG4gKiB0aGlzLmFkbW9iLm9uQWRPcGVuZWQoKS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ0ludGVyc3RpdGlhbCBhZCBvcGVuZWQnKSk7XG4gKlxuICpcbiAqXG4gKiAvLyBPbiBpbnRlcnN0aXRpYWwgYWQgY2xvc2VkXG4gKiB0aGlzLmFkbW9iLm9uQWRDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ0ludGVyc3RpdGlhbCBhZCBjbG9zZWQnKSk7XG4gKlxuICpcbiAqXG4gKiAvLyBPbiBhZCBjbGlja2VkIGFuZCBsZWZ0IGFwcGxpY2F0aW9uXG4gKiB0aGlzLmFkbW9iLm9uQWRMZWZ0QXBwbGljYXRpb24oKS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ0FkIGxlZnRlZCBhcHBsaWNhdGlvbicpKTtcbiAqXG4gKlxuICpcbiAqIC8vIE9uIHVzZXIgYWQgcmV3YXJkZWRcbiAqIHRoaXMuYWRtb2Iub25SZXdhcmRlZEFkKCkuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdUaGUgdXNlciBoYXMgYmVlbiByZXdhcmRlZCcpKTtcbiAqXG4gKlxuICpcbiAqIC8vIE9uIHJld2FyZGVkIGFkIHZpZGVvIHN0YXJ0ZWRcbiAqIHRoaXMuYWRtb2Iub25SZXdhcmRlZEFkVmlkZW9TdGFydGVkKCkuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdSZXdhcmRlZCBhZCB2aWVvIHN0YXJ0ZWQnKSk7XG4gKlxuICpcbiAqXG4gKiAvLyBPbiByZXdhcmRlZCBhZCB2aWRlbyBjb21wbGV0ZWRcbiAqIHRoaXMuYWRtb2Iub25SZXdhcmRlZEFkVmlkZW9Db21wbGV0ZWQoKS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ1Jld2FyZGVkIGFkIHZpZGVvIGNvbXBsZXRlZCcpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2InLFxuICBwbHVnaW5SZWY6ICdhZG1vYicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBwZmVlbC9hZG1vYi1nb29nbGUtY29yZG92YScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbW9iIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBlbnVtIHJlcHJlc2VudHMgQWRNb2IncyBzdXBwb3J0ZWQgYWQgc2l6ZXMuXG4gICAqIFVzZSBvbmUgb2YgdGhlc2UgY29uc3RhbnRzIGFzIGFkU2l6ZSBvcHRpb24gd2hlbiBjYWxsaW5nIGNyZWF0ZUJhbm5lclZpZXdcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgQURfU0laRToge1xuICAgIEJBTk5FUjogc3RyaW5nO1xuICAgIElBQl9NUkVDVDogc3RyaW5nO1xuICAgIElBQl9CQU5ORVI6IHN0cmluZztcbiAgICBJQUJfTEVBREVSQk9BUkQ6IHN0cmluZztcbiAgICBTTUFSVF9CQU5ORVI6IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBlbnVtIHJlcHJlc2VudHMgQWRNb2IncyBzdXBwb3J0ZWQgYWQgdHlwZXNcbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcmVhZG9ubHkgQURfVFlQRToge1xuICAgIEJBTk5FUjogc3RyaW5nO1xuICAgIElOVEVSU1RJVElBTDogc3RyaW5nO1xuICAgIFJFV0FSREVEOiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgb3B0aW9ucyB0byBzdGFydCBkaXNwbGF5aW5nIGFkcy5cbiAgICogQWx0aG91Z2ggaXQgaXMgbm90IHJlcXVpcmVkIHRvIGNhbGwgdGhpcyBtZXRob2QsIGFzIG9wdGlvbnMgY2FuIGJlIHNwZWNpZmllZCBpbiBvdGhlciBtZXRob2RzLCBpdCBpcyBoaWdobHkgcmVjb21tZW5kZWRcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0FkbW9iT3B0aW9uc30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgb3B0aW9ucyBhcmUgc2V0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldE9wdGlvbnMob3B0aW9uczogQWRtb2JPcHRpb25zIHwgQWRtb2JXZWJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBiYW5uZXIgYWQgdmlldy4gQ2FsbCB0aGlzIG1ldGhvZCBpbiBvcmRlciB0byBiZSBhYmxlIHRvIHN0YXJ0IHNob3dpbmcgYmFubmVyc1xuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7QWRtb2JPcHRpb25zfSAoT3B0aW9uYWwpIFNldHVwIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYW5uZXIgdmlldyBpcyBjcmVhdGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNyZWF0ZUJhbm5lclZpZXcob3B0aW9ucz86IEFkbW9iT3B0aW9ucyB8IEFkbW9iV2ViT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYmFubmVyIGFkcy4gWW91IG11c3QgY2FsbCBjcmVhdGVCYW5uZXJWaWV3IGZpcnN0LCBvdGhlcndpc2UgaXQgd2lsbCByZXN1bHQgaW4gZmFpbHVyZSBjYWxsYmFjayBhbmQgbm8gYWRzIHdpbGwgYmUgc2hvd25cbiAgICpcbiAgICogQHBhcmFtIHNob3cge2Jvb2xlYW59IChPcHRpb25hbCkgSW5kaWNhdGVzIHdoZXRoZXIgdG8gc2hvdyBvciBoaWRlIGJhbm5lciBhZHMuIERlZmF1bHRzIHRvIGB0cnVlYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGJhbm5lciBzaG93biBvciBoaWRkZW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd0Jhbm5lckFkKHNob3c/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBhbmQgZGVzdHJveSBiYW5uZXIgdmlldy4gQ2FsbCB0aGlzIG1ldGhvZCB3aGVuIHlvdSB3YW50IHRvIGRlc3Ryb3kgYmFubmVyIHZpZXcuXG4gICAqIEl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY2FsbCB0aGlzIG1ldGhvZCB3aGVuIHRoZSBhcHAgY2xvc2VkLCBhcyBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGJ5IHRoZSBwbHVnaW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVzdHJveUJhbm5lclZpZXcoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IGFuIGludGVyc3RpdGlhbCBhZFxuICAgKiBJZiBgb3B0aW9ucy5hdXRvU2hvd0ludGVyc3RpdGlhbGAgaXMgc2V0IHRvIGB0cnVlYCAoZGVmYXVsdCksIHRoZSBhZCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZGlzcGxheWVkLlxuICAgKiBPdGhlcndpc2UgeW91IG5lZWQgdG8gc3Vic2NyaWJlIHRvIGBvbkFkTG9hZGVkKClgIGV2ZW50IGFuZCBjYWxsIGBzaG93SW50ZXJzdGl0aWFsQWQoKWAgYWZ0ZXIgaXQgd2lsbCBiZSByYWlzZWQgc3BlY2lmeWluZyB0aGF0IGFuIGludGVyc3RpdGlhbCBhZCBpcyBhdmFpbGFibGUuXG4gICAqIElmIHlvdSBhbHJlYWR5IGNhbGxlZCBgcmVxdWVzdEludGVyc3RpdGlhbEFkKClgIGJ1dCB0aGUgaW50ZXJzdGl0aWFsIGhhcyBuZXZlciBiZWVuIHNob3duLCB0aGUgc3VjY2Vzc2l2ZSBjYWxscyB0byBgcmVxdWVzdEludGVyc3RpdGlhbEFkKClgIHdpbGwgcmVzdWx0IGluIHRoZSBhZCBiZWluZyBpbm1lZGlhdGVseSBhdmFpbGFibGUgKHRoZSBvbmUgdGhhdCB3YXMgb2J0YWluZWQgb24gdGhlIGZpcnN0IGNhbGwpXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtBZG1vYk9wdGlvbnN9IChPcHRpb25hbCkgU2V0dXAgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGludGVyc3RpdGlhbCBhZCBpcyBsb2FkZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdEludGVyc3RpdGlhbEFkKG9wdGlvbnM/OiBBZG1vYk9wdGlvbnMgfCBBZG1vYldlYk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGFuIGludGVyc3RpdGlhbCBhZC4gQ2FsbCBpdCBhZnRlciBgcmVxdWVzdEludGVyc3RpdGlhbEFkKClgIGFuZCBgb25BZExvYWRlZCgpYCBldmVudCByYWlzZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW50ZXJzdGl0aWFsIGFkIGlzIHNob3duXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dJbnRlcnN0aXRpYWxBZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IGFuIHJld2FyZGVkIGFkXG4gICAqIElmIGBvcHRpb25zLmF1dG9TaG93UmV3YXJkZWRgIGlzIHNldCB0byBgdHJ1ZWAgKGRlZmF1bHQpLCB0aGUgYWQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc3BsYXllZC5cbiAgICogT3RoZXJ3aXNlIHlvdSBuZWVkIHRvIHN1YnNjcmliZSB0byBgb25BZExvYWRlZCgpYCBlbmVudCBhbmQgY2FsbCBgc2hvd1Jld2FyZGVkQWQoKWAgYWZ0ZXIgaXQgd2lsbCBiZSByYWlzZWQgc3BlY2lmeWluZyB0aGF0IGEgcmV3YXJkZWQgYWQgaXMgYXZhaWxhYmxlLlxuICAgKiBJZiB5b3UgYWxyZWFkeSBjYWxsZWQgYHJlcXVlc3RSZXdhcmRlZEFkKClgIGJ1dCB0aGUgcmV3YXJkZWQgaGFzIG5ldmVyIGJlZW4gc2hvd24sIHRoZSBzdWNjZXNzaXZlIGNhbGxzIHRvIGByZXF1ZXN0UmV3YXJkZWRBZCgpYCB3aWxsIHJlc3VsdCBpbiB0aGUgYWQgYmVpbmcgaW5tZWRpYXRlbHkgYXZhaWxhYmxlICh0aGUgb25lIHRoYXQgd2FzIG9idGFpbmVkIG9uIHRoZSBmaXJzdCBjYWxsKVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7QWRtb2JPcHRpb25zfSAoT3B0aW9uYWwpIFNldHVwIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSByZXdhcmRlZCBhZCBpcyBsb2FkZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFJld2FyZGVkQWQob3B0aW9ucz86IEFkbW9iT3B0aW9ucyB8IEFkbW9iV2ViT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSByZXdhcmRlZCBhZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHJld2FyZGVkIGFkIGlzIHNob3duXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dSZXdhcmRlZEFkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGFkIGlzIHJlY2VpdmVkLlxuICAgKlxuICAgKiBXQVJOSU5HKjogb25seSAqKmlvbmljXjQqKi4gT2xkZXIgdmVyc2lvbnMgb2YgaW9uaWMsIHVzZTpcbiAgICpcbiAgICogYGBganNcbiAgICogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRtb2IuZXZlbnRzLm9uQWRMb2FkZWQsICgpID0+IHsgfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gb24gaHR0cHM6Ly9hZG1vYi1pb25pYy5jb20vRXZlbnRzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZE1vYkV2ZW50Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdoZW4gYW4gYWQgaXMgcmVjZWl2ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdhcHBmZWVsLmNvcmRvdmEuYWRtb2Iub25BZExvYWRlZCcsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIG9uQWRMb2FkZWQoKTogT2JzZXJ2YWJsZTxBZE1vYkV2ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGFkIHJlcXVlc3QgZmFpbGVkLlxuICAgKlxuICAgKiBXQVJOSU5HKjogb25seSAqKmlvbmljXjQqKi4gT2xkZXIgdmVyc2lvbnMgb2YgaW9uaWMsIHVzZTpcbiAgICpcbiAgICogYGBganNcbiAgICogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRtb2IuZXZlbnRzLm9uQWRGYWlsZWRUb0xvYWQsICgpID0+IHsgfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gb24gaHR0cHM6Ly9hZG1vYi1pb25pYy5jb20vRXZlbnRzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZE1vYkV2ZW50Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdoZW4gYW4gYWQgcmVxdWVzdCBpcyBmYWlsZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdhcHBmZWVsLmNvcmRvdmEuYWRtb2Iub25BZEZhaWxlZFRvTG9hZCcsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIG9uQWRGYWlsZWRUb0xvYWQoKTogT2JzZXJ2YWJsZTxBZE1vYkV2ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGFkIG9wZW5zIGFuIG92ZXJsYXkgdGhhdCBjb3ZlcnMgdGhlIHNjcmVlbi5cbiAgICogUGxlYXNlIG5vdGUgdGhhdCBvblBhdXNlIGNvcmRvdmEgZXZlbnQgaXMgcmFpc2VkIHdoZW4gYW4gaW50ZXJzdGl0aWFsIGlzIHNob3duLlxuICAgKlxuICAgKiBXQVJOSU5HKjogb25seSAqKmlvbmljXjQqKi4gT2xkZXIgdmVyc2lvbnMgb2YgaW9uaWMsIHVzZTpcbiAgICpcbiAgICogYGBganNcbiAgICogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRtb2IuZXZlbnRzLm9uQWRPcGVuZWQsICgpID0+IHsgfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gb24gaHR0cHM6Ly9hZG1vYi1pb25pYy5jb20vRXZlbnRzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZE1vYkV2ZW50Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdoZW4gYW4gYWQgaXMgb3BlbmVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnYXBwZmVlbC5jb3Jkb3ZhLmFkbW9iLm9uQWRPcGVuZWQnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBvbkFkT3BlbmVkKCk6IE9ic2VydmFibGU8QWRNb2JFdmVudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBpcyBhYm91dCB0byByZXR1cm4gdG8gdGhlIGFwcGxpY2F0aW9uIGFmdGVyIGNsaWNraW5nIG9uIGFuIGFkLlxuICAgKiBQbGVhc2Ugbm90ZSB0aGF0IG9uUmVzdW1lIGNvcmRvdmEgZXZlbnQgaXMgcmFpc2VkIHdoZW4gYW4gaW50ZXJzdGl0aWFsIGlzIGNsb3NlZC5cbiAgICpcbiAgICogV0FSTklORyo6IG9ubHkgKippb25pY140KiouIE9sZGVyIHZlcnNpb25zIG9mIGlvbmljLCB1c2U6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmFkbW9iLmV2ZW50cy5vbkFkQ2xvc2VkLCAoKSA9PiB7IH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogUGxlYXNlIHJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGh0dHBzOi8vYWRtb2ItaW9uaWMuY29tL0V2ZW50cy5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRNb2JFdmVudD59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aGVuIGFuIGFkIGlzIGNsb3NlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2FwcGZlZWwuY29yZG92YS5hZG1vYi5vbkFkQ2xvc2VkJyxcbiAgICBlbGVtZW50OiBkb2N1bWVudCxcbiAgfSlcbiAgb25BZENsb3NlZCgpOiBPYnNlcnZhYmxlPEFkTW9iRXZlbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgbGVhdmVzIHRoZSBhcHBsaWNhdGlvbiBhZnRlciBjbGlja2luZyBhbiBhZCAoZS5nLiwgdG8gZ28gdG8gdGhlIGJyb3dzZXIpXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkTW9iRXZlbnQ+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2hlbiBhbiBhZCBsZWF2ZXMgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBXQVJOSU5HKjogb25seSAqKmlvbmljXjQqKi4gT2xkZXIgdmVyc2lvbnMgb2YgaW9uaWMsIHVzZTpcbiAgICpcbiAgICogYGBganNcbiAgICogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRtb2IuZXZlbnRzLm9uQWRMZWZ0QXBwbGljYXRpb24sICgpID0+IHsgfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gb24gaHR0cHM6Ly9hZG1vYi1pb25pYy5jb20vRXZlbnRzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZE1vYkV2ZW50Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdoZW4gYXBwbGljYXRpb24gaXMgbGVmdCBkdWUgdG8gYW4gYWQgY2xpY2tcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdhcHBmZWVsLmNvcmRvdmEuYWRtb2Iub25BZExlZnRBcHBsaWNhdGlvbicsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIG9uQWRMZWZ0QXBwbGljYXRpb24oKTogT2JzZXJ2YWJsZTxBZE1vYkV2ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGhhcyBiZWVuIHJld2FyZGVkIGJ5IGFuIGFkLlxuICAgKlxuICAgKiBXQVJOSU5HKjogb25seSAqKmlvbmljXjQqKi4gT2xkZXIgdmVyc2lvbnMgb2YgaW9uaWMsIHVzZTpcbiAgICpcbiAgICogYGBganNcbiAgICogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRtb2IuZXZlbnRzLm9uUmV3YXJkZWRBZCwgKCkgPT4geyB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIFBsZWFzZSByZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBvbiBodHRwczovL2FkbW9iLWlvbmljLmNvbS9FdmVudHMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkTW9iRXZlbnQ+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2hlbiB0aGUgdXNlciByZXdhcmRzIGFuIGFkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnYXBwZmVlbC5jb3Jkb3ZhLmFkbW9iLm9uUmV3YXJkZWRBZCcsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIG9uUmV3YXJkZWRBZCgpOiBPYnNlcnZhYmxlPEFkTW9iRXZlbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZGVvIG9mIGEgcmV3YXJkZWQgYWQgc3RhcnRlZC5cbiAgICpcbiAgICogV0FSTklORyo6IG9ubHkgKippb25pY140KiouIE9sZGVyIHZlcnNpb25zIG9mIGlvbmljLCB1c2U6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmFkbW9iLmV2ZW50cy5vblJld2FyZGVkQWRWaWRlb1N0YXJ0ZWQsICgpID0+IHsgfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gb24gaHR0cHM6Ly9hZG1vYi1pb25pYy5jb20vRXZlbnRzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZE1vYkV2ZW50Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdoZW4gdGhlIHZpZGVvIGlzIHN0YXJ0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdhcHBmZWVsLmNvcmRvdmEuYWRtb2Iub25SZXdhcmRlZEFkVmlkZW9TdGFydGVkJyxcbiAgICBlbGVtZW50OiBkb2N1bWVudCxcbiAgfSlcbiAgb25SZXdhcmRlZEFkVmlkZW9TdGFydGVkKCk6IE9ic2VydmFibGU8QWRNb2JFdmVudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlkZW8gb2YgYSByZXdhcmRlZCBhZCBoYXMgY29tcGxldGVkLlxuICAgKlxuICAgKiBXQVJOSU5HKjogb25seSAqKmlvbmljXjQqKi4gT2xkZXIgdmVyc2lvbnMgb2YgaW9uaWMsIHVzZTpcbiAgICpcbiAgICogYGBganNcbiAgICogZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRtb2IuZXZlbnRzLm9uUmV3YXJkZWRBZFZpZGVvQ29tcGxldGVkLCAoKSA9PiB7IH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogUGxlYXNlIHJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGh0dHBzOi8vYWRtb2ItaW9uaWMuY29tL0V2ZW50cy5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRNb2JFdmVudD59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aGVuIHRoZSB2aWRlbyBpcyBjb21wbGV0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdhcHBmZWVsLmNvcmRvdmEuYWRtb2Iub25SZXdhcmRlZEFkVmlkZW9Db21wbGV0ZWQnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBvblJld2FyZGVkQWRWaWRlb0NvbXBsZXRlZCgpOiBPYnNlcnZhYmxlPEFkTW9iRXZlbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==