var t = function(assert, jQuery, window, document) {
    assert.expect(2);
    assert.ok(jQuery(document).height() > jQuery(window).height(), "document height is larger than window height");
    assert.ok(jQuery(document).width() > jQuery(window).width(), "document width is larger than window width");
}