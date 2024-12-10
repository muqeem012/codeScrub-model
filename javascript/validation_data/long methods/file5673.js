var t = function(type, config, children) {
    var propName;
    var props = {};
    var key = null;
    var ref = null;
    var self = null;
    var source = null;
    if (config != null) {
        if (__DEV__) {
            warning(
                config.__proto__ == null || config.__proto__ === Object.prototype,
                'React.createElement(...): Expected props argument to be a plain object. ' +
                'Properties defined in its prototype chain will be ignored.'
            );
            ref = !config.hasOwnProperty('ref') ||
                Object.getOwnPropertyDescriptor(config, 'ref').get ? null : config.ref;
            key = !config.hasOwnProperty('key') ||
                Object.getOwnPropertyDescriptor(config, 'key').get ? null : '' + config.key;
        } else {
            ref = config.ref === undefined ? null : config.ref;
            key = config.key === undefined ? null : '' + config.key;
        }
        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        for (propName in config) {
            if (config.hasOwnProperty(propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
            }
        }
    }
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
    }
    if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
            if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
            }
        }
    }
    if (__DEV__) {
        if (typeof props.$$typeof === 'undefined' ||
            props.$$typeof !== REACT_ELEMENT_TYPE) {
            if (!props.hasOwnProperty('key')) {
                Object.defineProperty(props, 'key', {
                    get: function() {
                        if (!specialPropKeyWarningShown) {
                            specialPropKeyWarningShown = true;
                            warning(
                                false,
                                '%s: `key` is not a prop. Trying to access it will result ' +
                                'in `undefined` being returned. If you need to access the same ' +
                                'value within the child component, you should pass it as a different ' +
                                'prop. (https:
                                typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element'
                            );
                        }
                        return undefined;
                    },
                    configurable: true,
                });
            }
            if (!props.hasOwnProperty('ref')) {
                Object.defineProperty(props, 'ref', {
                    get: function() {
                        if (!specialPropRefWarningShown) {
                            specialPropRefWarningShown = true;
                            warning(
                                false,
                                '%s: `ref` is not a prop. Trying to access it will result ' +
                                'in `undefined` being returned. If you need to access the same ' +
                                'value within the child component, you should pass it as a different ' +
                                'prop. (https:
                                typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element'
                            );
                        }
                        return undefined;
                    },
                    configurable: true,
                });
            }
        }
    }
    return ReactElement(
        type,
        key,
        ref,
        self,
        source,
        ReactCurrentOwner.current,
        props
    );
}