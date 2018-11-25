var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
		window.addEventListener("batterystatus", onBatteryStatus, false);

		function onBatteryStatus(status) {
		alert("Nivel: " + status.level + " Conectado: " + status.isPlugged);
		document.getElementById("level").innerHTML = status.level;
		document.getElementById("isPlugged").innerHTML = status.isPlugged;
		}	
    }
};

app.initialize();