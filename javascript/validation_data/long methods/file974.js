var t = function() {
    var container, marginDiv, tds,
        divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        body = document.getElementsByTagName("body")[0];
    if (!body) {
        return;
    }
    container = document.createElement("div");
    container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
    body.appendChild(container).appendChild(div);
    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
    tds = div.getElementsByTagName("td");
    tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
    isSupported = (tds[0].offsetHeight === 0);
    tds[0].style.display = "";
    tds[1].style.display = "none";
    support.reliableHiddenOffsets = isSupported && (tds[0].offsetHeight === 0);
    div.innerHTML = "";
    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
    support.boxSizing = (div.offsetWidth === 4);
    support.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== 1);
    if (window.getComputedStyle) {
        support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
        support.boxSizingReliable = (window.getComputedStyle(div, null) || {
            width: "4px"
        }).width === "4px";
        marginDiv = div.appendChild(document.createElement("div"));
        marginDiv.style.cssText = div.style.cssText = divReset;
        marginDiv.style.marginRight = marginDiv.style.width = "0";
        div.style.width = "1px";
        support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
    }
    if (typeof div.style.zoom !== core_strundefined) {
        div.innerHTML = "";
        div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
        support.inlineBlockNeedsLayout = (div.offsetWidth === 3);
        div.style.display = "block";
        div.innerHTML = "<div></div>";
        div.firstChild.style.width = "5px";
        support.shrinkWrapBlocks = (div.offsetWidth !== 3);
        if (support.inlineBlockNeedsLayout) {
            body.style.zoom = 1;
        }
    }
    body.removeChild(container);
    container = div = tds = marginDiv = null;
}