var t = function(assert, jQuery, window, document, isOk) {
    assert.expect(1);
    assert.ok(isOk, "jQuery fires ready when the DOM can truly be interacted with");
}