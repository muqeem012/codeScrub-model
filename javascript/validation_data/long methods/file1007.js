var t = function(value) {
    var classes, elem, cur, clazz, j,
        i = 0,
        len = this.length,
        proceed = arguments.length === 0 || typeof value === "string" && value;
    if (jQuery.isFunction(value)) {
        return this.each(function(j) {
            jQuery(this).removeClass(value.call(this, j, this.className));
        });
    }
    if (proceed) {
        classes = (value || "").match(core_rnotwhite) || [];
        for (; i < len; i++) {
            elem = this[i];
            cur = elem.nodeType === 1 && (elem.className ?
                (" " + elem.className + " ").replace(rclass, " ") :
                ""
            );
            if (cur) {
                j = 0;
                while ((clazz = classes[j++])) {
                    while (cur.indexOf(" " + clazz + " ") >= 0) {
                        cur = cur.replace(" " + clazz + " ", " ");
                    }
                }
                elem.className = value ? jQuery.trim(cur) : "";
            }
        }
    }
    return this;
}