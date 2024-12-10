var t = function(elem, types, handler, selector, mappedTypes) {
    var j, handleObj, tmp,
        origCount, t, events,
        special, handlers, type,
        namespaces, origType,
        elemData = jQuery.hasData(elem) && jQuery._data(elem);
    if (!elemData || !(events = elemData.events)) {
        return;
    }
    types = (types || "").match(core_rnotwhite) || [""];
    t = types.length;
    while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
            for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
            }
            continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
            handleObj = handlers[j];
            if ((mappedTypes || origType === handleObj.origType) &&
                (!handler || handler.guid === handleObj.guid) &&
                (!tmp || tmp.test(handleObj.namespace)) &&
                (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                    handlers.delegateCount--;
                }
                if (special.remove) {
                    special.remove.call(elem, handleObj);
                }
            }
        }
        if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
            }
            delete events[type];
        }
    }
    if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        jQuery._removeData(elem, "events");
    }
}