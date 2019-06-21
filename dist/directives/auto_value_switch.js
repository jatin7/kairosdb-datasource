System.register([], function (exports_1, context_1) {
    "use strict";
    var AutoValueSwitch;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            AutoValueSwitch = (function () {
                function AutoValueSwitch(dependentParameters) {
                    this.enabled = false;
                    this.dependentParameters = dependentParameters;
                }
                AutoValueSwitch.fromObject = function (object, dependentParameters) {
                    var rval = new AutoValueSwitch(dependentParameters);
                    rval.enabled = object.enabled;
                    return rval;
                };
                return AutoValueSwitch;
            }());
            exports_1("AutoValueSwitch", AutoValueSwitch);
        }
    };
});
//# sourceMappingURL=auto_value_switch.js.map