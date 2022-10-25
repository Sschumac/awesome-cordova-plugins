import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var WebSocketServer = /** @class */ (function (_super) {
    __extends(WebSocketServer, _super);
    function WebSocketServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebSocketServer.prototype.getInterfaces = function () { return cordova(this, "getInterfaces", {}, arguments); };
    WebSocketServer.prototype.start = function (port, options) { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    WebSocketServer.prototype.onFunctionToObservable = function (fnName) {
        return new Observable(function (observer) {
            var id = window.cordova.plugins.wsserver[fnName](observer.next.bind(observer), observer.error.bind(observer));
            return function () { return window.cordova.plugins.wsserver.removeCallback(id); };
        });
    };
    /**
     * Watches for new messages
     *
     * @returns {Observable<WebSocketMessage>}
     */
    WebSocketServer.prototype.watchMessage = function () {
        return this.onFunctionToObservable('onMessage');
    };
    /**
     * Watches for new opened connections
     *
     * @returns {Observable<WebSocketConnection>}
     */
    WebSocketServer.prototype.watchOpen = function () {
        return this.onFunctionToObservable('onOpen');
    };
    /**
     * Watches for closed connections
     *
     * @returns {Observable<WebSocketClose>}
     */
    WebSocketServer.prototype.watchClose = function () {
        return this.onFunctionToObservable('onClose');
    };
    /**
     * Watches for any websocket failures
     *
     * @returns {Observable<WebSocketFailure>}
     */
    WebSocketServer.prototype.watchFailure = function () {
        return this.onFunctionToObservable('onFailure');
    };
    WebSocketServer.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebSocketServer.prototype.send = function (conn, msg) { return cordova(this, "send", {}, arguments); };
    WebSocketServer.prototype.close = function (conn, code, reason) { return cordova(this, "close", {}, arguments); };
    WebSocketServer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WebSocketServer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    WebSocketServer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WebSocketServer });
    WebSocketServer.pluginName = "WebSocketServer";
    WebSocketServer.plugin = "cordova-plugin-websocket-server";
    WebSocketServer.pluginRef = "cordova.plugins.wsserver";
    WebSocketServer.repo = "https://github.com/becvert/cordova-plugin-websocket-server";
    WebSocketServer.platforms = ["Android", "iOS"];
    WebSocketServer = __decorate([], WebSocketServer);
    return WebSocketServer;
}(AwesomeCordovaNativePlugin));
export { WebSocketServer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WebSocketServer, decorators: [{
            type: Injectable
        }], propDecorators: { getInterfaces: [], start: [], stop: [], send: [], close: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLXNvY2tldC1zZXJ2ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBMkdHLG1DQUEwQjs7OztJQU83RCx1Q0FBYTtJQWViLCtCQUFLLGFBQUMsSUFBWSxFQUFFLE9BQXlCO0lBSXJDLGdEQUFzQixHQUE5QixVQUFrQyxNQUFjO1FBQzlDLE9BQU8sSUFBSSxVQUFVLENBQUksVUFBQyxRQUFRO1lBQ2hDLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRWhILE9BQU8sY0FBTSxPQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQWxELENBQWtELENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHNDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9DQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHNDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUUQsOEJBQUk7SUFZSiw4QkFBSSxhQUFDLElBQXlCLEVBQUUsR0FBVztJQWEzQywrQkFBSyxhQUFDLElBQXlCLEVBQUUsSUFBWSxFQUFFLE1BQWM7aUhBckdsRCxlQUFlO3FIQUFmLGVBQWU7Ozs7OztJQUFmLGVBQWUsa0JBQWYsZUFBZTswQkE3RzVCO0VBNkdxQywwQkFBMEI7U0FBbEQsZUFBZTs0RkFBZixlQUFlO2tCQUQzQixVQUFVOzhCQVFULGFBQWEsTUFlYixLQUFLLE1Bc0RMLElBQUksTUFZSixJQUFJLE1BYUosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0SW50ZXJmYWNlcyB7XG4gIFtrZXk6IHN0cmluZ106IFdlYlNvY2tldEludGVyZmFjZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRJbnRlcmZhY2Uge1xuICBpcHY0QWRkcmVzc2VzOiBzdHJpbmdbXTtcbiAgaXB2NkFkZHJlc3Nlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0T3B0aW9ucyB7XG4gIG9yaWdpbnM/OiBzdHJpbmdbXTtcbiAgcHJvdG9jb2xzPzogc3RyaW5nW107XG4gIHRjcE5vRGVsYXk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldElkZW50aWZpZXIge1xuICB1dWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0U2VydmVyRGV0YWlscyB7XG4gIGFkZHI6IHN0cmluZztcbiAgcG9ydDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldEZhaWx1cmUgZXh0ZW5kcyBXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzIHtcbiAgcmVhc29uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0TWVzc2FnZSB7XG4gIGNvbm46IFdlYlNvY2tldENvbm5lY3Rpb247XG4gIG1zZzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldENsb3NlIHtcbiAgY29ubjogV2ViU29ja2V0Q29ubmVjdGlvbjtcbiAgY29kZTogbnVtYmVyO1xuICByZWFzb246IHN0cmluZztcbiAgd2FzQ2xlYW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0Q29ubmVjdGlvbiBleHRlbmRzIFdlYlNvY2tldElkZW50aWZpZXIge1xuICByZW1vdGVBdHRyOiBzdHJpbmc7XG4gIHN0YXRlOiAnb3BlbicgfCAnY2xvc2VkJztcbiAgaHR0cEZpZWxkczogSHR0cEZpZWxkcztcbiAgcmVzb3VyY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIdHRwRmllbGRzIHtcbiAgJ0FjY2VwdC1FbmNvZGluZyc6IHN0cmluZztcbiAgJ0FjY2VwdC1MYW5ndWFnZSc6IHN0cmluZztcbiAgJ0NhY2hlLUNvbnRyb2wnOiBzdHJpbmc7XG4gIENvbm5lY3Rpb246IHN0cmluZztcbiAgSG9zdDogc3RyaW5nO1xuICBPcmlnaW46IHN0cmluZztcbiAgUHJhZ21hOiBzdHJpbmc7XG4gICdTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMnOiBzdHJpbmc7XG4gICdTZWMtV2ViU29ja2V0LUtleSc6IHN0cmluZztcbiAgJ1NlYy1XZWJTb2NrZXQtVmVyc2lvbic6IHN0cmluZztcbiAgVXBncmFkZTogc3RyaW5nO1xuICAnVXNlci1BZ2VudCc6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBXZWJTb2NrZXQgU2VydmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcnVuIGEgc2luZ2xlLCBsaWdodHdlaWdodCwgYmFyZWJvbmUgV2ViU29ja2V0IFNlcnZlci5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViU29ja2V0U2VydmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3dlYi1zb2NrZXQtc2VydmVyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdzc2VydmVyOiBXZWJTb2NrZXRTZXJ2ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIHN0YXJ0IHdlYnNvY2tldCBzZXJ2ZXJcbiAqIHRoaXMud3NzZXJ2ZXIuc3RhcnQoODg4OCwge30pLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IHNlcnZlciA9PiBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uICR7c2VydmVyLmFkZHJ9OiR7c2VydmVyLnBvcnR9YCksXG4gKiAgIGVycm9yOiBlcnJvciA9PiBjb25zb2xlLmxvZyhgVW5leHBlY3RlZCBlcnJvcmAsIGVycm9yKTtcbiAqIH0pO1xuICpcbiAqIC8vIHdhdGNoIGZvciBhbnkgbWVzc2FnZXNcbiAqIHRoaXMud3NzZXJ2ZXIud2F0Y2hNZXNzYWdlKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBtZXNzYWdlICR7cmVzdWx0Lm1zZ30gZnJvbSAke3Jlc3VsdC5jb25uLnV1aWR9YCk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzZW5kIG1lc3NhZ2UgdG8gY29ubmVjdGlvbiB3aXRoIHNwZWNpZmllZCB1dWlkXG4gKiB0aGlzLndzc2VydmVyLnNlbmQoeyB1dWlkOiAnOGU3YzRmNDgtZGU2OC00YjZmLThmY2EtMTA2N2EzNTM5NjhkJyB9LCAnSGVsbG8gV29ybGQnKTtcbiAqXG4gKiAvLyBzdG9wIHdlYnNvY2tldCBzZXJ2ZXJcbiAqIHRoaXMud3NzZXJ2ZXIuc3RvcCgpLnRoZW4oc2VydmVyID0+IHtcbiAqICAgY29uc29sZS5sb2coYFN0b3AgbGlzdGVuaW5nIG9uICR7c2VydmVyLmFkZHJ9OiR7c2VydmVyLnBvcnR9YCk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJTb2NrZXRTZXJ2ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJzb2NrZXQtc2VydmVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLndzc2VydmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iZWN2ZXJ0L2NvcmRvdmEtcGx1Z2luLXdlYnNvY2tldC1zZXJ2ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0U2VydmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0dXJuIHRoaXMgZGV2aWNlJ3MgaW50ZXJmYWNlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxXZWJTb2NrZXRJbnRlcmZhY2VzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW50ZXJmYWNlcygpOiBQcm9taXNlPFdlYlNvY2tldEludGVyZmFjZXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgd2Vic29ja2V0IHNlcnZlclxuICAgKlxuICAgKiBAcGFyYW0gcG9ydCB7bnVtYmVyfSBMb2NhbCBwb3J0IG9uIHdoaWNoIHRoZSBzZXJ2aWNlIHJ1bnMuICgwIG1lYW5zIGFueSBmcmVlIHBvcnQpXG4gICAqIEBwYXJhbSBvcHRpb25zIHtXZWJTb2NrZXRPcHRpb25zfSBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHdlYnNvY2tldFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPn0gUmV0dXJucyBPYnNlcnZhYmxlIHdoZXJlIGFsbCBnZW5lcmljIGVycm9yIGNhbiBiZSBjYXRjaGVkIChtb3N0bHkgSlNPTkV4Y2VwdGlvbnMpXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcCcsXG4gIH0pXG4gIHN0YXJ0KHBvcnQ6IG51bWJlciwgb3B0aW9uczogV2ViU29ja2V0T3B0aW9ucyk6IE9ic2VydmFibGU8V2ViU29ja2V0U2VydmVyRGV0YWlscz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHByaXZhdGUgb25GdW5jdGlvblRvT2JzZXJ2YWJsZTxUPihmbk5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gd2luZG93LmNvcmRvdmEucGx1Z2lucy53c3NlcnZlcltmbk5hbWVdKG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcblxuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMud3NzZXJ2ZXIucmVtb3ZlQ2FsbGJhY2soaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgZm9yIG5ldyBtZXNzYWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxXZWJTb2NrZXRNZXNzYWdlPn1cbiAgICovXG4gIHdhdGNoTWVzc2FnZSgpOiBPYnNlcnZhYmxlPFdlYlNvY2tldE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5vbkZ1bmN0aW9uVG9PYnNlcnZhYmxlKCdvbk1lc3NhZ2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYXRjaGVzIGZvciBuZXcgb3BlbmVkIGNvbm5lY3Rpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldENvbm5lY3Rpb24+fVxuICAgKi9cbiAgd2F0Y2hPcGVuKCk6IE9ic2VydmFibGU8V2ViU29ja2V0Q29ubmVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uT3BlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoZXMgZm9yIGNsb3NlZCBjb25uZWN0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxXZWJTb2NrZXRDbG9zZT59XG4gICAqL1xuICB3YXRjaENsb3NlKCk6IE9ic2VydmFibGU8V2ViU29ja2V0Q2xvc2U+IHtcbiAgICByZXR1cm4gdGhpcy5vbkZ1bmN0aW9uVG9PYnNlcnZhYmxlKCdvbkNsb3NlJyk7XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2hlcyBmb3IgYW55IHdlYnNvY2tldCBmYWlsdXJlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxXZWJTb2NrZXRGYWlsdXJlPn1cbiAgICovXG4gIHdhdGNoRmFpbHVyZSgpOiBPYnNlcnZhYmxlPFdlYlNvY2tldEZhaWx1cmU+IHtcbiAgICByZXR1cm4gdGhpcy5vbkZ1bmN0aW9uVG9PYnNlcnZhYmxlKCdvbkZhaWx1cmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHdlYnNvY2tldCBzZXJ2ZXIgYW5kIGNsb3NlcyBhbGwgY29ubmVjdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8V2ViU29ja2V0U2VydmVyRGV0YWlscz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgTWVzc2FnZSB0byBhIGNvbm5lY3RlZCBkZXZpY2VcbiAgICpcbiAgICogQHBhcmFtIGNvbm4ge1dlYlNvY2tldElkZW50aWZpZXJ9IENvbm5lY3Rpb24gdG8gc2VuZCBtZXNzYWdlIHRvXG4gICAqIEBwYXJhbSBtc2cge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kKGNvbm46IFdlYlNvY2tldElkZW50aWZpZXIsIG1zZzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHNwZWNpZmljIGNvbm5lY3Rpb24gdXNpbmcgdXVpZFxuICAgKlxuICAgKiBAcGFyYW0gY29ubiB7V2ViU29ja2V0SWRlbnRpZmllcn0gQ29ubmVjdGlvbiB0byBjbG9zZVxuICAgKiBAcGFyYW0gY29kZSB7bnVtYmVyfSBDbG9zZSBjb2RlLCBkZXRlcm1pbmVzIGlmIGl0IHdhcyBjbGVhblxuICAgKiBAcGFyYW0gcmVhc29uIHtzdHJpbmd9IFJlYXNvbiBmb3IgY2xvc2luZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xvc2UoY29ubjogV2ViU29ja2V0SWRlbnRpZmllciwgY29kZTogbnVtYmVyLCByZWFzb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19