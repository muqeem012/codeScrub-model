function dataAttr(elem, key, data) {
    if (data === undefined && elem.nodeType === 1) {
        var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
        data = elem.getAttribute(name);
        if (typeof data === "string") {
            try {
                data =
                    data === "true" ?
                    true :
                    data === "false" ?
                    false :
                    data === "null" ?
                    null :
                    !jQuery.isNaN(data) ?
                    parseFloat(data) :
                    rbrace.test(data) ?
                    jQuery.parseJSON(data) :
                    data;
            } catch (e) {}
            jQuery.data(elem, key, data);
        } else {
            data = undefined;
        }
    }
    return data;
}