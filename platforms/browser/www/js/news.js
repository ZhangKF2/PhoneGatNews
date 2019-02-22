var app = {
    init: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        var w = data.catalogs.length * 12 + 15;
        $("#divNewsCatalog").css("width", w + 'vw');
    }
}