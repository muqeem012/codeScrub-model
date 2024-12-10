var t = function(assert, jQuery, window, document, ready) {
    assert.expect(1);
    assert.equal(true, ready, "document ready correctly fired when jQuery is loaded after DOMContentLoaded");
}