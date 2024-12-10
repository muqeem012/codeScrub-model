var t = function(from, to, text, origin) {
    if (from) this.from = clipPos(doc, from);
    if (to) this.to = clipPos(doc, to);
    if (text) this.text = text;
    if (origin !== undefined) this.origin = origin;
}