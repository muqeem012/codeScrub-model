var t = function(elem, name, value) {
    var hooks, notxml, ret,
        nType = elem.nodeType;
    if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
    }
    if (typeof elem.getAttribute === core_strundefined) {
        return jQuery.prop(elem, name, value);
    }
    notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
    if (notxml) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
    }
    if (value !== undefined) {
        if (value === null) {
            jQuery.removeAttr(elem, name);
        } else if (hooks && notxml && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
        } else {
            elem.setAttribute(name, value + "");
            return value;
        }
    } else if (hooks && notxml && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
    } else {
        if (typeof elem.getAttribute !== core_strundefined) {
            ret = elem.getAttribute(name);
        }
        return ret == null ?
            undefined :
            ret;
    }
}