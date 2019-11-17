window.RuneMagic = (function() {

  const SERVER_URL = 'https://rune-magic-rt-server.herokuapp.com/';

  function connect(authToken, callback, overrideUrl) {
    _callback = callback || _callback;
    const connectionURL = addTokenToURL(overrideUrl || SERVER_URL, authToken);
    const socket = io(connectionURL);
    socket.on('connection', onConnection);
    socket.on('update', onUpdate);
    socket.on('error', onError);
    socket.on('connect_error', onError);
    socket.on('connect_error', (error) => {
      console.log(error);
    });
    socket.on('disconnect', onDisconnect);
  }

  function addTokenToURL(url, token) {
    let urlObject = new URL(url);
    urlObject.searchParams.append('rm_token', token);
    return urlObject.toString();
  }

  function onConnection() {
    console.log("Connected")
  }

  function onUpdate(data) {
    _callback(data);
  }

  function onError(data) {
    console.log(arguments);
    _errorCallback(data);
  }

  function onDisconnect(data) {
    _disconnectCallback(data);
  }


  function setCallback(callback) {
    _callback = callback;
  }

  function setErrorCallback(callback) {
    _errorCallback = callback;
  }

  function setDisconnectCallback(callback) {
    _disconnectCallback = callback;
  }


  let _callback = (data) => {
    console.log("Rune Update: " + JSON.stringify(data));
    console.log("Please provide your own callback function")
  };

  let _errorCallback = (data) => {
    console.log("Rune Socket Error: " + JSON.stringify(data));
  };

  let _disconnectCallback = () => {
    console.log("Rune Server Disconnected");
  };


  return {
    connect,
    setCallback,
    setErrorCallback,
    setDisconnectCallback,
  };

})();