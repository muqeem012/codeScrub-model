var t = function(assert, jQuery, window, document) {
    var $cached = window["$cached"];
    assert.expect(4);
    assert.notStrictEqual(jQuery, $cached, "Loaded two engines");
    assert.deepEqual($cached(".test a").get(), [document.getElementById("collision")], "Select collision anchor with first sizzle");
    assert.equal(jQuery(".evil a").length, 0, "Select nothing with second sizzle");
    assert.equal(jQuery(".evil a").length, 0, "Select nothing again with second sizzle");
}