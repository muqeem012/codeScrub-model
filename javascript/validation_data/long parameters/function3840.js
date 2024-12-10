var t = function(pos, node, scroll, vert, horiz) {
    var display = this.display;
    pos = cursorCoords(this, clipPos(this.doc, pos));
    var top = pos.bottom,
        left = pos.left;
    node.style.position = "absolute";
    display.sizer.appendChild(node);
    if (vert == "over") {
        top = pos.top;
    } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
            hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
            top = pos.top - node.offsetHeight;
        else if (pos.bottom + node.offsetHeight <= vspace)
            top = pos.bottom;
        if (left + node.offsetWidth > hspace)
            left = hspace - node.offsetWidth;
    }
    node.style.top = top + "px";
    node.style.left = node.style.right = "";
    if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth;
        node.style.right = "0px";
    } else {
        if (horiz == "left") left = 0;
        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
        node.style.left = left + "px";
    }
    if (scroll)
        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
}