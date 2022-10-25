import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var GaoDeLocation = /** @class */ (function (_super) {
    __extends(GaoDeLocation, _super);
    function GaoDeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GaoDeLocation.prototype.getCurrentPosition = function (positionOptions) { return cordova(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocation.prototype.startSerialLocation = function (positionOptions) { return cordova(this, "startSerialLocation", { "callbackOrder": "reverse", "observable": true }, arguments); };
    GaoDeLocation.prototype.stopSerialLocation = function () { return cordova(this, "stopSerialLocation", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GaoDeLocation, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    GaoDeLocation.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GaoDeLocation });
    GaoDeLocation.pluginName = "GaoDeLocation";
    GaoDeLocation.plugin = "cordova-plugin-gaodelocation-chenyu";
    GaoDeLocation.pluginRef = "GaoDe";
    GaoDeLocation.repo = "https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git";
    GaoDeLocation.install = "ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key";
    GaoDeLocation.installVariables = ["ANDROID_API_KEY", "IOS_API_KEY"];
    GaoDeLocation.platforms = ["Android", "iOS"];
    GaoDeLocation = __decorate([], GaoDeLocation);
    return GaoDeLocation;
}(AwesomeCordovaNativePlugin));
export { GaoDeLocation };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: GaoDeLocation, decorators: [{
            type: Injectable
        }], propDecorators: { getCurrentPosition: [], startSerialLocation: [], stopSerialLocation: [] } });
/**
 * ios positioning accuracy
 * https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
 */
export var DesiredAccuracyEnum;
(function (DesiredAccuracyEnum) {
    /**
     * The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBestForNavigation"] = 1] = "kCLLocationAccuracyBestForNavigation";
    /**
     * The best level of accuracy available.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBest"] = 2] = "kCLLocationAccuracyBest";
    /**
     * Accurate to within ten meters of the desired target.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyNearestTenMeters"] = 3] = "kCLLocationAccuracyNearestTenMeters";
    /**
     * Accurate to within one hundred meters.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyHundredMeters"] = 4] = "kCLLocationAccuracyHundredMeters";
    /**
     * Accurate to the nearest kilometer.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyKilometer"] = 5] = "kCLLocationAccuracyKilometer";
    /**
     * Accurate to the nearest three kilometers.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyThreeKilometers"] = 6] = "kCLLocationAccuracyThreeKilometers";
})(DesiredAccuracyEnum || (DesiredAccuracyEnum = {}));
/**
 * locationModeEnum
 */
export var LocationModeEnum;
(function (LocationModeEnum) {
    LocationModeEnum[LocationModeEnum["Hight_Accuracy"] = 1] = "Hight_Accuracy";
    LocationModeEnum[LocationModeEnum["Battery_Saving"] = 2] = "Battery_Saving";
    LocationModeEnum[LocationModeEnum["Device_Sensors"] = 3] = "Device_Sensors";
})(LocationModeEnum || (LocationModeEnum = {}));
/**
 * locationProtocolEnum
 */
export var LocationProtocolEnum;
(function (LocationProtocolEnum) {
    LocationProtocolEnum[LocationProtocolEnum["HTTP"] = 1] = "HTTP";
    LocationProtocolEnum[LocationProtocolEnum["HTTPS"] = 2] = "HTTPS";
})(LocationProtocolEnum || (LocationProtocolEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2FvLWRlLWxvY2F0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQWdFQyxpQ0FBMEI7Ozs7SUFVM0QsMENBQWtCLGFBQUMsZUFBZ0M7SUFjbkQsMkNBQW1CLGFBQUMsZUFBZ0M7SUFZcEQsMENBQWtCOytHQXBDUCxhQUFhO21IQUFiLGFBQWE7Ozs7Ozs7O0lBQWIsYUFBYSxrQkFBYixhQUFhO3dCQWxFMUI7RUFrRW1DLDBCQUEwQjtTQUFoRCxhQUFhOzRGQUFiLGFBQWE7a0JBRHpCLFVBQVU7OEJBV1Qsa0JBQWtCLE1BY2xCLG1CQUFtQixNQVluQixrQkFBa0I7QUFxR3BCOzs7R0FHRztBQUNILE1BQU0sQ0FBTixJQUFZLG1CQXlCWDtBQXpCRCxXQUFZLG1CQUFtQjtJQUM3Qjs7T0FFRztJQUNILDZIQUF3QyxDQUFBO0lBQ3hDOztPQUVHO0lBQ0gsbUdBQTJCLENBQUE7SUFDM0I7O09BRUc7SUFDSCwySEFBdUMsQ0FBQTtJQUN2Qzs7T0FFRztJQUNILHFIQUFvQyxDQUFBO0lBQ3BDOztPQUVHO0lBQ0gsNkdBQWdDLENBQUE7SUFDaEM7O09BRUc7SUFDSCx5SEFBc0MsQ0FBQTtBQUN4QyxDQUFDLEVBekJXLG1CQUFtQixLQUFuQixtQkFBbUIsUUF5QjlCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxnQkFJWDtBQUpELFdBQVksZ0JBQWdCO0lBQzFCLDJFQUFrQixDQUFBO0lBQ2xCLDJFQUFrQixDQUFBO0lBQ2xCLDJFQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSTNCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxvQkFHWDtBQUhELFdBQVksb0JBQW9CO0lBQzlCLCtEQUFRLENBQUE7SUFDUixpRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFHL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEdhbyBEZSBMb2NhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBCZWNhdXNlIHRoZSBvcmlnaW5hbCBHUFMgcG9zaXRpb25pbmcgdXNlcyBHb29nbGUgQnJvd3NlciBwb3NpdGlvbmluZywgYW5kIEdvb2dsZSB3aXRoZHJhd3MgZnJvbSBDaGluYSwgcmVzdWx0aW5nIGluIEdQUyBBbmRyb2lkIHBvc2l0aW9uaW5nIGNhbiBub3QgYmUgcG9zaXRpb25lZC5cbiAqIEdhb2RlIGxvY2F0aW9uIGNhbiBkaXJlY3RseSByZXR1cm4gYWRkcmVzcyBpbmZvcm1hdGlvbkdhb2RlIGxvY2F0aW9uIGNhbiBkaXJlY3RseSByZXR1cm4gYWRkcmVzcyBpbmZvcm1hdGlvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHYW9EZUxvY2F0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2dhby1kZS1sb2NhdGlvbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhb0RlTG9jYXRpb246IEdhb0RlTG9jYXRpb24pIHsgfVxuICpcbiAqXG4gKiBjb25zdCBwb3NpdGlvbk9wdGlvbnM6IFBvc2l0aW9uT3B0aW9ucyA9IHtcbiAqICAgICBhbmRyb2lkT3B0aW9uOiB7XG4gKiAgICAgIGxvY2F0aW9uTW9kZTogTG9jYXRpb25Nb2RlRW51bS5IaWdodF9BY2N1cmFjeSxcbiAqICAgICAgZ3BzRmlyc3Q6IGZhbHNlLFxuICogICAgICAgSHR0cFRpbWVPdXQ6IDMwMDAwLFxuICogICAgICAgaW50ZXJ2YWw6IDIwMDAsXG4gKiAgICAgICBuZWVkQWRkcmVzczogdHJ1ZSxcbiAqICAgICAgIG9uY2VMb2NhdGlvbjogZmFsc2UsXG4gKiAgICAgICBvbmNlTG9jYXRpb25MYXRlc3Q6IGZhbHNlLFxuICogICAgICAgbG9jYXRpb25Qcm90b2NvbDogTG9jYXRpb25Qcm90b2NvbEVudW0uSFRUUCxcbiAqICAgICAgIHNlbnNvckVuYWJsZTogZmFsc2UsXG4gKiAgICAgICB3aWZpU2NhbjogdHJ1ZSxcbiAqICAgICAgIGxvY2F0aW9uQ2FjaGVFbmFibGU6IHRydWVcbiAqICAgICB9LCBpb3NPcHRpb246IHtcbiAqICAgICAgIGRlc2lyZWRBY2N1cmFjeTogRGVzaXJlZEFjY3VyYWN5RW51bS5rQ0xMb2NhdGlvbkFjY3VyYWN5QmVzdCxcbiAqICAgICAgIHBhdXNlc0xvY2F0aW9uVXBkYXRlc0F1dG9tYXRpY2FsbHk6ICdZRVMnLFxuICogICAgICAgYWxsb3dzQmFja2dyb3VuZExvY2F0aW9uVXBkYXRlczogJ05PJyxcbiAqICAgICAgIGxvY2F0aW9uVGltZW91dDogMTAsXG4gKiAgICAgICByZUdlb2NvZGVUaW1lb3V0OiA1LFxuICogICAgIH1cbiAqICAgfTtcbiAqIGNvbnN0IHBvc2l0aW9uUmVzOiBQb3NpdGlvblJlcyA9IGF3YWl0IHRoaXMuZ2FvRGVMb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb25PcHRpb25zKS5jYXRjaCgoZTogYW55KSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coZSk7XG4gKiAgIH0pIHx8IG51bGw7XG4gKiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwb3NpdGlvblJlcykpO1xuICpcbiAqXG4gKiB0aGlzLmdhb0RlTG9jYXRpb24uc3RhcnRTZXJpYWxMb2NhdGlvbihwb3NpdGlvbk9wdGlvbnMpLnN1YnNjcmliZSgocG9zaXRpb25SZXM6IFBvc2l0aW9uUmVzKSA9PiB7XG4gKiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwb3NpdGlvblJlcykpO1xuICogfSk7XG4gKlxuICogY29uc3QgcG9zaXRpb25SZXM6IGFueSA9IHRoaXMuZ2FvRGVMb2NhdGlvbi5zdG9wU2VyaWFsTG9jYXRpb24oKS5jYXRjaCgoZSkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKGUpO1xuICogICB9KSB8fCBudWxsO1xuICogY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocG9zaXRpb25SZXMpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHYW9EZUxvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2FvZGVsb2NhdGlvbi1jaGVueXUnLFxuICBwbHVnaW5SZWY6ICdHYW9EZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vd2FsaXUvY29yZG92YS1wbHVnaW4tZ2FvZGVsb2NhdGlvbi1jaGVueXUuZ2l0JyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdhb2RlbG9jYXRpb24tY2hlbnl1IC0tdmFyaWFibGUgIEFORFJPSURfQVBJX0tFWT15b3VyIGFuZHJvaWQga2V5IC0tdmFyaWFibGUgIElPU19BUElfS0VZPXlvdXIgaW9zIGtleScsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQU5EUk9JRF9BUElfS0VZJywgJ0lPU19BUElfS0VZJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHYW9EZUxvY2F0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2luZ2xlIGxvY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBwb3NpdGlvbk9wdGlvbnNcbiAgICogQHJldHVybnMgUHJvbWlzZTxQb3NpdGlvblJlcz5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbk9wdGlvbnM6IFBvc2l0aW9uT3B0aW9ucyk6IFByb21pc2U8UG9zaXRpb25SZXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgc2VyaWFsIGxvY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBwb3NpdGlvbk9wdGlvbnNcbiAgICogQHJldHVybnMgUHJvbWlzZTxQb3NpdGlvblJlcz5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgc3RhcnRTZXJpYWxMb2NhdGlvbihwb3NpdGlvbk9wdGlvbnM6IFBvc2l0aW9uT3B0aW9ucyk6IE9ic2VydmFibGU8UG9zaXRpb25SZXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBTZXJpYWwgTG9jYXRpb25cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzdG9wU2VyaWFsTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBMb2NhdGlvbiBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogYW5kcm9pZCBvcHRpb25zXG4gICAqL1xuICBhbmRyb2lkT3B0aW9uOiBBbmRyb2lkT3B0aW9ucztcbiAgLyoqXG4gICAqIGlvcyBvcHRpb25zXG4gICAqL1xuICBpb3NPcHRpb246IElvc09wdGlvbnM7XG59XG5cbi8qKlxuICogYW5kcm9pZCBwb3NpdGlvbmluZyBhY2N1cmFjeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRPcHRpb25zIHtcbiAgLyoqXG4gICAqIGxvY2F0aW9uIG1vZGVcbiAgICovXG4gIGxvY2F0aW9uTW9kZTogTG9jYXRpb25Nb2RlRW51bTtcbiAgLyoqXG4gICAqIGdwcyBmaXJzdFxuICAgKi9cbiAgZ3BzRmlyc3Q6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBIdHRwIHRpbWVPdXRcbiAgICovXG4gIEh0dHBUaW1lT3V0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBpbnRlcnZhbFxuICAgKi9cbiAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wZW4gcmV2ZXJzZSBhZGRyZXNzXG4gICAqL1xuICBuZWVkQWRkcmVzczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9uY2UgbG9jYXRpb25cbiAgICovXG4gIG9uY2VMb2NhdGlvbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIG9uY2UgbG9jYXRpb24gbGF0ZXN0XG4gICAqL1xuICBvbmNlTG9jYXRpb25MYXRlc3Q6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBsb2NhdGlvbiBwcm90b2NvbFxuICAgKi9cbiAgbG9jYXRpb25Qcm90b2NvbDogTG9jYXRpb25Qcm90b2NvbEVudW07XG4gIC8qKlxuICAgKiBzZW5zb3IgZW5hYmxlXG4gICAqL1xuICBzZW5zb3JFbmFibGU6IGJvb2xlYW47XG4gIC8qKlxuICAgKiB3aWZpIHNjYW5cbiAgICovXG4gIHdpZmlTY2FuOiBib29sZWFuO1xuICAvKipcbiAgICogbG9jYXRpb24gY2FjaGUgZW5hYmxlXG4gICAqL1xuICBsb2NhdGlvbkNhY2hlRW5hYmxlOiBib29sZWFuO1xufVxuXG4vKipcbiAqXG4gKiBJT1MgcG9zaXRpb25pbmcgcGFyYW1ldGVyc1xuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJb3NPcHRpb25zIHtcbiAgLyoqXG4gICAqIGRlc2lyZWQgYWNjdXJhY3lcbiAgICovXG4gIGRlc2lyZWRBY2N1cmFjeT86IERlc2lyZWRBY2N1cmFjeUVudW07XG4gIC8qKlxuICAgKiBwYXVzZXMgbG9jYXRpb24gdXBkYXRlcyBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBwYXVzZXNMb2NhdGlvblVwZGF0ZXNBdXRvbWF0aWNhbGx5OiBJb3NCb29sZWFuO1xuICAvKipcbiAgICogYWxsb3dzIGJhY2tncm91bmQgbG9jYXRpb24gdXBkYXRlc1xuICAgKi9cbiAgYWxsb3dzQmFja2dyb3VuZExvY2F0aW9uVXBkYXRlczogSW9zQm9vbGVhbjtcbiAgLyoqXG4gICAqIGxvY2F0aW9uIHRpbWVvdXRcbiAgICovXG4gIGxvY2F0aW9uVGltZW91dDogbnVtYmVyO1xuICAvKipcbiAgICogcmUgZ2VvY29kZSB0aW1lb3V0XG4gICAqL1xuICByZUdlb2NvZGVUaW1lb3V0PzogbnVtYmVyO1xuICAvKipcbiAgICogbG9jYXRpbmcgd2l0aCByZSBnZW9jb2RlXG4gICAqL1xuICBsb2NhdGluZ1dpdGhSZUdlb2NvZGU/OiBJb3NCb29sZWFuO1xufVxuXG4vKipcbiAqIGlvcyBwb3NpdGlvbmluZyBhY2N1cmFjeVxuICogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vY29yZWxvY2F0aW9uL2tjbGxvY2F0aW9uYWNjdXJhY3liZXN0Zm9ybmF2aWdhdGlvblxuICovXG5leHBvcnQgZW51bSBEZXNpcmVkQWNjdXJhY3lFbnVtIHtcbiAgLyoqXG4gICAqIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGFjY3VyYWN5IHRoYXQgdXNlcyBhZGRpdGlvbmFsIHNlbnNvciBkYXRhIHRvIGZhY2lsaXRhdGUgbmF2aWdhdGlvbiBhcHBzLlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeUJlc3RGb3JOYXZpZ2F0aW9uID0gMSxcbiAgLyoqXG4gICAqIFRoZSBiZXN0IGxldmVsIG9mIGFjY3VyYWN5IGF2YWlsYWJsZS5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lCZXN0ID0gMixcbiAgLyoqXG4gICAqIEFjY3VyYXRlIHRvIHdpdGhpbiB0ZW4gbWV0ZXJzIG9mIHRoZSBkZXNpcmVkIHRhcmdldC5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lOZWFyZXN0VGVuTWV0ZXJzID0gMyxcbiAgLyoqXG4gICAqIEFjY3VyYXRlIHRvIHdpdGhpbiBvbmUgaHVuZHJlZCBtZXRlcnMuXG4gICAqL1xuICBrQ0xMb2NhdGlvbkFjY3VyYWN5SHVuZHJlZE1ldGVycyA9IDQsXG4gIC8qKlxuICAgKiBBY2N1cmF0ZSB0byB0aGUgbmVhcmVzdCBraWxvbWV0ZXIuXG4gICAqL1xuICBrQ0xMb2NhdGlvbkFjY3VyYWN5S2lsb21ldGVyID0gNSxcbiAgLyoqXG4gICAqIEFjY3VyYXRlIHRvIHRoZSBuZWFyZXN0IHRocmVlIGtpbG9tZXRlcnMuXG4gICAqL1xuICBrQ0xMb2NhdGlvbkFjY3VyYWN5VGhyZWVLaWxvbWV0ZXJzID0gNixcbn1cblxuLyoqXG4gKiBsb2NhdGlvbk1vZGVFbnVtXG4gKi9cbmV4cG9ydCBlbnVtIExvY2F0aW9uTW9kZUVudW0ge1xuICBIaWdodF9BY2N1cmFjeSA9IDEsXG4gIEJhdHRlcnlfU2F2aW5nID0gMixcbiAgRGV2aWNlX1NlbnNvcnMgPSAzLFxufVxuXG4vKipcbiAqIGxvY2F0aW9uUHJvdG9jb2xFbnVtXG4gKi9cbmV4cG9ydCBlbnVtIExvY2F0aW9uUHJvdG9jb2xFbnVtIHtcbiAgSFRUUCA9IDEsXG4gIEhUVFBTID0gMixcbn1cblxuLyoqXG4gKiBpb3MgYm9vbGVhblxuICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIElvc0Jvb2xlYW4gPSAnWUVTJyB8ICdOTyc7XG5cbi8qKlxuICogUG9zaXRpb25pbmcgcmV0dXJuIHJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uUmVzIHtcbiAgLyoqXG4gICAqIFN0YXR1cyBjb2RlXG4gICAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBsYXRpdHVkZVxuICAgKi9cbiAgbGF0aXR1ZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIGxvbmdpdHVkZVxuICAgKi9cbiAgbG9uZ2l0dWRlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY2N1cmFjeVxuICAgKi9cbiAgYWNjdXJhY3k6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkZHJlc3NcbiAgICovXG4gIGZvcm1hdHRlZEFkZHJlc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIGNvdW50cnlcbiAgICovXG4gIGNvdW50cnk6IHN0cmluZztcbiAgLyoqXG4gICAqIHByb3ZpbmNlXG4gICAqL1xuICBwcm92aW5jZTogc3RyaW5nO1xuICAvKipcbiAgICogY2l0eVxuICAgKi9cbiAgY2l0eTogc3RyaW5nO1xuICAvKipcbiAgICogZGlzdHJpY3RcbiAgICovXG4gIGRpc3RyaWN0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjaXR5Y29kZVxuICAgKi9cbiAgY2l0eWNvZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIGFkY29kZVxuICAgKi9cbiAgYWRjb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdHJlZXRcbiAgICovXG4gIHN0cmVldDogc3RyaW5nO1xuICAvKipcbiAgICogU3RyZWV0IG51bWJlciBpbmZvcm1hdGlvblxuICAgKi9cbiAgbnVtYmVyOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQT0kgbmFtZVxuICAgKi9cbiAgUE9JTmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogQU9JIE5hbWVcbiAgICovXG4gIEFPSU5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIGFsdGl0dWRlXG4gICAqL1xuICBhbHRpdHVkZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHNwZWVkXG4gICAqL1xuICBzcGVlZD86IHN0cmluZztcbiAgLyoqXG4gICAqIGJlYXJpbmdcbiAgICovXG4gIGJlYXJpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBidWlsZGluZyBpZFxuICAgKi9cbiAgYnVpbGRpbmdJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIGZsb29yXG4gICAqL1xuICBmbG9vcj86IHN0cmluZztcbiAgLyoqXG4gICAqIGdwcyBhY2N1cmFjeSBzdGF0dXNcbiAgICovXG4gIGdwc0FjY3VyYWN5U3RhdHVzPzogc3RyaW5nO1xuICAvKipcbiAgICogR2V0IGxvY2F0aW9uIHJlc3VsdCBzb3VyY2VcbiAgICovXG4gIGxvY2F0aW9uVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICAqIExvY2F0aW9uIGRldGFpbFxuICAgKi9cbiAgbG9jYXRpb25EZXRhaWw/OiBzdHJpbmc7XG59XG4iXX0=