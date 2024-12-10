var t = function(_dereq_, module, exports) {
    'use strict';
    var ExecutionEnvironment = _dereq_(143);

    function makePrefixMap(styleProp, eventName) {
        var prefixes = {};
        prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
        prefixes['Webkit' + styleProp] = 'webkit' + eventName;
        prefixes['Moz' + styleProp] = 'moz' + eventName;
        prefixes['ms' + styleProp] = 'MS' + eventName;
        prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();
        return prefixes;
    }
    var vendorPrefixes = {
        animationend: makePrefixMap('Animation', 'AnimationEnd'),
        animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
        animationstart: makePrefixMap('Animation', 'AnimationStart'),
        transitionend: makePrefixMap('Transition', 'TransitionEnd')
    };
    var prefixedEventNames = {};
    var style = {};
    if (ExecutionEnvironment.canUseDOM) {
        style = document.createElement('div').style;
        if (!('AnimationEvent' in window)) {
            delete vendorPrefixes.animationend.animation;
            delete vendorPrefixes.animationiteration.animation;
            delete vendorPrefixes.animationstart.animation;
        }
        if (!('TransitionEvent' in window)) {
            delete vendorPrefixes.transitionend.transition;
        }
    }

    function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) {
            return prefixedEventNames[eventName];
        } else if (!vendorPrefixes[eventName]) {
            return eventName;
        }
        var prefixMap = vendorPrefixes[eventName];
        for (var styleProp in prefixMap) {
            if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
                return prefixedEventNames[eventName] = prefixMap[styleProp];
            }
        }
        return '';
    }
    module.exports = getVendorPrefixedEventName;
}