var t = function(elem, types, handler, data, selector) {
    var tmp, events, t, handleObjIn,
        special, eventHandle, handleObj,
        handlers, type, namespaces, origType,
        elemData = jQuery._data(elem);
    if (!elemData) {
        return;
    }
    if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
    }
    if (!handler.guid) {
        handler.guid = jQuery.guid++;
    }
    if (!(events = elemData.events)) {
        events = elemData.events = {};
    }
    if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
            return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
                jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
                undefined;
        };
        eventHandle.elem = elem;
    }
    types = (types || "").match(core_rnotwhite) || [""];
    t = types.length;
    while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
            type: type,
            origType: origType,
            data: data,
            handler: handler,
            guid: handler.guid,
            selector: selector,
            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle, false);
                } else if (elem.attachEvent) {
                    elem.attachEvent("on" + type, eventHandle);
                }
            }
        }
        if (special.add) {
            special.add.call(elem, handleObj);
            if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
            }
        }
        if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
            handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
    }
    elem = null;
}