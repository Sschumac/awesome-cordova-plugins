import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
export var OCRSourceType;
(function (OCRSourceType) {
    /**
     * Normal processing from a file URL. This is the overall recommended choice
     * for most applications. The distinction between file and native URLs is
     * only relevant on iOS; under Android `NORMFILEURL` and `NORMNATIVEURL`
     * are interchangeable.
     */
    OCRSourceType[OCRSourceType["NORMFILEURL"] = 0] = "NORMFILEURL";
    /**
     * Normal processing from a native URL. Since this source type uses deprecated
     * OS APIs to interact with the camera plugin, it is best avoided, especially
     * if ongoing forward compatibility is a concern. For further information, see
     * https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr#plugin-usage
     * Under Android, this is equivalent to `NORMFILEURL`.
     */
    OCRSourceType[OCRSourceType["NORMNATIVEURL"] = 1] = "NORMNATIVEURL";
    /**
     * Fast processing from a file URL. As the compression done internally causes
     * a significant loss in extraction quality, it should only be preferred when
     * dealing with large images containing significant amounts of text, where
     * the execution time required to perform normal processing is prohibitive.
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTFILEURL"] = 2] = "FASTFILEURL";
    /**
     * Fast processing from a native URL. See comments above for `FASTFILEURL`
     * concerning quality loss.
     *
     * The distinction between file and native URLs is only relevant on iOS;
     * under Android `FASTFILEURL` and `FASTNATIVEURL` are interchangeable.
     */
    OCRSourceType[OCRSourceType["FASTNATIVEURL"] = 3] = "FASTNATIVEURL";
    /**
     * Normal processing from a base64-encoded string. Quality is equivalent
     * to `NORMFILEURL`, but due to significantly higher memory requirements,
     * is only appropriate for use with very small images.
     */
    OCRSourceType[OCRSourceType["BASE64"] = 4] = "BASE64";
})(OCRSourceType || (OCRSourceType = {}));
var OCR = /** @class */ (function (_super) {
    __extends(OCR, _super);
    function OCR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OCR.prototype.recText = function (sourceType, source) { return cordova(this, "recText", {}, arguments); };
    OCR.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OCR, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    OCR.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OCR });
    OCR.pluginName = "OCR";
    OCR.plugin = "cordova-plugin-mobile-ocr";
    OCR.pluginRef = "textocr";
    OCR.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr";
    OCR.platforms = ["Android", "iOS"];
    OCR = __decorate([], OCR);
    return OCR;
}(AwesomeCordovaNativePlugin));
export { OCR };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OCR, decorators: [{
            type: Injectable
        }], propDecorators: { recText: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb2NyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztBQUU1RixNQUFNLENBQU4sSUFBWSxhQTJDWDtBQTNDRCxXQUFZLGFBQWE7SUFDdkI7Ozs7O09BS0c7SUFDSCwrREFBZSxDQUFBO0lBRWY7Ozs7OztPQU1HO0lBQ0gsbUVBQWlCLENBQUE7SUFFakI7Ozs7Ozs7T0FPRztJQUNILCtEQUFlLENBQUE7SUFFZjs7Ozs7O09BTUc7SUFDSCxtRUFBaUIsQ0FBQTtJQUVqQjs7OztPQUlHO0lBQ0gscURBQVUsQ0FBQTtBQUNaLENBQUMsRUEzQ1csYUFBYSxLQUFiLGFBQWEsUUEyQ3hCOztJQTJHd0IsdUJBQTBCOzs7O0lBU2pELHFCQUFPLGFBQUMsVUFBeUIsRUFBRSxNQUFjO3FHQVR0QyxHQUFHO3lHQUFILEdBQUc7Ozs7OztJQUFILEdBQUcsa0JBQUgsR0FBRztjQXpKaEI7RUF5SnlCLDBCQUEwQjtTQUF0QyxHQUFHOzRGQUFILEdBQUc7a0JBRGYsVUFBVTs4QkFVVCxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGVudW0gT0NSU291cmNlVHlwZSB7XG4gIC8qKlxuICAgKiBOb3JtYWwgcHJvY2Vzc2luZyBmcm9tIGEgZmlsZSBVUkwuIFRoaXMgaXMgdGhlIG92ZXJhbGwgcmVjb21tZW5kZWQgY2hvaWNlXG4gICAqIGZvciBtb3N0IGFwcGxpY2F0aW9ucy4gVGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gZmlsZSBhbmQgbmF0aXZlIFVSTHMgaXNcbiAgICogb25seSByZWxldmFudCBvbiBpT1M7IHVuZGVyIEFuZHJvaWQgYE5PUk1GSUxFVVJMYCBhbmQgYE5PUk1OQVRJVkVVUkxgXG4gICAqIGFyZSBpbnRlcmNoYW5nZWFibGUuXG4gICAqL1xuICBOT1JNRklMRVVSTCA9IDAsXG5cbiAgLyoqXG4gICAqIE5vcm1hbCBwcm9jZXNzaW5nIGZyb20gYSBuYXRpdmUgVVJMLiBTaW5jZSB0aGlzIHNvdXJjZSB0eXBlIHVzZXMgZGVwcmVjYXRlZFxuICAgKiBPUyBBUElzIHRvIGludGVyYWN0IHdpdGggdGhlIGNhbWVyYSBwbHVnaW4sIGl0IGlzIGJlc3QgYXZvaWRlZCwgZXNwZWNpYWxseVxuICAgKiBpZiBvbmdvaW5nIGZvcndhcmQgY29tcGF0aWJpbGl0eSBpcyBhIGNvbmNlcm4uIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLCBzZWVcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL05ldXRyaW5vc1BsYXRmb3JtL2NvcmRvdmEtcGx1Z2luLW1vYmlsZS1vY3IjcGx1Z2luLXVzYWdlXG4gICAqIFVuZGVyIEFuZHJvaWQsIHRoaXMgaXMgZXF1aXZhbGVudCB0byBgTk9STUZJTEVVUkxgLlxuICAgKi9cbiAgTk9STU5BVElWRVVSTCA9IDEsXG5cbiAgLyoqXG4gICAqIEZhc3QgcHJvY2Vzc2luZyBmcm9tIGEgZmlsZSBVUkwuIEFzIHRoZSBjb21wcmVzc2lvbiBkb25lIGludGVybmFsbHkgY2F1c2VzXG4gICAqIGEgc2lnbmlmaWNhbnQgbG9zcyBpbiBleHRyYWN0aW9uIHF1YWxpdHksIGl0IHNob3VsZCBvbmx5IGJlIHByZWZlcnJlZCB3aGVuXG4gICAqIGRlYWxpbmcgd2l0aCBsYXJnZSBpbWFnZXMgY29udGFpbmluZyBzaWduaWZpY2FudCBhbW91bnRzIG9mIHRleHQsIHdoZXJlXG4gICAqIHRoZSBleGVjdXRpb24gdGltZSByZXF1aXJlZCB0byBwZXJmb3JtIG5vcm1hbCBwcm9jZXNzaW5nIGlzIHByb2hpYml0aXZlLlxuICAgKiBUaGUgZGlzdGluY3Rpb24gYmV0d2VlbiBmaWxlIGFuZCBuYXRpdmUgVVJMcyBpcyBvbmx5IHJlbGV2YW50IG9uIGlPUztcbiAgICogdW5kZXIgQW5kcm9pZCBgRkFTVEZJTEVVUkxgIGFuZCBgRkFTVE5BVElWRVVSTGAgYXJlIGludGVyY2hhbmdlYWJsZS5cbiAgICovXG4gIEZBU1RGSUxFVVJMID0gMixcblxuICAvKipcbiAgICogRmFzdCBwcm9jZXNzaW5nIGZyb20gYSBuYXRpdmUgVVJMLiBTZWUgY29tbWVudHMgYWJvdmUgZm9yIGBGQVNURklMRVVSTGBcbiAgICogY29uY2VybmluZyBxdWFsaXR5IGxvc3MuXG4gICAqXG4gICAqIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGZpbGUgYW5kIG5hdGl2ZSBVUkxzIGlzIG9ubHkgcmVsZXZhbnQgb24gaU9TO1xuICAgKiB1bmRlciBBbmRyb2lkIGBGQVNURklMRVVSTGAgYW5kIGBGQVNUTkFUSVZFVVJMYCBhcmUgaW50ZXJjaGFuZ2VhYmxlLlxuICAgKi9cbiAgRkFTVE5BVElWRVVSTCA9IDMsXG5cbiAgLyoqXG4gICAqIE5vcm1hbCBwcm9jZXNzaW5nIGZyb20gYSBiYXNlNjQtZW5jb2RlZCBzdHJpbmcuIFF1YWxpdHkgaXMgZXF1aXZhbGVudFxuICAgKiB0byBgTk9STUZJTEVVUkxgLCBidXQgZHVlIHRvIHNpZ25pZmljYW50bHkgaGlnaGVyIG1lbW9yeSByZXF1aXJlbWVudHMsXG4gICAqIGlzIG9ubHkgYXBwcm9wcmlhdGUgZm9yIHVzZSB3aXRoIHZlcnkgc21hbGwgaW1hZ2VzLlxuICAgKi9cbiAgQkFTRTY0ID0gNCxcbn1cblxuLyoqXG4gKiBGb3VyIHBvaW50cyAob3JkZXJlZCBpbiBjbG9ja3dpc2UgZGlyZWN0aW9uKSB0aGF0IGVuY2xvc2UgYSB0ZXh0XG4gKiBjb21wb25lbnQuIE1heSBub3QgYmUgYXhpcy1hbGlnbmVkIGR1ZSB0byBwZXJzcGVjdGl2ZSBza2V3LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9DUkNvcm5lcnMge1xuICB4MTogbnVtYmVyO1xuICB5MTogbnVtYmVyO1xuICB4MjogbnVtYmVyO1xuICB5MjogbnVtYmVyO1xuICB4MzogbnVtYmVyO1xuICB5MzogbnVtYmVyO1xuICB4NDogbnVtYmVyO1xuICB5NDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEFuIGF4aXMtYWxpZ25lZCBib3VuZGluZyByZWN0YW5nbGUuIGB4YCBhbmQgYHlgIHJlcHJlc2VudCB0aGUgdG9wIGxlZnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT0NSUmVjdCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGUgYHJlY1RleHRgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPQ1JSZXN1bHQge1xuICAvKipcbiAgICogV2FzIGFueSB0ZXh0IGV4dHJhY3RlZD8gSWYgYGZvdW5kVGV4dGAgaXMgZmFsc2UsIG5vIG90aGVyIGZpZWxkcyBhcmVcbiAgICogcmV0dXJuZWQuIElmIGZvdW5kVGV4dCBpcyB0cnVlLCBhbGwgb3RoZXIgZmllbGRzIGFyZSByZWxpYWJsZS5cbiAgICovXG4gIGZvdW5kVGV4dDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBibG9jayBpcyB0aGUgbGFyZ2VzdCB1bml0IG9mIHRleHQsIHdoaWNoIGNhbiBiZSB0aG91Z2h0IG9mIGFzIGEgcGFyYWdyYXBoLlxuICAgKiBUaGlzIGZpZWxkIGNvbnNpc3RzIG9mIHNldmVyYWwgcGFyYWxsZWwgYXJyYXlzLCBzbyB0aGUgdGV4dCBpbiBgYmxvY2t0ZXh0WzBdYFxuICAgKiBpcyBib3VuZGVkIGJ5IGBibG9ja3BvaW50c1swXWAgYW5kIGBibG9ja2ZyYW1lWzBdYC5cbiAgICovXG4gIGJsb2Nrczoge1xuICAgIGJsb2NrdGV4dDogc3RyaW5nW107XG4gICAgYmxvY2twb2ludHM6IE9DUkNvcm5lcnNbXTtcbiAgICBibG9ja2ZyYW1lOiBPQ1JSZWN0W107XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgbGluZSBpcyB0aGUgY2VudHJhbCB1bml0IG9mIHRleHQsIGNvbnRhaW5pbmcgc2V2ZXJhbCBlbGVtZW50cy4gQSBibG9ja1xuICAgKiBjYW4gY29udGFpbiBOIGxpbmVzLiBUaGlzIGZpZWxkIGNvbnNpc3RzIG9mIHNldmVyYWwgcGFyYWxsZWwgYXJyYXlzLCBzbyB0aGVcbiAgICogdGV4dCBpbiBgbGluZXRleHRbMF1gIGlzIGJvdW5kZWQgYnkgYGxpbmVwb2ludHNbMF1gIGFuZCBgbGluZWZyYW1lWzBdYC5cbiAgICovXG4gIGxpbmVzOiB7XG4gICAgbGluZXRleHQ6IHN0cmluZ1tdO1xuICAgIGxpbmVwb2ludHM6IE9DUkNvcm5lcnNbXTtcbiAgICBsaW5lZnJhbWU6IE9DUlJlY3RbXTtcbiAgfTtcblxuICAvKipcbiAgICogQSB3b3JkIChvciBlbGVtZW50KSBpcyB0aGUgc21hbGxlc3QgdW5pdCBvZiB0ZXh0LiBUaGlzIGZpZWxkIGNvbnNpc3RzIG9mXG4gICAqIHNldmVyYWwgcGFyYWxsZWwgYXJyYXlzLCBzbyB0aGUgdGV4dCBpbiBgd29yZHRleHRbMF1gIGlzIGJvdW5kZWQgYnlcbiAgICogYHdvcmRwb2ludHNbMF1gIGFuZCBgd29yZGZyYW1lWzBdYC5cbiAgICovXG4gIHdvcmRzOiB7XG4gICAgd29yZHRleHQ6IHN0cmluZ1tdO1xuICAgIHdvcmRwb2ludHM6IE9DUkNvcm5lcnNbXTtcbiAgICB3b3JkZnJhbWU6IE9DUlJlY3RbXTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAbmFtZSBPQ1JcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYXR0ZW1wdHMgdG8gaWRlbnRpZnkgYW5kIGV4dHJhY3QgdGV4dCBmcm9tIGFuIGltYWdlLlxuICogUGxlYXNlIG5vdGU6IFRoaXMgcGx1Z2luIGRlcGVuZHMgb24gdGhlIEdvb2dsZU1vYmlsZVZpc2lvbiBwb2Qgd2hpY2ggaXMgcmVmZXJlbmNpbmcgVUlXZWJ2aWV3LCB0aGF0IGhhcyBiZWVuIGRlcHJlY2F0ZWQgYnkgQXBwbGUuXG4gKiBEb24ndCB1c2UgdGhpcyBwbHVnaW4gaW4gYW4gYXBwIGludGVuZGVkIGZvciBBcHAgU3RvcmUgYXMgeW91IHdpbGwgZ2V0IGEgcmV2aWV3IHJlamVjdGlvbiBmcm9tIEFwcGxlOiBgRGVwcmVjYXRlZCBBUEkgVXNhZ2Ug4oCUIEFwcGxlIHdpbGwgc3RvcCBhY2NlcHRpbmcgc3VibWlzc2lvbnMgb2YgYXBwcyB0aGF0IHVzZSBVSVdlYlZpZXcgQVBJc2BcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIGZvbGxvd2luZyBHaXRodWIgaXNzdWUgW0dvb2dsZSBNb2JpbGUgVmlzaW9uIHJlbHlpbmcgb24gZGVwcmVjYXRlZCBVSVdlYnZpZXddKGh0dHBzOi8vZ2l0aHViLmNvbS9OZXV0cmlub3NQbGF0Zm9ybS9jb3Jkb3ZhLXBsdWdpbi1tb2JpbGUtb2NyL2lzc3Vlcy8yNykuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE9DUiwgT0NSU291cmNlVHlwZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9vY3Ivbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBvY3I6IE9DUikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5vY3IucmVjVGV4dChPQ1JTb3VyY2VUeXBlLk5PUk1GSUxFVVJMLCBcImZpbGU6Ly9wYXRoL3RvL2ltYWdlLnBuZ1wiKVxuICogICAudGhlbigocmVzOiBPQ1JSZXN1bHQpID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBPQ1JDb3JuZXJzXG4gKiBPQ1JSZWN0XG4gKiBPQ1JSZXN1bHRcbiAqIEBlbnVtc1xuICogT0NSU291cmNlVHlwZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ09DUicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1vYmlsZS1vY3InLFxuICBwbHVnaW5SZWY6ICd0ZXh0b2NyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OZXV0cmlub3NQbGF0Zm9ybS9jb3Jkb3ZhLXBsdWdpbi1tb2JpbGUtb2NyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9DUiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEV4dHJhY3QgdGV4dCBmcm9tIGltYWdlXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2VUeXBlIHtPQ1JTb3VyY2VUeXBlfSB0eXBlIG9mIGltYWdlIHNvdXJjZVxuICAgKiBAcGFyYW0gc291cmNlIHtzdHJpbmd9IGltYWdlIHNvdXJjZSAoZWl0aGVyIGZpbGUgVVJMIG9yIGJhc2U2NCBzdHJpbmcpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9DUlJlc3VsdD59IGV4dHJhY3RlZCB0ZXh0IGFuZCBnZW9tZXRyeVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWNUZXh0KHNvdXJjZVR5cGU6IE9DUlNvdXJjZVR5cGUsIHNvdXJjZTogc3RyaW5nKTogUHJvbWlzZTxPQ1JSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==