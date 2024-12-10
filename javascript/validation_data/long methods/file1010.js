var t = function(value, stateVal) {
    var type = typeof value,
        isBool = typeof stateVal === "boolean";
    if (jQuery.isFunction(value)) {
        return this.each(function(i) {
            jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
    }
    return this.each(function() {
        if (type === "string") {
            var className,
                i = 0,
                self = jQuery(this),
                state = stateVal,
                classNames = value.match(core_rnotwhite) || [];
            while ((className = classNames[i++])) {
                state = isBool ? state : !self.hasClass(className);
                self[state ? "addClass" : "removeClass"](className);
            }
        } else if (type === core_strundefined || type === "boolean") {
            if (this.className) {
                jQuery._data(this, "__className__", this.className);
            }
            this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
        }
    });
}