import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var BuildInfo = /** @class */ (function (_super) {
    __extends(BuildInfo, _super);
    function BuildInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuildInfo.prototype, "baseUrl", {
        get: function () { return cordovaPropertyGet(this, "baseUrl"); },
        set: function (value) { cordovaPropertySet(this, "baseUrl", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "packageName", {
        get: function () { return cordovaPropertyGet(this, "packageName"); },
        set: function (value) { cordovaPropertySet(this, "packageName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "basePackageName", {
        get: function () { return cordovaPropertyGet(this, "basePackageName"); },
        set: function (value) { cordovaPropertySet(this, "basePackageName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "displayName", {
        get: function () { return cordovaPropertyGet(this, "displayName"); },
        set: function (value) { cordovaPropertySet(this, "displayName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "name", {
        get: function () { return cordovaPropertyGet(this, "name"); },
        set: function (value) { cordovaPropertySet(this, "name", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "versionCode", {
        get: function () { return cordovaPropertyGet(this, "versionCode"); },
        set: function (value) { cordovaPropertySet(this, "versionCode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "debug", {
        get: function () { return cordovaPropertyGet(this, "debug"); },
        set: function (value) { cordovaPropertySet(this, "debug", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "buildType", {
        get: function () { return cordovaPropertyGet(this, "buildType"); },
        set: function (value) { cordovaPropertySet(this, "buildType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "flavor", {
        get: function () { return cordovaPropertyGet(this, "flavor"); },
        set: function (value) { cordovaPropertySet(this, "flavor", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "buildDate", {
        get: function () { return cordovaPropertyGet(this, "buildDate"); },
        set: function (value) { cordovaPropertySet(this, "buildDate", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "installDate", {
        get: function () { return cordovaPropertyGet(this, "installDate"); },
        set: function (value) { cordovaPropertySet(this, "installDate", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfo.prototype, "windows", {
        get: function () { return cordovaPropertyGet(this, "windows"); },
        set: function (value) { cordovaPropertySet(this, "windows", value); },
        enumerable: false,
        configurable: true
    });
    BuildInfo.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BuildInfo, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BuildInfo.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BuildInfo });
    BuildInfo.pluginName = "BuildInfo";
    BuildInfo.plugin = "cordova-plugin-buildinfo";
    BuildInfo.pluginRef = "BuildInfo";
    BuildInfo.repo = "https://github.com/lynrin/cordova-plugin-buildinfo";
    BuildInfo.platforms = ["Android", "iOS", "Windows", "macOS", "browser", "Electron"];
    BuildInfo = __decorate([], BuildInfo);
    return BuildInfo;
}(AwesomeCordovaNativePlugin));
export { BuildInfo };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BuildInfo, decorators: [{
            type: Injectable
        }], propDecorators: { baseUrl: [], packageName: [], basePackageName: [], displayName: [], name: [], version: [], versionCode: [], debug: [], buildType: [], flavor: [], buildDate: [], installDate: [], windows: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnVpbGQtaW5mby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBa0NyRSw2QkFBMEI7Ozs7MEJBS3ZELDhCQUFPOzs7Ozs7MEJBZVAsa0NBQVc7Ozs7OzswQkFxQlgsc0NBQWU7Ozs7OzswQkFlZixrQ0FBVzs7Ozs7OzBCQWVYLDJCQUFJOzs7Ozs7MEJBZUosOEJBQU87Ozs7OzswQkFlUCxrQ0FBVzs7Ozs7OzBCQWVYLDRCQUFLOzs7Ozs7MEJBa0JMLGdDQUFTOzs7Ozs7MEJBZ0JULDZCQUFNOzs7Ozs7MEJBNEJOLGdDQUFTOzs7Ozs7MEJBa0JULGtDQUFXOzs7Ozs7MEJBUVgsOEJBQU87Ozs7OzsyR0E1TUksU0FBUzsrR0FBVCxTQUFTOzs7Ozs7SUFBVCxTQUFTLGtCQUFULFNBQVM7b0JBbkN0QjtFQW1DK0IsMEJBQTBCO1NBQTVDLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTs4QkFNVCxPQUFPLE1BZVAsV0FBVyxNQXFCWCxlQUFlLE1BZWYsV0FBVyxNQWVYLElBQUksTUFlSixPQUFPLE1BZVAsV0FBVyxNQWVYLEtBQUssTUFrQkwsU0FBUyxNQWdCVCxNQUFNLE1BNEJOLFNBQVMsTUFrQlQsV0FBVyxNQVFYLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQnVpbGQgSW5mb1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBidWlsZCBpbmZvcm1hdGlvbi5cbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBCdWlsZEluZm8gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYnVpbGQtaW5mby9uZ3gnO1xuICpcbiAqIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmJhc2VVcmwgICAgICAgID0nICsgQnVpbGRJbmZvLmJhc2VVcmwpXG4gKiAgICAgY29uc29sZS5sb2coJ0J1aWxkSW5mby5wYWNrYWdlTmFtZSAgICA9JyArIEJ1aWxkSW5mby5wYWNrYWdlTmFtZSlcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmJhc2VQYWNrYWdlTmFtZT0nICsgQnVpbGRJbmZvLmJhc2VQYWNrYWdlTmFtZSlcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmRpc3BsYXlOYW1lICAgID0nICsgQnVpbGRJbmZvLmRpc3BsYXlOYW1lKVxuICogICAgIGNvbnNvbGUubG9nKCdCdWlsZEluZm8ubmFtZSAgICAgICAgICAgPScgKyBCdWlsZEluZm8ubmFtZSlcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLnZlcnNpb24gICAgICAgID0nICsgQnVpbGRJbmZvLnZlcnNpb24pXG4gKiAgICAgY29uc29sZS5sb2coJ0J1aWxkSW5mby52ZXJzaW9uQ29kZSAgICA9JyArIEJ1aWxkSW5mby52ZXJzaW9uQ29kZSlcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmRlYnVnICAgICAgICAgID0nICsgQnVpbGRJbmZvLmRlYnVnKVxuICogICAgIGNvbnNvbGUubG9nKCdCdWlsZEluZm8uYnVpbGRUeXBlICAgICAgPScgKyBCdWlsZEluZm8uYnVpbGRUeXBlKVxuICogICAgIGNvbnNvbGUubG9nKCdCdWlsZEluZm8uZmxhdm9yICAgICAgICAgPScgKyBCdWlsZEluZm8uZmxhdm9yKVxuICogICAgIGNvbnNvbGUubG9nKCdCdWlsZEluZm8uYnVpbGREYXRlICAgICAgPScgKyBCdWlsZEluZm8uYnVpbGREYXRlKVxuICogICAgIGNvbnNvbGUubG9nKCdCdWlsZEluZm8uaW5zdGFsbERhdGUgICAgPScgKyBCdWlsZEluZm8uaW5zdGFsbERhdGUpXG4gKiB9KVxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQnVpbGRJbmZvJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnVpbGRpbmZvJyxcbiAgcGx1Z2luUmVmOiAnQnVpbGRJbmZvJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9seW5yaW4vY29yZG92YS1wbHVnaW4tYnVpbGRpbmZvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnbWFjT1MnLCAnYnJvd3NlcicsICdFbGVjdHJvbiddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCdWlsZEluZm8gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGUgYmFzZVVybCB3aGVyZSBjb3Jkb3ZhLmpzIHdhcyBsb2FkZWQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgYmFzZVVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBhY2thZ2VOYW1lIG9mIEFwcGxpY2F0aW9uIElELlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfFBhY2thZ2UgTmFtZXxTdHJpbmd8XG4gICAqIHxpT1N8QnVuZGxlIElkZW50aWZpZXJ8U3RyaW5nfFxuICAgKiB8V2luZG93c3xJZGVudGl0eSBuYW1lfFN0cmluZ3xcbiAgICogfG1hY09TKE9TIFgpfEJ1bmRsZSBJZGVudGlmaWVyfFN0cmluZ3xcbiAgICogfEJyb3dzZXJ8R2V0IHRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIHdpZGdldCBlbGVtZW50IGluIGNvbmZpZy54bWwgZmlsZS58U3RyaW5nfFxuICAgKiB8RWxlY3Ryb258R2V0IHRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIHdpZGdldCBlbGVtZW50IGluIGNvbmZpZy54bWwgZmlsZS58U3RyaW5nfFxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHBhY2thZ2VOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQgb25seS5cbiAgICpcbiAgICogR2V0IHRoZSBwYWNrYWdlTmFtZSBvZiBCdWlsZENvbmZpZyBjbGFzcy5cbiAgICpcbiAgICogSWYgeW91IHVzZSB0aGUgY29uZmlndXJlIG9mIFwiYnVpbGQgdHlwZXNcIiBvciBcInByb2R1Y3QgZmxhdm9yc1wiLCBiZWNhdXNlIHlvdSBjYW4gc3BlY2lmeSBhIGRpZmZlcmVudCBwYWNrYWdlIG5hbWUgaXMgdGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgd2lkZ2V0IGVsZW1lbnQgb2YgY29uZmlnLnhtbCwgaXMgdGhlIHByb3BlcnR5IHRvIGdldCB0aGUgcGFja2FnZSBuYW1lIHRoYXQgQnVpbGRDb25maWcgY2xhc3MgYmVsb25ncy5cbiAgICogKG91Z2h0IGJlIHRoZSBzYW1lIGFzIHRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIHdpZGdldCBlbGVtZW50IG9mIGNvbmZpZy54bWwpXG4gICAqXG4gICAqXG4gICAqIHxQbGF0Zm9ybXxWYWx1ZXxUeXBlfFxuICAgKiB8LS0tLS0tLS18LS0tLS18LS0tLXxcbiAgICogfEFuZHJvaWR8UGFja2FnZSBuYW1lIG9mIEJ1aWxkQ29uZmlnIGNsYXNzfFN0cmluZ3xcbiAgICogfGlPU3xCdW5kbGUgSWRlbnRpZmllcihlcXVhbHMgQnVpbGRJbmZvLnBhY2thZ2VOYW1lKXxTdHJpbmd8XG4gICAqIHxXaW5kb3dzfElkZW50aXR5IG5hbWUoZXF1YWxzIEJ1aWxkSW5mby5wYWNrYWdlTmFtZSl8U3RyaW5nfFxuICAgKiB8bWFjT1MoT1MgWCl8QnVuZGxlIElkZW50aWZpZXIoZXF1YWxzIEJ1aWxkSW5mby5wYWNrYWdlTmFtZSl8U3RyaW5nfFxuICAgKiB8QnJvd3NlcnxlcXVhbHMgQnVpbGRJbmZvLnBhY2thZ2VOYW1lfFN0cmluZ3xcbiAgICogfEVsZWN0cm9ufGVxdWFscyBCdWlsZEluZm8ucGFja2FnZU5hbWV8U3RyaW5nfFxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGJhc2VQYWNrYWdlTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRpc3BsYXlOYW1lLlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfEFwcGxpY2F0aW9uIExhYmVsfFN0cmluZ3xcbiAgICogfGlPU3xDRkJ1bmRsZURpc3BsYXlOYW1lIChDRkJ1bmRsZU5hbWUgaWYgbm90IHByZXNlbnQpfFN0cmluZ3xcbiAgICogfFdpbmRvd3N8R2V0IHRoZSBEaXNwbGF5TmFtZSBhdHRyaWJ1dGUgb2YgdGhlIFZpc3VhbEVsZW1lbnRzIGVsZW1lbnQgaW4gQXBweE1hbmlmZXN0LnhtbCBmaWxlLnxTdHJpbmd8XG4gICAqIHxtYWNPUyhPUyBYKXxDRkJ1bmRsZURpc3BsYXlOYW1lIChDRkJ1bmRsZU5hbWUgaWYgbm90IHByZXNlbnQpfFN0cmluZ3xcbiAgICogfEJyb3dzZXJ8R2V0IHRoZSBzaG9ydCBhdHRyaWJ1dGUgb2YgdGhlIG5hbWUgZWxlbWVudCBpbiBjb25maWcueG1sIGZpbGUufFN0cmluZ3xcbiAgICogfEVsZWN0cm9ufEdldCB0aGUgc2hvcnQgYXR0cmlidXRlIG9mIHRoZSBuYW1lIGVsZW1lbnQgaW4gY29uZmlnLnhtbCBmaWxlLnxTdHJpbmd8XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lLlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfEFwcGxpY2F0aW9uIExhYmVsKGVxdWFsIEJ1aWxkSW5mby5kaXNwbGF5TmFtZSl8U3RyaW5nfFxuICAgKiB8aU9TfENGQnVuZGxlTmFtZXxTdHJpbmd8XG4gICAqIHxXaW5kb3dzfFdpbmRvd3MgU3RvcmUgZGlzcGxheSBuYW1lfFN0cmluZ3xcbiAgICogfG1hY09TKE9TIFgpfENGQnVuZGxlTmFtZXxTdHJpbmd8XG4gICAqIHxCcm93c2VyfEdldCB2YWx1ZSBvZiB0aGUgbmFtZSBlbGVtZW50IGluIGNvbmZpZy54bWwgZmlsZS58U3RyaW5nfFxuICAgKiB8RWxlY3Ryb258R2V0IHZhbHVlIG9mIHRoZSBuYW1lIGVsZW1lbnQgaW4gY29uZmlnLnhtbCBmaWxlLnxTdHJpbmd8XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZlcnNpb24uXG4gICAqXG4gICAqIHxQbGF0Zm9ybXxWYWx1ZXxUeXBlfFxuICAgKiB8LS0tLS0tLS18LS0tLS18LS0tLXxcbiAgICogfEFuZHJvaWR8QnVpbGRDb25maWcuVkVSU0lPTl9OQU1FfFN0cmluZ3xcbiAgICogfGlPU3xDRkJ1bmRsZVNob3J0VmVyc2lvblN0cmluZ3xTdHJpbmd8XG4gICAqIHxXaW5kb3dzfE1ham9yLk1pbm9yLkJ1aWxkIGV4KSBcIjEuMi4zXCJ8U3RyaW5nfFxuICAgKiB8bWFjT1MoT1MgWCl8Q0ZCdW5kbGVTaG9ydFZlcnNpb25TdHJpbmd8U3RyaW5nfFxuICAgKiB8QnJvd3NlcnxHZXQgdGhlIHZlcnNpb24gYXR0cmlidXRlIG9mIHRoZSB3aWRnZXQgZWxlbWVudCBpbiBjb25maWcueG1sIGZpbGUufFN0cmluZ3xcbiAgICogfEVsZWN0cm9ufEdldCB0aGUgdmVyc2lvbiBhdHRyaWJ1dGUgb2YgdGhlIHdpZGdldCBlbGVtZW50IGluIGNvbmZpZy54bWwgZmlsZS58U3RyaW5nfFxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZlcnNpb246IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSB2ZXJzaW9uIGNvZGUuXG4gICAqXG4gICAqIHxQbGF0Zm9ybXxWYWx1ZXxUeXBlfFxuICAgKiB8LS0tLS0tLS18LS0tLS18LS0tLXxcbiAgICogfEFuZHJvaWR8QnVpbGRDb25maWcuVkVSU0lPTl9DT0RFfGludGVnZXJ8XG4gICAqIHxpT1N8Q0ZCdW5kbGVWZXJzaW9ufFN0cmluZ3xcbiAgICogfFdpbmRvd3N8TWFqb3IuTWlub3IuQnVpbGQuUmV2aXNpb24gZXgpIFwiMS4yLjMuNFwifFN0cmluZ3xcbiAgICogfG1hY09TKE9TIFgpfENGQnVuZGxlVmVyc2lvbnxTdHJpbmd8XG4gICAqIHxCcm93c2VyfGVxdWFscyBCdWlsZEluZm8udmVyc2lvbnxTdHJpbmd8XG4gICAqIHxFbGVjdHJvbnxlcXVhbHMgQnVpbGRJbmZvLnZlcnNpb258U3RyaW5nfFxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZlcnNpb25Db2RlOiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVidWcgZmxhZy5cbiAgICpcbiAgICogfFBsYXRmb3JtfFZhbHVlfFR5cGV8XG4gICAqIHwtLS0tLS0tLXwtLS0tLXwtLS0tfFxuICAgKiB8QW5kcm9pZHxCdWlsZENvbmZpZy5ERUJVR3xCb29sZWFufFxuICAgKiB8aU9TfGRlZmluZWQgXCJERUJVR1wiIGlzIHRydWV8Qm9vbGVhbnxcbiAgICogfFdpbmRvd3N8aXNEZXZlbG9wbWVudE1vZGUgaXMgdHJ1ZXxCb29sZWFufFxuICAgKiB8bWFjT1MoT1MgWCl8ZGVmaW5lZCBcIkRFQlVHXCIgaXMgdHJ1ZXxCb29sZWFufFxuICAgKiB8QnJvd3NlcnxBbHdheXMgZmFsc2V8Qm9vbGVhbnxcbiAgICogfEVsZWN0cm9ufFRydWUgd2hlbiBgYGBjb3Jkb3ZhIGJ1aWxkIGVsZWN0cm9uIC0tZGVidWdgYGAgaXMgZXhlY3V0ZWQgd2l0aCB0aGUgXCItLWRlYnVnXCIgZmxhZy58Qm9vbGVhbnxcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBkZWJ1ZzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQW5kcm9pZCAsIFdpbmRvd3MgT25seS5cbiAgICpcbiAgICogR2V0IHRoZSBidWlsZCB0eXBlLlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfEJ1aWxkQ29uZmlnLkJVSUxEX1RZUEV8U3RyaW5nfFxuICAgKiB8aU9TfGVtcHR5IHN0cmluZ3xTdHJpbmd8XG4gICAqIHxXaW5kb3dzfFwicmVsZWFzZVwiIG9yIFwiZGVidWdcInxTdHJpbmd8XG4gICAqIHxtYWNPUyhPUyBYKXxlbXB0eSBzdHJpbmd8U3RyaW5nfFxuICAgKiB8QnJvd3NlcnxlbXB0eSBzdHJpbmd8U3RyaW5nfFxuICAgKiB8RWxlY3Ryb258ZW1wdHkgc3RyaW5nfFN0cmluZ3xcbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBidWlsZFR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIEFuZHJvaWQgT25seS5cbiAgICpcbiAgICogR2V0IHRoZSBmbGF2b3IuXG4gICAqXG4gICAqIHxQbGF0Zm9ybXxWYWx1ZXxUeXBlfFxuICAgKiB8LS0tLS0tLS18LS0tLS18LS0tLXxcbiAgICogfEFuZHJvaWR8QnVpbGRDb25maWcuRkxBVk9SfFN0cmluZ3xcbiAgICogfGlPU3xlbXB0eSBzdHJpbmd8U3RyaW5nfFxuICAgKiB8V2luZG93c3xlbXB0eSBzdHJpbmd8U3RyaW5nfFxuICAgKiB8bWFjT1MoT1MgWCl8ZW1wdHkgc3RyaW5nfFN0cmluZ3xcbiAgICogfEJyb3dzZXJ8ZW1wdHkgc3RyaW5nfFN0cmluZ3xcbiAgICogfEVsZWN0cm9ufGVtcHR5IHN0cmluZ3xTdHJpbmd8XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgZmxhdm9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYnVpbGQgZGF0ZSBhbmQgdGltZSBpbiB0aGUgRGF0ZSBvYmplY3QgcmV0dXJucy5cbiAgICpcbiAgICogQXR0ZW50aW9uOlxuICAgKiAtIEFuZHJvaWQ6IEFkZCB0aGUgQnVpbGRJbmZvLmdyYWRsZSBmaWxlIHRvIHlvdXIgQW5kcm9pZCBwcm9qZWN0LlxuICAgKiAgIFRoZSBCdWlsZEluZm8uZ3JhZGxlIGZpbGUgY29udGFpbnMgdGhlIHNldHRpbmcgdG8gYWRkIHRoZSBfQlVJTERJTkZPX1RJTUVTVEFNUCBmaWVsZCB0byB0aGUgQnVpbGRDb25maWcgY2xhc3MuXG4gICAqIC0gV2luZG93czogQWRkIHRoZSBidWlsZGluZm8ucmVzanNvbiBmaWxlIHRvIHlvdXIgV2luZG93cyBwcm9qZWN0LlxuICAgKiAgIFRoZSBidWlsZGluZm8ucmVzanNvbiBmaWxlIGludG8gdGhlIFwic3RyaW5nc1wiIGZvbGRlci5cbiAgICogICBBbmQgYWxzbyBhZGQgYSB0YXNrIHRvIHJld3JpdGUgYnVpbGRpbmZvLnJlc2pzb24gaW4gdGhlIENvcmRvdmFBcHAucHJvaml0ZW1zIGZpbGUuXG4gICAqIC0gQnJvd3NlciBhbmQgRWxlY3Ryb246IFdoZW4gYGBgY29yZG92YSBwcmVwYXJlYGBgIGlzIGV4ZWN1dGVkIEJ1aWxkIGRhdGUgYW5kIHRpbWUgaXMgZW1iZWRkZWQgaW5cbiAgICogICBwbGF0Zm9ybXMvKipicm93c2VyKipcXC93d3cvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1idWlsZGluZm8vc3JjL2Jyb3dzZXIvQnVpbGRJbmZvUHJveHkuanMgZmlsZS5cbiAgICogICAoT3IgcGxhdGZvcm1zLyoqZWxlY3Ryb24qKlxcL3d3dy9wbHVnaW5zL2NvcmRvdmEtcGx1Z2luLWJ1aWxkaW5mby9zcmMvYnJvd3Nlci9CdWlsZEluZm9Qcm94eS5qcyBmaWxlLilcbiAgICogICBgYGBjb3Jkb3ZhIHByZXBhcmVgYGAgaXMgYWxzbyBleGVjdXRlZCBmb3IgYGBgY29yZG92YSBidWlsZGBgYCwgYGBgY29yZG92YSBydW5gYGAgYW5kIGBgYGNvcmRvdmEgcGxhdGZvcm0gYWRkYGBgLlxuICAgKiAgIChSZWZlcmVuY2U6IFtIb29rcyBHdWlkZSAtIEFwYWNoZSBDb3Jkb3ZhXShodHRwczovL2NvcmRvdmEuYXBhY2hlLm9yZy9kb2NzL2VuLzkueC9ndWlkZS9hcHBkZXYvaG9va3MvaW5kZXguaHRtbCkpXG4gICAqXG4gICAqIHxQbGF0Zm9ybXxWYWx1ZXxUeXBlfFxuICAgKiB8LS0tLS0tLS18LS0tLS18LS0tLXxcbiAgICogfEFuZHJvaWR8QnVpbGRDb25maWcuXFxfQlVJTERJTkZPXFxfVElNRVNUQU1QIHZhbHVlfERhdGV8XG4gICAqIHxpT1N8R2V0IHRoZSBtb2RpZmljYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgSW5mby5wbGlzdCBmaWxlIGFjcXVpcmVkIGZyb20gdGhlIGV4ZWN1dGlvblBhdGggcHJvcGVydHkgb2YgdGhlIG1haW4gYnVuZGxlLnxEYXRlfFxuICAgKiB8V2luZG93c3xSZXNvdXJjZSB2YWx1ZSBvZiBcIi9idWlsZGluZm8vVGltZXN0YW1wXCIgc3RyaW5nLnxEYXRlfFxuICAgKiB8bWFjT1MoT1MgWCl8R2V0IHRoZSBtb2RpZmljYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgY29uZmlnLnhtbCBmaWxlIGFjcXVpcmVkIGZyb20gdGhlIHJlc291cmNlIG9mIHRoZSBtYWluIGJ1bmRsZS58RGF0ZXxcbiAgICogfEJyb3dzZXJ8VGhlIGRhdGUgYW5kIHRpbWUgd2hlbiBgYGBjb3Jkb3ZhIHByZXBhcmVgYGAgd2FzIGV4ZWN1dGVkLnxEYXRlfFxuICAgKiB8RWxlY3Ryb258VGhlIGRhdGUgYW5kIHRpbWUgd2hlbiBgYGBjb3Jkb3ZhIHByZXBhcmVgYGAgd2FzIGV4ZWN1dGVkLnxEYXRlfFxuICAgKlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGJ1aWxkRGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogR2V0IHRoZSBpbnN0YWxsIGRhdGUgYW5kIHRpbWUgaW4gdGhlIERhdGUgb2JqZWN0IHJldHVybnMuXG4gICAqXG4gICAqIEF0dGVudGlvbjpcbiAgICogLSBCcm93c2VyIGFuZCBFbGVjdHJvbjogSW5zdGFsbGF0aW9uIGRhdGUgYW5kIHRpbWUgaXMgdW5rbm93bi5cbiAgICpcbiAgICogfFBsYXRmb3JtfFZhbHVlfFR5cGV8XG4gICAqIHwtLS0tLS0tLXwtLS0tLXwtLS0tfFxuICAgKiB8QW5kcm9pZHxUaGUgZmlyc3RJbnN0YWxsVGltZSBwcm9wZXJ0eSBvZiBQYWNrYWdlSW5mb3xEYXRlfFxuICAgKiB8aU9TfEdldCB0aGUgY3JlYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgZG9jdW1lbnQgZGlyZWN0b3J5LnxEYXRlfFxuICAgKiB8V2luZG93c3xUaGUgaW5zdGFsbGVkRGF0ZSBwcm9wZXJ0eSBvZiBXaW5kb3dzLkFwcGxpY2F0aW5vTW9kZWwuUGFja2FnZS5jdXJyZW50fERhdGV8XG4gICAqIHxtYWNPUyhPUyBYKXxEYXRlIGFuZCB0aW1lIG9mIGtNREl0ZW1EYXRlQWRkZWQgcmVjb3JkZWQgaW4gRmlsZSBNZXRhZGF0YSBvZiBhcHBsaWNhdGlvbiBwYWNrYWdlLnxEYXRlfFxuICAgKiB8QnJvd3NlcnxOb3QgYXZhaWxhYmxlLnxudWxsfFxuICAgKiB8RWxlY3Ryb258Tm90IGF2YWlsYWJsZS58bnVsbHxcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpbnN0YWxsRGF0ZTogRGF0ZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFdpbmRvd3MgT25seS5cbiAgICpcbiAgICogR2V0IHRoZSB3aW5kb3dzIGV4dHJhIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHdpbmRvd3M/OiB7XG4gICAgLyoqXG4gICAgICogaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5jdXJyZW50LmlkLmFyY2hpdGVjdHVyZXxcbiAgICAgKi9cbiAgICBhcmNoaXRlY3R1cmU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5jdXJyZW50LmRlc2NyaXB0aW9ufFxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5kaXNwbGF5TmFtZXxcbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQuZmFtaWx5TmFtZXxcbiAgICAgKi9cbiAgICBmYW1pbHlOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC5mdWxsTmFtZXxcbiAgICAgKi9cbiAgICBmdWxsTmFtZTogc3RyaW5nO1xuICAgIGxvZ286IFdpbmRvd3NMb2dvO1xuICAgIC8qKlxuICAgICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQucHVibGlzaGVyfFxuICAgICAqL1xuICAgIHB1Ymxpc2hlcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQucHVibGlzaGVySWR8XG4gICAgICovXG4gICAgcHVibGlzaGVySWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5jdXJyZW50LnB1Ymxpc2hlckRpc3BsYXlOYW1lfFxuICAgICAqL1xuICAgIHB1Ymxpc2hlckRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC5yZXNvdXJjZUlkfFxuICAgICAqL1xuICAgIHJlc291cmNlSWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5jdXJyZW50LmlkLnZlcnNpb258XG4gICAgICovXG4gICAgdmVyc2lvbjogV2luZG93c1ZlcnNpb25JbmZvO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd3NMb2dvIHtcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmxvZ28uYWJzb2x1dGVDYW5vbmljYWxVcmlcbiAgICovXG4gIGFic29sdXRlQ2Fubm9uaWNhbFVyaTogc3RyaW5nO1xuICAvKipcbiAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UubG9nby5hYnNvbHV0ZVVyaVxuICAgKi9cbiAgYWJzb2x1dGVVcmk6IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmxvZ28uZGlzcGxheUlyaVxuICAgKi9cbiAgZGlzcGxheUlyaTogc3RyaW5nO1xuICAvKipcbiAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UubG9nby5kaXNwbGF5VXJpXG4gICAqL1xuICBkaXNwbGF5VXJpOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5sb2dvLnBhdGhcbiAgICovXG4gIHBhdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmxvZ28ucmF3VXJpXG4gICAqL1xuICByYXdVcmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dzVmVyc2lvbkluZm8ge1xuICAvKipcbiAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC52ZXJzaW9uLm1ham9yXG4gICAqL1xuICBtYWpvcjogbnVtYmVyO1xuICAvKipcbiAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC52ZXJzaW9uLm1pbm9yXG4gICAqL1xuICBtaW5vcjogbnVtYmVyO1xuICAvKipcbiAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC52ZXJzaW9uLmJ1aWxkXG4gICAqL1xuICBidWlsZDogbnVtYmVyO1xuICAvKipcbiAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC52ZXJzaW9uLnJldmlzaW9uXG4gICAqL1xuICByZXZpc2lvbjogbnVtYmVyO1xufVxuIl19