import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var Geolocation = /** @class */ (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Geolocation.prototype.getCurrentPosition = function (options) { return cordova(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Geolocation, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Geolocation.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Geolocation });
    Geolocation.pluginName = "Geolocation";
    Geolocation.plugin = "cordova-plugin-geolocation";
    Geolocation.pluginRef = "navigator.geolocation";
    Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
    Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Geolocation = __decorate([], Geolocation);
    return Geolocation;
}(AwesomeCordovaNativePlugin));
export { Geolocation };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Geolocation, decorators: [{
            type: Injectable
        }], propDecorators: { getCurrentPosition: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2VvbG9jYXRpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBaUtELCtCQUEwQjs7OztJQVV6RCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBOEIsVUFBQyxRQUFhO1lBQy9ELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzVCLE9BQU8sQ0FDUixDQUFDO1lBQ0YsT0FBTyxjQUFNLE9BQUEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQXpDLENBQXlDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzZHQXpDVSxXQUFXO2lIQUFYLFdBQVc7Ozs7Ozs7O0lBQVgsV0FBVyxrQkFBWCxXQUFXO3NCQW5LeEI7RUFtS2lDLDBCQUEwQjtTQUE5QyxXQUFXOzRGQUFYLFdBQVc7a0JBRHZCLFVBQVU7OEJBV1Qsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIC8qKlxuICAgKiBhIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgbGF0aXR1ZGUgaW4gZGVjaW1hbCBkZWdyZWVzLlxuICAgKi9cbiAgbGF0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGxvbmdpdHVkZSBpbiBkZWNpbWFsIGRlZ3JlZXMuXG4gICAqL1xuICBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBhY2N1cmFjeSBvZiB0aGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBwcm9wZXJ0aWVzLFxuICAgKiBleHByZXNzZWQgaW4gbWV0ZXJzLlxuICAgKi9cbiAgYWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGFsdGl0dWRlIGluIG1ldHJlcywgcmVsYXRpdmUgdG8gc2VhXG4gICAqIGxldmVsLiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBjYW5ub3QgcHJvdmlkZSB0aGUgZGF0YS5cbiAgICovXG4gIGFsdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgYWNjdXJhY3kgb2YgdGhlIGFsdGl0dWRlIGV4cHJlc3NlZCBpbiBtZXRlcnMuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwuXG4gICAqL1xuICBhbHRpdHVkZUFjY3VyYWN5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBkZXZpY2UgaXMgdHJhdmVsaW5nLiBUaGlzXG4gICAqIHZhbHVlLCBzcGVjaWZpZWQgaW4gZGVncmVlcywgaW5kaWNhdGVzIGhvdyBmYXIgb2ZmIGZyb20gaGVhZGluZyB0cnVlIG5vcnRoXG4gICAqIHRoZSBkZXZpY2UgaXMuIDAgZGVncmVlcyByZXByZXNlbnRzIHRydWUgbm9ydGgsIGFuZCB0aGUgZGlyZWN0aW9uIGlzXG4gICAqIGRldGVybWluZWQgY2xvY2t3aXNlICh3aGljaCBtZWFucyB0aGF0IGVhc3QgaXMgOTAgZGVncmVlcyBhbmQgd2VzdCBpcyAyNzBcbiAgICogZGVncmVlcykuIElmIHNwZWVkIGlzIDAsIGhlYWRpbmcgaXMgTmFOLiBJZiB0aGUgZGV2aWNlIGlzIHVuYWJsZSB0byBwcm92aWRlXG4gICAqIGhlYWRpbmcgaW5mb3JtYXRpb24sIHRoaXMgdmFsdWUgaXMgbnVsbC5cbiAgICovXG4gIGhlYWRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSB2ZWxvY2l0eSBvZiB0aGUgZGV2aWNlIGluIG1ldGVycyBwZXIgc2Vjb25kLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsLlxuICAgKi9cbiAgc3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9wb3NpdGlvbiB7XG4gIC8qKlxuICAgKiBBIENvb3JkaW5hdGVzIG9iamVjdCBkZWZpbmluZyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgKi9cbiAgY29vcmRzOiBDb29yZGluYXRlcztcblxuICAvKipcbiAgICogQSB0aW1lc3RhbXAgcmVwcmVzZW50aW5nIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBsb2NhdGlvbiB3YXMgcmV0cmlldmVkLlxuICAgKi9cbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25FcnJvciB7XG4gIC8qKlxuICAgKiBBIGNvZGUgdGhhdCBpbmRpY2F0ZXMgdGhlIGVycm9yIHRoYXQgb2NjdXJyZWRcbiAgICovXG4gIGNvZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIHRoYXQgY2FuIGRlc2NyaWJlIHRoZSBlcnJvciB0aGF0IG9jY3VycmVkXG4gICAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvbG9jYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIElzIGEgcG9zaXRpdmUgbG9uZyB2YWx1ZSBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIGFnZSBpbiBtaWxsaXNlY29uZHMgb2YgYVxuICAgKiBwb3NzaWJsZSBjYWNoZWQgcG9zaXRpb24gdGhhdCBpcyBhY2NlcHRhYmxlIHRvIHJldHVybi4gSWYgc2V0IHRvIDAsIGl0XG4gICAqIG1lYW5zIHRoYXQgdGhlIGRldmljZSBjYW5ub3QgdXNlIGEgY2FjaGVkIHBvc2l0aW9uIGFuZCBtdXN0IGF0dGVtcHQgdG9cbiAgICogcmV0cmlldmUgdGhlIHJlYWwgY3VycmVudCBwb3NpdGlvbi4gSWYgc2V0IHRvIEluZmluaXR5IHRoZSBkZXZpY2UgbXVzdFxuICAgKiByZXR1cm4gYSBjYWNoZWQgcG9zaXRpb24gcmVnYXJkbGVzcyBvZiBpdHMgYWdlLiBEZWZhdWx0OiAwLlxuICAgKi9cbiAgbWF4aW11bUFnZT86IG51bWJlcjtcblxuICAvKipcbiAgICogSXMgYSBwb3NpdGl2ZSBsb25nIHZhbHVlIHJlcHJlc2VudGluZyB0aGUgbWF4aW11bSBsZW5ndGggb2YgdGltZVxuICAgKiAoaW4gbWlsbGlzZWNvbmRzKSB0aGUgZGV2aWNlIGlzIGFsbG93ZWQgdG8gdGFrZSBpbiBvcmRlciB0byByZXR1cm4gYVxuICAgKiBwb3NpdGlvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgSW5maW5pdHksIG1lYW5pbmcgdGhhdCBnZXRDdXJyZW50UG9zaXRpb24oKVxuICAgKiB3b24ndCByZXR1cm4gdW50aWwgdGhlIHBvc2l0aW9uIGlzIGF2YWlsYWJsZS5cbiAgICovXG4gIHRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgYXBwbGljYXRpb24gd291bGQgbGlrZSB0byByZWNlaXZlIHRoZSBiZXN0IHBvc3NpYmxlIHJlc3VsdHMuXG4gICAqIElmIHRydWUgYW5kIGlmIHRoZSBkZXZpY2UgaXMgYWJsZSB0byBwcm92aWRlIGEgbW9yZSBhY2N1cmF0ZSBwb3NpdGlvbiwgaXRcbiAgICogd2lsbCBkbyBzby4gTm90ZSB0aGF0IHRoaXMgY2FuIHJlc3VsdCBpbiBzbG93ZXIgcmVzcG9uc2UgdGltZXMgb3IgaW5jcmVhc2VkXG4gICAqIHBvd2VyIGNvbnN1bXB0aW9uICh3aXRoIGEgR1BTIGNoaXAgb24gYSBtb2JpbGUgZGV2aWNlIGZvciBleGFtcGxlKS4gT24gdGhlXG4gICAqIG90aGVyIGhhbmQsIGlmIGZhbHNlLCB0aGUgZGV2aWNlIGNhbiB0YWtlIHRoZSBsaWJlcnR5IHRvIHNhdmUgcmVzb3VyY2VzIGJ5XG4gICAqIHJlc3BvbmRpbmcgbW9yZSBxdWlja2x5IGFuZC9vciB1c2luZyBsZXNzIHBvd2VyLiBEZWZhdWx0OiBmYWxzZS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBlbmFibGVIaWdoQWNjdXJhY3k/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEdlb2xvY2F0aW9uXG4gKiBAcHJlbWllciBnZW9sb2NhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGV2aWNlJ3MgbG9jYXRpb24sIHN1Y2ggYXMgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZS4gQ29tbW9uIHNvdXJjZXMgb2YgbG9jYXRpb24gaW5mb3JtYXRpb24gaW5jbHVkZSBHbG9iYWwgUG9zaXRpb25pbmcgU3lzdGVtIChHUFMpIGFuZCBsb2NhdGlvbiBpbmZlcnJlZCBmcm9tIG5ldHdvcmsgc2lnbmFscyBzdWNoIGFzIElQIGFkZHJlc3MsIFJGSUQsIFdpRmkgYW5kIEJsdWV0b290aCBNQUMgYWRkcmVzc2VzLCBhbmQgR1NNL0NETUEgY2VsbCBJRHMuXG4gKlxuICogIFRoaXMgQVBJIGlzIGJhc2VkIG9uIHRoZSBXM0MgR2VvbG9jYXRpb24gQVBJIFNwZWNpZmljYXRpb24sIGFuZCBvbmx5IGV4ZWN1dGVzIG9uIGRldmljZXMgdGhhdCBkb24ndCBhbHJlYWR5IHByb3ZpZGUgYW4gaW1wbGVtZW50YXRpb24uXG4gKlxuICogRm9yIGlPUyB5b3UgaGF2ZSB0byBhZGQgdGhpcyBjb25maWd1cmF0aW9uIHRvIHlvdXIgY29uZmlndXJhdGlvbi54bWwgZmlsZVxuICogYGBgeG1sXG4gKiA8ZWRpdC1jb25maWcgZmlsZT1cIiotSW5mby5wbGlzdFwiIG1vZGU9XCJtZXJnZVwiIHRhcmdldD1cIk5TTG9jYXRpb25XaGVuSW5Vc2VVc2FnZURlc2NyaXB0aW9uXCI+XG4gKiAgICA8c3RyaW5nPldlIHVzZSB5b3VyIGxvY2F0aW9uIGZvciBmdWxsIGZ1bmN0aW9uYWxpdHkgb2YgY2VydGFpbiBhcHAgZmVhdHVyZXMuPC9zdHJpbmc+XG4gKiA8L2VkaXQtY29uZmlnPlxuICogYGBgXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9nZW9sb2NhdGlvbi9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2VvbG9jYXRpb246IEdlb2xvY2F0aW9uKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCkudGhlbigocmVzcCkgPT4ge1xuICogIC8vIHJlc3AuY29vcmRzLmxhdGl0dWRlXG4gKiAgLy8gcmVzcC5jb29yZHMubG9uZ2l0dWRlXG4gKiB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAqICAgY29uc29sZS5sb2coJ0Vycm9yIGdldHRpbmcgbG9jYXRpb24nLCBlcnJvcik7XG4gKiB9KTtcbiAqXG4gKiBsZXQgd2F0Y2ggPSB0aGlzLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oKTtcbiAqIHdhdGNoLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICogIC8vIGRhdGEgY2FuIGJlIGEgc2V0IG9mIGNvb3JkaW5hdGVzLCBvciBhbiBlcnJvciAoaWYgYW4gZXJyb3Igb2NjdXJyZWQpLlxuICogIC8vIGRhdGEuY29vcmRzLmxhdGl0dWRlXG4gKiAgLy8gZGF0YS5jb29yZHMubG9uZ2l0dWRlXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENvb3JkaW5hdGVzXG4gKiBHZW9wb3NpdGlvblxuICogUG9zaXRpb25FcnJvclxuICogR2VvbG9jYXRpb25PcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR2VvbG9jYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5nZW9sb2NhdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWdlb2xvY2F0aW9uJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdlb2xvY2F0aW9uIC0tdmFyaWFibGUgR0VPTE9DQVRJT05fVVNBR0VfREVTQ1JJUFRJT049XCJUbyBsb2NhdGUgeW91XCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0dFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OJ10sXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldEN1cnJlbnRQb3NpdGlvbihvcHRpb25zPzogR2VvbG9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxHZW9wb3NpdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaCB0aGUgY3VycmVudCBkZXZpY2UncyBwb3NpdGlvbi4gIENsZWFyIHRoZSB3YXRjaCBieSB1bnN1YnNjcmliaW5nIGZyb21cbiAgICogT2JzZXJ2YWJsZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigpXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHApID0+IHAuY29vcmRzICE9PSB1bmRlZmluZWQpIC8vRmlsdGVyIE91dCBFcnJvcnNcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShwb3NpdGlvbiA9PiB7XG4gICAqICAgY29uc29sZS5sb2cocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSArICcgJyArIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSk7XG4gICAqIH0pO1xuICAgKlxuICAgKiAvLyBUbyBzdG9wIG5vdGlmaWNhdGlvbnNcbiAgICogc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9uT3B0aW9uc30gb3B0aW9ucyAgVGhlIFtnZW9sb2NhdGlvbiBvcHRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb25PcHRpb25zKS5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8R2VvcG9zaXRpb24gfCBQb3NpdGlvbkVycm9yPn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIGVycm9ycy5cbiAgICovXG4gIHdhdGNoUG9zaXRpb24ob3B0aW9ucz86IEdlb2xvY2F0aW9uT3B0aW9ucyk6IE9ic2VydmFibGU8R2VvcG9zaXRpb24gfCBQb3NpdGlvbkVycm9yPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uIHwgUG9zaXRpb25FcnJvcj4oKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHdhdGNoSWQgPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcbiAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiAoKSA9PiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKTtcbiAgICB9KTtcbiAgfVxufVxuIl19