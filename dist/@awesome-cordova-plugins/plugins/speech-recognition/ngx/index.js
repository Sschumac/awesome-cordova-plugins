import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var SpeechRecognition = /** @class */ (function (_super) {
    __extends(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechRecognition.prototype.isRecognitionAvailable = function () { return cordova(this, "isRecognitionAvailable", {}, arguments); };
    SpeechRecognition.prototype.startListening = function (options) { return cordova(this, "startListening", { "callbackOrder": "reverse", "observable": true }, arguments); };
    SpeechRecognition.prototype.stopListening = function () { return cordova(this, "stopListening", {}, arguments); };
    SpeechRecognition.prototype.getSupportedLanguages = function () { return cordova(this, "getSupportedLanguages", {}, arguments); };
    SpeechRecognition.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SpeechRecognition.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SpeechRecognition.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SpeechRecognition, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SpeechRecognition.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SpeechRecognition });
    SpeechRecognition.pluginName = "SpeechRecognition";
    SpeechRecognition.plugin = "cordova-plugin-speechrecognition";
    SpeechRecognition.pluginRef = "plugins.speechRecognition";
    SpeechRecognition.repo = "https://github.com/pbakondy/cordova-plugin-speechrecognition";
    SpeechRecognition.platforms = ["Android", "iOS"];
    SpeechRecognition = __decorate([], SpeechRecognition);
    return SpeechRecognition;
}(AwesomeCordovaNativePlugin));
export { SpeechRecognition };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SpeechRecognition, decorators: [{
            type: Injectable
        }], propDecorators: { isRecognitionAvailable: [], startListening: [], stopListening: [], getSupportedLanguages: [], hasPermission: [], requestPermission: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3BlZWNoLXJlY29nbml0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQTBHSyxxQ0FBMEI7Ozs7SUFPL0Qsa0RBQXNCO0lBY3RCLDBDQUFjLGFBQUMsT0FBMkM7SUFRMUQseUNBQWE7SUFVYixpREFBcUI7SUFVckIseUNBQWE7SUFVYiw2Q0FBaUI7bUhBM0ROLGlCQUFpQjt1SEFBakIsaUJBQWlCOzs7Ozs7SUFBakIsaUJBQWlCLGtCQUFqQixpQkFBaUI7NEJBNUc5QjtFQTRHdUMsMEJBQTBCO1NBQXBELGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOzhCQVFULHNCQUFzQixNQWN0QixjQUFjLE1BUWQsYUFBYSxNQVViLHFCQUFxQixNQVVyQixhQUFhLE1BVWIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zID1cbiAgfCBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNJT1NcbiAgfCBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNBbmRyb2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwZWVjaFJlY29nbml0aW9uTGlzdGVuaW5nT3B0aW9uc0lPUyB7XG4gIC8qKlxuICAgKiB1c2VkIGxhbmd1YWdlIGZvciByZWNvZ25pdGlvbiAoZGVmYXVsdCBgXCJlbi1VU1wiYClcbiAgICovXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB1bWJlciBvZiByZXR1cm4gbWF0Y2hlcyAoZGVmYXVsdCBgNWApXG4gICAqL1xuICBtYXRjaGVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBwYXJ0aWFsIHJlc3VsdHMgdG8gYmUgcmV0dXJuZWQgKGRlZmF1bHQgYGZhbHNlYClcbiAgICovXG4gIHNob3dQYXJ0aWFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcGVlY2hSZWNvZ25pdGlvbkxpc3RlbmluZ09wdGlvbnNBbmRyb2lkIHtcbiAgLyoqXG4gICAqIHVzZWQgbGFuZ3VhZ2UgZm9yIHJlY29nbml0aW9uIChkZWZhdWx0IGBcImVuLVVTXCJgKVxuICAgKi9cbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIG51bWJlciBvZiByZXR1cm4gbWF0Y2hlcyAobWF4aW11bSBudW1iZXIgb2YgbWF0Y2hlcylcbiAgICovXG4gIG1hdGNoZXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGRpc3BsYXllZCBwcm9tcHQgb2YgbGlzdGVuZXIgcG9wdXAgd2luZG93XG4gICAqL1xuICBwcm9tcHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGRpc3BsYXkgbGlzdGVuZXIgcG9wdXAgd2luZG93IHdpdGggcHJvbXB0IChkZWZhdWx0IGB0cnVlYClcbiAgICovXG4gIHNob3dQb3B1cD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93IHBhcnRpYWwgcmVzdWx0cyB0byBiZSByZXR1cm5lZCAoZGVmYXVsdCBgZmFsc2VgKVxuICAgKi9cbiAgc2hvd1BhcnRpYWw/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIFNwZWVjaCBSZWNvZ25pdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNwZWVjaCByZWNvZ25pdGlvbiB1c2luZyBjbG91ZCBzZXJ2aWNlc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zcGVlY2gtcmVjb2duaXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwZWVjaFJlY29nbml0aW9uOiBTcGVlY2hSZWNvZ25pdGlvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqXG4gKiAvLyBDaGVjayBmZWF0dXJlIGF2YWlsYWJsZVxuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5pc1JlY29nbml0aW9uQXZhaWxhYmxlKClcbiAqICAgLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXZhaWxhYmxlKSlcbiAqXG4gKiAvLyBTdGFydCB0aGUgcmVjb2duaXRpb24gcHJvY2Vzc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyhvcHRpb25zKVxuICogICAuc3Vic2NyaWJlKFxuICogICAgIChtYXRjaGVzOiBzdHJpbmdbXSkgPT4gY29uc29sZS5sb2cobWF0Y2hlcyksXG4gKiAgICAgKG9uZXJyb3IpID0+IGNvbnNvbGUubG9nKCdlcnJvcjonLCBvbmVycm9yKVxuICogICApXG4gKlxuICogLy8gU3RvcCB0aGUgcmVjb2duaXRpb24gcHJvY2VzcyAoaU9TIG9ubHkpXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0b3BMaXN0ZW5pbmcoKVxuICpcbiAqIC8vIEdldCB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmdldFN1cHBvcnRlZExhbmd1YWdlcygpXG4gKiAgIC50aGVuKFxuICogICAgIChsYW5ndWFnZXM6IHN0cmluZ1tdKSA9PiBjb25zb2xlLmxvZyhsYW5ndWFnZXMpLFxuICogICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gKiAgIClcbiAqXG4gKiAvLyBDaGVjayBwZXJtaXNzaW9uXG4gKiB0aGlzLnNwZWVjaFJlY29nbml0aW9uLmhhc1Blcm1pc3Npb24oKVxuICogICAudGhlbigoaGFzUGVybWlzc2lvbjogYm9vbGVhbikgPT4gY29uc29sZS5sb2coaGFzUGVybWlzc2lvbikpXG4gKlxuICogLy8gUmVxdWVzdCBwZXJtaXNzaW9uc1xuICogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gKiAgIC50aGVuKFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdHcmFudGVkJyksXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ0RlbmllZCcpXG4gKiAgIClcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTcGVlY2hSZWNvZ25pdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNwZWVjaHJlY29nbml0aW9uJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zcGVlY2hSZWNvZ25pdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGJha29uZHkvY29yZG92YS1wbHVnaW4tc3BlZWNocmVjb2duaXRpb24nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBmZWF0dXJlIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNSZWNvZ25pdGlvbkF2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHJlY29nbml0aW9uIHByb2Nlc3NcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8IHN0cmluZ1tdID59IGxpc3Qgb2YgcmVjb2duaXplZCB0ZXJtc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBzdGFydExpc3RlbmluZyhvcHRpb25zPzogU3BlZWNoUmVjb2duaXRpb25MaXN0ZW5pbmdPcHRpb25zKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSByZWNvZ25pdGlvbiBwcm9jZXNzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BMaXN0ZW5pbmcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPCBzdHJpbmdbXSA+fSBsaXN0IG9mIGxhbmd1YWdlc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTdXBwb3J0ZWRMYW5ndWFnZXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBoYXMgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==