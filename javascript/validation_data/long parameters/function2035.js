var t = function(assert, jQuery, window, document, error) {
    assert.expect(1);
    assert.equal(error, false, "no call to user-defined onready");
}