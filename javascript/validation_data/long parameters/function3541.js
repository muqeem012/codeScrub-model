function t(type, what, argument, first, last) {
    var simple = type.slice(0, 3) !== "nth",
        forward = type.slice(-4) !== "last",
        ofType = what === "of-type";
    return first === 1 && last === 0 ?
        function(elem) {
            return !!elem.parentNode;
        } :
        function(elem, context, xml) {
            var cache, uniqueCache, outerCache, node, nodeIndex, start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;
            if (parent) {
                if (simple) {
                    while (dir) {
                        node = elem;
                        while ((node = node[dir])) {
                            if (ofType ?
                                node.nodeName.toLowerCase() === name :
                                node.nodeType === 1) {
                                return false;
                            }
                        }
                        start = dir = type === "only" && !start && "nextSibling";
                    }
                    return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                    node = parent;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] ||
                        (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while ((node = ++nodeIndex && node && node[dir] ||
                            (diff = nodeIndex = 0) || start.pop())) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                            break;
                        }
                    }
                } else {
                    if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] ||
                            (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                    }
                    if (diff === false) {
                        while ((node = ++nodeIndex && node && node[dir] ||
                                (diff = nodeIndex = 0) || start.pop())) {
                            if ((ofType ?
                                    node.nodeName.toLowerCase() === name :
                                    node.nodeType === 1) &&
                                ++diff) {
                                if (useCache) {
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] ||
                                        (outerCache[node.uniqueID] = {});
                                    uniqueCache[type] = [dirruns, diff];
                                }
                                if (node === elem) {
                                    break;
                                }
                            }
                        }
                    }
                }
                diff -= last;
                return diff === first || (diff % first === 0 && diff / first >= 0);
            }
        };
}