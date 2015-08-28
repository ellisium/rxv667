var serialPort = require("serialport"),
SerialPort = serialPort.SerialPort,
settings=require(__dirname+"\\settings.json"),
ir=require(__dirname+"\\cmdIR.js");

const yamaha = new SerialPort(settings.port, {baudrate: settings.baudrate}, false);

exports.action = function(params, next){

  console.log(params)
  // Callback with TTS
  next({'tts': 'ok'});

}
