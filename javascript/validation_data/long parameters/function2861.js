var t = function(assert, jQuery, window, document, isOk) {
    assert.expect(1);
    assert.ok(isOk, "$.when( $.ready ) works");
}