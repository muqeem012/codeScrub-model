var t = function(seed, context, xml, results, outermost) {
    var elem, j, matcher,
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        setMatched = [],
        contextBackup = outermostContext,
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
        len = elems.length;
    if (outermost) {
        outermostContext = context === document || context || outermost;
    }
    for (; i !== len && (elem = elems[i]) != null; i++) {
        if (byElement && elem) {
            j = 0;
            if (!context && elem.ownerDocument !== document) {
                setDocument(elem);
                xml = !documentIsHTML;
            }
            while ((matcher = elementMatchers[j++])) {
                if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                }
            }
            if (outermost) {
                dirruns = dirrunsUnique;
            }
        }
        if (bySet) {
            if ((elem = !matcher && elem)) {
                matchedCount--;
            }
            if (seed) {
                unmatched.push(elem);
            }
        }
    }
    matchedCount += i;
    if (bySet && i !== matchedCount) {
        j = 0;
        while ((matcher = setMatchers[j++])) {
            matcher(unmatched, setMatched, context, xml);
        }
        if (seed) {
            if (matchedCount > 0) {
                while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                        setMatched[i] = pop.call(results);
                    }
                }
            }
            setMatched = condense(setMatched);
        }
        push.apply(results, setMatched);
        if (outermost && !seed && setMatched.length > 0 &&
            (matchedCount + setMatchers.length) > 1) {
            Sizzle.uniqueSort(results);
        }
    }
    if (outermost) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
    }
    return unmatched;
}