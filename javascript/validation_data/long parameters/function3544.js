var t = function(seed, matches, context, xml) {
    var elem,
        unmatched = matcher(seed, null, xml, []),
        i = seed.length;
    while (i--) {
        if ((elem = unmatched[i])) {
            seed[i] = !(matches[i] = elem);
        }
    }
}