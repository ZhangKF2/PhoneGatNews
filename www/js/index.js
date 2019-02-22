var app = {
    init: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        window.setTimeout(function () {
            window.location = "news.html";
        }, 3000);
    }
}