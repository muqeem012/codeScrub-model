var t = function(i) {
    var val,
        self = jQuery(this);
    if (this.nodeType !== 1) {
        return;
    }
    if (isFunction) {
        val = value.call(this, i, self.val());
    } else {
        val = value;
    }
    if (val == null) {
        val = "";
    } else if (typeof val === "number") {
        val += "";
    } else if (jQuery.isArray(val)) {
        val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
        });
    }
    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
        this.value = val;
    }
}