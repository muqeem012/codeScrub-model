var t = function(e, a, b, c) {
    assert.equal(arguments.length, 4, "Check arguments length");
    assert.equal(a, 1, "Check first custom argument");
    assert.equal(b, 2, "Check second custom argument");
    assert.equal(c, 3, "Check third custom argument");
    assert.equal(e.isDefaultPrevented(), false, "Verify isDefaultPrevented");
    assert.equal(e.isPropagationStopped(), false, "Verify isPropagationStopped");
    assert.equal(e.isImmediatePropagationStopped(), false, "Verify isImmediatePropagationStopped");
    e.stopImmediatePropagation();
    return "result";
}