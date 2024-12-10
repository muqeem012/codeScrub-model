var t = function(v1, v2, s1, s2) {
    assert.strictEqual(v1, "other deferred", "chaining in done handler");
    assert.strictEqual(v2, "other deferred", "chaining in fail handler");
    assert.strictEqual(s1, "std deferred", "chaining thenable in done handler");
    assert.strictEqual(s2, "std deferred", "chaining thenable in fail handler");
    QUnit.start();
}