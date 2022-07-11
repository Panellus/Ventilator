//Client side node.js for controlling a IR fan remotely using Websocket programming
let Socket = new WebSocket("ws://192.168.0.23");

function Stille() {
	if (Socket.readyState == 1) {	
		console.log('Quiet Mode Activated')
		Socket.send("stille")
		Socket.close()
		window.location.reload(false)
 		}	
	}

function Timer() {
	if (Socket.readyState == 1) {	
		console.log('Timer Activated')
		Socket.send("timer")
		Socket.close()
		window.location.reload(false)
		}
	}


function Ned() {
	if (Socket.readyState == 1) {	
		console.log('Going one step down')
		Socket.send("ned")
		Socket.close()
		window.location.reload(false)
		} 
	}

function Op() {
	if (Socket.readyState == 1) {	
		console.log('Going one step op')
		Socket.send("op")
		Socket.close()
		window.location.reload(false)
		} 
	}

function Roter() {
	if (Socket.readyState == 1) {	
		console.log('Rotating')
		Socket.send("roter")
		Socket.close()
		window.location.reload(false)
		} 
	}

function Ultra() {
	if (Socket.readyState == 1) {	
		console.log('Ultra Mode Activated')
		Socket.send("ultra")
		Socket.close()
		window.location.reload(false)
		} 
	}
	

	 
function Tænd() {
	if (Socket.readyState == 1) {	
		console.log('jeg vågner eller sover nu undskyld min herre')
		Socket.send("tænd")
		Socket.close()
		window.location.reload(false)
 		}
 	}
