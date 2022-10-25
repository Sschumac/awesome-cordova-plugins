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
var DeviceOriginal = /** @class */ (function (_super) {
    __extends(DeviceOriginal, _super);
    function DeviceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceOriginal.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "sdkVersion", {
        get: function () { return cordovaPropertyGet(this, "sdkVersion"); },
        set: function (value) { cordovaPropertySet(this, "sdkVersion", value); },
        enumerable: false,
        configurable: true
    });
    DeviceOriginal.pluginName = "Device";
    DeviceOriginal.plugin = "cordova-plugin-device";
    DeviceOriginal.pluginRef = "device";
    DeviceOriginal.repo = "https://github.com/apache/cordova-plugin-device";
    DeviceOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return DeviceOriginal;
}(AwesomeCordovaNativePlugin));
var Device = new DeviceOriginal();
export { Device };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sc0VBQXVELE1BQU0sK0JBQStCLENBQUM7O0lBNEJ4RSwwQkFBMEI7Ozs7MEJBR3BELDJCQUFPOzs7Ozs7MEJBT1AseUJBQUs7Ozs7OzswQkFJTCw0QkFBUTs7Ozs7OzBCQUlSLHdCQUFJOzs7Ozs7MEJBSUosMkJBQU87Ozs7OzswQkFJUCxnQ0FBWTs7Ozs7OzBCQUlaLDZCQUFTOzs7Ozs7MEJBSVQsMEJBQU07Ozs7OzswQkFJTiw4QkFBVTs7Ozs7Ozs7Ozs7aUJBbkVaO0VBNkI0QiwwQkFBMEI7U0FBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBEZXZpY2VcbiAqIEBwcmVtaWVyIGRldmljZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVuZGVybHlpbmcgZGV2aWNlIGFuZCBwbGF0Zm9ybS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RldmljZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlOiBEZXZpY2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnNvbGUubG9nKCdEZXZpY2UgVVVJRCBpczogJyArIHRoaXMuZGV2aWNlLnV1aWQpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGV2aWNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGx1Z2luUmVmOiAnZGV2aWNlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKiBHZXQgdGhlIHZlcnNpb24gb2YgQ29yZG92YSBydW5uaW5nIG9uIHRoZSBkZXZpY2UuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjb3Jkb3ZhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkZXZpY2UubW9kZWwgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgZGV2aWNlJ3MgbW9kZWwgb3IgcHJvZHVjdC4gVGhlIHZhbHVlIGlzIHNldFxuICAgKiBieSB0aGUgZGV2aWNlIG1hbnVmYWN0dXJlciBhbmQgbWF5IGJlIGRpZmZlcmVudCBhY3Jvc3MgdmVyc2lvbnMgb2YgdGhlIHNhbWUgcHJvZHVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBtb2RlbDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG9wZXJhdGluZyBzeXN0ZW0gbmFtZS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHBsYXRmb3JtOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3MgVW5pdmVyc2FsbHkgVW5pcXVlIElkZW50aWZpZXIgKFVVSUQpLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdXVpZDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIG9wZXJhdGluZyBzeXN0ZW0gdmVyc2lvbi4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZlcnNpb246IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBtYW51ZmFjdHVyZXIuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcblxuICAvKiogV2hldGhlciB0aGUgZGV2aWNlIGlzIHJ1bm5pbmcgb24gYSBzaW11bGF0b3IuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1ZpcnR1YWw6IGJvb2xlYW47XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlIGhhcmR3YXJlIHNlcmlhbCBudW1iZXIuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBzZXJpYWw6IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBBbmRyb2lkIGRldmljZSdzIFNESyB2ZXJzaW9uLiAoQW5kcm9pZC1vbmx5KSAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc2RrVmVyc2lvbj86IHN0cmluZztcbn1cbiJdfQ==