var wss = new WebSocket("wss://kahoot.it/cometd/14325/7ead5110a607e0e4682960e34dc2b70bd4adfe50691cffbbde8e0aa9395670b86abd260a4a7e8d6a606df954cac9d9ee")
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
/************** */44