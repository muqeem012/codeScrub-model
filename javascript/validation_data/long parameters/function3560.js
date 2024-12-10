var t = function(seed, results, context, xml) {
    var temp, i, elem,
        preMap = [],
        postMap = [],
        preexisting = results.length,
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
        matcherIn = preFilter && (seed || !selector) ?
        condense(elems, preMap, preFilter, context, xml) :
        elems,
        matcherOut = matcher ?
        postFinder || (seed ? preFilter : preexisting || postFilter) ? [] :
        results :
        matcherIn;
    if (matcher) {
        matcher(matcherIn, matcherOut, context, xml);
    }
    if (postFilter) {
        temp = condense(matcherOut, postMap);
        postFilter(temp, [], context, xml);
        i = temp.length;
        while (i--) {
            if ((elem = temp[i])) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
        }
    }
    if (seed) {
        if (postFinder || preFilter) {
            if (postFinder) {
                temp = [];
                i = matcherOut.length;
                while (i--) {
                    if ((elem = matcherOut[i])) {
                        temp.push((matcherIn[i] = elem));
                    }
                }
                postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
                if ((elem = matcherOut[i]) &&
                    (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                }
            }
        }
    } else {
        matcherOut = condense(
            matcherOut === results ?
            matcherOut.splice(preexisting, matcherOut.length) :
            matcherOut
        );
        if (postFinder) {
            postFinder(null, results, matcherOut, xml);
        } else {
            push.apply(results, matcherOut);
        }
    }
}