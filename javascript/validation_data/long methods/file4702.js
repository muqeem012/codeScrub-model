var t = function(_dereq_, module, exports) {
    'use strict';
    var ExecutionEnvironment = _dereq_(143);
    var WHITESPACE_TEST = /^[ \r\n\t\f]/;
    var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
    var createMicrosoftUnsafeLocalFunction = _dereq_(116);
    var setInnerHTML = createMicrosoftUnsafeLocalFunction(function(node, html) {
        node.innerHTML = html;
    });
    if (ExecutionEnvironment.canUseDOM) {
        var testElement = document.createElement('div');
        testElement.innerHTML = ' ';
        if (testElement.innerHTML === '') {
            setInnerHTML = function(node, html) {
                if (node.parentNode) {
                    node.parentNode.replaceChild(node, node);
                }
                if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
                    node.innerHTML = String.fromCharCode(0xFEFF) + html;
                    var textNode = node.firstChild;
                    if (textNode.data.length === 1) {
                        node.removeChild(textNode);
                    } else {
                        textNode.deleteData(0, 1);
                    }
                } else {
                    node.innerHTML = html;
                }
            };
        }
        testElement = null;
    }
    module.exports = setInnerHTML;
}