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
var BLEOriginal = /** @class */ (function (_super) {
    __extends(BLEOriginal, _super);
    function BLEOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BLEOriginal.prototype.scan = function (services, seconds) { return cordova(this, "scan", { "observable": true }, arguments); };
    BLEOriginal.prototype.startScan = function (services) { return cordova(this, "startScan", { "observable": true, "clearFunction": "stopScan", "clearWithArgs": false }, arguments); };
    BLEOriginal.prototype.startScanWithOptions = function (services, options) { return cordova(this, "startScanWithOptions", { "observable": true, "clearFunction": "stopScan", "clearWithArgs": false }, arguments); };
    BLEOriginal.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
    BLEOriginal.prototype.setPin = function (pin) { return cordova(this, "setPin", { "observable": true }, arguments); };
    BLEOriginal.prototype.connect = function (deviceId) { return cordova(this, "connect", { "observable": true, "clearFunction": "disconnect", "clearWithArgs": true }, arguments); };
    BLEOriginal.prototype.autoConnect = function (deviceId, connectCallback, disconnectCallback) { return cordova(this, "autoConnect", { "sync": true }, arguments); };
    BLEOriginal.prototype.requestMtu = function (deviceId, mtuSize) { return cordova(this, "requestMtu", {}, arguments); };
    BLEOriginal.prototype.refreshDeviceCache = function (deviceId, timeoutMillis) { return cordova(this, "refreshDeviceCache", {}, arguments); };
    BLEOriginal.prototype.disconnect = function (deviceId) { return cordova(this, "disconnect", {}, arguments); };
    BLEOriginal.prototype.read = function (deviceId, serviceUUID, characteristicUUID) { return cordova(this, "read", {}, arguments); };
    BLEOriginal.prototype.write = function (deviceId, serviceUUID, characteristicUUID, value) { return cordova(this, "write", {}, arguments); };
    BLEOriginal.prototype.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) { return cordova(this, "writeWithoutResponse", {}, arguments); };
    BLEOriginal.prototype.startNotification = function (deviceId, serviceUUID, characteristicUUID) { return cordova(this, "startNotification", { "observable": true, "destruct": true, "clearFunction": "stopNotification", "clearWithArgs": true }, arguments); };
    BLEOriginal.prototype.stopNotification = function (deviceId, serviceUUID, characteristicUUID) { return cordova(this, "stopNotification", {}, arguments); };
    BLEOriginal.prototype.isConnected = function (deviceId) { return cordova(this, "isConnected", {}, arguments); };
    BLEOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    BLEOriginal.prototype.startStateNotifications = function () { return cordova(this, "startStateNotifications", { "observable": true, "clearFunction": "stopStateNotifications", "clearWithArgs": false }, arguments); };
    BLEOriginal.prototype.stopStateNotifications = function () { return cordova(this, "stopStateNotifications", {}, arguments); };
    BLEOriginal.prototype.startLocationStateNotifications = function () { return cordova(this, "startLocationStateNotifications", { "observable": true, "clearFunction": "stopLocationStateNotifications", "clearWithArgs": false }, arguments); };
    BLEOriginal.prototype.stopLocationStateNotifications = function () { return cordova(this, "stopLocationStateNotifications", {}, arguments); };
    BLEOriginal.prototype.showBluetoothSettings = function () { return cordova(this, "showBluetoothSettings", {}, arguments); };
    BLEOriginal.prototype.enable = function () { return cordova(this, "enable", {}, arguments); };
    BLEOriginal.prototype.readRSSI = function (deviceId) { return cordova(this, "readRSSI", {}, arguments); };
    BLEOriginal.prototype.connectedPeripheralsWithServices = function (services) { return cordova(this, "connectedPeripheralsWithServices", {}, arguments); };
    BLEOriginal.prototype.peripheralsWithIdentifiers = function (uuids) { return cordova(this, "peripheralsWithIdentifiers", {}, arguments); };
    BLEOriginal.prototype.bondedDevices = function () { return cordova(this, "bondedDevices", {}, arguments); };
    BLEOriginal.prototype.isLocationEnabled = function () { return cordova(this, "isLocationEnabled", {}, arguments); };
    BLEOriginal.pluginName = "BLE";
    BLEOriginal.plugin = "cordova-plugin-ble-central";
    BLEOriginal.pluginRef = "ble";
    BLEOriginal.repo = "https://github.com/don/cordova-plugin-ble-central";
    BLEOriginal.platforms = ["Android", "iOS"];
    return BLEOriginal;
}(AwesomeCordovaNativePlugin));
var BLE = new BLEOriginal();
export { BLE };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFxTFQsdUJBQTBCOzs7O0lBaUJqRCxrQkFBSSxhQUFDLFFBQWtCLEVBQUUsT0FBZTtJQXlCeEMsdUJBQVMsYUFBQyxRQUFrQjtJQWdCNUIsa0NBQW9CLGFBQUMsUUFBa0IsRUFBRSxPQUF1QjtJQW1CaEUsc0JBQVE7SUFzQlIsb0JBQU0sYUFBQyxHQUFXO0lBd0JsQixxQkFBTyxhQUFDLFFBQWdCO0lBZ0N4Qix5QkFBVyxhQUFDLFFBQWdCLEVBQUUsZUFBb0IsRUFBRSxrQkFBdUI7SUFxQjNFLHdCQUFVLGFBQUMsUUFBZ0IsRUFBRSxPQUFlO0lBdUI1QyxnQ0FBa0IsYUFBQyxRQUFnQixFQUFFLGFBQXFCO0lBaUIxRCx3QkFBVSxhQUFDLFFBQWdCO0lBYTNCLGtCQUFJLGFBQUMsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLGtCQUEwQjtJQWtDdEUsbUJBQUssYUFBQyxRQUFnQixFQUFFLFdBQW1CLEVBQUUsa0JBQTBCLEVBQUUsS0FBa0I7SUFjM0Ysa0NBQW9CLGFBQ2xCLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLGtCQUEwQixFQUMxQixLQUFrQjtJQTJCcEIsK0JBQWlCLGFBQUMsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLGtCQUEwQjtJQWFuRiw4QkFBZ0IsYUFBQyxRQUFnQixFQUFFLFdBQW1CLEVBQUUsa0JBQTBCO0lBa0JsRix5QkFBVyxhQUFDLFFBQWdCO0lBVTVCLHVCQUFTO0lBb0JULHFDQUF1QjtJQVV2QixvQ0FBc0I7SUFxQnRCLDZDQUErQjtJQVUvQiw0Q0FBOEI7SUFVOUIsbUNBQXFCO0lBVXJCLG9CQUFNO0lBV04sc0JBQVEsYUFBQyxRQUFnQjtJQWF6Qiw4Q0FBZ0MsYUFBQyxRQUFrQjtJQVluRCx3Q0FBMEIsYUFBQyxLQUFlO0lBVzFDLDJCQUFhO0lBV2IsK0JBQWlCOzs7Ozs7Y0EvcEJuQjtFQXVMeUIsMEJBQTBCO1NBQXRDLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJMRVNjYW5PcHRpb25zIHtcbiAgLyoqIHRydWUgaWYgZHVwbGljYXRlIGRldmljZXMgc2hvdWxkIGJlIHJlcG9ydGVkLCBmYWxzZSAoZGVmYXVsdCkgaWYgZGV2aWNlcyBzaG91bGQgb25seSBiZSByZXBvcnRlZCBvbmNlLiAgKi9cbiAgcmVwb3J0RHVwbGljYXRlcz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQkxFXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGVuYWJsZXMgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGEgcGhvbmUgYW5kIEJsdWV0b290aCBMb3cgRW5lcmd5IChCTEUpIHBlcmlwaGVyYWxzLlxuICpcbiAqIFRoZSBwbHVnaW4gcHJvdmlkZXMgYSBzaW1wbGUgSmF2YVNjcmlwdCBBUEkgZm9yIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiAtIFNjYW4gZm9yIHBlcmlwaGVyYWxzXG4gKiAtIENvbm5lY3QgdG8gYSBwZXJpcGhlcmFsXG4gKiAtIFJlYWQgdGhlIHZhbHVlIG9mIGEgY2hhcmFjdGVyaXN0aWNcbiAqIC0gV3JpdGUgbmV3IHZhbHVlIHRvIGEgY2hhcmFjdGVyaXN0aWNcbiAqIC0gR2V0IG5vdGlmaWVkIHdoZW4gY2hhcmFjdGVyaXN0aWMncyB2YWx1ZSBjaGFuZ2VzXG4gKlxuICogQWR2ZXJ0aXNpbmcgaW5mb3JtYXRpb24gaXMgcmV0dXJuZWQgd2hlbiBzY2FubmluZyBmb3IgcGVyaXBoZXJhbHMuIFNlcnZpY2UsIGNoYXJhY3RlcmlzdGljLCBhbmQgcHJvcGVydHkgaW5mbyBpcyByZXR1cm5lZCB3aGVuIGNvbm5lY3RpbmcgdG8gYSBwZXJpcGhlcmFsLiBBbGwgYWNjZXNzIGlzIHZpYSBzZXJ2aWNlIGFuZCBjaGFyYWN0ZXJpc3RpYyBVVUlEcy4gVGhlIHBsdWdpbiBtYW5hZ2VzIGhhbmRsZXMgaW50ZXJuYWxseS5cbiAqXG4gKiBTaW11bHRhbmVvdXMgY29ubmVjdGlvbnMgdG8gbXVsdGlwbGUgcGVyaXBoZXJhbHMgYXJlIHN1cHBvcnRlZC5cbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqXG4gKiBpbXBvcnQgeyBCTEUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmxlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibGU6IEJMRSkgeyB9XG4gKlxuICogYGBgXG4gKlxuICogIyMgUGVyaXBoZXJhbCBEYXRhXG4gKlxuICogUGVyaXBoZXJhbCBEYXRhIGlzIHBhc3NlZCB0byB0aGUgc3VjY2VzcyBjYWxsYmFjayB3aGVuIHNjYW5uaW5nIGFuZCBjb25uZWN0aW5nLiBMaW1pdGVkIGRhdGEgaXMgcGFzc2VkIHdoZW4gc2Nhbm5pbmcuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogICB7XG4gKiAgICAgICAnbmFtZSc6ICdCYXR0ZXJ5IERlbW8nLFxuICogICAgICAgJ2lkJzogJzIwOkZGOkQwOkZGOkQxOkMwJyxcbiAqICAgICAgICdhZHZlcnRpc2luZyc6IFsyLDEsNiwzLDMsMTUsMjQsOCw5LDY2LDk3LDExNiwxMTYsMTAxLDExNCwxMjFdLFxuICogICAgICAgJ3Jzc2knOiAtNTVcbiAqICAgfVxuICogYGBgXG4gKiBBZnRlciBjb25uZWN0aW5nLCB0aGUgcGVyaXBoZXJhbCBvYmplY3QgYWxzbyBpbmNsdWRlcyBzZXJ2aWNlLCBjaGFyYWN0ZXJpc3RpYyBhbmQgZGVzY3JpcHRvciBpbmZvcm1hdGlvbi5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIHtcbiAqICAgICAgICduYW1lJzogJ0JhdHRlcnkgRGVtbycsXG4gKiAgICAgICAnaWQnOiAnMjA6RkY6RDA6RkY6RDE6QzAnLFxuICogICAgICAgJ2FkdmVydGlzaW5nJzogWzIsMSw2LDMsMywxNSwyNCw4LDksNjYsOTcsMTE2LDExNiwxMDEsMTE0LDEyMV0sXG4gKiAgICAgICAncnNzaSc6IC01NSxcbiAqICAgICAgICdzZXJ2aWNlcyc6IFtcbiAqICAgICAgICAgICAnMTgwMCcsXG4gKiAgICAgICAgICAgJzE4MDEnLFxuICogICAgICAgICAgICcxODBmJ1xuICogICAgICAgXSxcbiAqICAgICAgICdjaGFyYWN0ZXJpc3RpY3MnOiBbXG4gKiAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAnc2VydmljZSc6ICcxODAwJyxcbiAqICAgICAgICAgICAgICAgJ2NoYXJhY3RlcmlzdGljJzogJzJhMDAnLFxuICogICAgICAgICAgICAgICAncHJvcGVydGllcyc6IFtcbiAqICAgICAgICAgICAgICAgICAgICdSZWFkJ1xuICogICAgICAgICAgICAgICBdXG4gKiAgICAgICAgICAgfSxcbiAqICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICdzZXJ2aWNlJzogJzE4MDAnLFxuICogICAgICAgICAgICAgICAnY2hhcmFjdGVyaXN0aWMnOiAnMmEwMScsXG4gKiAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzJzogW1xuICogICAgICAgICAgICAgICAgICAgJ1JlYWQnXG4gKiAgICAgICAgICAgICAgIF1cbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgJ3NlcnZpY2UnOiAnMTgwMScsXG4gKiAgICAgICAgICAgICAgICdjaGFyYWN0ZXJpc3RpYyc6ICcyYTA1JyxcbiAqICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMnOiBbXG4gKiAgICAgICAgICAgICAgICAgICAnUmVhZCdcbiAqICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAnc2VydmljZSc6ICcxODBmJyxcbiAqICAgICAgICAgICAgICAgJ2NoYXJhY3RlcmlzdGljJzogJzJhMTknLFxuICogICAgICAgICAgICAgICAncHJvcGVydGllcyc6IFtcbiAqICAgICAgICAgICAgICAgICAgICdSZWFkJ1xuICogICAgICAgICAgICAgICBdLFxuICogICAgICAgICAgICAgICAnZGVzY3JpcHRvcnMnOiBbXG4gKiAgICAgICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgJ3V1aWQnOiAnMjkwMSdcbiAqICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgJ3V1aWQnOiAnMjkwNCdcbiAqICAgICAgICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgIH1cbiAqICAgICAgIF1cbiAqICAgfVxuICogYGBgXG4gKlxuICogIyMgQWR2ZXJ0aXNpbmcgRGF0YVxuICogQmx1ZXRvb3RoIGFkdmVydGlzaW5nIGRhdGEgaXMgcmV0dXJuZWQgaW4gd2hlbiBzY2FubmluZyBmb3IgZGV2aWNlcy4gVGhlIGZvcm1hdCB2YXJpZXMgZGVwZW5kaW5nIG9uIHlvdXIgcGxhdGZvcm0uIE9uIEFuZHJvaWQgYWR2ZXJ0aXNpbmcgZGF0YSB3aWxsIGJlIHRoZSByYXcgYWR2ZXJ0aXNpbmcgYnl0ZXMuIGlPUyBkb2VzIG5vdCBhbGxvdyBhY2Nlc3MgdG8gcmF3IGFkdmVydGlzaW5nIGRhdGEsIHNvIGEgZGljdGlvbmFyeSBvZiBkYXRhIGlzIHJldHVybmVkLlxuICpcbiAqIFRoZSBhZHZlcnRpc2luZyBpbmZvcm1hdGlvbiBmb3IgYm90aCBBbmRyb2lkIGFuZCBpT1MgYXBwZWFycyB0byBiZSBhIGNvbWJpbmF0aW9uIG9mIGFkdmVydGlzaW5nIGRhdGEgYW5kIHNjYW4gcmVzcG9uc2UgZGF0YS5cbiAqXG4gKiAjIyMgQW5kcm9pZFxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAge1xuICogICAgICAgJ25hbWUnOiAnZGVtbycsXG4gKiAgICAgICAnaWQnOiAnMDA6MUE6N0Q6REE6NzE6MTMnLFxuICogICAgICAgJ2FkdmVydGlzaW5nJzogQXJyYXlCdWZmZXIsXG4gKiAgICAgICdyc3NpJzogLTM3XG4gKiAgfVxuICogYGBgXG4gKlxuICogQ29udmVydCB0aGUgYWR2ZXJ0aXNpbmcgaW5mbyB0byBhIFVpbnQ4QXJyYXkgZm9yIHByb2Nlc3NpbmcuIGB2YXIgYWREYXRhID0gbmV3IFVpbnQ4QXJyYXkocGVyaXBoZXJhbC5hZHZlcnRpc2luZylgXG4gKlxuICogIyMjIGlPU1xuICpcbiAqIE5vdGUgdGhhdCBpT1MgdXNlcyB0aGUgc3RyaW5nIHZhbHVlIG9mIHRoZSBjb25zdGFudHMgZm9yIHRoZSBbQWR2ZXJ0aXNlbWVudCBEYXRhIFJldHJpZXZhbCBLZXlzXShodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9pb3MvZG9jdW1lbnRhdGlvbi9Db3JlQmx1ZXRvb3RoL1JlZmVyZW5jZS9DQkNlbnRyYWxNYW5hZ2VyRGVsZWdhdGVfUHJvdG9jb2wvaW5kZXguaHRtbCMvL2FwcGxlX3JlZi9kb2MvY29uc3RhbnRfZ3JvdXAvQWR2ZXJ0aXNlbWVudF9EYXRhX1JldHJpZXZhbF9LZXlzKS4gVGhpcyB3aWxsIGxpa2VseSBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIHtcbiAqICAgICAgICduYW1lJzogJ2RlbW8nLFxuICogICAgICAgJ2lkJzogJ0Q4NDc5QTRGLTc1MTctQkNEMy05MUI1LTMzMDJCMkY4MTgwMicsXG4gKiAgICAgICAnYWR2ZXJ0aXNpbmcnOiB7XG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFDaGFubmVsJzogMzcsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFTZXJ2aWNlRGF0YSc6IHtcbiAqICAgICAgICAgICAgICAgJ0ZFRDgnOiB7XG4gKiAgICAgICAgICAgICAgICAgICAnYnl0ZUxlbmd0aCc6IDcgLy8gZGF0YSBub3Qgc2hvd25cbiAqICAgICAgICAgICAgICAgfVxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFMb2NhbE5hbWUnOiAnZGVtbycsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFTZXJ2aWNlVVVJRHMnOiBbJ0ZFRDgnXSxcbiAqICAgICAgICAgICAna0NCQWR2RGF0YU1hbnVmYWN0dXJlckRhdGEnOiB7XG4gKiAgICAgICAgICAgICAgICdieXRlTGVuZ3RoJzogNyAgLy8gZGF0YSBub3Qgc2hvd25cbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgICdrQ0JBZHZEYXRhVHhQb3dlckxldmVsJzogMzIsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFJc0Nvbm5lY3RhYmxlJzogdHJ1ZVxuICogICAgICAgfSxcbiAqICAgICAgICdyc3NpJzogLTUzXG4gKiAgIH1cbiAqIGBgYFxuICpcbiAqICMjIFR5cGVkIEFycmF5c1xuICpcbiAqIFRoaXMgcGx1Z2luIHVzZXMgdHlwZWQgQXJyYXlzIG9yIEFycmF5QnVmZmVycyBmb3Igc2VuZGluZyBhbmQgcmVjZWl2aW5nIGRhdGEuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IHlvdSBuZWVkIGNvbnZlcnQgeW91ciBkYXRhIHRvIEFycmF5QnVmZmVycyBiZWZvcmUgc2VuZGluZyBhbmQgZnJvbSBBcnJheUJ1ZmZlcnMgd2hlbiByZWNlaXZpbmcuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogICAvLyBBU0NJSSBvbmx5XG4gKiAgIGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gKiAgICAgIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KHN0cmluZy5sZW5ndGgpO1xuICogICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAqICAgICAgICAgIGFycmF5W2ldID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gKiAgICAgICB9XG4gKiAgICAgICByZXR1cm4gYXJyYXkuYnVmZmVyO1xuICogICB9XG4gKlxuICogICAvLyBBU0NJSSBvbmx5XG4gKiAgIGZ1bmN0aW9uIGJ5dGVzVG9TdHJpbmcoYnVmZmVyKSB7XG4gKiAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShidWZmZXIpKTtcbiAqICAgfVxuICogYGBgXG4gKiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0eXBlZCBhcnJheXMgaW4gdGhlc2UgYXJ0aWNsZXMgb24gW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9UeXBlZF9hcnJheXMpIGFuZCBbSFRNTDUgUm9ja3NdKGh0dHA6Ly93d3cuaHRtbDVyb2Nrcy5jb20vZW4vdHV0b3JpYWxzL3dlYmdsL3R5cGVkX2FycmF5cy8pLlxuICpcbiAqICMjIFVVSURzXG4gKlxuICogVVVJRHMgYXJlIGFsd2F5cyBzdHJpbmdzIGFuZCBub3QgbnVtYmVycy4gU29tZSAxNi1iaXQgVVVJRHMsIHN1Y2ggYXMgJzIyMjAnIGxvb2sgbGlrZSBpbnRlZ2VycywgYnV0IHRoZXkncmUgbm90LiAoVGhlIGludGVnZXIgMjIyMCBpcyAweDhBQyBpbiBoZXguKSBUaGlzIGlzbid0IGEgcHJvYmxlbSB3aXRoIDEyOCBiaXQgVVVJRHMgc2luY2UgdGhleSBsb29rIGxpa2Ugc3RyaW5ncyA4MmI5ZTZlMS01OTNhLTQ1NmYtYmU5Yi05MjE1MTYwZWJjYWMuIEFsbCAxNi1iaXQgVVVJRHMgc2hvdWxkIGFsc28gYmUgcGFzc2VkIHRvIG1ldGhvZHMgYXMgc3RyaW5ncy5cbiAqIEBpbnRlcmZhY2VzXG4gKiBCTEVTY2FuT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JMRScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJsZS1jZW50cmFsJyxcbiAgcGx1Z2luUmVmOiAnYmxlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kb24vY29yZG92YS1wbHVnaW4tYmxlLWNlbnRyYWwnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQkxFIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2NhbiBhbmQgZGlzY292ZXIgQkxFIHBlcmlwaGVyYWxzIGZvciB0aGUgc3BlY2lmaWVkIGFtb3VudCBvZiB0aW1lLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqIEJMRS5zY2FuKFtdLCA1KS5zdWJzY3JpYmUoZGV2aWNlID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkZXZpY2UpKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzZXJ2aWNlcyAgTGlzdCBvZiBzZXJ2aWNlIFVVSURzIHRvIGRpc2NvdmVyLCBvciBgW11gIHRvIGZpbmQgYWxsIGRldmljZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgIE51bWJlciBvZiBzZWNvbmRzIHRvIHJ1biBkaXNjb3ZlcnlcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgb2YgZWFjaCBwZXJpcGhlcmFsIHRoYXQgaXMgZGlzY292ZXJlZCBkdXJpbmcgdGhlIHNwZWNpZmllZCB0aW1lLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHNjYW4oc2VydmljZXM6IHN0cmluZ1tdLCBzZWNvbmRzOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FuIGFuZCBkaXNjb3ZlciBCTEUgcGVyaXBoZXJhbHMgdW50aWwgYHN0b3BTY2FuYCBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogQkxFLnN0YXJ0U2NhbihbXSkuc3Vic2NyaWJlKGRldmljZSA9PiB7XG4gICAqICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGV2aWNlKSk7XG4gICAqIH0pO1xuICAgKlxuICAgKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICogICBCTEUuc3RvcFNjYW4oKTtcbiAgICogfSwgNTAwMCk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzZXJ2aWNlcyAgTGlzdCBvZiBzZXJ2aWNlIFVVSURzIHRvIGRpc2NvdmVyLCBvciBgW11gIHRvIGZpbmQgYWxsIGRldmljZXNcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgb2YgZWFjaCBwZXJpcGhlcmFsIGRpc2NvdmVyZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcFNjYW4nLFxuICAgIGNsZWFyV2l0aEFyZ3M6IGZhbHNlLFxuICB9KVxuICBzdGFydFNjYW4oc2VydmljZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2NhbnMgZm9yIEJMRSBkZXZpY2VzLiBUaGlzIGZ1bmN0aW9uIG9wZXJhdGVzIHNpbWlsYXJseSB0byB0aGUgYHN0YXJ0U2NhbmAgZnVuY3Rpb24sIGJ1dCBhbGxvd3MgeW91IHRvIHNwZWNpZnkgZXh0cmEgb3B0aW9ucyAobGlrZSBhbGxvd2luZyBkdXBsaWNhdGUgZGV2aWNlIHJlcG9ydHMpLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzZXJ2aWNlcyAgTGlzdCBvZiBzZXJ2aWNlIFVVSURzIHRvIGRpc2NvdmVyLCBvciBgW11gIHRvIGZpbmQgYWxsIGRldmljZXNcbiAgICogQHBhcmFtIHtCTEVTY2FuT3B0aW9uc30gb3B0aW9ucyBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIG9mIGVhY2ggcGVyaXBoZXJhbCBkaXNjb3ZlcmVkLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BTY2FuJyxcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZSxcbiAgfSlcbiAgc3RhcnRTY2FuV2l0aE9wdGlvbnMoc2VydmljZXM6IHN0cmluZ1tdLCBvcHRpb25zOiBCTEVTY2FuT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYSBzY2FuIHN0YXJ0ZWQgYnkgYHN0YXJ0U2NhbmAuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogQkxFLnN0YXJ0U2NhbihbXSkuc3Vic2NyaWJlKGRldmljZSA9PiB7XG4gICAqICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGV2aWNlKSk7XG4gICAqIH0pO1xuICAgKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICogICBCTEUuc3RvcFNjYW4oKS50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ3NjYW4gc3RvcHBlZCcpOyB9KTtcbiAgICogfSwgNTAwMCk7XG4gICAqIGBgYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGV2aWNlIHBpbi5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAgIEJMRS5zZXRQaW4ocGluKS5zdWJzY3JpYmUoc3VjY2VzcyA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICogICB9LFxuICAgKiAgIGZhaWx1cmUgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ2ZhaWx1cmUnKTtcbiAgICogICB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwaW4gUGluIG9mIHRoZSBkZXZpY2UgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgb2Ygc3VjY2Vzcy9mYWlsdXJlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHNldFBpbihwaW46IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgdG8gYSBwZXJpcGhlcmFsLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqICAgQkxFLmNvbm5lY3QoJzEyOjM0OjU2Ojc4OjlBOkJDJykuc3Vic2NyaWJlKHBlcmlwaGVyYWxEYXRhID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKHBlcmlwaGVyYWxEYXRhKTtcbiAgICogICB9LFxuICAgKiAgIHBlcmlwaGVyYWxEYXRhID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWQnKTtcbiAgICogICB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIG9mIGNvbm5lY3QvZGlzY29ubmVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNjb25uZWN0JyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBjb25uZWN0KGRldmljZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc3RhYmxpc2ggYW4gYXV0b21hdGljIGNvbm5lY3Rpb24gdG8gYSBwZXJpcGhlcmFsLiBUaGUgcGhvbmUgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbm5lY3QgdG8gdGhlIEJsdWV0b290aCBwZXJpcGhlcmFsXG4gICAqIHdoZW5ldmVyIGl0IGlzIGluIHJhbmdlLiBUaGUgYXV0b0Nvbm5lY3QgZnVuY3Rpb24gdXNlcyBjYWxsYmFja3MgaW5zdGVhZCBvZiBvYnNlcnZhYmxlcyBiZWNhdXNlIGNvbm5lY3QgYW5kXG4gICAqIGRpc2Nvbm5lY3QgY2FuIGVhY2ggYmUgY2FsbGVkIG1hbnkgdGltZXMgYXMgYSBkZXZpY2VzIGNvbm5lY3RzIGFuZCBkaXNjb25uZWN0cy5cbiAgICpcbiAgICogT24gQW5kcm9pZCB5b3UgY2FuIHBhc3MgYSBNQUMgYWRkcmVzcyBkaXJlY3RseSB0byBhdXRvQ29ubmVjdC4gV2l0aCBpT1MsIHlvdSBuZWVkIHRvIGdldCBhIGRldmljZSBpZCBieSBzY2FubmluZyxcbiAgICogY2FsbGluZyBibGUucGVyaXBoZXJhbHNXaXRoSWRlbnRpZmllcnMsIG9yIGNhbGxpbmcgYmxlLmNvbm5lY3RlZFBlcmlwaGVyYWxzV2l0aFNlcnZpY2VzLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqICBzb21lRnVuY3Rpb24oKSB7XG4gICAqICAgIHRoaXMuYmxlLmF1dG9Db25uZWN0KGRldmljZUlkLCBvbkNvbm5lY3RlZC5iaW5kKHRoaXMpLCBvbkRpc2Nvbm5lY3RlZC5iaW5kKHRoaXMpKTtcbiAgICogIH1cbiAgICpcbiAgICogIG9uQ29ubmVjdGVkKHBlcmlwaGVyYWwpIHtcbiAgICogICAgY29uc29sZS5sb2coYENvbm5lY3RlZCB0byAke3BlcmlwaGVyYWwuaWR9YClsXG4gICAqICB9XG4gICAqXG4gICAqICBvbkRpc2Nvbm5lY3RlZChwZXJpcGhlcmFsKSB7XG4gICAqICAgIGNvbnNvbGUubG9nKGBEaXNjb25uZWN0ZWQgZnJvbSAke3BlcmlwaGVyYWwuaWR9YClsXG4gICAqICB9XG4gICAqXG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25uZWN0Q2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBwZXJpcGhlcmFsIGRhdGEgd2hlbiB0aGUgZGV2aWNlcyBjb25uZWN0c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNjb25uZWN0Q2FsbGJhY2sgIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggcGVyaXBoZXJhbCBkYXRhIHdoZW4gdGhlIGRldmljZXMgZGlzY29ubmVjdHNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhdXRvQ29ubmVjdChkZXZpY2VJZDogc3RyaW5nLCBjb25uZWN0Q2FsbGJhY2s6IGFueSwgZGlzY29ubmVjdENhbGxiYWNrOiBhbnkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBNVFUgc2l6ZS5cbiAgICogTWF5IGJlIHVzZWQgdG8gZml4IHRoZSBFcnJvciAxNCBcIlVubGlrZWx5XCIgb24gd3JpdGUgcmVxdWVzdHMgd2l0aCBtb3JlIHRoYW4gMjAgYnl0ZXMuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogICBCTEUucmVxdWVzdE10dSgnMTI6MzQ6NTY6Nzg6OUE6QkMnLCA1MTIpLnRoZW4oKCkgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ01UVSBTaXplIEFjY2VwdGVkJyk7XG4gICAqICAgfSwgZXJyb3IgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ01UVSBTaXplIEZhaWxlZCcpO1xuICAgKiAgIH0pO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtudW1iZXJ9IG10dVNpemUgVGhlIG5ldyBNVFUgc2l6ZS4gKDIzIC0gNTE3LCBkZWZhdWx0IGlzIHVzdWFsbHkgMjMuIE1heCByZWNvbW1lbmRlZDogNTEyKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdE10dShkZXZpY2VJZDogc3RyaW5nLCBtdHVTaXplOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIERldmljZSBDYWNoZVxuICAgKiBUaGlzIG1ldGhvZCBtYXkgZml4IGEgaXNzdWUgb2Ygb2xkIGNhY2hlZCBzZXJ2aWNlcyBhbmQgY2hhcmFjdGVyaXN0aWNzLlxuICAgKiBOT1RFIFNpbmNlIHRoaXMgdXNlcyBhbiB1bmRvY3VtZW50ZWQgQVBJIGl0J3Mgbm90IGd1YXJhbnRlZWQgdG8gd29yay5cbiAgICogSWYgeW91IGNob29zZSBhIHRvbyBsb3cgZGVsYXkgdGltZSAodGltZW91dE1pbGxpcykgdGhlIG1ldGhvZCBjb3VsZCBmYWlsLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqICAgQkxFLnJlZnJlc2hEZXZpY2VDYWNoZSgnMTI6MzQ6NTY6Nzg6OUE6QkMnLCAxMDAwMCkudGhlbihkaXNjb3ZlcmVkU2VydmljZXMgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ1RoZSBuZXcgZGlzY292ZXJlZCBzZXJ2aWNlcyBhZnRlciB0aGUgY2xlYW46ICcsIGRpc2NvdmVyZWRTZXJ2aWNlcyk7XG4gICAqICAgfSwgZXJyb3IgPT4ge1xuICAgKiAgICAgY29uc29sZS5sb2coJ1JlZnJlc2ggZGV2aWNlIGNhY2hlIGZhaWxlZC4nKTtcbiAgICogICB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TWlsbGlzIERlbGF5IGluIG1pbGxpc2Vjb25kcyBhZnRlciByZWZyZXNoIGJlZm9yZSBkaXNjb3ZlcmluZyBzZXJ2aWNlcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZnJlc2hEZXZpY2VDYWNoZShkZXZpY2VJZDogc3RyaW5nLCB0aW1lb3V0TWlsbGlzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IGZyb20gYSBwZXJpcGhlcmFsLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqICAgQkxFLmRpc2Nvbm5lY3QoJzEyOjM0OjU2Ojc4OjlBOkJDJykudGhlbigoKSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnRGlzY29ubmVjdGVkJyk7XG4gICAqICAgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdChkZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlYWQoZGV2aWNlSWQ6IHN0cmluZywgc2VydmljZVVVSUQ6IHN0cmluZywgY2hhcmFjdGVyaXN0aWNVVUlEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYy5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAvLyBzZW5kIDEgYnl0ZSB0byBzd2l0Y2ggYSBsaWdodCBvblxuICAgKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgKiBkYXRhWzBdID0gMTtcbiAgICogQkxFLndyaXRlKGRldmljZV9pZCwgJ0ZGMTAnLCAnRkYxMScsIGRhdGEuYnVmZmVyKTtcbiAgICpcbiAgICogLy8gc2VuZCBhIDMgYnl0ZSB2YWx1ZSB3aXRoIFJHQiBjb2xvclxuICAgKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDMpO1xuICAgKiBkYXRhWzBdID0gMHhGRjsgIC8vIHJlZFxuICAgKiBkYXRhWzBdID0gMHgwMDsgLy8gZ3JlZW5cbiAgICogZGF0YVswXSA9IDB4RkY7IC8vIGJsdWVcbiAgICogQkxFLndyaXRlKGRldmljZV9pZCwgJ2NjYzAnLCAnY2NjMScsIGRhdGEuYnVmZmVyKTtcbiAgICpcbiAgICogLy8gc2VuZCBhIDMyIGJpdCBpbnRlZ2VyXG4gICAqIHZhciBkYXRhID0gbmV3IFVpbnQzMkFycmF5KDEpO1xuICAgKiBkYXRhWzBdID0gY291bnRlcklucHV0LnZhbHVlO1xuICAgKiBCTEUud3JpdGUoZGV2aWNlX2lkLCBTRVJWSUNFLCBDSEFSQUNURVJJU1RJQywgZGF0YS5idWZmZXIpO1xuICAgKlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IHZhbHVlICBEYXRhIHRvIHdyaXRlIHRvIHRoZSBjaGFyYWN0ZXJpc3RpYywgYXMgYW4gQXJyYXlCdWZmZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHdyaXRlKGRldmljZUlkOiBzdHJpbmcsIHNlcnZpY2VVVUlEOiBzdHJpbmcsIGNoYXJhY3RlcmlzdGljVVVJRDogc3RyaW5nLCB2YWx1ZTogQXJyYXlCdWZmZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYyB3aXRob3V0IHdhaXRpbmcgZm9yIGNvbmZpcm1hdGlvbiBmcm9tIHRoZSBwZXJpcGhlcmFsLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VVVUlEICBVVUlEIG9mIHRoZSBCTEUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyaXN0aWNVVUlEICBVVUlEIG9mIHRoZSBCTEUgY2hhcmFjdGVyaXN0aWNcbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gdmFsdWUgIERhdGEgdG8gd3JpdGUgdG8gdGhlIGNoYXJhY3RlcmlzdGljLCBhcyBhbiBBcnJheUJ1ZmZlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd3JpdGVXaXRob3V0UmVzcG9uc2UoXG4gICAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgICBzZXJ2aWNlVVVJRDogc3RyaW5nLFxuICAgIGNoYXJhY3RlcmlzdGljVVVJRDogc3RyaW5nLFxuICAgIHZhbHVlOiBBcnJheUJ1ZmZlclxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWx1ZSBvZiBhIGNoYXJhY3RlcmlzdGljIGNoYW5nZXMuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogQkxFLnN0YXJ0Tm90aWZpY2F0aW9uKGRldmljZV9pZCwgJ0ZGMTAnLCAnRkYxMScpLnN1YnNjcmliZShidWZmZXIgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIG9mIGNoYXJhY3RlcmlzdGljIGNoYW5nZXMuXG4gICAqIFRoZSBvYnNlcnZlciBlbWl0IGFuIGFycmF5IHdpdGggZGF0YSBhdCBpbmRleCAwIGFuZCBzZXF1ZW5jZSBvcmRlciBhdCBpbmRleCAxLlxuICAgKiBUaGUgc2VxdWVuY2Ugb3JkZXIgaXMgYWx3YXlzIHVuZGVmaW5lZCBvbiBpT1MuIE9uIGFuZHJvaWQgaXQgbGVhdmUgdGhlIGNsaWVudCB0byBjaGVjayB0aGUgc2VxdWVuY2Ugb3JkZXIgYW5kIHJlb3JkZXIgaWYgbmVlZGVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBkZXN0cnVjdDogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcE5vdGlmaWNhdGlvbicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgc3RhcnROb3RpZmljYXRpb24oZGV2aWNlSWQ6IHN0cmluZywgc2VydmljZVVVSUQ6IHN0cmluZywgY2hhcmFjdGVyaXN0aWNVVUlEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGJlaW5nIG5vdGlmaWVkIHdoZW4gdGhlIHZhbHVlIG9mIGEgY2hhcmFjdGVyaXN0aWMgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BOb3RpZmljYXRpb24oZGV2aWNlSWQ6IHN0cmluZywgc2VydmljZVVVSUQ6IHN0cmluZywgY2hhcmFjdGVyaXN0aWNVVUlEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnQgdGhlIGNvbm5lY3Rpb24gc3RhdHVzLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqIEJMRS5pc0Nvbm5lY3RlZCgnRkZDQTBCMDktQ0IxRC00REMwLUExRUYtMzFBRkQzRURGQjUzJykudGhlbihcbiAgICogICAoKSA9PiB7IGNvbnNvbGUubG9nKCdjb25uZWN0ZWQnKTsgfSxcbiAgICogICAoKSA9PiB7IGNvbnNvbGUubG9nKCdub3QgY29ubmVjdGVkJyk7IH1cbiAgICogKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCAgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0Nvbm5lY3RlZChkZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0IGlmIGJsdWV0b290aCBpcyBlbmFibGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBpZiBCbHVldG9vdGggaXMgZW5hYmxlZCwgYW5kIHJlamVjdHMgaWYgZGlzYWJsZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdG8gYmUgbm90aWZpZWQgd2hlbiBCbHVldG9vdGggc3RhdGUgY2hhbmdlcyBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqIEJMRS5zdGFydFN0YXRlTm90aWZpY2F0aW9ucygpLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAqICAgY29uc29sZS5sb2coXCJCbHVldG9vdGggaXMgXCIgKyBzdGF0ZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgd2hlbiB0aGUgQmx1ZXRvb3RoIGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgb24gdGhlIGRldmljZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wU3RhdGVOb3RpZmljYXRpb25zJyxcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZSxcbiAgfSlcbiAgc3RhcnRTdGF0ZU5vdGlmaWNhdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBzdGF0ZSBub3RpZmljYXRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wU3RhdGVOb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0byBiZSBub3RpZmllZCB3aGVuIExvY2F0aW9uIHNlcnZpY2Ugc3RhdGUgY2hhbmdlcyBvbiB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqIGJsZS5zdGFydExvY2F0aW9uU3RhdGVOb3RpZmljYXRpb25zKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgKiAvLyBPciB1c2luZyBhd2FpdCB3aXRoIHByb21pc2VzXG4gICAqIC8vIE5vdGUsIGluaXRpYWwgcHJvbWlzZSByZXNvbHZlcyBvciByZWplY3RzIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBzdWJzY3JpYmUgd2FzIHN1Y2Nlc3NmdWxcbiAgICogYXdhaXQgYmxlLndpdGhQcm9taXNlcy5zdGFydExvY2F0aW9uU3RhdGVOb3RpZmljYXRpb25zKHN1Y2Nlc3MsIGZhaWx1cmUpXG4gICAqIGBgYFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyB3aGVuIHRoZSBCbHVldG9vdGggaXMgZW5hYmxlZCBvciBkaXNhYmxlZCBvbiB0aGUgZGV2aWNlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BMb2NhdGlvblN0YXRlTm90aWZpY2F0aW9ucycsXG4gICAgY2xlYXJXaXRoQXJnczogZmFsc2UsXG4gIH0pXG4gIHN0YXJ0TG9jYXRpb25TdGF0ZU5vdGlmaWNhdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBsb2NhdGlvbiBzdGF0ZSBub3RpZmljYXRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wTG9jYXRpb25TdGF0ZU5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBTeXN0ZW0gQmx1ZXRvb3RoIHNldHRpbmdzIChBbmRyb2lkIG9ubHkpLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93Qmx1ZXRvb3RoU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlIChBbmRyb2lkIG9ubHkpLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgUlNTSSB2YWx1ZSBvbiB0aGUgZGV2aWNlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCAgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkUlNTSShkZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGEgbGlzdCBvZiB0aGUgcGVyaXBoZXJhbHMgKGNvbnRhaW5pbmcgYW55IG9mIHRoZSBzcGVjaWZpZWQgc2VydmljZXMpXG4gICAqIGN1cnJlbnRseSBjb25uZWN0ZWQgdG8gdGhlIHN5c3RlbS4gVGhlIHBlcmlwaGVyYWwgbGlzdCBpcyBzZW50IHRvIHRoZSBzdWNjZXNzIGNhbGxiYWNrLlxuICAgKiBpT1Mgb25seVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzZXJ2aWNlcyBMaXN0IG9mIHNlcnZpY2VzIHRvIGRpc2NvdmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYSBsaXN0IG9mIHBlcmlwaGVyYWwgb2JqZWN0c1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb25uZWN0ZWRQZXJpcGhlcmFsc1dpdGhTZXJ2aWNlcyhzZXJ2aWNlczogc3RyaW5nW10pOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGNvbm5lY3RlZCBwZXJpcGhlcmFscyBvZmZlcmluZyB0aGUgbGlzdGVkIHNlcnZpY2UgVVVJRHMuXG4gICAqIGlPUyBvbmx5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHV1aWRzIExpc3Qgb2YgcGVyaXBoZXJhbCBVVUlEc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGEgbGlzdCBvZiBwZXJpcGhlcmFsIG9iamVjdHNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGVyaXBoZXJhbHNXaXRoSWRlbnRpZmllcnModXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBib25kZWQgZGV2aWNlc1xuICAgKiBBbmRyb2lkIG9ubHlcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhIGxpc3Qgb2YgcGVyaXBoZXJhbCBvYmplY3RzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGJvbmRlZERldmljZXMoKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnRzIGlmIGxvY2F0aW9uIHNlcnZpY2VzIGFyZSBlbmFibGVkLlxuICAgKiBBbmRyb2lkIG9ubHlcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzTG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19