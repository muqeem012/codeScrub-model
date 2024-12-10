var t = function(elem) {
    var value, option,
        options = elem.options,
        index = elem.selectedIndex,
        one = elem.type === "select-one" || index < 0,
        values = one ? null : [],
        max = one ? index + 1 : options.length,
        i = index < 0 ?
        max :
        one ? index : 0;
    for (; i < max; i++) {
        option = options[i];
        if ((option.selected || i === index) &&
            (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
            (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
            value = jQuery(option).val();
            if (one) {
                return value;
            }
            values.push(value);
        }
    }
    return values;
}