import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Anyline = /** @class */ (function (_super) {
    __extends(Anyline, _super);
    function Anyline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anyline.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    Anyline.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Anyline, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Anyline.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Anyline });
    Anyline.pluginName = "Anyline";
    Anyline.plugin = "io-anyline-cordova";
    Anyline.pluginRef = "Anyline";
    Anyline.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    Anyline.platforms = ["Android", "iOS"];
    Anyline = __decorate([], Anyline);
    return Anyline;
}(AwesomeCordovaNativePlugin));
export { Anyline };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Anyline, decorators: [{
            type: Injectable
        }], propDecorators: { scan: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW55bGluZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBc0MvRCwyQkFBMEI7Ozs7SUFRckQsc0JBQUksYUFBQyxPQUF1Qjt5R0FSakIsT0FBTzs2R0FBUCxPQUFPOzs7Ozs7SUFBUCxPQUFPLGtCQUFQLE9BQU87a0JBdkNwQjtFQXVDNkIsMEJBQTBCO1NBQTFDLE9BQU87NEZBQVAsT0FBTztrQkFEbkIsVUFBVTs4QkFTVCxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbnlsaW5lT3B0aW9ucyB7XG4gIC8vIFZhbGlkIExpY2Vuc2UgS2V5XG4gIGxpY2Vuc2VLZXk6IHN0cmluZztcblxuICAvLyBTY2FubmluZyBvcHRpb25zXG4gIGNvbmZpZzogYW55O1xufVxuXG4vKipcbiAqIEBuYW1lIEFueWxpbmVcbiAqIEBkZXNjcmlwdGlvblxuICogQW55bGluZSBwcm92aWRlcyBhbiBlYXN5LXRvLXVzZSBTREsgZm9yIGFwcGxpY2F0aW9ucyB0byBlbmFibGUgT3B0aWNhbCBDaGFyYWN0ZXIgUmVjb2duaXRpb24gKE9DUikgb24gbW9iaWxlIGRldmljZXMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFueWxpbmUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW55bGluZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFueWxpbmU6IEFueWxpbmUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFueWxpbmUuc2NhbihvcHRpb25zKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FueWxpbmUnLFxuICBwbHVnaW46ICdpby1hbnlsaW5lLWNvcmRvdmEnLFxuICBwbHVnaW5SZWY6ICdBbnlsaW5lJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbnlsaW5lL2FueWxpbmUtb2NyLWNvcmRvdmEtbW9kdWxlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFueWxpbmUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTY2FuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtBbnlsaW5lT3B0aW9uc30gU2Nhbm5pbmcgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gQ29kZSBpcyBjYXB0dXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzY2FuKG9wdGlvbnM6IEFueWxpbmVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==