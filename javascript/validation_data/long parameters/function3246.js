var t = function(assert, jQuery, window, document, color, support) {
    assert.expect(2);
    var okValue = {
        "#000000": true,
        "rgb(0, 0, 0)": true
    };
    assert.ok(okValue[color], "color was not reset (" + color + ")");
    assert.deepEqual(jQuery.extend({}, support), computedSupport,
        "Same support properties");
}