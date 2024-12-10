var t = function(elem, name, value) {
    var ret, hooks, notxml,
        nType = elem.nodeType;
    if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
    }
    notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
    if (notxml) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
    }
    if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
        } else {
            return (elem[name] = value);
        }
    } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
        } else {
            return elem[name];
        }
    }
}