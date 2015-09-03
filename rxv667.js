var serialPort = require("serialport"),
SerialPort = serialPort.SerialPort,
settings=require(__dirname+"\\settings.json"),
ir=require(__dirname+"\\cmdIR.js");

var readyYamaha=true,
percent=settings.min-settings.max; console.log(percent)
if(settings.volumeInitial <0){
	var initial = (percent-settings.volumeInitial)/percent*100;
} else{
	var negative =percent+(settings.max - settings.volumeInitial);
	var initial = negative/percent*100;
}

const yamaha = new SerialPort(settings.port, {baudrate: settings.baudrate}, false);

yamaha.open(function(err) {
	if(err) {console.log(err)}
	yamaha.on('data', function(data){
		var str=data.toString();
		if(str.match('ready')){
			console.log('yamaha connected')
			readyYamaha=true;
			//yamaha.write(new Buffer(ir.power.code+'\n'));
		} else{
			console.log(str)
		}
	 });
});

exports.action = function(params, next){
	console.log(params)
	if(readyYamaha){
	  if(params.hasOwnProperty('cmd')){
	  	var item=ir[params.cmd],
			code=item.code,
			res=item.vocals,
			choix = Math.floor(Math.random() * res.length); 
	  	if(params.cmd ==='volumeUp' || params.cmd ==='volumeDown'){
	  		if(params.hasOwnProperty('int')){
	  			var time=0,
	  			n=parseInt(params.int)*2;
	  			for(var i=0; i<n; i++){
	  				time+=settings.irDelay;
	  				setTimeout(function(){
	  					yamaha.write(new Buffer(code+'\n'));
	  				},time);
	  			}
	  		}
	  		if(params.hasOwnProperty('lvl')){
	  				
	  		}
	  		if(!item.hasOwnProperty('off')){
		  		next({tts:res[choix]});
			}else{
				next();
			}
	  	}else{
			yamaha.write(new Buffer(code+'\n'),function(){
		  		if(!item.hasOwnProperty('off')){
		  			next({tts:res[choix]});
			  	}else{
					next();
				}
			});
	  	}
	  }else{
	  	next();
	  }
	}else{
		next({tts:"La connection infrarouge n'est pas encore initialisé, essayé dans quelques secondes"});
	}
}
