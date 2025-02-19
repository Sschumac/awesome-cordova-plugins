'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

exports.OCRSourceType = void 0;
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
})(exports.OCRSourceType || (exports.OCRSourceType = {}));
var OCR = /** @class */ (function (_super) {
    tslib.__extends(OCR, _super);
    function OCR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OCR.prototype.recText = function (sourceType, source) { return core.cordova(this, "recText", {}, arguments); };
    OCR.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OCR, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OCR.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OCR });
    OCR.pluginName = "OCR";
    OCR.plugin = "cordova-plugin-mobile-ocr";
    OCR.pluginRef = "textocr";
    OCR.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr";
    OCR.platforms = ["Android", "iOS"];
    OCR = tslib.__decorate([], OCR);
    return OCR;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OCR, decorators: [{
            type: i0.Injectable
        }], propDecorators: { recText: [] } });

exports.OCR = OCR;
