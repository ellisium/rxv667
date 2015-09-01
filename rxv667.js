var serialPort = require("serialport"),
SerialPort = serialPort.SerialPort,
settings=require(__dirname+"\\settings.json"),
ir=require(__dirname+"\\cmdIR.js");

var readyYamaha=false;

const yamaha = new SerialPort(settings.port, {baudrate: settings.baudrate}, false);
yamaha.open(function(err) {
	if(err) {console.log(err)}
	yamaha.on('data', function(data){
		var str=data.toString();
		if(str.match('ready')){
			console.log('yamaha connected')
			readyYamaha=true;
		} else{
			console.log(str)
		}
	 });
});

exports.action = function(params, next){
	if(readyYamaha){
	  if(params.hasOwnProperty('cmd')){
	  	var item=ir[params.cmd],
	  	code=item.code,
	  	res=item.vocals;
	  	yamaha.write(new Buffer(code+'\n'));
	  	var choix = Math.floor(Math.random() * res.length); 
		next({tts:res[choix]});
	  }else{
	  	next({tts:"Je n'ai pas compri pouvez vous répété"});
	  }
	}else{
		next({tts:"La connection infrarouge n'est pas encore initialisé, essayé dans quelques secondes"});
	}
}
