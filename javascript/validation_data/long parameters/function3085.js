var t = function(assert, framejQuery, frameWindow, frameDocument) {
    assert.expect(2);
    jQuery(frameDocument.body).append("<script>window.scriptTest = true;<\x2fscript>");
    assert.ok(!window.scriptTest, "script executed in iframe context");
    assert.ok(frameWindow.scriptTest, "script executed in iframe context");
}