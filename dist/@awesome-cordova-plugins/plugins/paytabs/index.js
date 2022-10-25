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
/**
 * TokeniseType: define the behaviour of of saving card option inside the SDKs.
 */
export var TokeniseType;
(function (TokeniseType) {
    /**
     * none: tokenise is off
     */
    TokeniseType["none"] = "none";
    /**
     * merchantMandatory: tokenise is forced
     */
    TokeniseType["merchantMandatory"] = "merchantMandatory";
    /**
     * userMandatory: tokenise is forced as per user approval
     */
    TokeniseType["userMandatory"] = "userMandatory";
    /**
     * userOptinoal: tokenise if optional as per user approval
     */
    TokeniseType["userOptinoal"] = "userOptinoal";
})(TokeniseType || (TokeniseType = {}));
/**
 * TokeniseFromat: the returned token format
 */
export var TokeniseFromat;
(function (TokeniseFromat) {
    /**
     * none: no format
     */
    TokeniseFromat["none"] = "1";
    /**
     * hex32: Hex with 32 length
     */
    TokeniseFromat["hex32"] = "2";
    /**
     * alphaNum20: alpha numeric 20 length
     */
    TokeniseFromat["alphaNum20"] = "3";
    /**
     * digit22: digits with 22 length
     */
    TokeniseFromat["digit22"] = "3";
    /**
     * digit16: digits with 16 length
     */
    TokeniseFromat["digit16"] = "5";
    /**
     * alphaNum32: alpha numeric 32 length
     */
    TokeniseFromat["alphaNum32"] = "6";
})(TokeniseFromat || (TokeniseFromat = {}));
/**
 * TransactionType
 */
export var TransactionType;
(function (TransactionType) {
    /**
     * sale
     */
    TransactionType["sale"] = "sale";
    /**
     * authorize / capture option
     */
    TransactionType["authorize"] = "auth";
})(TransactionType || (TransactionType = {}));
/**
 * TransactionClass
 */
export var TransactionClass;
(function (TransactionClass) {
    /**
     * ecom: default transaction
     */
    TransactionClass["ecom"] = "ecom";
    /**
     * recurring: recurring transaction
     */
    TransactionClass["recurring"] = "recur";
})(TransactionClass || (TransactionClass = {}));
/**
 * AlternativePaymentMethod
 */
export var AlternativePaymentMethod;
(function (AlternativePaymentMethod) {
    /**
     * unionpay: for supporting payment with unionpay
     */
    AlternativePaymentMethod["unionPay"] = "unionpay";
    /**
     * stcpay: for supporting payment with stcpay
     */
    AlternativePaymentMethod["stcPay"] = "stcpay";
    /**
     * valu: for supporting payment with valu
     */
    AlternativePaymentMethod["valu"] = "valu";
    /**
     * meezaqr: for supporting payment with meezaqr
     */
    AlternativePaymentMethod["meezaQR"] = "meezaqr";
    /**
     * omannet: for supporting payment with omannet
     */
    AlternativePaymentMethod["omannet"] = "omannet";
    /**
     * knetcredit: for supporting payment with knetcredit
     */
    AlternativePaymentMethod["knetCredit"] = "knetcredit";
    /**
     * knetdebit: for supporting payment with knetdebit
     */
    AlternativePaymentMethod["knetDebit"] = "knetdebit";
    /**
     * fawry: for supporting payment with fawry
     */
    AlternativePaymentMethod["fawry"] = "fawry";
})(AlternativePaymentMethod || (AlternativePaymentMethod = {}));
var PayTabsOriginal = /** @class */ (function (_super) {
    __extends(PayTabsOriginal, _super);
    function PayTabsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayTabsOriginal.prototype.startCardPayment = function (configuration) { return cordova(this, "startCardPayment", {}, arguments); };
    PayTabsOriginal.prototype.startApplePayPayment = function (configuration) { return cordova(this, "startApplePayPayment", {}, arguments); };
    PayTabsOriginal.prototype.startAlternativePaymentMethod = function (configuration) { return cordova(this, "startAlternativePaymentMethod", {}, arguments); };
    PayTabsOriginal.pluginName = "PayTabs";
    PayTabsOriginal.plugin = "com.paytabs.cordova.plugin";
    PayTabsOriginal.pluginRef = "com.paytabs.cordova.plugin";
    PayTabsOriginal.repo = "https://github.com/paytabscom/paytabs-cordova";
    PayTabsOriginal.platforms = ["Android", "iOS"];
    return PayTabsOriginal;
}(AwesomeCordovaNativePlugin));
var PayTabs = new PayTabsOriginal();
export { PayTabs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGF5dGFicy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBa1I1Rjs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFlBaUJYO0FBakJELFdBQVksWUFBWTtJQUN0Qjs7T0FFRztJQUNILDZCQUFhLENBQUE7SUFDYjs7T0FFRztJQUNILHVEQUF1QyxDQUFBO0lBQ3ZDOztPQUVHO0lBQ0gsK0NBQStCLENBQUE7SUFDL0I7O09BRUc7SUFDSCw2Q0FBNkIsQ0FBQTtBQUMvQixDQUFDLEVBakJXLFlBQVksS0FBWixZQUFZLFFBaUJ2QjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksY0F5Qlg7QUF6QkQsV0FBWSxjQUFjO0lBQ3hCOztPQUVHO0lBQ0gsNEJBQVUsQ0FBQTtJQUNWOztPQUVHO0lBQ0gsNkJBQVcsQ0FBQTtJQUNYOztPQUVHO0lBQ0gsa0NBQWdCLENBQUE7SUFDaEI7O09BRUc7SUFDSCwrQkFBYSxDQUFBO0lBQ2I7O09BRUc7SUFDSCwrQkFBYSxDQUFBO0lBQ2I7O09BRUc7SUFDSCxrQ0FBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBekJXLGNBQWMsS0FBZCxjQUFjLFFBeUJ6QjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZUFTWDtBQVRELFdBQVksZUFBZTtJQUN6Qjs7T0FFRztJQUNILGdDQUFhLENBQUE7SUFDYjs7T0FFRztJQUNILHFDQUFrQixDQUFBO0FBQ3BCLENBQUMsRUFUVyxlQUFlLEtBQWYsZUFBZSxRQVMxQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZ0JBU1g7QUFURCxXQUFZLGdCQUFnQjtJQUMxQjs7T0FFRztJQUNILGlDQUFhLENBQUE7SUFDYjs7T0FFRztJQUNILHVDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFUVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBUzNCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSx3QkFpQ1g7QUFqQ0QsV0FBWSx3QkFBd0I7SUFDbEM7O09BRUc7SUFDSCxpREFBcUIsQ0FBQTtJQUNyQjs7T0FFRztJQUNILDZDQUFpQixDQUFBO0lBQ2pCOztPQUVHO0lBQ0gseUNBQWEsQ0FBQTtJQUNiOztPQUVHO0lBQ0gsK0NBQW1CLENBQUE7SUFDbkI7O09BRUc7SUFDSCwrQ0FBbUIsQ0FBQTtJQUNuQjs7T0FFRztJQUNILHFEQUF5QixDQUFBO0lBQ3pCOztPQUVHO0lBQ0gsbURBQXVCLENBQUE7SUFDdkI7O09BRUc7SUFDSCwyQ0FBZSxDQUFBO0FBQ2pCLENBQUMsRUFqQ1csd0JBQXdCLEtBQXhCLHdCQUF3QixRQWlDbkM7O0lBNEQ0QiwyQkFBMEI7Ozs7SUFTckQsa0NBQWdCLGFBQUMsYUFBc0M7SUFXdkQsc0NBQW9CLGFBQUMsYUFBc0M7SUFXM0QsK0NBQTZCLGFBQUMsYUFBc0M7Ozs7OztrQkFsZXRFO0VBbWM2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogUGF5bWVudFNES0NvbmZpZ3VyYXRpb246IHBheW1lbnQgcmVxdWVzdCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudFNES0NvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogbWVyY2hhbnQgcHJvZmlsZSBpZFxuICAgKi9cbiAgcHJvZmlsZUlEOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBtZXJjaGFudCBzZXJ2ZXIga2V5XG4gICAqL1xuICBzZXJ2ZXJLZXk6IHN0cmluZztcbiAgLyoqXG4gICAqIG1lcmNoYW50IGNsaWVudCBrZXlcbiAgICovXG4gIGNsaWVudEtleTogc3RyaW5nO1xuICAvKipcbiAgICogdHJhbnNhY3Rpb24gdHlwZTogcmVmZXIgdG8gVHJhbnNhY3Rpb25UeXBlIGVudW1cbiAgICovXG4gIHRyYW5zYWN0aW9uVHlwZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHRyYW5zYWN0aW9uIGNsYXNzOiByZWZlciB0byBUcmFuc2FjdGlvbkNsYXNzIGVudW1cbiAgICovXG4gIHRyYW5zYWN0aW9uQ2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBvcmRlciBvciBjYXJ0IGlkXG4gICAqL1xuICBjYXJ0SUQ6IHN0cmluZztcbiAgLyoqXG4gICAqIHBheW1lbnQgY3VycmVuY3lcbiAgICovXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbW91bnRcbiAgICovXG4gIGFtb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogb3JkZXIgb3IgY2FydCBkZXNjcmlwdGlvblxuICAgKi9cbiAgY2FydERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8qKlxuICAgKiB1c2VyIGludGVyZmFjZSBsYW5ndWFnZSBjb2RlKGVuLCBhciwgLi4pXG4gICAqL1xuICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB2YWxpZGF0ZSBzaGlwcGluZyBpbmZvXG4gICAqL1xuICBmb3JjZVNoaXBwaW5nSW5mbz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB2YWxpZGF0ZSBiaWxsaW5nIGluZm9cbiAgICovXG4gIHNob3dCaWxsaW5nSW5mbz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBoYW5kbGUgbWlzc2luZyBzaGlwcGluZyBpbmZvIGJ5IHNob3dpbmcgc2hpcHBpbmcgaW5mbyBzZWN0aW9uXG4gICAqL1xuICBzaG93U2hpcHBpbmdJbmZvPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGNvbmZpZ3VyZWQgYmlsbGluZyBkZXRhaWxzXG4gICAqL1xuICBiaWxsaW5nRGV0YWlscz86IFBheW1lbnRTREtCaWxsaW5nRGV0YWlscztcbiAgLyoqXG4gICAqIGNvbmZpZ3VyZWQgc2hpcHBpbmcgZGV0YWlsc1xuICAgKi9cbiAgc2hpcHBpbmdEZXRhaWxzPzogUGF5bWVudFNES1NoaXBwaW5nRGV0YWlscztcbiAgLyoqXG4gICAqIG1lcmNoYW50IGNvdW50cnkgY29kZVxuICAgKi9cbiAgbWVyY2hhbnRDb3VudHJ5Q29kZTogc3RyaW5nO1xuICAvKipcbiAgICogdGl0bGUgb2YgdGhlIHNjcmVlblxuICAgKi9cbiAgc2NyZWVuVGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBtZXJjaGFudCBuYW1lXG4gICAqL1xuICBtZXJjaGFudE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzZXJ2ZXIgaXBcbiAgICovXG4gIHNlcnZlcklQPzogc3RyaW5nO1xuICAvKipcbiAgICogdG9rZW5pc2UgdHlwZTogcmVmZXIgdG8gVG9rZWlzZVR5cGUgZW51bVxuICAgKi9cbiAgdG9rZW5pc2VUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgICogdG9rZW4gZm9ybWF0OiByZWZlciB0byBUb2tlaXNlRm9ybWF0IGVudW1cbiAgICovXG4gIHRva2VuRm9ybWF0Pzogc3RyaW5nO1xuICAvKipcbiAgICogb3B0aW9uIHRvIGhpZGUgb3Igc2hvdyBjYXJkIHNjYW5uZXIgYnV0dG9uXG4gICAqL1xuICBoaWRlQ2FyZFNjYW5uZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBtZXJjaGFudCBhcHBsZSBwYXkgYnVuZGxlIGlkXG4gICAqL1xuICBtZXJjaGFudEFwcGxlUGF5SWRlbnRpZmllcj86IHN0cmluZztcbiAgLyoqXG4gICAqIG1pbml6ZSB0aGUgdmxhaWRhdGlvbiBvbiBhcHBsZSBwYXkgYmlsbGluZyBhbmQgc2hpcHBpbmcgaW5mb1xuICAgKi9cbiAgc2ltcGxpZnlBcHBsZVBheVZhbGlkYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdXBwb3J0ZWQgYXBwbGUgcGF5IG5ldHdvcmtzXG4gICAqL1xuICBzdXBwb3J0ZWRBcHBsZVBheU5ldHdvcmtzPzogW3N0cmluZ107XG4gIC8qKlxuICAgKiByZXR1cm5lZCB0b2tlblxuICAgKi9cbiAgdG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiByZXR1cm5lZCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcbiAgICovXG4gIHRyYW5zYWN0aW9uUmVmZXJlbmNlPzogc3RyaW5nO1xuICAvKipcbiAgICogc2Ftc3VuZyBUb2tlblxuICAgKi9cbiAgc2Ftc3VuZ1Rva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogY3VzdG9taXplZCB0aGVtZVxuICAgKi9cbiAgdGhlbWU/OiBQYXltZW50U0RLVGhlbWU7XG4gIC8qKlxuICAgKiBsaXN0IG9mIGFsdGVybmF0aXZlIHBheW1lbnQgbWV0aG9kc1xuICAgKi9cbiAgYWx0ZXJuYXRpdmVQYXltZW50TWV0aG9kcz86IFtzdHJpbmddO1xufVxuXG4vKipcbiAqIFBheW1lbnRTREtCaWxsaW5nRGV0YWlsc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnRTREtCaWxsaW5nRGV0YWlscyB7XG4gIC8qKlxuICAgKiBiaWxsaW5nOiBjdXN0b21lciBuYW1lXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogYmlsbGluZzogY3VzdG9tZXIgZW1haWxcbiAgICovXG4gIGVtYWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogYmlsbGluZzogY3VzdG9tZXIgcGhvbmVcbiAgICovXG4gIHBob25lPzogc3RyaW5nO1xuICAvKipcbiAgICogYmlsbGluZzogY3VzdG9tZXIgYWRkcmVzcyBsaW5lXG4gICAqL1xuICBhZGRyZXNzTGluZT86IHN0cmluZztcbiAgLyoqXG4gICAqIGJpbGxpbmc6IGN1c3RvbWVyIGNpdHlcbiAgICovXG4gIGNpdHk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBiaWxsaW5nOiBjdXN0b21lciBzdGF0ZVxuICAgKi9cbiAgc3RhdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBiaWxsaW5nOiBjdXN0b21lciBjb3VudHJ5IGNvZGVcbiAgICovXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogYmlsbGluZzogY3VzdG9tZXIgemlwIGNvZGVcbiAgICovXG4gIHppcD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBQYXltZW50U0RLU2hpcHBpbmdEZXRhaWxzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudFNES1NoaXBwaW5nRGV0YWlscyB7XG4gIC8qKlxuICAgKiAgc2hpcHBpbmc6IGN1c3RvbWVyIG5hbWVcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzaGlwcGluZzogY3VzdG9tZXIgZW1haWxcbiAgICovXG4gIGVtYWlsPzogc3RyaW5nO1xuICAvKipcbiAgICogc2hpcHBpbmc6IGN1c3RvbWVyIHBob25lXG4gICAqL1xuICBwaG9uZT86IHN0cmluZztcbiAgLyoqXG4gICAqIHNoaXBwaW5nOiBjdXN0b21lciBhZGRyZXNzIGxpbmVcbiAgICovXG4gIGFkZHJlc3NMaW5lPzogc3RyaW5nO1xuICAvKipcbiAgICogc2hpcHBpbmc6IGN1c3RvbWVyIGNpdHlcbiAgICovXG4gIGNpdHk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzaGlwcGluZzogY3VzdG9tZXIgc3RhdGVcbiAgICovXG4gIHN0YXRlPzogc3RyaW5nO1xuICAvKipcbiAgICogc2hpcHBpbmc6IGN1c3RvbWVyIGNvdW50cnkgY29kZVxuICAgKi9cbiAgY291bnRyeUNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzaGlwcGluZzogY3VzdG9tZXIgemlwIGNvZGVcbiAgICovXG4gIHppcD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBQYXltZW50U0RLVGhlbWVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXltZW50U0RLVGhlbWUge1xuICAvKipcbiAgICogdGhlbWU6IHByaW1hcnkgY29sb3JcbiAgICovXG4gIHByaW1hcnlDb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZW1lOiBwcmltYXJ5IGZvbnQgY29sb3JcbiAgICovXG4gIHByaW1hcnlGb250Q29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGVtZTogcHJpbWFyeSBmb250XG4gICAqL1xuICBwcmltYXJ5Rm9udD86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZW1lOiBzZWNvbmRhcnkgY29sb3JcbiAgICovXG4gIHNlY29uZGFyeUNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlbWU6IHNlY29uZGFyeSBmb250IGNvbG9yXG4gICAqL1xuICBzZWNvbmRhcnlGb250Q29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGVtZTogc2Vjb25kYXJ5IGZvbnRcbiAgICovXG4gIHNlY29uZGFyeUZvbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGVtZTogc3Ryb2tlIGNvbG9yXG4gICAqL1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZW1lOiBwcmltYXJ5IGNvbG9yXG4gICAqL1xuICBzdHJva2VUaGluY2tuZXNzPzogbnVtYmVyO1xuICAvKipcbiAgICogdGhlbWU6IGlucHV0IGNvcm5lciByYWRpdXNcbiAgICovXG4gIGlucHV0c0Nvcm5lclJhZGl1cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIHRoZW1lOiBidXR0b24gY29sb3JcbiAgICovXG4gIGJ1dHRvbkNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlbWU6IGJ1dHRvbiBmb250IGNvbG9yXG4gICAqL1xuICBidXR0b25Gb250Q29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGVtZTogYnV0dG9uIGZvbnRcbiAgICovXG4gIGJ1dHRvbkZvbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGVtZTogdGl0bGUgZm9udCBjb2xvclxuICAgKi9cbiAgdGl0bGVGb250Q29sb3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiB0aGVtZTogdGl0bGUgZm9udFxuICAgKi9cbiAgdGl0bGVGb250Pzogc3RyaW5nO1xuICAvKipcbiAgICogdGhlbWU6IGJhY2tncm91bmQgY29sb3JcbiAgICovXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIHRoZW1lOiBwbGFjZWhvbGRlciBjb2xvclxuICAgKi9cbiAgcGxhY2Vob2xkZXJDb2xvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBUb2tlbmlzZVR5cGU6IGRlZmluZSB0aGUgYmVoYXZpb3VyIG9mIG9mIHNhdmluZyBjYXJkIG9wdGlvbiBpbnNpZGUgdGhlIFNES3MuXG4gKi9cbmV4cG9ydCBlbnVtIFRva2VuaXNlVHlwZSB7XG4gIC8qKlxuICAgKiBub25lOiB0b2tlbmlzZSBpcyBvZmZcbiAgICovXG4gIG5vbmUgPSAnbm9uZScsXG4gIC8qKlxuICAgKiBtZXJjaGFudE1hbmRhdG9yeTogdG9rZW5pc2UgaXMgZm9yY2VkXG4gICAqL1xuICBtZXJjaGFudE1hbmRhdG9yeSA9ICdtZXJjaGFudE1hbmRhdG9yeScsXG4gIC8qKlxuICAgKiB1c2VyTWFuZGF0b3J5OiB0b2tlbmlzZSBpcyBmb3JjZWQgYXMgcGVyIHVzZXIgYXBwcm92YWxcbiAgICovXG4gIHVzZXJNYW5kYXRvcnkgPSAndXNlck1hbmRhdG9yeScsXG4gIC8qKlxuICAgKiB1c2VyT3B0aW5vYWw6IHRva2VuaXNlIGlmIG9wdGlvbmFsIGFzIHBlciB1c2VyIGFwcHJvdmFsXG4gICAqL1xuICB1c2VyT3B0aW5vYWwgPSAndXNlck9wdGlub2FsJyxcbn1cblxuLyoqXG4gKiBUb2tlbmlzZUZyb21hdDogdGhlIHJldHVybmVkIHRva2VuIGZvcm1hdFxuICovXG5leHBvcnQgZW51bSBUb2tlbmlzZUZyb21hdCB7XG4gIC8qKlxuICAgKiBub25lOiBubyBmb3JtYXRcbiAgICovXG4gIG5vbmUgPSAnMScsXG4gIC8qKlxuICAgKiBoZXgzMjogSGV4IHdpdGggMzIgbGVuZ3RoXG4gICAqL1xuICBoZXgzMiA9ICcyJyxcbiAgLyoqXG4gICAqIGFscGhhTnVtMjA6IGFscGhhIG51bWVyaWMgMjAgbGVuZ3RoXG4gICAqL1xuICBhbHBoYU51bTIwID0gJzMnLFxuICAvKipcbiAgICogZGlnaXQyMjogZGlnaXRzIHdpdGggMjIgbGVuZ3RoXG4gICAqL1xuICBkaWdpdDIyID0gJzMnLFxuICAvKipcbiAgICogZGlnaXQxNjogZGlnaXRzIHdpdGggMTYgbGVuZ3RoXG4gICAqL1xuICBkaWdpdDE2ID0gJzUnLFxuICAvKipcbiAgICogYWxwaGFOdW0zMjogYWxwaGEgbnVtZXJpYyAzMiBsZW5ndGhcbiAgICovXG4gIGFscGhhTnVtMzIgPSAnNicsXG59XG5cbi8qKlxuICogVHJhbnNhY3Rpb25UeXBlXG4gKi9cbmV4cG9ydCBlbnVtIFRyYW5zYWN0aW9uVHlwZSB7XG4gIC8qKlxuICAgKiBzYWxlXG4gICAqL1xuICBzYWxlID0gJ3NhbGUnLFxuICAvKipcbiAgICogYXV0aG9yaXplIC8gY2FwdHVyZSBvcHRpb25cbiAgICovXG4gIGF1dGhvcml6ZSA9ICdhdXRoJyxcbn1cblxuLyoqXG4gKiBUcmFuc2FjdGlvbkNsYXNzXG4gKi9cbmV4cG9ydCBlbnVtIFRyYW5zYWN0aW9uQ2xhc3Mge1xuICAvKipcbiAgICogZWNvbTogZGVmYXVsdCB0cmFuc2FjdGlvblxuICAgKi9cbiAgZWNvbSA9ICdlY29tJyxcbiAgLyoqXG4gICAqIHJlY3VycmluZzogcmVjdXJyaW5nIHRyYW5zYWN0aW9uXG4gICAqL1xuICByZWN1cnJpbmcgPSAncmVjdXInLFxufVxuXG4vKipcbiAqIEFsdGVybmF0aXZlUGF5bWVudE1ldGhvZFxuICovXG5leHBvcnQgZW51bSBBbHRlcm5hdGl2ZVBheW1lbnRNZXRob2Qge1xuICAvKipcbiAgICogdW5pb25wYXk6IGZvciBzdXBwb3J0aW5nIHBheW1lbnQgd2l0aCB1bmlvbnBheVxuICAgKi9cbiAgdW5pb25QYXkgPSAndW5pb25wYXknLFxuICAvKipcbiAgICogc3RjcGF5OiBmb3Igc3VwcG9ydGluZyBwYXltZW50IHdpdGggc3RjcGF5XG4gICAqL1xuICBzdGNQYXkgPSAnc3RjcGF5JyxcbiAgLyoqXG4gICAqIHZhbHU6IGZvciBzdXBwb3J0aW5nIHBheW1lbnQgd2l0aCB2YWx1XG4gICAqL1xuICB2YWx1ID0gJ3ZhbHUnLFxuICAvKipcbiAgICogbWVlemFxcjogZm9yIHN1cHBvcnRpbmcgcGF5bWVudCB3aXRoIG1lZXphcXJcbiAgICovXG4gIG1lZXphUVIgPSAnbWVlemFxcicsXG4gIC8qKlxuICAgKiBvbWFubmV0OiBmb3Igc3VwcG9ydGluZyBwYXltZW50IHdpdGggb21hbm5ldFxuICAgKi9cbiAgb21hbm5ldCA9ICdvbWFubmV0JyxcbiAgLyoqXG4gICAqIGtuZXRjcmVkaXQ6IGZvciBzdXBwb3J0aW5nIHBheW1lbnQgd2l0aCBrbmV0Y3JlZGl0XG4gICAqL1xuICBrbmV0Q3JlZGl0ID0gJ2tuZXRjcmVkaXQnLFxuICAvKipcbiAgICoga25ldGRlYml0OiBmb3Igc3VwcG9ydGluZyBwYXltZW50IHdpdGgga25ldGRlYml0XG4gICAqL1xuICBrbmV0RGViaXQgPSAna25ldGRlYml0JyxcbiAgLyoqXG4gICAqIGZhd3J5OiBmb3Igc3VwcG9ydGluZyBwYXltZW50IHdpdGggZmF3cnlcbiAgICovXG4gIGZhd3J5ID0gJ2Zhd3J5Jyxcbn1cblxuLyoqXG4gKiBAbmFtZSBQYXlUYWJzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgcGx1Z2luIHRoYXQgYWxsb3dzIHlvdSB0byB1c2UgUGF5VGFicydzIE5hdGl2ZSBTREtzIGZvciBBbmRyb2lkIGFuZCBpT1MuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBheVRhYnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGF5dGFicy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF5dGFiczogUGF5VGFicykgeyB9XG4gKlxuICogLi4uXG4gKiBsZXQgYmlsbGluZ0RldGFpbHM6IFBheW1lbnRTREtCaWxsaW5nRGV0YWlscyA9IHtcbiAqICAgIG5hbWU6IFwiSm9obiBTbWl0aFwiLFxuICogICAgZW1haWw6IFwiZW1haWxAZG9tYWluLmNvbVwiLFxuICogICAgcGhvbmU6IFwiKzIwMTExMTExMTExMVwiLFxuICogICAgYWRkcmVzc0xpbmU6IFwiQWRkcmVzcyBsaW5lXCIsXG4gKiAgICBjaXR5OiBcIkR1YmFpXCIsXG4gKiAgICBzdGF0ZTogXCJEdWJhaVwiLFxuICogICAgY291bnRyeUNvZGU6IFwiQUVcIixcbiAqICAgIHppcDogXCIxMjM0XCJcbiAqICB9O1xuICpcbiAqIHZhciBjb25maWd1cmF0aW9uOiBQYXltZW50U0RLQ29uZmlndXJhdGlvbiA9IHtcbiAqICAgIHByb2ZpbGVJRDogXCIqcHJvZmlsZSBpZCpcIixcbiAqICAgIHNlcnZlcktleTogXCIqc2VydmVyIGtleSpcIixcbiAqICAgIGNsaWVudEtleTogXCIqY2xlaW50IGtleSpcIixcbiAqICAgIGNhcnRJRDogXCIxMjM0NVwiLFxuICogICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gKiAgICBjYXJ0RGVzY3JpcHRpb246IFwiRmxvd2Vyc1wiLFxuICogICAgbWVyY2hhbnRDb3VudHJ5Q29kZTogXCJhZVwiLFxuICogICAgbWVyY2hhbnROYW1lOiBcIkZsb3dlcnMgU3RvcmVcIixcbiAqICAgIGFtb3VudDogMjAsXG4gKiAgICBzY3JlZW5UaXRsZTpcIlBheSB3aXRoIENhcmRcIixcbiAqICAgIGJpbGxpbmdEZXRhaWxzOiBiaWxsaW5nRGV0YWlsc1xuICogIH1cbiAqXG4gKiB0aGlzLnBheXRhYnMuc3RhcnRDYXJkUGF5bWVudChjb25maWd1cmF0aW9uKVxuICogICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMucGF5dGFicy5zdGFydEFwcGxlUGF5UGF5bWVudChjb25maWd1cmF0aW9uKVxuICogICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIHRoaXMucGF5dGFicy5zdGFydEFsdGVybmF0aXZlUGF5bWVudE1ldGhvZChjb25maWd1cmF0aW9uKVxuICogICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1BheVRhYnMnLFxuICBwbHVnaW46ICdjb20ucGF5dGFicy5jb3Jkb3ZhLnBsdWdpbicsXG4gIHBsdWdpblJlZjogJ2NvbS5wYXl0YWJzLmNvcmRvdmEucGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYXl0YWJzY29tL3BheXRhYnMtY29yZG92YScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXlUYWJzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnQgQ2FyZCBQYXltZW50XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMge1BheW1lbnRTREtDb25maWd1cmF0aW9ufSBwYXltZW50IHJlcXVlc3QgY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0gY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdHJhbnNhY3Rpb24gZGV0YWlscywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0Q2FyZFBheW1lbnQoY29uZmlndXJhdGlvbjogUGF5bWVudFNES0NvbmZpZ3VyYXRpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogU3RhcnQgQXBwbGVQYXkgUGF5bWVudFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIHtQYXltZW50U0RLQ29uZmlndXJhdGlvbn0gcGF5bWVudCByZXF1ZXN0IGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRyYW5zYWN0aW9uIGRldGFpbHMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydEFwcGxlUGF5UGF5bWVudChjb25maWd1cmF0aW9uOiBQYXltZW50U0RLQ29uZmlndXJhdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBTdGFydCBBbHRlcm5hdGl2ZSBQYXltZW50IE1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIHtQYXltZW50U0RLQ29uZmlndXJhdGlvbn0gcGF5bWVudCByZXF1ZXN0IGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRyYW5zYWN0aW9uIGRldGFpbHMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydEFsdGVybmF0aXZlUGF5bWVudE1ldGhvZChjb25maWd1cmF0aW9uOiBQYXltZW50U0RLQ29uZmlndXJhdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=