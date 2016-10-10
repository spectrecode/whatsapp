var arrayChats = [document.querySelectorAll("li")];
window.addEventListener("load", function() {
	var contenedorChat = document.getElementById("chat");
	var mensajeInput = document.getElementsByName("w-message-input")[0];
	var cajaMensaje = document.createElement("div");
	cajaMensaje.classList.add("w-message-out");
	cajaMensaje.classList.add("w-message");
	var mensajeChat = document.createElement("div");
	mensajeChat.classList.add("w-message-text");
	var horaCaja = document.createElement("div");
	var horaChat = document.createTextNode(new Date().toLocaleTimeString());

	mensajeInput.addEventListener("keypress", function(e) {
		envioEnter(e);
	})

	function envioEnter(e) {
		var enterPress = e.keyCode;	
		// var chat = textoChat.value;
		if(e.keyCode == 13) {
			cajaMensaje.appendChild(mensajeChat);
			mensajeChat.insertBefore(document.createTextNode(mensajeInput.value), mensajeChat.childNodes[0]);
			mensajeChat.appendChild(horaCaja);
			horaCaja.insertBefore(horaChat, horaChat.childNodes[0]);
			contenedorChat.appendChild(cajaMensaje)
			mensajeInput.value = "";
		    return true; // returning false will prevent the event from bubbling up.
		}
	}

	// var contenedorCabecera = document.getElementsByName("w-chat-messages");
	// var cabeceraChat = document.getElementsByName("w-chat-profile");

	// arrayChats.addEventListener("click", function() {
	// 	for(chat in arrayChats) {
			
	// 	}
	// })
})