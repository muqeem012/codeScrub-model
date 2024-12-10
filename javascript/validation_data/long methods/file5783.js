var t = function(transaction, prevElement, nextElement, context) {
    var lastProps = prevElement.props;
    var nextProps = this._currentElement.props;
    switch (this._tag) {
        case 'button':
            lastProps = ReactDOMButton.getHostProps(this, lastProps);
            nextProps = ReactDOMButton.getHostProps(this, nextProps);
            break;
        case 'input':
            ReactDOMInput.updateWrapper(this);
            lastProps = ReactDOMInput.getHostProps(this, lastProps);
            nextProps = ReactDOMInput.getHostProps(this, nextProps);
            break;
        case 'option':
            lastProps = ReactDOMOption.getHostProps(this, lastProps);
            nextProps = ReactDOMOption.getHostProps(this, nextProps);
            break;
        case 'select':
            lastProps = ReactDOMSelect.getHostProps(this, lastProps);
            nextProps = ReactDOMSelect.getHostProps(this, nextProps);
            break;
        case 'textarea':
            ReactDOMTextarea.updateWrapper(this);
            lastProps = ReactDOMTextarea.getHostProps(this, lastProps);
            nextProps = ReactDOMTextarea.getHostProps(this, nextProps);
            break;
    }
    assertValidProps(this, nextProps);
    this._updateDOMProperties(lastProps, nextProps, transaction);
    this._updateDOMChildren(
        lastProps,
        nextProps,
        transaction,
        context
    );
    if (this._tag === 'select') {
        transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
    }
}