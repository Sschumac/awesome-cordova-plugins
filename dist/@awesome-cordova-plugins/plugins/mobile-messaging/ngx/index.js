import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var DefaultMessageStorage = /** @class */ (function () {
    function DefaultMessageStorage() {
    }
    DefaultMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.delete = function (messageId, callback) { return cordova(this, "delete", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.deleteAll = function (callback) { return cordova(this, "deleteAll", { "sync": true }, arguments); };
    return DefaultMessageStorage;
}());
export { DefaultMessageStorage };
var CustomMessageStorage = /** @class */ (function () {
    function CustomMessageStorage() {
    }
    CustomMessageStorage.prototype.save = function (messages) { return cordova(this, "save", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.start = function () { return cordova(this, "start", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.stop = function () { return cordova(this, "stop", { "sync": true }, arguments); };
    return CustomMessageStorage;
}());
export { CustomMessageStorage };
var MobileMessaging = /** @class */ (function (_super) {
    __extends(MobileMessaging, _super);
    function MobileMessaging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileMessaging.prototype.init = function (config, onInitError) { return cordova(this, "init", { "sync": true }, arguments); };
    MobileMessaging.prototype.register = function (event) { return cordova(this, "register", { "observable": true }, arguments); };
    MobileMessaging.prototype.on = function (event) { return cordova(this, "on", { "observable": true }, arguments); };
    MobileMessaging.prototype.unregister = function (event) { return cordova(this, "unregister", { "observable": true }, arguments); };
    MobileMessaging.prototype.off = function (event) { return cordova(this, "off", { "observable": true }, arguments); };
    MobileMessaging.prototype.submitEvent = function (event) { return cordova(this, "submitEvent", { "sync": true }, arguments); };
    MobileMessaging.prototype.submitEventImmediately = function (event) { return cordova(this, "submitEventImmediately", { "observable": true }, arguments); };
    MobileMessaging.prototype.saveUser = function (userData) { return cordova(this, "saveUser", {}, arguments); };
    MobileMessaging.prototype.fetchUser = function () { return cordova(this, "fetchUser", {}, arguments); };
    MobileMessaging.prototype.getUser = function () { return cordova(this, "getUser", {}, arguments); };
    MobileMessaging.prototype.saveInstallation = function (installation) { return cordova(this, "saveInstallation", {}, arguments); };
    MobileMessaging.prototype.fetchInstallation = function () { return cordova(this, "fetchInstallation", {}, arguments); };
    MobileMessaging.prototype.getInstallation = function () { return cordova(this, "getInstallation", {}, arguments); };
    MobileMessaging.prototype.setInstallationAsPrimary = function (pushRegistrationId, primary) { return cordova(this, "setInstallationAsPrimary", {}, arguments); };
    MobileMessaging.prototype.personalize = function (context) { return cordova(this, "personalize", {}, arguments); };
    MobileMessaging.prototype.depersonalize = function () { return cordova(this, "depersonalize", {}, arguments); };
    MobileMessaging.prototype.depersonalizeInstallation = function (pushRegistrationId) { return cordova(this, "depersonalizeInstallation", {}, arguments); };
    MobileMessaging.prototype.markMessagesSeen = function (messageIds) { return cordova(this, "markMessagesSeen", {}, arguments); };
    MobileMessaging.prototype.showDialogForError = function (errorCode) { return cordova(this, "showDialogForError", {}, arguments); };
    MobileMessaging.prototype.defaultMessageStorage = function () { return cordova(this, "defaultMessageStorage", { "sync": true }, arguments); };
    MobileMessaging.prototype.showChat = function (config) { return cordova(this, "showChat", {}, arguments); };
    MobileMessaging.prototype.setupiOSChatSettings = function (settings) { return cordova(this, "setupiOSChatSettings", {}, arguments); };
    MobileMessaging.prototype.getMessageCounter = function (onResult) { return cordova(this, "getMessageCounter", { "sync": true }, arguments); };
    MobileMessaging.prototype.resetMessageCounter = function () { return cordova(this, "resetMessageCounter", {}, arguments); };
    MobileMessaging.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MobileMessaging, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    MobileMessaging.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MobileMessaging });
    MobileMessaging.pluginName = "MobileMessaging";
    MobileMessaging.plugin = "com-infobip-plugins-mobilemessaging";
    MobileMessaging.pluginRef = "MobileMessaging";
    MobileMessaging.repo = "https://github.com/infobip/mobile-messaging-cordova-plugin";
    MobileMessaging.platforms = ["Android", "iOS"];
    MobileMessaging = __decorate([], MobileMessaging);
    return MobileMessaging;
}(AwesomeCordovaNativePlugin));
export { MobileMessaging };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MobileMessaging, decorators: [{
            type: Injectable
        }], propDecorators: { init: [], register: [], on: [], unregister: [], off: [], submitEvent: [], submitEventImmediately: [], saveUser: [], fetchUser: [], getUser: [], saveInstallation: [], fetchInstallation: [], getInstallation: [], setInstallationAsPrimary: [], personalize: [], depersonalize: [], depersonalizeInstallation: [], markMessagesSeen: [], showDialogForError: [], defaultMessageStorage: [], showChat: [], setupiOSChatSettings: [], getMessageCounter: [], resetMessageCounter: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbW9iaWxlLW1lc3NhZ2luZy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztJQXVMaEMsb0NBQUksYUFBQyxTQUFpQixFQUFFLFFBQW9DO0lBSzVELHVDQUFPLGFBQUMsUUFBdUM7SUFLL0Msc0NBQU0sYUFBQyxTQUFpQixFQUFFLFFBQW9CO0lBSzlDLHlDQUFTLGFBQUMsUUFBb0I7Z0NBeE1oQzs7Ozs7O0lBb05FLG1DQUFJLGFBQUMsUUFBbUI7SUFVeEIsbUNBQUksYUFBQyxTQUFpQixFQUFFLFFBQW9DO0lBVTVELHNDQUFPLGFBQUMsUUFBdUM7SUFRL0Msb0NBQUs7SUFRTCxtQ0FBSTsrQkF4UE47Ozs7SUFvVHFDLG1DQUEwQjs7OztJQVc3RCw4QkFBSSxhQUFDLE1BQXFCLEVBQUUsV0FBbUQ7SUFhL0Usa0NBQVEsYUFBQyxLQUFZO0lBT3JCLDRCQUFFLGFBQUMsS0FBWTtJQWVmLG9DQUFVLGFBQUMsS0FBWTtJQU92Qiw2QkFBRyxhQUFDLEtBQVk7SUF1QmhCLHFDQUFXLGFBQUMsS0FBa0I7SUF5QjlCLGdEQUFzQixhQUFDLEtBQWtCO0lBWXpDLGtDQUFRLGFBQUMsUUFBa0I7SUFVM0IsbUNBQVM7SUFVVCxpQ0FBTztJQVlQLDBDQUFnQixhQUFDLFlBQTBCO0lBVTNDLDJDQUFpQjtJQVVqQix5Q0FBZTtJQVlmLGtEQUF3QixhQUFDLGtCQUEwQixFQUFFLE9BQWdCO0lBWXJFLHFDQUFXLGFBQUMsT0FBMkI7SUFVdkMsdUNBQWE7SUFVYixtREFBeUIsYUFBQyxrQkFBMEI7SUFXcEQsMENBQWdCLGFBQUMsVUFBb0I7SUFXckMsNENBQWtCLGFBQUMsU0FBaUI7SUFLcEMsK0NBQXFCO0lBWXJCLGtDQUFRLGFBQUMsTUFBbUI7SUFVNUIsOENBQW9CLGFBQUMsUUFBeUI7SUFVOUMsMkNBQWlCLGFBQUMsUUFBbUM7SUFTckQsNkNBQW1CO2lIQXJSUixlQUFlO3FIQUFmLGVBQWU7Ozs7OztJQUFmLGVBQWUsa0JBQWYsZUFBZTswQkFwVDVCO0VBb1RxQywwQkFBMEI7U0FBbEQsZUFBZTs0RkFBZixlQUFlO2tCQUQzQixVQUFVOzhCQVlULElBQUksTUFhSixRQUFRLE1BT1IsRUFBRSxNQWVGLFVBQVUsTUFPVixHQUFHLE1BdUJILFdBQVcsTUF5Qlgsc0JBQXNCLE1BWXRCLFFBQVEsTUFVUixTQUFTLE1BVVQsT0FBTyxNQVlQLGdCQUFnQixNQVVoQixpQkFBaUIsTUFVakIsZUFBZSxNQVlmLHdCQUF3QixNQVl4QixXQUFXLE1BVVgsYUFBYSxNQVViLHlCQUF5QixNQVd6QixnQkFBZ0IsTUFXaEIsa0JBQWtCLE1BS2xCLHFCQUFxQixNQVlyQixRQUFRLE1BVVIsb0JBQW9CLE1BVXBCLGlCQUFpQixNQVNqQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBPUyA9ICdBbmRyb2lkJyB8ICdpT1MnO1xuZXhwb3J0IHR5cGUgR2VuZGVyID0gJ01hbGUnIHwgJ0ZlbWFsZSc7XG5leHBvcnQgdHlwZSBFdmVudCA9XG4gIHwgJ21lc3NhZ2VSZWNlaXZlZCdcbiAgfCAnbm90aWZpY2F0aW9uVGFwcGVkJ1xuICB8ICd0b2tlblJlY2VpdmVkJ1xuICB8ICdyZWdpc3RyYXRpb25VcGRhdGVkJ1xuICB8ICdnZW9mZW5jZUVudGVyZWQnXG4gIHwgJ2FjdGlvblRhcHBlZCdcbiAgfCAnaW5zdGFsbGF0aW9uVXBkYXRlZCdcbiAgfCAndXNlclVwZGF0ZWQnXG4gIHwgJ3BlcnNvbmFsaXplZCdcbiAgfCAnZGVwZXJzb25hbGl6ZWQnXG4gIHwgJ2luQXBwQ2hhdC5hdmFpbGFiaWxpdHlVcGRhdGVkJ1xuICB8ICdpbkFwcENoYXQudW5yZWFkTWVzc2FnZUNvdW50ZXJVcGRhdGVkJ1xuICB8ICdkZWVwbGluayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tRXZlbnQge1xuICBkZWZpbml0aW9uSWQ6IHN0cmluZztcbiAgcHJvcGVydGllczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgYXBwbGljYXRpb24gY29kZSBvZiB5b3VyIEFwcGxpY2F0aW9uIGZyb20gUHVzaCBQb3J0YWwgd2Vic2l0ZVxuICAgKi9cbiAgYXBwbGljYXRpb25Db2RlOiBzdHJpbmc7XG4gIGdlb2ZlbmNpbmdFbmFibGVkPzogYm9vbGVhbjtcbiAgaW5BcHBDaGF0RW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNZXNzYWdlIHN0b3JhZ2Ugc2F2ZSBjYWxsYmFja1xuICAgKi9cbiAgbWVzc2FnZVN0b3JhZ2U/OiBDdXN0b21NZXNzYWdlU3RvcmFnZTtcbiAgZGVmYXVsdE1lc3NhZ2VTdG9yYWdlPzogYm9vbGVhbjtcbiAgaW9zPzoge1xuICAgIG5vdGlmaWNhdGlvblR5cGVzPzogc3RyaW5nW107IC8vIFsnYWxlcnQnLCAnYmFkZ2UnLCAnc291bmQnXVxuICAgIGZvcmNlQ2xlYW51cD86IGJvb2xlYW47XG4gICAgbG9nZ2luZz86IGJvb2xlYW47XG4gIH07XG4gIGFuZHJvaWQ/OiB7XG4gICAgbm90aWZpY2F0aW9uSWNvbj86IHN0cmluZzsgLy8gYSByZXNvdXJjZSBuYW1lIGZvciBhIHN0YXR1cyBiYXIgaWNvbiAod2l0aG91dCBleHRlbnNpb24pLCBsb2NhdGVkIGluICcvcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL3Jlcy9taXBtYXAnXG4gICAgbXVsdGlwbGVOb3RpZmljYXRpb25zPzogYm9vbGVhbjsgLy8gc2V0IHRvICd0cnVlJyB0byBlbmFibGUgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgIG5vdGlmaWNhdGlvbkFjY2VudENvbG9yPzogc3RyaW5nOyAvLyBzZXQgdG8gaGV4IGNvbG9yIHZhbHVlIGluIGZvcm1hdCAnI1JSR0dCQicgb3IgJyNBQVJSR0dCQidcbiAgICBmaXJlYmFzZU9wdGlvbnM/OiB7XG4gICAgICBhcGlLZXk6IHN0cmluZztcbiAgICAgIGFwcGxpY2F0aW9uSWQ6IHN0cmluZztcbiAgICAgIGRhdGFiYXNlVXJsPzogc3RyaW5nO1xuICAgICAgZ2FUcmFja2luZ0lkPzogc3RyaW5nO1xuICAgICAgZ2NtU2VuZGVySWQ/OiBzdHJpbmc7XG4gICAgICBzdG9yYWdlQnVja2V0Pzogc3RyaW5nO1xuICAgICAgcHJvamVjdElkOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgcHJpdmFjeVNldHRpbmdzPzoge1xuICAgIGFwcGxpY2F0aW9uQ29kZVBlcnNpc3RpbmdEaXNhYmxlZD86IGJvb2xlYW47XG4gICAgdXNlckRhdGFQZXJzaXN0aW5nRGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIGNhcnJpZXJJbmZvU2VuZGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgICBzeXN0ZW1JbmZvU2VuZGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgfTtcbiAgbm90aWZpY2F0aW9uQ2F0ZWdvcmllcz86IFtcbiAgICB7XG4gICAgICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgICBhY3Rpb25zPzogW1xuICAgICAgICB7XG4gICAgICAgICAgaWRlbnRpZmllcjogc3RyaW5nO1xuICAgICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICAgIGZvcmVncm91bmQ/OiBib29sZWFuO1xuICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgICAgICAgIG1vUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgICAgICAgIGRlc3RydWN0aXZlPzogYm9vbGVhbjtcbiAgICAgICAgICBpY29uPzogc3RyaW5nO1xuICAgICAgICAgIHRleHRJbnB1dEFjdGlvbkJ1dHRvblRpdGxlPzogc3RyaW5nO1xuICAgICAgICAgIHRleHRJbnB1dFBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGV4dGVybmFsVXNlcklkPzogc3RyaW5nO1xuICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICBtaWRkbGVOYW1lPzogc3RyaW5nO1xuICBnZW5kZXI/OiBHZW5kZXI7XG4gIGJpcnRoZGF5Pzogc3RyaW5nO1xuICBwaG9uZXM/OiBzdHJpbmdbXTtcbiAgZW1haWxzPzogc3RyaW5nW107XG4gIHRhZ3M/OiBzdHJpbmdbXTtcbiAgY3VzdG9tQXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBhbnlbXT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbGF0aW9uIHtcbiAgaXNQcmltYXJ5RGV2aWNlPzogYm9vbGVhbjtcbiAgaXNQdXNoUmVnaXN0cmF0aW9uRW5hYmxlZD86IGJvb2xlYW47XG4gIG5vdGlmaWNhdGlvbnNFbmFibGVkPzogYm9vbGVhbjtcbiAgZ2VvRW5hYmxlZD86IGJvb2xlYW47XG4gIHNka1ZlcnNpb24/OiBzdHJpbmc7XG4gIGFwcFZlcnNpb24/OiBzdHJpbmc7XG4gIG9zPzogT1M7XG4gIG9zVmVyc2lvbj86IHN0cmluZztcbiAgZGV2aWNlTWFudWZhY3R1cmVyPzogc3RyaW5nO1xuICBkZXZpY2VNb2RlbD86IHN0cmluZztcbiAgZGV2aWNlU2VjdXJlPzogYm9vbGVhbjtcbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIGRldmljZVRpbWV6b25lSWQ/OiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uVXNlcklkPzogc3RyaW5nO1xuICBkZXZpY2VOYW1lPzogc3RyaW5nO1xuICBjdXN0b21BdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj47XG59XG5cbi8qKlxuICogVXNlcidzIHVuaXF1ZSBJRC4gT25lIFVzZXJJZGVudGl0eSBwYXJhbWV0ZXIgbXVzdCBiZSBwcm92aWRlZCBpZiB1c2VkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJZGVudGl0eSB7XG4gIHBob25lcz86IHN0cmluZ1tdO1xuICBlbWFpbHM/OiBzdHJpbmdbXTtcbiAgZXh0ZXJuYWxVc2VySWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uYWxpemVDb250ZXh0IHtcbiAgdXNlcklkZW50aXR5OiBVc2VySWRlbnRpdHk7XG4gIHVzZXJBdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IGFueVtdPjtcbiAgZm9yY2VEZXBlcnNvbmFsaXplPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9EYXRhIHtcbiAgYXJlYTogR2VvQXJlYTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9BcmVhIHtcbiAgaWQ6IHN0cmluZztcbiAgY2VudGVyOiBHZW9DZW50ZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb0NlbnRlciB7XG4gIGxhdDogbnVtYmVyO1xuICBsb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBib2R5Pzogc3RyaW5nO1xuICBzb3VuZD86IHN0cmluZztcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgY3VzdG9tUGF5bG9hZD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIGludGVybmFsRGF0YT86IHN0cmluZztcbiAgcmVjZWl2ZWRUaW1lc3RhbXA/OiBudW1iZXI7XG4gIHNlZW5EYXRlPzogbnVtYmVyO1xuICBjb250ZW50VXJsPzogc3RyaW5nO1xuICBzZWVuPzogYm9vbGVhbjtcbiAgZ2VvPzogYm9vbGVhbjtcbiAgb3JpZ2luYWxQYXlsb2FkPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgLy8gaU9TIG9ubHlcbiAgdmlicmF0ZT86IGJvb2xlYW47IC8vIEFuZHJvaWQgb25seVxuICBpY29uPzogc3RyaW5nOyAvLyBBbmRyb2lkIG9ubHlcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7IC8vIEFuZHJvaWQgb25seVxuICBjaGF0Pzogc3RyaW5nO1xuICBicm93c2VyVXJsPzogc3RyaW5nO1xuICBkZWVwbGluaz86IHN0cmluZztcbiAgd2ViVmlld1VybD86IHN0cmluZztcbiAgaW5BcHBPcGVuVGl0bGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGluQXBwRGlzbWlzc1RpdGxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vYmlsZU1lc3NhZ2luZ0Vycm9yIHtcbiAgY29kZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkb21haW4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdENvbmZpZyB7XG4gIGlvcz86IHtcbiAgICBzaG93TW9kYWxseTogYm9vbGVhbjtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRNZXNzYWdlU3RvcmFnZSB7XG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBmaW5kKG1lc3NhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZmluZEFsbChjYWxsYmFjazogKG1lc3NhZ2VzOiBNZXNzYWdlW10pID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGVsZXRlKG1lc3NhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWxldGVBbGwoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbU1lc3NhZ2VTdG9yYWdlIHtcbiAgLyoqXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBwbHVnaW4gd2hlbiBtZXNzYWdlcyBhcmUgcmVjZWl2ZWQgYW5kIGl0J3MgdGltZSB0byBzYXZlIHRoZW0gdG8gdGhlIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIGFycmF5IG9mIG1lc3NhZ2Ugb2JqZWN0cyB0byBzYXZlIHRvIHN0b3JhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzYXZlKG1lc3NhZ2VzOiBNZXNzYWdlW10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHBsdWdpbiB0byBmaW5kIGEgbWVzc2FnZSBieSBtZXNzYWdlIGlkXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayBoYXMgdG8gYmUgY2FsbGVkIG9uIGNvbXBsZXRpb24gd2l0aCBvbmUgcGFyYW1ldGVyIC0gZm91bmQgbWVzc2FnZSBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBmaW5kKG1lc3NhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHBsdWdpbiB0byBmaW5kIGFsbCBtZXNzYWdlcyBpbiB0aGUgc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgaGFzIHRvIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uIHdpdGggb25lIHBhcmFtZXRlciAtIGFuIGFycmF5IG9mIGF2YWlsYWJsZSBtZXNzYWdlc1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGZpbmRBbGwoY2FsbGJhY2s6IChtZXNzYWdlczogTWVzc2FnZVtdKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBwbHVnaW4gd2hlbiBpdHMgdGltZSB0byBpbml0aWFsaXplIHRoZSBzdG9yYWdlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RhcnQoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBwbHVnaW4gd2hlbiBpdHMgdGltZSB0byBkZWluaXRpYWxpemUgdGhlIHN0b3JhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdG9wKCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXRTZXR0aW5nc0lPUyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNlbmRCdXR0b25Db2xvcjogc3RyaW5nO1xuICBuYXZpZ2F0aW9uQmFySXRlbXNDb2xvcjogc3RyaW5nO1xuICBuYXZpZ2F0aW9uQmFyQ29sb3I6IHN0cmluZztcbiAgbmF2aWdhdGlvbkJhclRpdGxlQ29sb3I6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBNb2JpbGUgTWVzc2FnaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1vYmlsZSBNZXNzYWdpbmcgU0RLIGlzIGRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgdG8gZWFzaWx5IGVuYWJsZSBwdXNoIG5vdGlmaWNhdGlvbiBjaGFubmVsIGluIHlvdXIgbW9iaWxlIGFwcGxpY2F0aW9uLlxuICogSW4gYWxtb3N0IG5vIHRpbWUgb2YgaW1wbGVtZW50YXRpb24geW91IGdldCBwdXNoIG5vdGlmaWNhdGlvbiBpbiB5b3VyIGFwcGxpY2F0aW9uIGFuZCBhY2Nlc3MgdG8gdGhlIGZlYXR1cmVzIG9mIFtJbmZvYmlwIElQIE1lc3NhZ2luZyBQbGF0Zm9ybV0oaHR0cHM6Ly9wb3J0YWwuaW5mb2JpcC5jb20vcHVzaC8pLlxuICogVGhpcyBkb2N1bWVudCBkZXNjcmliZXMgbGlicmFyeSBpbnRlZ3JhdGlvbiBzdGVwcyBmb3IgeW91ciBDb3Jkb3ZhIHByb2plY3QuXG4gKlxuICogRm9yIG1vcmUgaW5mbyBzZWUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZvYmlwL21vYmlsZS1tZXNzYWdpbmctY29yZG92YS1wbHVnaW4pXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1vYmlsZU1lc3NhZ2luZyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tb2JpbGUtbWVzc2FnaW5nL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9iaWxlTWVzc2FnaW5nOiBNb2JpbGVNZXNzYWdpbmcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAgdGhpcy5tb2JpbGVNZXNzYWdpbmcuaW5pdCh7XG4gKiAgICBhcHBsaWNhdGlvbkNvZGU6ICc8eW91cl9hcHBsaWNhdGlvbl9jb2RlPicsXG4gKiAgICBnZW9mZW5jaW5nRW5hYmxlZDogJzx0cnVlL2ZhbHNlPicsXG4gKiAgICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2U6ICc8dHJ1ZS9mYWxzZT4nLFxuICogICAgaW9zOiB7XG4gKiAgICAgIG5vdGlmaWNhdGlvblR5cGVzOiBbJ2FsZXJ0JywgJ2JhZGdlJywgJ3NvdW5kJ11cbiAqICAgIH0sXG4gKiAgICBhbmRyb2lkOiB7XG4gKiAgICAgIG5vdGlmaWNhdGlvbkljb246IDxTdHJpbmc7IGEgcmVzb3VyY2UgbmFtZSBmb3IgYSBzdGF0dXMgYmFyIGljb24gKHdpdGhvdXQgZXh0ZW5zaW9uKSwgbG9jYXRlZCBpbiAnL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvbWlwbWFwJz4sXG4gKiAgICAgIG11bHRpcGxlTm90aWZpY2F0aW9uczogPEJvb2xlYW47IHNldCB0byAndHJ1ZScgdG8gZW5hYmxlIG11bHRpcGxlIG5vdGlmaWNhdGlvbnM+LFxuICogICAgICBub3RpZmljYXRpb25BY2NlbnRDb2xvcjogPFN0cmluZzsgc2V0IHRvIGhleCBjb2xvciB2YWx1ZSBpbiBmb3JtYXQgJyNSUkdHQkInIG9yICcjQUFSUkdHQkInPlxuICogICAgIH19LCAoZXJyKSA9PiB7XG4gKiAgICAgIC4uLlxuICogICAgfSk7XG4gKlxuICogIHRoaXMubW9iaWxlTWVzc2FnaW5nLnJlZ2lzdGVyKCdtZXNzYWdlUmVjZWl2ZWQnKS5zdWJzY3JpYmUoKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAqICAgIC4uLlxuICogIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01vYmlsZU1lc3NhZ2luZycsXG4gIHBsdWdpbjogJ2NvbS1pbmZvYmlwLXBsdWdpbnMtbW9iaWxlbWVzc2FnaW5nJyxcbiAgcGx1Z2luUmVmOiAnTW9iaWxlTWVzc2FnaW5nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pbmZvYmlwL21vYmlsZS1tZXNzYWdpbmctY29yZG92YS1wbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9iaWxlTWVzc2FnaW5nIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU3RhcnRzIGEgbmV3IE1vYmlsZSBNZXNzYWdpbmcgc2Vzc2lvbi5cbiAgICpcbiAgICogQG5hbWUgaW5pdFxuICAgKiBAcGFyYW0gY29uZmlnLiBDb25maWd1cmF0aW9uIGZvciBNb2JpbGUgTWVzc2FnaW5nXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIG9uSW5pdEVycm9yXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uSW5pdEVycm9yLiBFcnJvciBjYWxsYmFja1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGluaXQoY29uZmlnOiBDb25maWd1cmF0aW9uLCBvbkluaXRFcnJvcj86IChlcnJvcjogTW9iaWxlTWVzc2FnaW5nRXJyb3IpID0+IHZvaWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdG8gZXZlbnQgY29taW5nIGZyb20gTW9iaWxlTWVzc2FnaW5nIGxpYnJhcnkuXG4gICAqXG4gICAqIEBuYW1lIHJlZ2lzdGVyXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHJlZ2lzdGVyKGV2ZW50OiBFdmVudCk6IE9ic2VydmFibGU8TWVzc2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBvbihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW4gcmVnaXN0ZXIgZnJvbSBNb2JpbGVNZXNzYWdpbmcgbGlicmFyeSBldmVudC5cbiAgICpcbiAgICogQG5hbWUgdW5yZWdpc3RlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIHdpbGwgYmUgdW5yZWdpc3RlcmVkIGZyb20gZXZlbnRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICB1bnJlZ2lzdGVyKGV2ZW50OiBFdmVudCk6IE9ic2VydmFibGU8TWVzc2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBvZmYoZXZlbnQ6IEV2ZW50KTogT2JzZXJ2YWJsZTxNZXNzYWdlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGFuIGV2ZW50IHRvIHRoZSBzZXJ2ZXIgZXZlbnR1YWxseSwgaGFuZGxlcyBwb3NzaWJsZSBlcnJvcnMgYW5kIGRvIHJldHJpZXMgZm9yIHlvdS5cbiAgICpcbiAgICogQG5hbWUgc3VibWl0RXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RGF0YS4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZXZlbnQgZGF0YVxuICAgKiB7XG4gICAqICAgZGVmaW5pdGlvbklkOiBcImV2ZW50RGVmaW5pdGlvbklkXCJcbiAgICogICBwcm9wZXJ0aWVzOiB7XG4gICAqICAgICBcInN0cmluZ0F0dHJpYnV0ZVwiOiBcInN0cmluZ1wiLFxuICAgKiAgICAgXCJudW1iZXJBdHRyaWJ1dGVcIjogMSxcbiAgICogICAgIFwiZGF0ZUF0dHJpYnV0ZVwiOiBcIjIwMjAtMDItMjZUMDk6NDE6NTdaXCIsXG4gICAqICAgICBcImJvb2xlYW5BdHRyaWJ1dGVcIjogdHJ1ZVxuICAgKiAgIH1cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdWJtaXRFdmVudChldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYW4gZXZlbnQgdG8gdGhlIHNlcnZlciBpbW1lZGlhdGVseS5cbiAgICogWW91IGhhdmUgdG8gaGFuZGxlIHBvc3NpYmxlIGNvbm5lY3Rpb24gb3Igc2VydmVyIGVycm9ycywgZG8gcmV0cmllcyB5b3Vyc2VsZi5cbiAgICpcbiAgICogQG5hbWUgc3VibWl0RXZlbnRJbW1lZGlhdGVseVxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnREYXRhLiBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhXG4gICAqIHtcbiAgICogICBkZWZpbml0aW9uSWQ6IFwiZXZlbnREZWZpbml0aW9uSWRcIlxuICAgKiAgIHByb3BlcnRpZXM6IHtcbiAgICogICAgIFwic3RyaW5nQXR0cmlidXRlXCI6IFwic3RyaW5nXCIsXG4gICAqICAgICBcIm51bWJlckF0dHJpYnV0ZVwiOiAxLFxuICAgKiAgICAgXCJkYXRlQXR0cmlidXRlXCI6IFwiMjAyMC0wMi0yNlQwOTo0MTo1N1pcIixcbiAgICogICAgIFwiYm9vbGVhbkF0dHJpYnV0ZVwiOiB0cnVlXG4gICAqICAgfVxuICAgKiB9XG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBvbiByZXN1bHQsIHlvdSBoYXZlIHRvIGhhbmRsZSBlcnJvciBhbmQgZG8gcmV0cmllcyB5b3Vyc2VsZlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHN1Ym1pdEV2ZW50SW1tZWRpYXRlbHkoZXZlbnQ6IEN1c3RvbUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHVzZXIgZGF0YSB0byB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAbmFtZSBzYXZlVXNlclxuICAgKiBAcGFyYW0gdXNlckRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHVzZXJEYXRhLiBBbiBvYmplY3QgY29udGFpbmluZyB1c2VyIGRhdGFcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2F2ZVVzZXIodXNlckRhdGE6IFVzZXJEYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggdXNlciBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQG5hbWUgZmV0Y2hVc2VyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZldGNoVXNlcigpOiBQcm9taXNlPFVzZXJEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdXNlciBkYXRhIGZyb20gdGhlIGxvY2FsbHkgc3RvcmVkIGNhY2hlLlxuICAgKlxuICAgKiBAbmFtZSBnZXRVc2VyXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVzZXIoKTogUHJvbWlzZTxVc2VyRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBpbnN0YWxsYXRpb24gdG8gdGhlIHNlcnZlci5cbiAgICpcbiAgICogQG5hbWUgc2F2ZUluc3RhbGxhdGlvblxuICAgKiBAcGFyYW0gaW5zdGFsbGF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YWxsYXRpb24uIEFuIG9iamVjdCBjb250YWluaW5nIGluc3RhbGxhdGlvbiBkYXRhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9uOiBJbnN0YWxsYXRpb24pOiBQcm9taXNlPEluc3RhbGxhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGluc3RhbGxhdGlvbiBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBuYW1lIGZldGNoSW5zdGFsbGF0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZldGNoSW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SW5zdGFsbGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgbG9jYWxseSBjYWNoZWQgaW5zdGFsbGF0aW9uLlxuICAgKlxuICAgKiBAbmFtZSBnZXRJbnN0YWxsYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zdGFsbGF0aW9uKCk6IFByb21pc2U8SW5zdGFsbGF0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW55IGluc3RhbGxhdGlvbiBhcyBwcmltYXJ5IGZvciB0aGlzIHVzZXIuXG4gICAqXG4gICAqIEBuYW1lIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHVzaFJlZ2lzdHJhdGlvbklkIG9mIGFuIGluc3RhbGxhdGlvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByaW1hcnkgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeShwdXNoUmVnaXN0cmF0aW9uSWQ6IHN0cmluZywgcHJpbWFyeTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIHBlcnNvbmFsaXphdGlvbiBvZiB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24gb24gdGhlIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAbmFtZSBwZXJzb25hbGl6ZVxuICAgKiBAcGFyYW0gY29udGV4dFxuICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dC4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdXNlciBpZGVudGl0eSBpbmZvcm1hdGlvbiBhcyB3ZWxsIGFzIGFkZGl0aW9uYWwgdXNlciBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwZXJzb25hbGl6ZShjb250ZXh0OiBQZXJzb25hbGl6ZUNvbnRleHQpOiBQcm9taXNlPFBlcnNvbmFsaXplQ29udGV4dD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBkZXBlcnNvbmFsaXphdGlvbiBvZiB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24gb24gdGhlIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAbmFtZSBkZXBlcnNvbmFsaXplXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlcGVyc29uYWxpemUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgZGVwZXJzb25hbGl6YXRpb24gb2YgdGhlIGluc3RhbGxhdGlvbiByZWZlcmVuY2VkIGJ5IHB1c2hSZWdpc3RyYXRpb25JZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHB1c2hSZWdpc3RyYXRpb25JZCBvZiB0aGUgcmVtb3RlIGluc3RhbGxhdGlvbiB0byBkZXBlcnNvbmFsaXplXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlcGVyc29uYWxpemVJbnN0YWxsYXRpb24ocHVzaFJlZ2lzdHJhdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrIG1lc3NhZ2VzIGFzIHNlZW5cbiAgICpcbiAgICogQG5hbWUgbWFya01lc3NhZ2VzU2VlblxuICAgKiBAcGFyYW0ge0FycmF5fSBtZXNzYWdlSWRzIG9mIGlkZW50aWZpZXJzIG9mIG1lc3NhZ2UgdG8gbWFyayBhcyBzZWVuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1hcmtNZXNzYWdlc1NlZW4obWVzc2FnZUlkczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBidWlsdC1pbiBlcnJvciBkaWFsb2cgc28gdGhhdCB1c2VyIGNhbiByZXNvbHZlIGVycm9ycyBkdXJpbmcgc2RrIGluaXRpYWxpemF0aW9uLlxuICAgKlxuICAgKiBAbmFtZSBzaG93RGlhbG9nRm9yRXJyb3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVycm9yQ29kZSB0byBkaXNwbGF5IGRpYWxvZyBmb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd0RpYWxvZ0ZvckVycm9yKGVycm9yQ29kZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZGVmYXVsdE1lc3NhZ2VTdG9yYWdlKCk6IERlZmF1bHRNZXNzYWdlU3RvcmFnZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGNoYXQgdmlldy5cbiAgICpcbiAgICogQG5hbWUgc2hvd0NoYXRcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0ge0NoYXRDb25maWd9IGNoYXQgY29uZmlnXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dDaGF0KGNvbmZpZz86IENoYXRDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBjaGF0IHNldHRpbmdzIGZvciBpT1Mgb25seVxuICAgKlxuICAgKiBAcGFyYW0gc2V0dGluZ3NcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0dXBpT1NDaGF0U2V0dGluZ3Moc2V0dGluZ3M6IENoYXRTZXR0aW5nc0lPUyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdW5yZWFkIGluLWFwcCBjaGF0IHB1c2ggbWVzc2FnZXMgY291bnRlci5cbiAgICogVGhlIGNvdW50ZXIgaW5jcmVtZW50cyBlYWNoIHRpbWUgdGhlIGFwcGxpY2F0aW9uIHJlY2VpdmVzIGluLWFwcCBjaGF0IHB1c2ggbWVzc2FnZVxuICAgKiAodGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiBjaGF0IHNjcmVlbiBpcyBpbmFjdGl2ZSBvciB0aGUgYXBwbGljYXRpb24gaXMgaW4gYmFja2dyb3VuZC90ZXJtaW5hdGVkIHN0YXRlKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRNZXNzYWdlQ291bnRlcihvblJlc3VsdDogKGNvdW50ZXI6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2JpbGVNZXNzYWdpbmcgcGx1Z2luIGF1dG9tYXRpY2FsbHkgcmVzZXRzIHRoZSBjb3VudGVyIHRvIDAgd2hlbmV2ZXIgdXNlciBvcGVucyB0aGUgaW4tYXBwIGNoYXQgc2NyZWVuLlxuICAgKiBIb3dldmVyLCB1c2UgdGhlIGZvbGxvd2luZyBBUEkgaW4gY2FzZSB5b3UgbmVlZCB0byBtYW51YWxseSByZXNldCB0aGUgY291bnRlci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRNZXNzYWdlQ291bnRlcigpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==