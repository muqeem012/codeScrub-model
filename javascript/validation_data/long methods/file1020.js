var t = function(elem, value) {
    var name, propName,
        i = 0,
        attrNames = value && value.match(core_rnotwhite);
    if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
            propName = jQuery.propFix[name] || name;
            if (rboolean.test(name)) {
                if (!getSetAttribute && ruseDefault.test(name)) {
                    elem[jQuery.camelCase("default-" + name)] =
                        elem[propName] = false;
                } else {
                    elem[propName] = false;
                }
            } else {
                jQuery.attr(elem, name, "");
            }
            elem.removeAttribute(getSetAttribute ? name : propName);
        }
    }
}