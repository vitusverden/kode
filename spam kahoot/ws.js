var wss = new WebSocket("wss://kahoot.it/cometd/434700/ea6333380cc6b5dd2babeadaef7bc98bc57617e5ee1a9e9d0a39002092377b1be2ead6690aa0130158fedbfb57569036")

function spam() {
    wss.send({id: "1", version: "1.0", minimumVersion: "1.0", channel: "/meta/handshake"})
    
}

wss.onmessage = function(event) {
    console.log(`[message] Data received: ${event.data} <- server`);
};

wss.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
};

wss.onerror = function(error) {
    alert(`[error] ${error.message}`);
};
wss.onopen = function(e) {
    alert("[open] Connection established");
  };


//**
/* Kahoot spam, bruger websocket, man burde kunne åbne en masse websockets og dermed spamme. den besked jeg sender i spam() virker ikke.
/*
/************** *//