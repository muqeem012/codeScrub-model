var t = function(selector, context, results, seed) {
    var i, tokens, token, type, find,
        compiled = typeof selector === "function" && selector,
        match = !seed && tokenize((selector = compiled.selector || selector));
    results = results || [];
    if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
            support.getById && context.nodeType === 9 && documentIsHTML &&
            Expr.relative[tokens[1].type]) {
            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
            if (!context) {
                return results;
            } else if (compiled) {
                context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
            token = tokens[i];
            if (Expr.relative[(type = token.type)]) {
                break;
            }
            if ((find = Expr.find[type])) {
                if ((seed = find(
                        token.matches[0].replace(runescape, funescape),
                        rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                    ))) {
                    tokens.splice(i, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                        push.apply(results, seed);
                        return results;
                    }
                    break;
                }
            }
        }
    }
    (compiled || compile(selector, match))(
        seed,
        context,
        !documentIsHTML,
        results,
        !context || rsibling.test(selector) && testContext(context.parentNode) || context
    );
    return results;
}