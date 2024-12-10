var t = function(assert, framejQuery, frameWin, frameDoc) {
    assert.expect(1);
    var input = jQuery(frameDoc).find("#frame-input");
    jQuery("body").on("focusin.iframeTest", function() {
        assert.ok(false, "fired a focusin event in the parent document");
    });
    input.on("focusin", function() {
        assert.ok(true, "fired a focusin event in the iframe");
    });
    input.trigger("focusin");
    input.remove();
    input.trigger("focusin");
    jQuery("body").off("focusin.iframeTest");
}