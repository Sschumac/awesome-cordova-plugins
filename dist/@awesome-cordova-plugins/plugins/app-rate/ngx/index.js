import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
export var AppRateReviewTypeIos;
(function (AppRateReviewTypeIos) {
    /**
     * Write review directly in your application (iOS 10.3+), limited to 3 prompts per year.
     * Will fallback to 'AppStoreReview' for other iOS versions
     */
    AppRateReviewTypeIos["InAppReview"] = "InAppReview";
    /**
     * Open the store within the app. Use this option as an alternative to inAppReview to avoid the rate action from doing nothing
     */
    AppRateReviewTypeIos["AppStoreReview"] = "AppStoreReview";
    /**
     * Open the store using the openUrl preference (defaults to InAppBrowser). Be advised that WKWebView might not open the app store links
     */
    AppRateReviewTypeIos["InAppBrowser"] = "InAppBrowser";
})(AppRateReviewTypeIos || (AppRateReviewTypeIos = {}));
export var AppRateReviewTypeAndroid;
(function (AppRateReviewTypeAndroid) {
    /**
     * Write review directly in your application. Will fallback to InAppBrowser if not available
     */
    AppRateReviewTypeAndroid["InAppReview"] = "InAppReview";
    /**
     *  Open the store using the openUrl preference (defaults to InAppBrowser)
     */
    AppRateReviewTypeAndroid["InAppBrowser"] = "InAppBrowser";
})(AppRateReviewTypeAndroid || (AppRateReviewTypeAndroid = {}));
export var AppRatePromptType;
(function (AppRatePromptType) {
    /**
     * Prompt asking to rate the app.
     */
    AppRatePromptType["AppRatingPrompt"] = "AppRatingPrompt";
    /**
     * Prompt asking to rate the app within the store.
     */
    AppRatePromptType["StoreRatingPrompt"] = "StoreRatingPrompt";
    /**
     * Prompt asking to give feedback.
     */
    AppRatePromptType["FeedbackPrompt"] = "FeedbackPrompt";
})(AppRatePromptType || (AppRatePromptType = {}));
var AppRate = /** @class */ (function (_super) {
    __extends(AppRate, _super);
    function AppRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppRate.prototype.setPreferences = function (pref) { return cordova(this, "setPreferences", {}, arguments); };
    AppRate.prototype.getPreferences = function () { return cordova(this, "getPreferences", {}, arguments); };
    AppRate.prototype.promptForRating = function (immediately) { return cordova(this, "promptForRating", {}, arguments); };
    AppRate.prototype.navigateToAppStore = function () { return cordova(this, "navigateToAppStore", {}, arguments); };
    Object.defineProperty(AppRate.prototype, "locales", {
        get: function () { return cordovaPropertyGet(this, "locales"); },
        set: function (value) { cordovaPropertySet(this, "locales", value); },
        enumerable: false,
        configurable: true
    });
    AppRate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppRate, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AppRate.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppRate });
    AppRate.pluginName = "AppRate";
    AppRate.plugin = "cordova-plugin-apprate";
    AppRate.pluginRef = "AppRate";
    AppRate.repo = "https://github.com/pushandplay/cordova-plugin-apprate";
    AppRate.platforms = ["Android", "BlackBerry 10", "iOS", "Windows"];
    AppRate = __decorate([], AppRate);
    return AppRate;
}(AwesomeCordovaNativePlugin));
export { AppRate };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppRate, decorators: [{
            type: Injectable
        }], propDecorators: { locales: [], setPreferences: [], getPreferences: [], promptForRating: [], navigateToAppStore: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLXJhdGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7O0FBRTdHLE1BQU0sQ0FBTixJQUFZLG9CQWNYO0FBZEQsV0FBWSxvQkFBb0I7SUFDOUI7OztPQUdHO0lBQ0gsbURBQTJCLENBQUE7SUFDM0I7O09BRUc7SUFDSCx5REFBaUMsQ0FBQTtJQUNqQzs7T0FFRztJQUNILHFEQUE2QixDQUFBO0FBQy9CLENBQUMsRUFkVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBYy9CO0FBRUQsTUFBTSxDQUFOLElBQVksd0JBU1g7QUFURCxXQUFZLHdCQUF3QjtJQUNsQzs7T0FFRztJQUNILHVEQUEyQixDQUFBO0lBQzNCOztPQUVHO0lBQ0gseURBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQVRXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFTbkM7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFlWDtBQWZELFdBQVksaUJBQWlCO0lBQzNCOztPQUVHO0lBQ0gsd0RBQW1DLENBQUE7SUFFbkM7O09BRUc7SUFDSCw0REFBdUMsQ0FBQTtJQUV2Qzs7T0FFRztJQUNILHNEQUFpQyxDQUFBO0FBQ25DLENBQUMsRUFmVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBZTVCOztJQThNNEIsMkJBQTBCOzs7O0lBY3JELGdDQUFjLGFBQUMsSUFBd0I7SUFVdkMsZ0NBQWM7SUFVZCxpQ0FBZSxhQUFDLFdBQXFCO0lBUXJDLG9DQUFrQjswQkFyQ2xCLDRCQUFPOzs7Ozs7eUdBTEksT0FBTzs2R0FBUCxPQUFPOzs7Ozs7SUFBUCxPQUFPLGtCQUFQLE9BQU87a0JBM1BwQjtFQTJQNkIsMEJBQTBCO1NBQTFDLE9BQU87NEZBQVAsT0FBTztrQkFEbkIsVUFBVTs4QkFNVCxPQUFPLE1BU1AsY0FBYyxNQVVkLGNBQWMsTUFVZCxlQUFlLE1BUWYsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgZW51bSBBcHBSYXRlUmV2aWV3VHlwZUlvcyB7XG4gIC8qKlxuICAgKiBXcml0ZSByZXZpZXcgZGlyZWN0bHkgaW4geW91ciBhcHBsaWNhdGlvbiAoaU9TIDEwLjMrKSwgbGltaXRlZCB0byAzIHByb21wdHMgcGVyIHllYXIuXG4gICAqIFdpbGwgZmFsbGJhY2sgdG8gJ0FwcFN0b3JlUmV2aWV3JyBmb3Igb3RoZXIgaU9TIHZlcnNpb25zXG4gICAqL1xuICBJbkFwcFJldmlldyA9ICdJbkFwcFJldmlldycsXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBzdG9yZSB3aXRoaW4gdGhlIGFwcC4gVXNlIHRoaXMgb3B0aW9uIGFzIGFuIGFsdGVybmF0aXZlIHRvIGluQXBwUmV2aWV3IHRvIGF2b2lkIHRoZSByYXRlIGFjdGlvbiBmcm9tIGRvaW5nIG5vdGhpbmdcbiAgICovXG4gIEFwcFN0b3JlUmV2aWV3ID0gJ0FwcFN0b3JlUmV2aWV3JyxcbiAgLyoqXG4gICAqIE9wZW4gdGhlIHN0b3JlIHVzaW5nIHRoZSBvcGVuVXJsIHByZWZlcmVuY2UgKGRlZmF1bHRzIHRvIEluQXBwQnJvd3NlcikuIEJlIGFkdmlzZWQgdGhhdCBXS1dlYlZpZXcgbWlnaHQgbm90IG9wZW4gdGhlIGFwcCBzdG9yZSBsaW5rc1xuICAgKi9cbiAgSW5BcHBCcm93c2VyID0gJ0luQXBwQnJvd3NlcicsXG59XG5cbmV4cG9ydCBlbnVtIEFwcFJhdGVSZXZpZXdUeXBlQW5kcm9pZCB7XG4gIC8qKlxuICAgKiBXcml0ZSByZXZpZXcgZGlyZWN0bHkgaW4geW91ciBhcHBsaWNhdGlvbi4gV2lsbCBmYWxsYmFjayB0byBJbkFwcEJyb3dzZXIgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgSW5BcHBSZXZpZXcgPSAnSW5BcHBSZXZpZXcnLFxuICAvKipcbiAgICogIE9wZW4gdGhlIHN0b3JlIHVzaW5nIHRoZSBvcGVuVXJsIHByZWZlcmVuY2UgKGRlZmF1bHRzIHRvIEluQXBwQnJvd3NlcilcbiAgICovXG4gIEluQXBwQnJvd3NlciA9ICdJbkFwcEJyb3dzZXInLFxufVxuXG5leHBvcnQgZW51bSBBcHBSYXRlUHJvbXB0VHlwZSB7XG4gIC8qKlxuICAgKiBQcm9tcHQgYXNraW5nIHRvIHJhdGUgdGhlIGFwcC5cbiAgICovXG4gIEFwcFJhdGluZ1Byb21wdCA9ICdBcHBSYXRpbmdQcm9tcHQnLFxuXG4gIC8qKlxuICAgKiBQcm9tcHQgYXNraW5nIHRvIHJhdGUgdGhlIGFwcCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgU3RvcmVSYXRpbmdQcm9tcHQgPSAnU3RvcmVSYXRpbmdQcm9tcHQnLFxuXG4gIC8qKlxuICAgKiBQcm9tcHQgYXNraW5nIHRvIGdpdmUgZmVlZGJhY2suXG4gICAqL1xuICBGZWVkYmFja1Byb21wdCA9ICdGZWVkYmFja1Byb21wdCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0ZVByZWZlcmVuY2VzIHtcbiAgLyoqXG4gICAqIEN1c3RvbSBCQ1AgNDcgbGFuZ3VhZ2UgdGFnXG4gICAqL1xuICB1c2VMYW5ndWFnZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIGFwcGxpY2F0aW9uIHRpdGxlXG4gICAqL1xuICBkaXNwbGF5QXBwTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2hvdyBkaWFsb2cgYWdhaW4gd2hlbiBhcHBsaWNhdGlvbiB2ZXJzaW9uIHdpbGwgYmUgdXBkYXRlZC4gRGVmYXVsdHMgdG8gYHRydWVgXG4gICAqL1xuICBwcm9tcHRBZ2FpbkZvckVhY2hOZXdWZXJzaW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogY291bnQgb2YgcnVucyBvZiBhcHBsaWNhdGlvbiBiZWZvcmUgZGlhbG9nIHdpbGwgYmUgZGlzcGxheWVkLiBEZWZhdWx0cyB0byBgM2BcbiAgICovXG4gIHVzZXNVbnRpbFByb21wdD86IG51bWJlcjtcblxuICByZXZpZXdUeXBlPzoge1xuICAgIC8qKlxuICAgICAqIHRoZSB0eXBlIG9mIHJldmlldyBkaXNwbGF5IHRvIHNob3cgdGhlIHVzZXIgb24gaU9TXG4gICAgICogRGVmYXVsdDogQXBwU3RvcmVSZXZpZXdcbiAgICAgKi9cbiAgICBpb3M/OiBBcHBSYXRlUmV2aWV3VHlwZUlvcztcbiAgICAvKipcbiAgICAgKiB0aGUgdHlwZSBvZiByZXZpZXcgZGlzcGxheSB0byBzaG93IHRoZSB1c2VyIG9uIEFuZHJvaWRcbiAgICAgKiBEZWZhdWx0OiBJbkFwcEJyb3dzZXJcbiAgICAgKi9cbiAgICBhbmRyb2lkPzogQXBwUmF0ZVJldmlld1R5cGVBbmRyb2lkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaW1wbGUgTW9kZSB0byBkaXNwbGF5IHRoZSByYXRlIGRpYWxvZyBkaXJlY3RseSBhbmQgYnlwYXNzIG5lZ2F0aXZlIGZlZWRiYWNrIGZpbHRlcmluZyBmbG93XG4gICAqL1xuICBzaW1wbGVNb2RlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsaW5nIHdvdWxkIHNraXAgZGlzcGxheWluZyBhIHJhdGUgZGlhbG9nIGlmIGluIGFwcCByZXZpZXcgaXMgc2V0IGFuZCBhdmFpbGFibGUuIERlZmF1bHRzIHRvIGB0cnVlYFxuICAgKi9cbiAgc2hvd1Byb21wdEZvckluQXBwUmV2aWV3PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3VzdG9tIGxvY2FsZSBvYmplY3RcbiAgICovXG4gIGN1c3RvbUxvY2FsZT86IEFwcFJhdGVDdXN0b21Mb2NhbGU7XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrcyBmb3IgZXZlbnRzXG4gICAqL1xuICBjYWxsYmFja3M/OiBBcHBSYXRlQ2FsbGJhY2tzO1xuXG4gIC8qKlxuICAgKiBBcHAgU3RvcmUgVVJMU1xuICAgKi9cbiAgc3RvcmVBcHBVUkw/OiBBcHBVcmxzO1xuXG4gIC8qKlxuICAgKiBPcGVuIFVSTCBmdW5jdGlvblxuICAgKi9cbiAgb3BlblVybD86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBSYXRlQ3VzdG9tTG9jYWxlIHtcbiAgLyoqIFRpdGxlICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKiBNZXNzYWdlICovXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqIENhbmNlbCBidXR0b24gbGFiZWwgKi9cbiAgY2FuY2VsQnV0dG9uTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIExhdGVyIGJ1dHRvbiBsYWJlbCAqL1xuICBsYXRlckJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBSYXRlIGJ1dHRvbiBsYWJlbCAqL1xuICByYXRlQnV0dG9uTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIFllcyBidXR0b24gbGFiZWwgKi9cbiAgeWVzQnV0dG9uTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqIE5vIGJ1dHRvbiBsYWJlbCAqL1xuICBub0J1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKiBBcHAgcmF0ZSBwcm9tcHQgdGl0bGUgKi9cbiAgYXBwUmF0ZVByb21wdFRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKiBGZWVkYmFjayBwcm9tcHQgdGl0bGUgKi9cbiAgZmVlZGJhY2tQcm9tcHRUaXRsZT86IHN0cmluZztcblxuICAvKiogRmVlZGJhY2sgcHJvbXB0IG1lc3NhZ2UgKi9cbiAgYXBwUmF0ZVByb21wdE1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqIEZlZWRiYWNrIHByb21wdCBtZXNzYWdlICovXG4gIGZlZWRiYWNrUHJvbXB0TWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBSYXRlTG9jYWxlcyB7XG4gIGFkZExvY2FsZShsb2NhbGVPYmplY3Q6IEFwcFJhdGVDdXN0b21Mb2NhbGUpOiBBcHBSYXRlQ3VzdG9tTG9jYWxlO1xuXG4gIGdldExvY2FsZShsYW5ndWFnZTogc3RyaW5nLCBhcHBsaWNhdGlvblRpdGxlPzogc3RyaW5nLCBjdXN0b21Mb2NhbGU/OiBBcHBSYXRlQ3VzdG9tTG9jYWxlKTogQXBwUmF0ZUN1c3RvbUxvY2FsZTtcblxuICBnZXRMb2NhbGVzTmFtZXMoKTogeyBbcHJvcDogc3RyaW5nXTogQXBwUmF0ZUN1c3RvbUxvY2FsZSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGVDYWxsYmFja3Mge1xuICAvKipcbiAgICogY2FsbCBiYWNrIGZ1bmN0aW9uLiBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrZWQgb24gcmF0ZS1kaWFsb2cgYnV0dG9uc1xuICAgKi9cbiAgb25CdXR0b25DbGlja2VkPzogKGJ1dHRvbkluZGV4OiBudW1iZXIsIGJ1dHRvbkxhYmVsOiBzdHJpbmcsIHByb21wdFR5cGU6IEFwcFJhdGVQcm9tcHRUeXBlKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBjYWxsIGJhY2sgZnVuY3Rpb24uIGNhbGxlZCB3aGVuIHJhdGUtZGlhbG9nIHNob3dpbmdcbiAgICovXG4gIG9uUmF0ZURpYWxvZ1Nob3c/OiAocmF0ZUNhbGxiYWNrOiAoYnV0dG9uSW5kZXg6IG51bWJlcikgPT4gdm9pZCkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIGNhbGwgYmFjayBmdW5jdGlvbi4gY2FsbGVkIHdoZW4gdXNlciBjbGlja2VkIG9uIG5lZ2F0aXZlIGZlZWRiYWNrXG4gICAqL1xuICBoYW5kbGVOZWdhdGl2ZUZlZWRiYWNrPzogKCkgPT4gdm9pZDtcblxuICBkb25lPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBVcmxzIHtcbiAgLyoqXG4gICAqIGFwcGxpY2F0aW9uIGlkIGluIEFwcFN0b3JlXG4gICAqL1xuICBpb3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFwcGxpY2F0aW9uIFVSTCBpbiBHb29nbGVQbGF5XG4gICAqL1xuICBhbmRyb2lkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhcHBsaWNhdGlvbiBVUkwgaW4gV2luZG93cyBTdG9yZVxuICAgKi9cbiAgd2luZG93cz86IHN0cmluZztcblxuICAvKipcbiAgICogYXBwbGljYXRpb24gVVJMIGluIEFwcFdvcmxkXG4gICAqL1xuICBibGFja2JlcnJ5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhcHBsaWNhdGlvbiBVUkwgaW4gV2luZG93c1N0b3JlXG4gICAqL1xuICB3aW5kb3dzOD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgUmF0ZVxuICogQHByZW1pZXIgYXBwLXJhdGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEFwcFJhdGUgcGx1Z2luIG1ha2VzIGl0IGVhc3kgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIHJhdGUgeW91ciBhcHAsIGVpdGhlciBub3csIGxhdGVyLCBvciBuZXZlci5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYXBwcmF0ZS4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0FwcFJhdGUgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9wdXNoYW5kcGxheS9jb3Jkb3ZhLXBsdWdpbi1hcHByYXRlKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwUmF0ZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hcHAtcmF0ZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwUmF0ZTogQXBwUmF0ZSkgeyB9XG4gKlxuICogLi4uXG4gKiAvLyBzZXQgY2VydGFpbiBwcmVmZXJlbmNlc1xuICogdGhpcy5hcHBSYXRlLnNldFByZWZlcmVuY2VzKHtcbiAqICAgc3RvcmVBcHBVUkw6IHtcbiAqICAgICBpb3M6ICc8YXBwX2lkPicsXG4gKiAgICAgYW5kcm9pZDogJ21hcmtldDovL2RldGFpbHM/aWQ9PHBhY2thZ2VfbmFtZT4nLFxuICogICAgIHdpbmRvd3M6ICdtcy13aW5kb3dzLXN0b3JlOi8vcmV2aWV3Lz9Qcm9kdWN0SWQ9PHN0b3JlX2lkPidcbiAqICAgfVxuICogfSk7XG4gKlxuICogdGhpcy5hcHBSYXRlLnByb21wdEZvclJhdGluZyh0cnVlKTtcbiAqXG4gKiAvLyBvciwgb3ZlcnJpZGUgdGhlIHdob2xlIHByZWZlcmVuY2VzIG9iamVjdFxuICogdGhpcy5hcHBSYXRlLnNldFByZWZlcmVuY2VzKHtcbiAqICAgdXNlc1VudGlsUHJvbXB0OiAzLFxuICogICBzdG9yZUFwcFVSTDoge1xuICogICAgaW9zOiAnPGFwcF9pZD4nLFxuICogICAgYW5kcm9pZDogJ21hcmtldDovL2RldGFpbHM/aWQ9PHBhY2thZ2VfbmFtZT4nLFxuICogICAgd2luZG93czogJ21zLXdpbmRvd3Mtc3RvcmU6Ly9yZXZpZXcvP1Byb2R1Y3RJZD08c3RvcmVfaWQ+J1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiB0aGlzLmFwcFJhdGUucHJvbXB0Rm9yUmF0aW5nKGZhbHNlKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEFwcFJhdGVQcmVmZXJlbmNlc1xuICogQXBwVXJsc1xuICogQXBwUmF0ZUNhbGxiYWNrc1xuICogQXBwUmF0ZUN1c3RvbUxvY2FsXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwUmF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcHJhdGUnLFxuICBwbHVnaW5SZWY6ICdBcHBSYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdXNoYW5kcGxheS9jb3Jkb3ZhLXBsdWdpbi1hcHByYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBSYXRlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogTWFuYWdlciBjdXN0b20gbG9jYWxlc1xuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGxvY2FsZXM6IEFwcFJhdGVMb2NhbGVzO1xuXG4gIC8qKlxuICAgKiBTZXQgcHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtIHByZWZcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRQcmVmZXJlbmNlcyhwcmVmOiBBcHBSYXRlUHJlZmVyZW5jZXMpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByZWZlcmVuY2VzXG4gICAqXG4gICAqIEByZXR1cm5zIEFwcFJhdGVQcmVmZXJlbmNlc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQcmVmZXJlbmNlcygpOiBBcHBSYXRlUHJlZmVyZW5jZXMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tcHRzIHRoZSB1c2VyIGZvciByYXRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpbW1lZGlhdGVseSAgU2hvdyB0aGUgcmF0aW5nIHByb21wdCBpbW1lZGlhdGVseS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJvbXB0Rm9yUmF0aW5nKGltbWVkaWF0ZWx5PzogYm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbW1lZGlhdGVseSBzZW5kIHRoZSB1c2VyIHRvIHRoZSBhcHAgc3RvcmUgcmF0aW5nIHBhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbmF2aWdhdGVUb0FwcFN0b3JlKCk6IHZvaWQge31cbn1cbiJdfQ==