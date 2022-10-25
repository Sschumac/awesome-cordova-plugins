import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var WheelSelector = /** @class */ (function (_super) {
    __extends(WheelSelector, _super);
    function WheelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WheelSelector.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    WheelSelector.prototype.hideSelector = function () { return cordova(this, "hideSelector", { "platforms": ["iOS"] }, arguments); };
    WheelSelector.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WheelSelector, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    WheelSelector.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WheelSelector });
    WheelSelector.pluginName = "WheelSelector";
    WheelSelector.plugin = "cordova-wheel-selector-plugin";
    WheelSelector.pluginRef = "SelectorCordovaPlugin";
    WheelSelector.repo = "https://github.com/jasonmamy/cordova-wheel-selector-plugin";
    WheelSelector.platforms = ["Android", "iOS"];
    WheelSelector = __decorate([], WheelSelector);
    return WheelSelector;
}(AwesomeCordovaNativePlugin));
export { WheelSelector };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: WheelSelector, decorators: [{
            type: Injectable
        }], propDecorators: { show: [], hideSelector: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2hlZWwtc2VsZWN0b3Ivbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQW1MekQsaUNBQTBCOzs7O0lBUTNELDRCQUFJLGFBQUMsT0FBNkI7SUFZbEMsb0NBQVk7K0dBcEJELGFBQWE7bUhBQWIsYUFBYTs7Ozs7O0lBQWIsYUFBYSxrQkFBYixhQUFhO3dCQXBMMUI7RUFvTG1DLDBCQUEwQjtTQUFoRCxhQUFhOzRGQUFiLGFBQWE7a0JBRHpCLFVBQVU7OEJBU1QsSUFBSSxNQVlKLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdoZWVsU2VsZWN0b3JJdGVtIHtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdEl0ZW0ge1xuICBpbmRleDogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdoZWVsU2VsZWN0b3JPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgc2VsZWN0b3IncyBpbnB1dCBib3hcbiAgICovXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpdGVtcyB0byBkaXNwbGF5IChhcnJheSBvZiBpdGVtcykuXG4gICAqL1xuICBpdGVtczogV2hlZWxTZWxlY3Rvckl0ZW1bXVtdO1xuXG4gIC8qKlxuICAgKiBXaGljaCBpdGVtcyB0byBkaXNwbGF5IGJ5IGRlZmF1bHQuXG4gICAqL1xuICBkZWZhdWx0SXRlbXM/OiBEZWZhdWx0SXRlbVtdO1xuXG4gIC8qKlxuICAgKiBUaGUgJ29rJyBidXR0b24gdGV4dFxuICAgKiBEZWZhdWx0OiBEb25lXG4gICAqL1xuICBwb3NpdGl2ZUJ1dHRvblRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSAnY2FuY2VsJyBidXR0b24gdGV4dFxuICAgKiBEZWZhdWx0OiBDYW5jZWxcbiAgICovXG4gIG5lZ2F0aXZlQnV0dG9uVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZCBvbmx5IC0gdGhlbWUgY29sb3IsICdsaWdodCcgb3IgJ2RhcmsnLlxuICAgKiBEZWZhdWx0OiBsaWdodFxuICAgKi9cbiAgdGhlbWU/OiAnbGlnaHQnIHwgJ2RhcmsnO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGhhdmUgdGhlIHdoZWVscyAnd3JhcCcgKEFuZHJvaWQgb25seSlcbiAgICogRGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHdyYXBXaGVlbFRleHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUganNvbiBrZXkgdG8gZGlzcGxheSwgYnkgZGVmYXVsdCBpdCBpcyBkZXNjcmlwdGlvbiwgdGhpcyBhbGxvd3MgZm9yIHNldHRpbmcgYW55XG4gICAqIGtleS92YWx1ZSB0byBiZSBkaXNwbGF5ZWRcbiAgICogRGVmYXVsdDogZGVzY3JpcHRpb25cbiAgICovXG4gIGRpc3BsYXlLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2hlZWxTZWxlY3RvckRhdGEge1xuICBkYXRhOiBhbnk7XG59XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIFdoZWVsU2VsZWN0b3IgUGx1Z2luXG4gKiBAZGVzY3JpcHRpb24gTmF0aXZlIHdoZWVsIHNlbGVjdG9yIGZvciBDb3Jkb3ZhIChBbmRyb2lkL2lPUykuXG4gKiBAdXNhZ2VcbiAqIGBgYFxuICogaW1wb3J0IHsgV2hlZWxTZWxlY3RvciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy93aGVlbC1zZWxlY3Rvci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlbGVjdG9yOiBXaGVlbFNlbGVjdG9yKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCBqc29uRGF0YSA9IHtcbiAqICAgbnVtYmVyczogW1xuICogICAgeyBkZXNjcmlwdGlvbjogXCIxXCIgfSxcbiAqICAgICB7IGRlc2NyaXB0aW9uOiBcIjJcIiB9LFxuICogICAgIHsgZGVzY3JpcHRpb246IFwiM1wiIH1cbiAqICAgXSxcbiAqICAgZnJ1aXRzOiBbXG4gKiAgICAgeyBkZXNjcmlwdGlvbjogXCJBcHBsZVwiIH0sXG4gKiAgICAgeyBkZXNjcmlwdGlvbjogXCJCYW5hbmFcIiB9LFxuICogICAgIHsgZGVzY3JpcHRpb246IFwiVGFuZ2VyaW5lXCIgfVxuICogICBdLFxuICogICBmaXJzdE5hbWVzOiBbXG4gKiAgICAgeyBuYW1lOiBcIkZyZWRcIiwgaWQ6ICcxJyB9LFxuICogICAgIHsgbmFtZTogXCJKYW5lXCIsIGlkOiAnMicgfSxcbiAqICAgICB7IG5hbWU6IFwiQm9iXCIsIGlkOiAnMycgfSxcbiAqICAgICB7IG5hbWU6IFwiRWFybFwiLCBpZDogJzQnIH0sXG4gKiAgICAgeyBuYW1lOiBcIkV1bmljZVwiLCBpZDogJzUnIH1cbiAqICAgXSxcbiAqICAgbGFzdE5hbWVzOiBbXG4gKiAgICAgeyBuYW1lOiBcIkpvaG5zb25cIiwgaWQ6ICcxMDAnIH0sXG4gKiAgICAgeyBuYW1lOiBcIkRvZVwiLCBpZDogJzEwMScgfSxcbiAqICAgICB7IG5hbWU6IFwiS2luaXNoaXdhXCIsIGlkOiAnMTAyJyB9LFxuICogICAgIHsgbmFtZTogXCJHb3Jkb25cIiwgaWQ6ICcxMDMnIH0sXG4gKiAgICAgeyBuYW1lOiBcIlNtaXRoXCIsIGlkOiAnMTA0JyB9XG4gKiAgIF1cbiAqIH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBiYXNpYyBudW1iZXIgc2VsZWN0aW9uLCBpbmRleCBpcyBhbHdheXMgcmV0dXJuZWQgaW4gdGhlIHJlc3VsdFxuICogIHNlbGVjdEFOdW1iZXIoKSB7XG4gKiAgICB0aGlzLnNlbGVjdG9yLnNob3coe1xuICogICAgICB0aXRsZTogXCJIb3cgTWFueT9cIixcbiAqICAgICAgaXRlbXM6IFtcbiAqICAgICAgICB0aGlzLmpzb25EYXRhLm51bWJlcnNcbiAqICAgICAgXSxcbiAqICAgIH0pLnRoZW4oXG4gKiAgICAgIHJlc3VsdCA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WzBdLmRlc2NyaXB0aW9uICsgJyBhdCBpbmRleDogJyArIHJlc3VsdFswXS5pbmRleCk7XG4gKiAgICAgIH0sXG4gKiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcbiAqICAgICAgKTtcbiAqICB9XG4gKlxuICogIC4uLlxuICpcbiAqICAvLyBiYXNpYyBzZWxlY3Rpb24sIHNldHRpbmcgaW5pdGlhbCBkaXNwbGF5ZWQgZGVmYXVsdCB2YWx1ZXM6ICczJyAnQmFuYW5hJ1xuICogIHNlbGVjdEZydWl0KCkge1xuICogICAgdGhpcy5zZWxlY3Rvci5zaG93KHtcbiAqICAgICAgdGl0bGU6IFwiSG93IE11Y2g/XCIsXG4gKiAgICAgIGl0ZW1zOiBbXG4gKiAgICAgICAgdGhpcy5qc29uRGF0YS5udW1iZXJzLCB0aGlzLmpzb25EYXRhLmZydWl0c1xuICogICAgICBdLFxuICogICAgICBwb3NpdGl2ZUJ1dHRvblRleHQ6IFwiT2tcIixcbiAqICAgICAgbmVnYXRpdmVCdXR0b25UZXh0OiBcIk5vcGVcIixcbiAqICAgICAgZGVmYXVsdEl0ZW1zOiBbXG4gKiAgXHQgIHtpbmRleDowLCB2YWx1ZTogdGhpcy5qc29uRGF0YS5udW1iZXJzWzJdLmRlc2NyaXB0aW9ufSxcbiAqICBcdCAge2luZGV4OiAxLCB2YWx1ZTogdGhpcy5qc29uRGF0YS5mcnVpdHNbM10uZGVzY3JpcHRpb259XG4gKiAgXHRdXG4gKiAgICB9KS50aGVuKFxuICogICAgICByZXN1bHQgPT4ge1xuICogICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFswXS5kZXNjcmlwdGlvbiArICcgJyArIHJlc3VsdFsxXS5kZXNjcmlwdGlvbik7XG4gKiAgICAgIH0sXG4gKiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxuICogICAgICApO1xuICogIH1cbiAqXG4gKiAgLi4uXG4gKlxuICogIC8vIG1vcmUgY29tcGxleCBhcyBvdmVycmlkZXMgd2hpY2gga2V5IHRvIGRpc3BsYXlcbiAqICAvLyB0aGVuIHJldHJpZXZlIHByb3BlcnRpZXMgZnJvbSBvcmlnaW5hbCBkYXRhXG4gKiAgc2VsZWN0TmFtZXNVc2luZ0Rpc3BsYXlLZXkoKSB7XG4gKiAgICB0aGlzLnNlbGVjdG9yLnNob3coe1xuICogICAgICB0aXRsZTogXCJXaG8/XCIsXG4gKiAgICAgIGl0ZW1zOiBbXG4gKiAgICAgICAgdGhpcy5qc29uRGF0YS5maXJzdE5hbWVzLCB0aGlzLmpzb25EYXRhLmxhc3ROYW1lc1xuICogICAgICBdLFxuICogICAgICBkaXNwbGF5S2V5OiAnbmFtZScsXG4gKiAgICAgIGRlZmF1bHRJdGVtczogW1xuICogIFx0ICB7aW5kZXg6MCwgdmFsdWU6IHRoaXMuanNvbkRhdGEuZmlyc3ROYW1lc1syXS5uYW1lfSxcbiAqICAgICAgICB7aW5kZXg6IDAsIHZhbHVlOiB0aGlzLmpzb25EYXRhLmxhc3ROYW1lc1szXS5uYW1lfVxuICogICAgICBdXG4gKiAgICB9KS50aGVuKFxuICogICAgICByZXN1bHQgPT4ge1xuICogICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFswXS5uYW1lICsgJyAoaWQ9ICcgKyB0aGlzLmpzb25EYXRhLmZpcnN0TmFtZXNbcmVzdWx0WzBdLmluZGV4XS5pZCArICcpLCAnICtcbiAqICAgICAgICAgIHJlc3VsdFsxXS5uYW1lICsgJyAoaWQ9JyArIHRoaXMuanNvbkRhdGEubGFzdE5hbWVzW3Jlc3VsdFsxXS5pbmRleF0uaWQgKyAnKScpO1xuICogICAgICB9LFxuICogICAgICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAqICAgICAgKTtcbiAqICB9XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogV2hlZWxTZWxlY3Rvck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXaGVlbFNlbGVjdG9yJyxcbiAgcGx1Z2luOiAnY29yZG92YS13aGVlbC1zZWxlY3Rvci1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdTZWxlY3RvckNvcmRvdmFQbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWFteS9jb3Jkb3ZhLXdoZWVsLXNlbGVjdG9yLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaGVlbFNlbGVjdG9yIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvd3MgdGhlIHdoZWVsIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7V2hlZWxTZWxlY3Rvck9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIHdoZWVsIHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFdoZWVsU2VsZWN0b3JEYXRhPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzZWxlY3RlZCBpdGVtcywgb3IgYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3cob3B0aW9uczogV2hlZWxTZWxlY3Rvck9wdGlvbnMpOiBQcm9taXNlPFdoZWVsU2VsZWN0b3JEYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgaGlkZVNlbGVjdG9yKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19