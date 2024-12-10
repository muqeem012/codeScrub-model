var t = function(elem, options, prop, end, easing, unit) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || jQuery.easing._default;
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
}