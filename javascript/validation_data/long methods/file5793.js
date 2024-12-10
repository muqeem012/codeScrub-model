var t = function(
    transaction,
    hostParent,
    hostContainerInfo,
    context
) {
    if (__DEV__) {
        ReactInstrumentation.debugTool.onSetText(this._debugID, this._stringText);
        var parentInfo;
        if (hostParent != null) {
            parentInfo = hostParent._ancestorInfo;
        } else if (hostContainerInfo != null) {
            parentInfo = hostContainerInfo._ancestorInfo;
        }
        if (parentInfo) {
            validateDOMNesting('#text', this, parentInfo);
        }
    }
    var domID = hostContainerInfo._idCounter++;
    var openingValue = ' react-text: ' + domID + ' ';
    var closingValue = ' /react-text ';
    this._domID = domID;
    this._hostParent = hostParent;
    if (transaction.useCreateElement) {
        var ownerDocument = hostContainerInfo._ownerDocument;
        var openingComment = ownerDocument.createComment(openingValue);
        var closingComment = ownerDocument.createComment(closingValue);
        var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
        if (this._stringText) {
            DOMLazyTree.queueChild(
                lazyTree,
                DOMLazyTree(ownerDocument.createTextNode(this._stringText))
            );
        }
        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
        ReactDOMComponentTree.precacheNode(this, openingComment);
        this._closingComment = closingComment;
        return lazyTree;
    } else {
        var escapedText = escapeTextContentForBrowser(this._stringText);
        if (transaction.renderToStaticMarkup) {
            return escapedText;
        }
        return (
            '<!--' + openingValue + '-->' + escapedText +
            '<!--' + closingValue + '-->'
        );
    }
}