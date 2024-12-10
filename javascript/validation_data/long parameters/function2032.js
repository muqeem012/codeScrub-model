var t = function(assert, jQuery, window, document, cc_on, errors) {
    assert.expect(3);
    assert.ok(true, "JScript conditional compilation " + (cc_on ? "supported" : "not supported"));
    assert.deepEqual(errors, [], "No errors");
    assert.ok(jQuery(), "jQuery executes");
}