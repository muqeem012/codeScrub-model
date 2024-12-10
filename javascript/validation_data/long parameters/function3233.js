var t = function(assert, jQuery, window, document) {
    assert.expect(38);

    function q() {
        var r = [],
            i = 0;
        for (; i < arguments.length; i++) {
            r.push(document.getElementById(arguments[i]));
        }
        return r;
    }

    function t(a, b, c) {
        var f = jQuery(b).get(),
            s = "",
            i = 0;
        for (; i < f.length; i++) {
            s += (s && ",") + "'" + f[i].id + "'";
        }
        assert.deepEqual(f, q.apply(q, c), a + " (" + b + ")");
    }
    t("Attribute Exists", "[autobuffer]", ["video1"]);
    t("Attribute Exists", "[autofocus]", ["text1"]);
    t("Attribute Exists", "[autoplay]", ["video1"]);
    t("Attribute Exists", "[async]", ["script1"]);
    t("Attribute Exists", "[checked]", ["check1"]);
    t("Attribute Exists", "[compact]", ["dl"]);
    t("Attribute Exists", "[controls]", ["video1"]);
    t("Attribute Exists", "[declare]", ["object1"]);
    t("Attribute Exists", "[defer]", ["script1"]);
    t("Attribute Exists", "[disabled]", ["check1"]);
    t("Attribute Exists", "[formnovalidate]", ["form1"]);
    t("Attribute Exists", "[hidden]", ["div1"]);
    t("Attribute Exists", "[indeterminate]", []);
    t("Attribute Exists", "[ismap]", ["img1"]);
    t("Attribute Exists", "[itemscope]", ["div1"]);
    t("Attribute Exists", "[loop]", ["video1"]);
    t("Attribute Exists", "[multiple]", ["select1"]);
    t("Attribute Exists", "[muted]", ["audio1"]);
    t("Attribute Exists", "[nohref]", ["area1"]);
    t("Attribute Exists", "[noresize]", ["textarea1"]);
    t("Attribute Exists", "[noshade]", ["hr1"]);
    t("Attribute Exists", "[nowrap]", ["td1", "div1"]);
    t("Attribute Exists", "[novalidate]", ["form1"]);
    t("Attribute Exists", "[open]", ["details1"]);
    t("Attribute Exists", "[pubdate]", ["article1"]);
    t("Attribute Exists", "[readonly]", ["text1"]);
    t("Attribute Exists", "[required]", ["text1"]);
    t("Attribute Exists", "[reversed]", ["ol1"]);
    t("Attribute Exists", "[scoped]", ["style1"]);
    t("Attribute Exists", "[seamless]", ["iframe1"]);
    t("Attribute Exists", "[selected]", ["option1"]);
    t("Attribute Exists", "[truespeed]", ["marquee1"]);
    jQuery.expandedEach = jQuery.each;
    jQuery.expandedEach(["draggable", "contenteditable", "aria-disabled"], function(i, val) {
        t("Enumerated attribute", "[" + val + "]", ["div1"]);
    });
    t("Enumerated attribute", "[spellcheck]", ["span1"]);
    t("tabindex selector does not retrieve all elements in IE6/7 (#8473)",
        "form, [tabindex]", ["form1", "text1"]);
    t("Improperly named form elements do not interfere with form selections (#9570)", "form[name='formName']", ["form1"]);
}