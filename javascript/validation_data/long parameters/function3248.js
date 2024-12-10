var t = function(assert, jQuery, window, document, support) {
    var done = assert.async();
    assert.expect(2);
    assert.deepEqual(jQuery.extend({}, support), computedSupport,
        "No violations of CSP polices");
    supportjQuery.get("data/support/csp.log").done(function(data) {
        assert.equal(data, "", "No log request should be sent");
        supportjQuery.get("data/support/csp-clean.php").done(done);
    });
}