const WebSocket = require('ws');

let url = `ws://http://testtask00.pythonanywhere.comws/socket-server/`

const chatSocket = new WebSocket(url)
function send_message(){
  chatSocket.send(JSON.stringify({
    'message': Math.floor(Math.random() * (999 - 100 + 1) + 100) + '-' + Math.floor(Math.random() * (999 - 100 + 1) + 100)
  }))
}
async function funq(){
  while (true){
    await new Promise(r => setTimeout(r, 5000));
    await send_message()
  }
}
funq()
