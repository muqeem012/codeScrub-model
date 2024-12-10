function getConnectionObject() {
    var o;
    try {
        if ((o = createXhrObject(pub.transactionId))) {
            pub.transactionId++;
        }
    } catch (e) {} finally {
        return o;
    }
}