var t = function(subordinate) {
    var i = 0,
        resolveValues = core_slice.call(arguments),
        length = resolveValues.length,
        remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
        deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
        updateFunc = function(i, contexts, values) {
            return function(value) {
                contexts[i] = this;
                values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                if (values === progressValues) {
                    deferred.notifyWith(contexts, values);
                } else if (!(--remaining)) {
                    deferred.resolveWith(contexts, values);
                }
            };
        },
        progressValues, progressContexts, resolveContexts;
    if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
            if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                resolveValues[i].promise()
                    .done(updateFunc(i, resolveContexts, resolveValues))
                    .fail(deferred.reject)
                    .progress(updateFunc(i, progressContexts, progressValues));
            } else {
                --remaining;
            }
        }
    }
    if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
    }
    return deferred.promise();
}