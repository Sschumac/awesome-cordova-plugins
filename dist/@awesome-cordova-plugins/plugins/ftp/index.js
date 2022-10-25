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
var FTPOriginal = /** @class */ (function (_super) {
    __extends(FTPOriginal, _super);
    function FTPOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FTPOriginal.prototype.connect = function (hostname, username, password) { return cordova(this, "connect", {}, arguments); };
    FTPOriginal.prototype.ls = function (path) { return cordova(this, "ls", {}, arguments); };
    FTPOriginal.prototype.mkdir = function (path) { return cordova(this, "mkdir", {}, arguments); };
    FTPOriginal.prototype.rmdir = function (path) { return cordova(this, "rmdir", {}, arguments); };
    FTPOriginal.prototype.rm = function (file) { return cordova(this, "rm", {}, arguments); };
    FTPOriginal.prototype.upload = function (localFile, remoteFile) { return cordova(this, "upload", { "observable": true }, arguments); };
    FTPOriginal.prototype.download = function (localFile, remoteFile) { return cordova(this, "download", { "observable": true }, arguments); };
    FTPOriginal.prototype.cancel = function () { return cordova(this, "cancel", {}, arguments); };
    FTPOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    FTPOriginal.pluginName = "FTP";
    FTPOriginal.plugin = "cordova-plugin-ftp";
    FTPOriginal.pluginRef = "cordova.plugin.ftp";
    FTPOriginal.repo = "https://github.com/xfally/cordova-plugin-ftp";
    FTPOriginal.platforms = ["Android", "iOS"];
    return FTPOriginal;
}(AwesomeCordovaNativePlugin));
var FTP = new FTPOriginal();
export { FTP };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZnRwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE4QlQsdUJBQTBCOzs7O0lBWWpELHFCQUFPLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFFBQWdCO0lBbUI1RCxnQkFBRSxhQUFDLElBQVk7SUFXZixtQkFBSyxhQUFDLElBQVk7SUFhbEIsbUJBQUssYUFBQyxJQUFZO0lBV2xCLGdCQUFFLGFBQUMsSUFBWTtJQWdCZixvQkFBTSxhQUFDLFNBQWlCLEVBQUUsVUFBa0I7SUFnQjVDLHNCQUFRLGFBQUMsU0FBaUIsRUFBRSxVQUFrQjtJQVU5QyxvQkFBTTtJQVVOLHdCQUFVOzs7Ozs7Y0F0Slo7RUFnQ3lCLDBCQUEwQjtTQUF0QyxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBGVFBcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBjb3Jkb3ZhIHBsdWdpbiBpcyBjcmVhdGVkIHRvIHVzZSBmdHAgKGNsaWVudCkgaW4gd2ViL2pzLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGVFAgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZnRwL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZlRQOiBGVFApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZUUC5jb25uZWN0KCdmdHBfaG9zdCcsICdmdHBfdXNlcicsICdmdHBfcGFzc3dvcmQnKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsJywgcmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRlRQJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZnRwJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW4uZnRwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZmFsbHkvY29yZG92YS1wbHVnaW4tZnRwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZUUCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbm5lY3QgdG8gb25lIGZ0cCBzZXJ2ZXIuXG4gICAqXG4gICAqIEp1c3QgbmVlZCB0byBpbml0IHRoZSBjb25uZWN0aW9uIG9uY2UuIElmIHN1Y2Nlc3MsIHlvdSBjYW4gZG8gYW55IGZ0cCBhY3Rpb25zIGxhdGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdG5hbWUgVGhlIGZ0cCBzZXJ2ZXIgdXJsLiBMaWtlIGlwIHdpdGhvdXQgcHJvdG9jb2wgcHJlZml4LCBlLmcuIFwiMTkyLjE2OC4xLjFcIi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIFRoZSBmdHAgbG9naW4gdXNlcm5hbWUuIElmIGl0IGFuZCBgcGFzc3dvcmRgIGFyZSBhbGwgYmxhbmsvdW5kZWZpbmVkLCB0aGUgZGVmYXVsdCB1c2VybmFtZSBcImFub255bW91c1wiIGlzIHVzZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCBUaGUgZnRwIGxvZ2luIHBhc3N3b3JkLiBJZiBpdCBhbmQgYHVzZXJuYW1lYCBhcmUgYWxsIGJsYW5rL3VuZGVmaW5lZCwgdGhlIGRlZmF1bHQgcGFzc3dvcmQgXCJhbm9ueW1vdXNAXCIgaXMgdXNlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gVGhlIHN1Y2Nlc3MgY2FsbGJhY2suIE5vdGljZTogRm9yIGlPUywgaWYgdHJpZ2dlcmVkLCBtZWFucyBgaW5pdGAgc3VjY2VzcywgYnV0IE5PVCBtZWFucyB0aGUgbGF0ZXIgYWN0aW9uLCBlLmcuIGBsc2AuLi4gYGRvd25sb2FkYCB3aWxsIHN1Y2Nlc3MhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvbm5lY3QoaG9zdG5hbWU6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgZmlsZXMgKHdpdGggaW5mbyBvZiBgbmFtZWAsIGB0eXBlYCwgYGxpbmtgLCBgc2l6ZWAsIGBtb2RpZmllZERhdGVgKSB1bmRlciBvbmUgZGlyZWN0b3J5IG9uIHRoZSBmdHAgc2VydmVyLlxuICAgKiBZb3UgY2FuIGdldCBvbmUgZmlsZSdzIG5hbWUgdXNpbmcgYGZpbGVMaXN0W3hdLm5hbWVgIChgeGAgaXMgdGhlIGxvY2F0aW9uIGluIGFycmF5KS5cbiAgICpcbiAgICogRXhwbGFpbiBrZXk6XG4gICAqIC0gbmFtZTogZmlsZSBuYW1lICh1dGYtOCkuXG4gICAqIC0gdHlwZTogZmlsZSB0eXBlLiBudW1iZXIgYDBgIG1lYW5zIHJlZ3VsYXIgZmlsZSwgYDFgIG1lYW5zIGRpcmVjdG9yeSwgYDJgIG1lYW5zIHN5bWJvbGljIGxpbmssIGAtMWAgbWVhbnMgdW5rbm93biB0eXBlIChtYXliZSBibG9jayBkZXYsIGNoYXIgZGV2Li4uKS5cbiAgICogLSBsaW5rOiBpZiB0aGUgZmlsZSBpcyBhIHN5bWJvbGljIGxpbmssIHRoZW4gdGhpcyBmaWVsZCBzdG9yZSBzeW1ib2xpYyBsaW5rIGluZm9ybWF0aW9uICh1dGYtOCksIGVsc2UgaXQncyBhIGJsYW5rIHN0cmluZy5cbiAgICogLSBzaXplOiBmaWxlIHNpemUgaW4gYnl0ZXMuXG4gICAqIC0gbW9kaWZpZWREYXRlOiBtb2RpZmllZCBkYXRlIG9mIHRoaXMgZmlsZS4gZGF0ZSBmb3JtYXQgaXMgYHl5eXktTU0tZGQgSEg6bW06c3Mgenp6YCwgZS5nIFwiMjAxNS0xMi0wMSAyMDo0NTowMCBHTVQrOFwiLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvbiB0aGUgZnRwIHNlcnZlci4gZS5nLiBcIi9hZGYvMTIzL1wiLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBscyhwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb25lIGRpcmVjdG9yeSBvbiB0aGUgZnRwIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb24gdGhlIGZ0cCBzZXJ2ZXIuIGUuZy4gXCIvYWRmLzEyMy9cIi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWtkaXIocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIG9uZSBkaXJlY3Rvcnkgb24gdGhlIGZ0cCBzZXJ2ZXIuXG4gICAqXG4gICAqIFRpcDogQXMgbWFueSBmdHAgc2VydmVyIGNvdWxkIG5vdCBybSBkaXIgd2hlbiBpdCdzIG5vdCBlbXB0eSwgc28gcm0gYWxsIGZpbGVzIHVuZGVyIHRoZSBkaXIgYXQgZmlyc3QgaXMgcmVjb21tZW5kZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBmaWxlICh3aXRoIGZ1bGwgcGF0aCkgeW91IHdhbnQgdG8gZGVsZXRlLiBlLmcuIFwiL2FkZi8xMjMvbmV3RGlyL215RmlsZVwiLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBybWRpcihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgb25lIGZpbGUgb24gdGhlIGZ0cCBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBmaWxlICh3aXRoIGZ1bGwgcGF0aCkgeW91IHdhbnQgdG8gZGVsZXRlLiBlLmcuIFwiL2FkZi8xMjMvbmV3RGlyL215RmlsZVwiLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBybShmaWxlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWQgb25lIGxvY2FsIGZpbGUgdG8gdGhlIGZ0cCBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbEZpbGUgVGhlIGZpbGUgKHdpdGggZnVsbCBwYXRoKSB5b3Ugd2FudCB0byB1cGxvYWQuIGUuZy4gXCIvbG9jYWwvcGF0aC90by9sb2NhbEZpbGVcIi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUZpbGUgVGhlIGZpbGUgKHdpdGggZnVsbCBwYXRoKSB5b3Ugd2FudCB0byBsb2NhdGVkIG9uIHRoZSBmdHAgc2VydmVyLiBlLmcuIFwiL2FkZi8xMjMvbmV3RGlyL3JlbW90ZUZpbGVcIi5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIEl0IHdpbGwgYmUgdHJpZ2dlcmVkIG1hbnkgdGltZXMgYWNjb3JkaW5nIHRoZSBmaWxlJ3Mgc2l6ZS5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICBUaGUgYXJnIGAwYCwgYDAuMXh4YCwgYDAuMnh4YCAuLi4gYDFgIG1lYW5zIHRoZSB1cGxvYWQgcGVyY2VudC4gV2hlbiBpdCByZWFjaCBgMWAsIG1lYW5zIHN1Y2Nlc3MuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgdXBsb2FkKGxvY2FsRmlsZTogc3RyaW5nLCByZW1vdGVGaWxlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZCBvbmUgcmVtb3RlIGZpbGUgb24gdGhlIGZ0cCBzZXJ2ZXIgdG8gbG9jYWwgcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsRmlsZSBUaGUgZmlsZSAod2l0aCBmdWxsIHBhdGgpIHlvdSB3YW50IHRvIHVwbG9hZC4gZS5nLiBcIi9sb2NhbC9wYXRoL3RvL2xvY2FsRmlsZVwiLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlRmlsZSBUaGUgZmlsZSAod2l0aCBmdWxsIHBhdGgpIHlvdSB3YW50IHRvIGxvY2F0ZWQgb24gdGhlIGZ0cCBzZXJ2ZXIuIGUuZy4gXCIvYWRmLzEyMy9uZXdEaXIvcmVtb3RlRmlsZVwiLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgSXQgd2lsbCBiZSB0cmlnZ2VyZWQgbWFueSB0aW1lcyBhY2NvcmRpbmcgdGhlIGZpbGUncyBzaXplLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBhcmcgYDBgLCBgMC4xeHhgLCBgMC4yeHhgIC4uLiBgMWAgbWVhbnMgdGhlIHVwbG9hZCBwZXJjZW50LiBXaGVuIGl0IHJlYWNoIGAxYCwgbWVhbnMgc3VjY2Vzcy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBkb3dubG9hZChsb2NhbEZpbGU6IHN0cmluZywgcmVtb3RlRmlsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGFsbCByZXF1ZXN0cy4gQWx3YXlzIHN1Y2Nlc3MuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbmNlbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IGZyb20gZnRwIHNlcnZlci5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19