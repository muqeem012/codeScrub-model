function l() {
    var t;
    try {
        if ((t = q(k.transactionId))) {
            k.transactionId++;
        }
    } catch (s) {} finally {
        return t;
    }
}