function createXhrObject(transactionId) {
    var http;
    try {
        http = new XMLHttpRequest();
    } catch (e) {
        for (var i = Ext.isIE6 ? 1 : 0; i < activeX.length; ++i) {
            try {
                http = new ActiveXObject(activeX[i]);
                break;
            } catch (e) {}
        }
    } finally {
        return {
            conn: http,
            tId: transactionId
        };
    }
}