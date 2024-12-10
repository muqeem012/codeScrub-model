var t = function(assert, jQuery, window, document, cssWidthBeforeDocReady) {
    assert.expect(1);
    assert.strictEqual(cssWidthBeforeDocReady, "100px", "elem.css('width') works correctly before document ready");
}