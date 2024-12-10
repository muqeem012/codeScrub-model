var t = function(event, a, b, c) {
    assert.equal(event.type, "click", "check passed data");
    assert.equal(a, 1, "check passed data");
    assert.equal(b, "2", "check passed data");
    assert.equal(c, "abc", "check passed data");
    return "test";
}