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
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var BuildInfoOriginal = /** @class */ (function (_super) {
    __extends(BuildInfoOriginal, _super);
    function BuildInfoOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BuildInfoOriginal.prototype, "baseUrl", {
        get: function () { return cordovaPropertyGet(this, "baseUrl"); },
        set: function (value) { cordovaPropertySet(this, "baseUrl", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "packageName", {
        get: function () { return cordovaPropertyGet(this, "packageName"); },
        set: function (value) { cordovaPropertySet(this, "packageName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "basePackageName", {
        get: function () { return cordovaPropertyGet(this, "basePackageName"); },
        set: function (value) { cordovaPropertySet(this, "basePackageName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "displayName", {
        get: function () { return cordovaPropertyGet(this, "displayName"); },
        set: function (value) { cordovaPropertySet(this, "displayName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "name", {
        get: function () { return cordovaPropertyGet(this, "name"); },
        set: function (value) { cordovaPropertySet(this, "name", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "versionCode", {
        get: function () { return cordovaPropertyGet(this, "versionCode"); },
        set: function (value) { cordovaPropertySet(this, "versionCode", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "debug", {
        get: function () { return cordovaPropertyGet(this, "debug"); },
        set: function (value) { cordovaPropertySet(this, "debug", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "buildType", {
        get: function () { return cordovaPropertyGet(this, "buildType"); },
        set: function (value) { cordovaPropertySet(this, "buildType", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "flavor", {
        get: function () { return cordovaPropertyGet(this, "flavor"); },
        set: function (value) { cordovaPropertySet(this, "flavor", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "buildDate", {
        get: function () { return cordovaPropertyGet(this, "buildDate"); },
        set: function (value) { cordovaPropertySet(this, "buildDate", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "installDate", {
        get: function () { return cordovaPropertyGet(this, "installDate"); },
        set: function (value) { cordovaPropertySet(this, "installDate", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuildInfoOriginal.prototype, "windows", {
        get: function () { return cordovaPropertyGet(this, "windows"); },
        set: function (value) { cordovaPropertySet(this, "windows", value); },
        enumerable: false,
        configurable: true
    });
    BuildInfoOriginal.pluginName = "BuildInfo";
    BuildInfoOriginal.plugin = "cordova-plugin-buildinfo";
    BuildInfoOriginal.pluginRef = "BuildInfo";
    BuildInfoOriginal.repo = "https://github.com/lynrin/cordova-plugin-buildinfo";
    BuildInfoOriginal.platforms = ["Android", "iOS", "Windows", "macOS", "browser", "Electron"];
    return BuildInfoOriginal;
}(AwesomeCordovaNativePlugin));
var BuildInfo = new BuildInfoOriginal();
export { BuildInfo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnVpbGQtaW5mby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHNFQUF1RCxNQUFNLCtCQUErQixDQUFDOztJQWtDckUsNkJBQTBCOzs7OzBCQUt2RCw4QkFBTzs7Ozs7OzBCQWVQLGtDQUFXOzs7Ozs7MEJBcUJYLHNDQUFlOzs7Ozs7MEJBZWYsa0NBQVc7Ozs7OzswQkFlWCwyQkFBSTs7Ozs7OzBCQWVKLDhCQUFPOzs7Ozs7MEJBZVAsa0NBQVc7Ozs7OzswQkFlWCw0QkFBSzs7Ozs7OzBCQWtCTCxnQ0FBUzs7Ozs7OzBCQWdCVCw2QkFBTTs7Ozs7OzBCQTRCTixnQ0FBUzs7Ozs7OzBCQWtCVCxrQ0FBVzs7Ozs7OzBCQVFYLDhCQUFPOzs7Ozs7Ozs7OztvQkEvT1Q7RUFtQytCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEJ1aWxkIEluZm9cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgYnVpbGQgaW5mb3JtYXRpb24uXG4gKiBAdXNhZ2VcbiAqIGBgYFxuICogaW1wb3J0IHsgQnVpbGRJbmZvIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2J1aWxkLWluZm8vbmd4JztcbiAqXG4gKiB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ0J1aWxkSW5mby5iYXNlVXJsICAgICAgICA9JyArIEJ1aWxkSW5mby5iYXNlVXJsKVxuICogICAgIGNvbnNvbGUubG9nKCdCdWlsZEluZm8ucGFja2FnZU5hbWUgICAgPScgKyBCdWlsZEluZm8ucGFja2FnZU5hbWUpXG4gKiAgICAgY29uc29sZS5sb2coJ0J1aWxkSW5mby5iYXNlUGFja2FnZU5hbWU9JyArIEJ1aWxkSW5mby5iYXNlUGFja2FnZU5hbWUpXG4gKiAgICAgY29uc29sZS5sb2coJ0J1aWxkSW5mby5kaXNwbGF5TmFtZSAgICA9JyArIEJ1aWxkSW5mby5kaXNwbGF5TmFtZSlcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLm5hbWUgICAgICAgICAgID0nICsgQnVpbGRJbmZvLm5hbWUpXG4gKiAgICAgY29uc29sZS5sb2coJ0J1aWxkSW5mby52ZXJzaW9uICAgICAgICA9JyArIEJ1aWxkSW5mby52ZXJzaW9uKVxuICogICAgIGNvbnNvbGUubG9nKCdCdWlsZEluZm8udmVyc2lvbkNvZGUgICAgPScgKyBCdWlsZEluZm8udmVyc2lvbkNvZGUpXG4gKiAgICAgY29uc29sZS5sb2coJ0J1aWxkSW5mby5kZWJ1ZyAgICAgICAgICA9JyArIEJ1aWxkSW5mby5kZWJ1ZylcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmJ1aWxkVHlwZSAgICAgID0nICsgQnVpbGRJbmZvLmJ1aWxkVHlwZSlcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmZsYXZvciAgICAgICAgID0nICsgQnVpbGRJbmZvLmZsYXZvcilcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmJ1aWxkRGF0ZSAgICAgID0nICsgQnVpbGRJbmZvLmJ1aWxkRGF0ZSlcbiAqICAgICBjb25zb2xlLmxvZygnQnVpbGRJbmZvLmluc3RhbGxEYXRlICAgID0nICsgQnVpbGRJbmZvLmluc3RhbGxEYXRlKVxuICogfSlcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0J1aWxkSW5mbycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJ1aWxkaW5mbycsXG4gIHBsdWdpblJlZjogJ0J1aWxkSW5mbycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbHlucmluL2NvcmRvdmEtcGx1Z2luLWJ1aWxkaW5mbycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ21hY09TJywgJ2Jyb3dzZXInLCAnRWxlY3Ryb24nXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnVpbGRJbmZvIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhlIGJhc2VVcmwgd2hlcmUgY29yZG92YS5qcyB3YXMgbG9hZGVkLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGJhc2VVcmw6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSBwYWNrYWdlTmFtZSBvZiBBcHBsaWNhdGlvbiBJRC5cbiAgICpcbiAgICogfFBsYXRmb3JtfFZhbHVlfFR5cGV8XG4gICAqIHwtLS0tLS0tLXwtLS0tLXwtLS0tfFxuICAgKiB8QW5kcm9pZHxQYWNrYWdlIE5hbWV8U3RyaW5nfFxuICAgKiB8aU9TfEJ1bmRsZSBJZGVudGlmaWVyfFN0cmluZ3xcbiAgICogfFdpbmRvd3N8SWRlbnRpdHkgbmFtZXxTdHJpbmd8XG4gICAqIHxtYWNPUyhPUyBYKXxCdW5kbGUgSWRlbnRpZmllcnxTdHJpbmd8XG4gICAqIHxCcm93c2VyfEdldCB0aGUgaWQgYXR0cmlidXRlIG9mIHRoZSB3aWRnZXQgZWxlbWVudCBpbiBjb25maWcueG1sIGZpbGUufFN0cmluZ3xcbiAgICogfEVsZWN0cm9ufEdldCB0aGUgaWQgYXR0cmlidXRlIG9mIHRoZSB3aWRnZXQgZWxlbWVudCBpbiBjb25maWcueG1sIGZpbGUufFN0cmluZ3xcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBwYWNrYWdlTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkIG9ubHkuXG4gICAqXG4gICAqIEdldCB0aGUgcGFja2FnZU5hbWUgb2YgQnVpbGRDb25maWcgY2xhc3MuXG4gICAqXG4gICAqIElmIHlvdSB1c2UgdGhlIGNvbmZpZ3VyZSBvZiBcImJ1aWxkIHR5cGVzXCIgb3IgXCJwcm9kdWN0IGZsYXZvcnNcIiwgYmVjYXVzZSB5b3UgY2FuIHNwZWNpZnkgYSBkaWZmZXJlbnQgcGFja2FnZSBuYW1lIGlzIHRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIHdpZGdldCBlbGVtZW50IG9mIGNvbmZpZy54bWwsIGlzIHRoZSBwcm9wZXJ0eSB0byBnZXQgdGhlIHBhY2thZ2UgbmFtZSB0aGF0IEJ1aWxkQ29uZmlnIGNsYXNzIGJlbG9uZ3MuXG4gICAqIChvdWdodCBiZSB0aGUgc2FtZSBhcyB0aGUgaWQgYXR0cmlidXRlIG9mIHRoZSB3aWRnZXQgZWxlbWVudCBvZiBjb25maWcueG1sKVxuICAgKlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfFBhY2thZ2UgbmFtZSBvZiBCdWlsZENvbmZpZyBjbGFzc3xTdHJpbmd8XG4gICAqIHxpT1N8QnVuZGxlIElkZW50aWZpZXIoZXF1YWxzIEJ1aWxkSW5mby5wYWNrYWdlTmFtZSl8U3RyaW5nfFxuICAgKiB8V2luZG93c3xJZGVudGl0eSBuYW1lKGVxdWFscyBCdWlsZEluZm8ucGFja2FnZU5hbWUpfFN0cmluZ3xcbiAgICogfG1hY09TKE9TIFgpfEJ1bmRsZSBJZGVudGlmaWVyKGVxdWFscyBCdWlsZEluZm8ucGFja2FnZU5hbWUpfFN0cmluZ3xcbiAgICogfEJyb3dzZXJ8ZXF1YWxzIEJ1aWxkSW5mby5wYWNrYWdlTmFtZXxTdHJpbmd8XG4gICAqIHxFbGVjdHJvbnxlcXVhbHMgQnVpbGRJbmZvLnBhY2thZ2VOYW1lfFN0cmluZ3xcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBiYXNlUGFja2FnZU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSBkaXNwbGF5TmFtZS5cbiAgICpcbiAgICogfFBsYXRmb3JtfFZhbHVlfFR5cGV8XG4gICAqIHwtLS0tLS0tLXwtLS0tLXwtLS0tfFxuICAgKiB8QW5kcm9pZHxBcHBsaWNhdGlvbiBMYWJlbHxTdHJpbmd8XG4gICAqIHxpT1N8Q0ZCdW5kbGVEaXNwbGF5TmFtZSAoQ0ZCdW5kbGVOYW1lIGlmIG5vdCBwcmVzZW50KXxTdHJpbmd8XG4gICAqIHxXaW5kb3dzfEdldCB0aGUgRGlzcGxheU5hbWUgYXR0cmlidXRlIG9mIHRoZSBWaXN1YWxFbGVtZW50cyBlbGVtZW50IGluIEFwcHhNYW5pZmVzdC54bWwgZmlsZS58U3RyaW5nfFxuICAgKiB8bWFjT1MoT1MgWCl8Q0ZCdW5kbGVEaXNwbGF5TmFtZSAoQ0ZCdW5kbGVOYW1lIGlmIG5vdCBwcmVzZW50KXxTdHJpbmd8XG4gICAqIHxCcm93c2VyfEdldCB0aGUgc2hvcnQgYXR0cmlidXRlIG9mIHRoZSBuYW1lIGVsZW1lbnQgaW4gY29uZmlnLnhtbCBmaWxlLnxTdHJpbmd8XG4gICAqIHxFbGVjdHJvbnxHZXQgdGhlIHNob3J0IGF0dHJpYnV0ZSBvZiB0aGUgbmFtZSBlbGVtZW50IGluIGNvbmZpZy54bWwgZmlsZS58U3RyaW5nfFxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZS5cbiAgICpcbiAgICogfFBsYXRmb3JtfFZhbHVlfFR5cGV8XG4gICAqIHwtLS0tLS0tLXwtLS0tLXwtLS0tfFxuICAgKiB8QW5kcm9pZHxBcHBsaWNhdGlvbiBMYWJlbChlcXVhbCBCdWlsZEluZm8uZGlzcGxheU5hbWUpfFN0cmluZ3xcbiAgICogfGlPU3xDRkJ1bmRsZU5hbWV8U3RyaW5nfFxuICAgKiB8V2luZG93c3xXaW5kb3dzIFN0b3JlIGRpc3BsYXkgbmFtZXxTdHJpbmd8XG4gICAqIHxtYWNPUyhPUyBYKXxDRkJ1bmRsZU5hbWV8U3RyaW5nfFxuICAgKiB8QnJvd3NlcnxHZXQgdmFsdWUgb2YgdGhlIG5hbWUgZWxlbWVudCBpbiBjb25maWcueG1sIGZpbGUufFN0cmluZ3xcbiAgICogfEVsZWN0cm9ufEdldCB2YWx1ZSBvZiB0aGUgbmFtZSBlbGVtZW50IGluIGNvbmZpZy54bWwgZmlsZS58U3RyaW5nfFxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogR2V0IHRoZSB2ZXJzaW9uLlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfEJ1aWxkQ29uZmlnLlZFUlNJT05fTkFNRXxTdHJpbmd8XG4gICAqIHxpT1N8Q0ZCdW5kbGVTaG9ydFZlcnNpb25TdHJpbmd8U3RyaW5nfFxuICAgKiB8V2luZG93c3xNYWpvci5NaW5vci5CdWlsZCBleCkgXCIxLjIuM1wifFN0cmluZ3xcbiAgICogfG1hY09TKE9TIFgpfENGQnVuZGxlU2hvcnRWZXJzaW9uU3RyaW5nfFN0cmluZ3xcbiAgICogfEJyb3dzZXJ8R2V0IHRoZSB2ZXJzaW9uIGF0dHJpYnV0ZSBvZiB0aGUgd2lkZ2V0IGVsZW1lbnQgaW4gY29uZmlnLnhtbCBmaWxlLnxTdHJpbmd8XG4gICAqIHxFbGVjdHJvbnxHZXQgdGhlIHZlcnNpb24gYXR0cmlidXRlIG9mIHRoZSB3aWRnZXQgZWxlbWVudCBpbiBjb25maWcueG1sIGZpbGUufFN0cmluZ3xcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmVyc2lvbiBjb2RlLlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfEJ1aWxkQ29uZmlnLlZFUlNJT05fQ09ERXxpbnRlZ2VyfFxuICAgKiB8aU9TfENGQnVuZGxlVmVyc2lvbnxTdHJpbmd8XG4gICAqIHxXaW5kb3dzfE1ham9yLk1pbm9yLkJ1aWxkLlJldmlzaW9uIGV4KSBcIjEuMi4zLjRcInxTdHJpbmd8XG4gICAqIHxtYWNPUyhPUyBYKXxDRkJ1bmRsZVZlcnNpb258U3RyaW5nfFxuICAgKiB8QnJvd3NlcnxlcXVhbHMgQnVpbGRJbmZvLnZlcnNpb258U3RyaW5nfFxuICAgKiB8RWxlY3Ryb258ZXF1YWxzIEJ1aWxkSW5mby52ZXJzaW9ufFN0cmluZ3xcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2ZXJzaW9uQ29kZTogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlYnVnIGZsYWcuXG4gICAqXG4gICAqIHxQbGF0Zm9ybXxWYWx1ZXxUeXBlfFxuICAgKiB8LS0tLS0tLS18LS0tLS18LS0tLXxcbiAgICogfEFuZHJvaWR8QnVpbGRDb25maWcuREVCVUd8Qm9vbGVhbnxcbiAgICogfGlPU3xkZWZpbmVkIFwiREVCVUdcIiBpcyB0cnVlfEJvb2xlYW58XG4gICAqIHxXaW5kb3dzfGlzRGV2ZWxvcG1lbnRNb2RlIGlzIHRydWV8Qm9vbGVhbnxcbiAgICogfG1hY09TKE9TIFgpfGRlZmluZWQgXCJERUJVR1wiIGlzIHRydWV8Qm9vbGVhbnxcbiAgICogfEJyb3dzZXJ8QWx3YXlzIGZhbHNlfEJvb2xlYW58XG4gICAqIHxFbGVjdHJvbnxUcnVlIHdoZW4gYGBgY29yZG92YSBidWlsZCBlbGVjdHJvbiAtLWRlYnVnYGBgIGlzIGV4ZWN1dGVkIHdpdGggdGhlIFwiLS1kZWJ1Z1wiIGZsYWcufEJvb2xlYW58XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgZGVidWc6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQgLCBXaW5kb3dzIE9ubHkuXG4gICAqXG4gICAqIEdldCB0aGUgYnVpbGQgdHlwZS5cbiAgICpcbiAgICogfFBsYXRmb3JtfFZhbHVlfFR5cGV8XG4gICAqIHwtLS0tLS0tLXwtLS0tLXwtLS0tfFxuICAgKiB8QW5kcm9pZHxCdWlsZENvbmZpZy5CVUlMRF9UWVBFfFN0cmluZ3xcbiAgICogfGlPU3xlbXB0eSBzdHJpbmd8U3RyaW5nfFxuICAgKiB8V2luZG93c3xcInJlbGVhc2VcIiBvciBcImRlYnVnXCJ8U3RyaW5nfFxuICAgKiB8bWFjT1MoT1MgWCl8ZW1wdHkgc3RyaW5nfFN0cmluZ3xcbiAgICogfEJyb3dzZXJ8ZW1wdHkgc3RyaW5nfFN0cmluZ3xcbiAgICogfEVsZWN0cm9ufGVtcHR5IHN0cmluZ3xTdHJpbmd8XG4gICAqXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgYnVpbGRUeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbmRyb2lkIE9ubHkuXG4gICAqXG4gICAqIEdldCB0aGUgZmxhdm9yLlxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfEJ1aWxkQ29uZmlnLkZMQVZPUnxTdHJpbmd8XG4gICAqIHxpT1N8ZW1wdHkgc3RyaW5nfFN0cmluZ3xcbiAgICogfFdpbmRvd3N8ZW1wdHkgc3RyaW5nfFN0cmluZ3xcbiAgICogfG1hY09TKE9TIFgpfGVtcHR5IHN0cmluZ3xTdHJpbmd8XG4gICAqIHxCcm93c2VyfGVtcHR5IHN0cmluZ3xTdHJpbmd8XG4gICAqIHxFbGVjdHJvbnxlbXB0eSBzdHJpbmd8U3RyaW5nfFxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGZsYXZvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJ1aWxkIGRhdGUgYW5kIHRpbWUgaW4gdGhlIERhdGUgb2JqZWN0IHJldHVybnMuXG4gICAqXG4gICAqIEF0dGVudGlvbjpcbiAgICogLSBBbmRyb2lkOiBBZGQgdGhlIEJ1aWxkSW5mby5ncmFkbGUgZmlsZSB0byB5b3VyIEFuZHJvaWQgcHJvamVjdC5cbiAgICogICBUaGUgQnVpbGRJbmZvLmdyYWRsZSBmaWxlIGNvbnRhaW5zIHRoZSBzZXR0aW5nIHRvIGFkZCB0aGUgX0JVSUxESU5GT19USU1FU1RBTVAgZmllbGQgdG8gdGhlIEJ1aWxkQ29uZmlnIGNsYXNzLlxuICAgKiAtIFdpbmRvd3M6IEFkZCB0aGUgYnVpbGRpbmZvLnJlc2pzb24gZmlsZSB0byB5b3VyIFdpbmRvd3MgcHJvamVjdC5cbiAgICogICBUaGUgYnVpbGRpbmZvLnJlc2pzb24gZmlsZSBpbnRvIHRoZSBcInN0cmluZ3NcIiBmb2xkZXIuXG4gICAqICAgQW5kIGFsc28gYWRkIGEgdGFzayB0byByZXdyaXRlIGJ1aWxkaW5mby5yZXNqc29uIGluIHRoZSBDb3Jkb3ZhQXBwLnByb2ppdGVtcyBmaWxlLlxuICAgKiAtIEJyb3dzZXIgYW5kIEVsZWN0cm9uOiBXaGVuIGBgYGNvcmRvdmEgcHJlcGFyZWBgYCBpcyBleGVjdXRlZCBCdWlsZCBkYXRlIGFuZCB0aW1lIGlzIGVtYmVkZGVkIGluXG4gICAqICAgcGxhdGZvcm1zLyoqYnJvd3NlcioqXFwvd3d3L3BsdWdpbnMvY29yZG92YS1wbHVnaW4tYnVpbGRpbmZvL3NyYy9icm93c2VyL0J1aWxkSW5mb1Byb3h5LmpzIGZpbGUuXG4gICAqICAgKE9yIHBsYXRmb3Jtcy8qKmVsZWN0cm9uKipcXC93d3cvcGx1Z2lucy9jb3Jkb3ZhLXBsdWdpbi1idWlsZGluZm8vc3JjL2Jyb3dzZXIvQnVpbGRJbmZvUHJveHkuanMgZmlsZS4pXG4gICAqICAgYGBgY29yZG92YSBwcmVwYXJlYGBgIGlzIGFsc28gZXhlY3V0ZWQgZm9yIGBgYGNvcmRvdmEgYnVpbGRgYGAsIGBgYGNvcmRvdmEgcnVuYGBgIGFuZCBgYGBjb3Jkb3ZhIHBsYXRmb3JtIGFkZGBgYC5cbiAgICogICAoUmVmZXJlbmNlOiBbSG9va3MgR3VpZGUgLSBBcGFjaGUgQ29yZG92YV0oaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvZG9jcy9lbi85LngvZ3VpZGUvYXBwZGV2L2hvb2tzL2luZGV4Lmh0bWwpKVxuICAgKlxuICAgKiB8UGxhdGZvcm18VmFsdWV8VHlwZXxcbiAgICogfC0tLS0tLS0tfC0tLS0tfC0tLS18XG4gICAqIHxBbmRyb2lkfEJ1aWxkQ29uZmlnLlxcX0JVSUxESU5GT1xcX1RJTUVTVEFNUCB2YWx1ZXxEYXRlfFxuICAgKiB8aU9TfEdldCB0aGUgbW9kaWZpY2F0aW9uIGRhdGUgYW5kIHRpbWUgb2YgdGhlIEluZm8ucGxpc3QgZmlsZSBhY3F1aXJlZCBmcm9tIHRoZSBleGVjdXRpb25QYXRoIHByb3BlcnR5IG9mIHRoZSBtYWluIGJ1bmRsZS58RGF0ZXxcbiAgICogfFdpbmRvd3N8UmVzb3VyY2UgdmFsdWUgb2YgXCIvYnVpbGRpbmZvL1RpbWVzdGFtcFwiIHN0cmluZy58RGF0ZXxcbiAgICogfG1hY09TKE9TIFgpfEdldCB0aGUgbW9kaWZpY2F0aW9uIGRhdGUgYW5kIHRpbWUgb2YgdGhlIGNvbmZpZy54bWwgZmlsZSBhY3F1aXJlZCBmcm9tIHRoZSByZXNvdXJjZSBvZiB0aGUgbWFpbiBidW5kbGUufERhdGV8XG4gICAqIHxCcm93c2VyfFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gYGBgY29yZG92YSBwcmVwYXJlYGBgIHdhcyBleGVjdXRlZC58RGF0ZXxcbiAgICogfEVsZWN0cm9ufFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gYGBgY29yZG92YSBwcmVwYXJlYGBgIHdhcyBleGVjdXRlZC58RGF0ZXxcbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBidWlsZERhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5zdGFsbCBkYXRlIGFuZCB0aW1lIGluIHRoZSBEYXRlIG9iamVjdCByZXR1cm5zLlxuICAgKlxuICAgKiBBdHRlbnRpb246XG4gICAqIC0gQnJvd3NlciBhbmQgRWxlY3Ryb246IEluc3RhbGxhdGlvbiBkYXRlIGFuZCB0aW1lIGlzIHVua25vd24uXG4gICAqXG4gICAqIHxQbGF0Zm9ybXxWYWx1ZXxUeXBlfFxuICAgKiB8LS0tLS0tLS18LS0tLS18LS0tLXxcbiAgICogfEFuZHJvaWR8VGhlIGZpcnN0SW5zdGFsbFRpbWUgcHJvcGVydHkgb2YgUGFja2FnZUluZm98RGF0ZXxcbiAgICogfGlPU3xHZXQgdGhlIGNyZWF0aW9uIGRhdGUgYW5kIHRpbWUgb2YgdGhlIGRvY3VtZW50IGRpcmVjdG9yeS58RGF0ZXxcbiAgICogfFdpbmRvd3N8VGhlIGluc3RhbGxlZERhdGUgcHJvcGVydHkgb2YgV2luZG93cy5BcHBsaWNhdGlub01vZGVsLlBhY2thZ2UuY3VycmVudHxEYXRlfFxuICAgKiB8bWFjT1MoT1MgWCl8RGF0ZSBhbmQgdGltZSBvZiBrTURJdGVtRGF0ZUFkZGVkIHJlY29yZGVkIGluIEZpbGUgTWV0YWRhdGEgb2YgYXBwbGljYXRpb24gcGFja2FnZS58RGF0ZXxcbiAgICogfEJyb3dzZXJ8Tm90IGF2YWlsYWJsZS58bnVsbHxcbiAgICogfEVsZWN0cm9ufE5vdCBhdmFpbGFibGUufG51bGx8XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaW5zdGFsbERhdGU6IERhdGUgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaW5kb3dzIE9ubHkuXG4gICAqXG4gICAqIEdldCB0aGUgd2luZG93cyBleHRyYSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB3aW5kb3dzPzoge1xuICAgIC8qKlxuICAgICAqIGluZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC5hcmNoaXRlY3R1cmV8XG4gICAgICovXG4gICAgYXJjaGl0ZWN0dXJlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5kZXNjcmlwdGlvbnxcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuZGlzcGxheU5hbWV8XG4gICAgICovXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5jdXJyZW50LmlkLmZhbWlseU5hbWV8XG4gICAgICovXG4gICAgZmFtaWx5TmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQuZnVsbE5hbWV8XG4gICAgICovXG4gICAgZnVsbE5hbWU6IHN0cmluZztcbiAgICBsb2dvOiBXaW5kb3dzTG9nbztcbiAgICAvKipcbiAgICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5jdXJyZW50LmlkLnB1Ymxpc2hlcnxcbiAgICAgKi9cbiAgICBwdWJsaXNoZXI6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5jdXJyZW50LmlkLnB1Ymxpc2hlcklkfFxuICAgICAqL1xuICAgIHB1Ymxpc2hlcklkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5wdWJsaXNoZXJEaXNwbGF5TmFtZXxcbiAgICAgKi9cbiAgICBwdWJsaXNoZXJEaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQucmVzb3VyY2VJZHxcbiAgICAgKi9cbiAgICByZXNvdXJjZUlkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UuY3VycmVudC5pZC52ZXJzaW9ufFxuICAgICAqL1xuICAgIHZlcnNpb246IFdpbmRvd3NWZXJzaW9uSW5mbztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dzTG9nbyB7XG4gIC8qKlxuICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5sb2dvLmFic29sdXRlQ2Fub25pY2FsVXJpXG4gICAqL1xuICBhYnNvbHV0ZUNhbm5vbmljYWxVcmk6IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmxvZ28uYWJzb2x1dGVVcmlcbiAgICovXG4gIGFic29sdXRlVXJpOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5sb2dvLmRpc3BsYXlJcmlcbiAgICovXG4gIGRpc3BsYXlJcmk6IHN0cmluZztcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmxvZ28uZGlzcGxheVVyaVxuICAgKi9cbiAgZGlzcGxheVVyaTogc3RyaW5nO1xuICAvKipcbiAgICogV2luZG93cy5BcHBsaWNhdGlvbk1vZGVsLlBhY2thZ2UubG9nby5wYXRoXG4gICAqL1xuICBwYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaW5kb3dzLkFwcGxpY2F0aW9uTW9kZWwuUGFja2FnZS5sb2dvLnJhd1VyaVxuICAgKi9cbiAgcmF3VXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93c1ZlcnNpb25JbmZvIHtcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQudmVyc2lvbi5tYWpvclxuICAgKi9cbiAgbWFqb3I6IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQudmVyc2lvbi5taW5vclxuICAgKi9cbiAgbWlub3I6IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQudmVyc2lvbi5idWlsZFxuICAgKi9cbiAgYnVpbGQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpbmRvd3MuQXBwbGljYXRpb25Nb2RlbC5QYWNrYWdlLmN1cnJlbnQuaWQudmVyc2lvbi5yZXZpc2lvblxuICAgKi9cbiAgcmV2aXNpb246IG51bWJlcjtcbn1cbiJdfQ==