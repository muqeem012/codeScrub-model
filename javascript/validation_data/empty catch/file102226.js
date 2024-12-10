function parseQuery(query) {
    var isRE = query.match(/^\/(.*)\/([a-z]*)$/);
    if (isRE) {
        try {
            query = new RegExp(isRE[1], isRE[2].indexOf("i") == -1 ? "" : "i");
        } catch (e) {}
    } else {
        query = parseString(query);
    }
    if (typeof query == "string" ? query == "" : query.test("")) query = /x^/;
    return query;
}