var t = function(spec) {
    var Constructor = function(props, context, updater) {
        if (__DEV__) {
            warning(
                this instanceof Constructor,
                'Something is calling a React component directly. Use a factory or ' +
                'JSX instead. See: https:
            );
        }
        if (this.__reactAutoBindPairs.length) {
            bindAutoBindMethods(this);
        }
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
        this.state = null;
        var initialState = this.getInitialState ? this.getInitialState() : null;
        if (__DEV__) {
            if (initialState === undefined &&
                this.getInitialState._isMockFunction) {
                initialState = null;
            }
        }
        invariant(
            typeof initialState === 'object' && !Array.isArray(initialState),
            '%s.getInitialState(): must return an object or null',
            Constructor.displayName || 'ReactCompositeComponent'
        );
        this.state = initialState;
    };
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];
    injectedMixins.forEach(
        mixSpecIntoComponent.bind(null, Constructor)
    );
    mixSpecIntoComponent(Constructor, spec);
    if (Constructor.getDefaultProps) {
        Constructor.defaultProps = Constructor.getDefaultProps();
    }
    if (__DEV__) {
        if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps.isReactClassApproved = {};
        }
        if (Constructor.prototype.getInitialState) {
            Constructor.prototype.getInitialState.isReactClassApproved = {};
        }
    }
    invariant(
        Constructor.prototype.render,
        'createClass(...): Class specification must implement a `render` method.'
    );
    if (__DEV__) {
        warning(
            !Constructor.prototype.componentShouldUpdate,
            '%s has a method called ' +
            'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
            'The name is phrased as a question because the function is ' +
            'expected to return a value.',
            spec.displayName || 'A component'
        );
        warning(
            !Constructor.prototype.componentWillRecieveProps,
            '%s has a method called ' +
            'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
            spec.displayName || 'A component'
        );
    }
    for (var methodName in ReactClassInterface) {
        if (!Constructor.prototype[methodName]) {
            Constructor.prototype[methodName] = null;
        }
    }
    return Constructor;
}