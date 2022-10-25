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
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var AdMobProOriginal = /** @class */ (function (_super) {
    __extends(AdMobProOriginal, _super);
    function AdMobProOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AD_POSITION = {
            NO_CHANGE: 0,
            TOP_LEFT: 1,
            TOP_CENTER: 2,
            TOP_RIGHT: 3,
            LEFT: 4,
            CENTER: 5,
            RIGHT: 6,
            BOTTOM_LEFT: 7,
            BOTTOM_CENTER: 8,
            BOTTOM_RIGHT: 9,
            POS_XY: 10,
        };
        return _this;
    }
    AdMobProOriginal.prototype.createBanner = function (adIdOrOptions) { return cordova(this, "createBanner", {}, arguments); };
    AdMobProOriginal.prototype.removeBanner = function () { return cordova(this, "removeBanner", { "sync": true }, arguments); };
    AdMobProOriginal.prototype.showBanner = function (position) { return cordova(this, "showBanner", { "sync": true }, arguments); };
    AdMobProOriginal.prototype.showBannerAtXY = function (x, y) { return cordova(this, "showBannerAtXY", { "sync": true }, arguments); };
    AdMobProOriginal.prototype.hideBanner = function () { return cordova(this, "hideBanner", { "sync": true }, arguments); };
    AdMobProOriginal.prototype.prepareInterstitial = function (adIdOrOptions) { return cordova(this, "prepareInterstitial", {}, arguments); };
    AdMobProOriginal.prototype.showInterstitial = function () { return cordova(this, "showInterstitial", { "sync": true }, arguments); };
    AdMobProOriginal.prototype.prepareRewardVideoAd = function (adIdOrOptions) { return cordova(this, "prepareRewardVideoAd", {}, arguments); };
    AdMobProOriginal.prototype.showRewardVideoAd = function () { return cordova(this, "showRewardVideoAd", { "sync": true }, arguments); };
    AdMobProOriginal.prototype.setOptions = function (options) { return cordova(this, "setOptions", {}, arguments); };
    AdMobProOriginal.prototype.getAdSettings = function () { return cordova(this, "getAdSettings", {}, arguments); };
    AdMobProOriginal.prototype.onAdFailLoad = function () { return cordova(this, "onAdFailLoad", { "eventObservable": true, "event": "onAdFailLoad", "element": "document" }, arguments); };
    AdMobProOriginal.prototype.onAdLoaded = function () { return cordova(this, "onAdLoaded", { "eventObservable": true, "event": "onAdLoaded", "element": "document" }, arguments); };
    AdMobProOriginal.prototype.onAdPresent = function () { return cordova(this, "onAdPresent", { "eventObservable": true, "event": "onAdPresent", "element": "document" }, arguments); };
    AdMobProOriginal.prototype.onAdLeaveApp = function () { return cordova(this, "onAdLeaveApp", { "eventObservable": true, "event": "onAdLeaveApp", "element": "document" }, arguments); };
    AdMobProOriginal.prototype.onAdDismiss = function () { return cordova(this, "onAdDismiss", { "eventObservable": true, "event": "onAdDismiss", "element": "document" }, arguments); };
    AdMobProOriginal.pluginName = "AdMob Pro";
    AdMobProOriginal.plugin = "cordova-plugin-admobpro";
    AdMobProOriginal.pluginRef = "AdMob";
    AdMobProOriginal.repo = "https://github.com/floatinghotpot/cordova-admob-pro";
    AdMobProOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return AdMobProOriginal;
}(AwesomeCordovaNativePlugin));
var AdMobPro = new AdMobProOriginal();
export { AdMobPro };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRtb2ItcHJvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE2SUosNEJBQTBCOzs7UUFDdEQsaUJBQVcsR0FZUDtZQUNGLFNBQVMsRUFBRSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsV0FBVyxFQUFFLENBQUM7WUFDZCxhQUFhLEVBQUUsQ0FBQztZQUNoQixZQUFZLEVBQUUsQ0FBQztZQUNmLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQzs7O0lBU0YsK0JBQVksYUFBQyxhQUFvQztJQVVqRCwrQkFBWTtJQVVaLDZCQUFVLGFBQUMsUUFBZ0I7SUFXM0IsaUNBQWMsYUFBQyxDQUFTLEVBQUUsQ0FBUztJQVFuQyw2QkFBVTtJQVNWLHNDQUFtQixhQUFDLGFBQW9DO0lBVXhELG1DQUFnQjtJQVNoQix1Q0FBb0IsYUFBQyxhQUFvQztJQVV6RCxvQ0FBaUI7SUFTakIsNkJBQVUsYUFBQyxPQUFxQjtJQVVoQyxnQ0FBYTtJQWNiLCtCQUFZO0lBY1osNkJBQVU7SUFjViw4QkFBVztJQWNYLCtCQUFZO0lBY1osOEJBQVc7Ozs7OzttQkF2VmI7RUErSThCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgQWRTaXplID1cbiAgfCAnU01BUlRfQkFOTkVSJ1xuICB8ICdCQU5ORVInXG4gIHwgJ01FRElVTV9SRUNUQU5HTEUnXG4gIHwgJ0ZVTExfQkFOTkVSJ1xuICB8ICdMRUFERVJCT0FSRCdcbiAgfCAnU0tZU0NSQVBFUidcbiAgfCAnQ1VTVE9NJztcblxuZXhwb3J0IGludGVyZmFjZSBBZE1vYk9wdGlvbnMge1xuICAvKipcbiAgICogQmFubmVyIGFkIElEXG4gICAqL1xuICBhZElkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCYW5uZXIgQWQgU2l6ZSwgZGVmYXVsdHMgdG8gYFNNQVJUX0JBTk5FUmAuIElUIGNhbiBiZTogYFNNQVJUX0JBTk5FUmAsIGBCQU5ORVJgLCBgTUVESVVNX1JFQ1RBTkdMRWAsIGBGVUxMX0JBTk5FUmAsIGBMRUFERVJCT0FSRGAsIGBTS1lTQ1JBUEVSYCwgb3IgYENVU1RPTWBcbiAgICovXG4gIGFkU2l6ZT86IEFkU2l6ZTtcblxuICAvKipcbiAgICogQmFubmVyIHdpZHRoLCB2YWxpZCB3aGVuIGBhZFNpemVgIGlzIHNldCB0byBgQ1VTVE9NYFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJhbm5lciBoZWlnaHQsIHZhbGlkIHdoZW4gYGFkU2l6ZWAgaXMgc2V0IHRvIGBDVVNUT01gXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFsbG93IGJhbm5lciB0byBvdmVybGFwIHdlYnZpZXcsIG9yIGVsc2UgaXQgd2lsbCBwdXNoIHdlYnZpZXcgdXAgb3IgZG93biB0byBhdm9pZCBvdmVybGFwLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIG92ZXJsYXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiBiYW5uZXIgYWQuIERlZmF1bHRzIHRvIGBUT1BfQ0VOVEVSYC4gWW91IGNhbiB1c2UgdGhlIGBBZE1vYlByby5BRF9QT1NJVElPTmAgcHJvcGVydHkgdG8gc2VsZWN0IG90aGVyIHZhbHVlcy5cbiAgICovXG4gIHBvc2l0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBYIGluIHBpeGVscy4gVmFsaWQgd2hlbiBgcG9zaXRpb25gIGlzIHNldCB0byBgUE9TX1hZYFxuICAgKi9cbiAgeD86IG51bWJlcjtcblxuICAvKipcbiAgICogWSBpbiBwaXhlbHMuIFZhbGlkIHdoZW4gYHBvc2l0aW9uYCBpcyBzZXQgdG8gYFBPU19YWWBcbiAgICovXG4gIHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlY2VpdmUgdGVzdCBhZCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgKi9cbiAgaXNUZXN0aW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQXV0byBzaG93IGludGVyc3RpdGlhbCBhZCB3aGVuIGxvYWRlZC4gU2V0IHRvIGZhbHNlIGlmIGhvcGUgdG8gY29udHJvbCB0aGUgc2hvdyB0aW1pbmcgd2l0aCBwcmVwYXJlSW50ZXJzdGl0aWFsL3Nob3dJbnRlcnN0aXRpYWxcbiAgICovXG4gIGF1dG9TaG93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmUtY3JlYXRlIHRoZSBiYW5uZXIgb24gd2ViIHZpZXcgb3JpZW50YXRpb24gY2hhbmdlIChub3Qgc2NyZWVuIG9yaWVudGF0aW9uKSwgb3IgZWxzZSBqdXN0IG1vdmUgdGhlIGJhbm5lci4gRGVmYXVsdDp0cnVlLlxuICAgKi9cbiAgb3JpZW50YXRpb25SZW5ldz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBleHRyYSBjb2xvciBzdHlsZSBmb3IgQWRcbiAgICovXG4gIGFkRXh0cmFzPzogQWRFeHRyYXM7XG5cbiAgLyoqXG4gICAqIExpY2Vuc2Uga2V5IGZvciB0aGUgcGx1Z2luXG4gICAqL1xuICBsaWNlbnNlPzogYW55O1xuXG4gIC8qKlxuICAgKiBTZXQgb2Zmc2V0XG4gICAqL1xuICBvZmZzZXRUb3BCYXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkRXh0cmFzIHtcbiAgY29sb3JfYmc6IHN0cmluZztcblxuICBjb2xvcl9iZ190b3A6IHN0cmluZztcblxuICBjb2xvcl9ib3JkZXI6IHN0cmluZztcblxuICBjb2xvcl9saW5rOiBzdHJpbmc7XG5cbiAgY29sb3JfdGV4dDogc3RyaW5nO1xuXG4gIGNvbG9yX3VybDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBwYWlkXG4gKiBAbmFtZSBBZE1vYiBQcm9cbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBQbHVnaW4gZm9yIEdvb2dsZSBBZHMsIGluY2x1ZGluZyBBZE1vYiAvIERGUCAoRG91YmxlQ2xpY2sgZm9yIHB1Ymxpc2hlcikgYW5kIG1lZGlhdGlvbnMgdG8gb3RoZXIgQWQgbmV0d29ya3MuXG4gKlxuICogSU1QT1JUQU5UIE5PVElDRTogdGhpcyBwbHVnaW4gdGFrZXMgYSBwZXJjZW50YWdlIG91dCBvZiB5b3VyIGVhcm5pbmdzIGlmIHlvdSBwcm9maXQgbW9yZSB0aGFuICQxLDAwMC4gUmVhZCBtb3JlIGFib3V0IHRoaXMgb24gdGhlIHBsdWdpbidzIHJlcG8uIEZvciBhIGNvbXBsZXRlbHkgZnJlZSBhbHRlcm5hdGl2ZSwgc2VlIFtBZE1vYlBybyBGcmVlXSguLi9hZG1vYi1mcmVlKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQWRNb2JQcm8gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYWRtb2ItcHJvL25neCc7XG4gKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkbW9iOiBBZE1vYlBybywgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0gKSB7IH1cbiAqXG4gKiBpb25WaWV3RGlkTG9hZCgpIHtcbiAqICAgdGhpcy5hZG1vYi5vbkFkRGlzbWlzcygpXG4gKiAgICAgLnN1YnNjcmliZSgoKSA9PiB7IGNvbnNvbGUubG9nKCdVc2VyIGRpc21pc3NlZCBhZCcpOyB9KTtcbiAqIH1cbiAqXG4gKiBvbkNsaWNrKCkge1xuICogICBsZXQgYWRJZDtcbiAqICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpKSB7XG4gKiAgICAgYWRJZCA9ICdZT1VSX0FESURfQU5EUk9JRCc7XG4gKiAgIH0gZWxzZSBpZiAodGhpcy5wbGF0Zm9ybS5pcygnaW9zJykpIHtcbiAqICAgICBhZElkID0gJ1lPVVJfQURJRF9JT1MnO1xuICogICB9XG4gKiAgIHRoaXMuYWRtb2IucHJlcGFyZUludGVyc3RpdGlhbCh7YWRJZDogYWRJZH0pXG4gKiAgICAgLnRoZW4oKCkgPT4geyB0aGlzLmFkbW9iLnNob3dJbnRlcnN0aXRpYWwoKTsgfSk7XG4gKiB9XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQWRNb2JPcHRpb25zXG4gKiBBZEV4dHJhc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FkTW9iIFBybycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkbW9icHJvJyxcbiAgcGx1Z2luUmVmOiAnQWRNb2InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5naG90cG90L2NvcmRvdmEtYWRtb2ItcHJvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZE1vYlBybyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQURfUE9TSVRJT046IHtcbiAgICBOT19DSEFOR0U6IG51bWJlcjtcbiAgICBUT1BfTEVGVDogbnVtYmVyO1xuICAgIFRPUF9DRU5URVI6IG51bWJlcjtcbiAgICBUT1BfUklHSFQ6IG51bWJlcjtcbiAgICBMRUZUOiBudW1iZXI7XG4gICAgQ0VOVEVSOiBudW1iZXI7XG4gICAgUklHSFQ6IG51bWJlcjtcbiAgICBCT1RUT01fTEVGVDogbnVtYmVyO1xuICAgIEJPVFRPTV9DRU5URVI6IG51bWJlcjtcbiAgICBCT1RUT01fUklHSFQ6IG51bWJlcjtcbiAgICBQT1NfWFk6IG51bWJlcjtcbiAgfSA9IHtcbiAgICBOT19DSEFOR0U6IDAsXG4gICAgVE9QX0xFRlQ6IDEsXG4gICAgVE9QX0NFTlRFUjogMixcbiAgICBUT1BfUklHSFQ6IDMsXG4gICAgTEVGVDogNCxcbiAgICBDRU5URVI6IDUsXG4gICAgUklHSFQ6IDYsXG4gICAgQk9UVE9NX0xFRlQ6IDcsXG4gICAgQk9UVE9NX0NFTlRFUjogOCxcbiAgICBCT1RUT01fUklHSFQ6IDksXG4gICAgUE9TX1hZOiAxMCxcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgYmFubmVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQWRNb2JPcHRpb25zfSBhZElkT3JPcHRpb25zIEFkIElEIG9yIE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiYW5uZXIgaXMgY3JlYXRlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcmVhdGVCYW5uZXIoYWRJZE9yT3B0aW9uczogc3RyaW5nIHwgQWRNb2JPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgYmFubmVyLCByZW1vdmUgaXQgZnJvbSBzY3JlZW4uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVtb3ZlQmFubmVyKCk6IHZvaWQge31cblxuICAvKipcbiAgICogU2hvdyBiYW5uZXIgYXQgcG9zaXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIFBvc2l0aW9uLiBVc2UgYEFkTW9iUHJvLkFEX1BPU0lUSU9OYCB0byBzZXQgdmFsdWVzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3dCYW5uZXIocG9zaXRpb246IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU2hvdyBiYW5uZXIgYXQgY3VzdG9tIHBvc2l0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IE9mZnNldCBmcm9tIHNjcmVlbiBsZWZ0LlxuICAgKiBAcGFyYW0ge251bWJlcn0geSBPZmZzZXQgZnJvbSBzY3JlZW4gdG9wLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3dCYW5uZXJBdFhZKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBiYW5uZXIsIHJlbW92ZSBpdCBmcm9tIHNjcmVlbiwgYnV0IGNhbiBzaG93IGl0IGxhdGVyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZUJhbm5lcigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgaW50ZXJzdGl0aWFsIGJhbm5lclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEFkTW9iT3B0aW9uc30gYWRJZE9yT3B0aW9ucyBBZCBJRCBvciBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBpbnRlcnN0aXRpYWwgaXMgcHJlcGFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlcGFyZUludGVyc3RpdGlhbChhZElkT3JPcHRpb25zOiBzdHJpbmcgfCBBZE1vYk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGludGVyc3RpdGlhbCBhZCB3aGVuIGl0J3MgcmVhZHlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzaG93SW50ZXJzdGl0aWFsKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJlcGFyZSBhIHJld2FyZCB2aWRlbyBhZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEFkTW9iT3B0aW9uc30gYWRJZE9yT3B0aW9ucyBBZCBJRCBvciBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWQgaXMgcHJlcGFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlcGFyZVJld2FyZFZpZGVvQWQoYWRJZE9yT3B0aW9uczogc3RyaW5nIHwgQWRNb2JPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhIHJld2FyZCB2aWRlbyBhZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3dSZXdhcmRWaWRlb0FkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWVzIGZvciBjb25maWd1cmF0aW9uIGFuZCB0YXJnZXRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtBZE1vYk9wdGlvbnN9IG9wdGlvbnMgT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG9wdGlvbnMgaGF2ZSBiZWVuIHNldFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRPcHRpb25zKG9wdGlvbnM6IEFkTW9iT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1c2VyIGFkIHNldHRpbmdzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgYWQgc2V0dGluZ3NcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWRTZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBmYWlsZWQgdG8gcmVjZWl2ZSBBZFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ29uQWRGYWlsTG9hZCcsXG4gICAgZWxlbWVudDogJ2RvY3VtZW50JyxcbiAgfSlcbiAgb25BZEZhaWxMb2FkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIEFkIHJlY2VpdmVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb25BZExvYWRlZCcsXG4gICAgZWxlbWVudDogJ2RvY3VtZW50JyxcbiAgfSlcbiAgb25BZExvYWRlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBBZCB3aWxsIGJlIHNob3dlZCBvbiBzY3JlZW5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdvbkFkUHJlc2VudCcsXG4gICAgZWxlbWVudDogJ2RvY3VtZW50JyxcbiAgfSlcbiAgb25BZFByZXNlbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gdXNlciBjbGljayB0aGUgQWQsIGFuZCB3aWxsIGp1bXAgb3V0IG9mIHlvdXIgQXBwXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb25BZExlYXZlQXBwJyxcbiAgICBlbGVtZW50OiAnZG9jdW1lbnQnLFxuICB9KVxuICBvbkFkTGVhdmVBcHAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gZGlzbWlzcyB0aGUgQWQgYW5kIGJhY2sgdG8geW91ciBBcHBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdvbkFkRGlzbWlzcycsXG4gICAgZWxlbWVudDogJ2RvY3VtZW50JyxcbiAgfSlcbiAgb25BZERpc21pc3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==