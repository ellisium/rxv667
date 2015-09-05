var serialPort = require("serialport"),
SerialPort = serialPort.SerialPort,
settings=require(__dirname+"\\settings.json"),
ir=require(__dirname+"\\cmdIR.js"),
fs=require('fs');

var readyYamaha=false,
volume=settings.volumeInitial;
percent=settings.min-settings.max, 
percentInitial=getPercent(settings.volumeInitial);

const yamaha = new SerialPort(settings.port, {baudrate: settings.baudrate}, false);

yamaha.open(function(err) {
	if(err) {console.log(err)}
	yamaha.on('data', function(data){
		var str=data.toString();
		if(str.match('ready')){
			console.log('yamaha connected')
			readyYamaha=true;
			if(settings.autoOn)yamaha.write(new Buffer(ir.power.code+'\n'));
		} else{
			console.log(str)
		}
	 });
});

function getPercent(volume){
	if(volume <0){
		return (percent-volume)/percent*100;
	} else{
		var negative =percent+(settings.max - volume);
		return negative/percent*100;
	}	
}

function volumeChange(code, num, positive){
	if(num<0)num= Math.abs(num)
	var time=0;
	if(settings.step == 0.5){
		var n=num*2;
	}
	 for(var i=0; i<n; i++){
	 	time+=settings.irDelay;
	 	setTimeout(function(){
	 		if(positive){volume+=settings.step;}
	 		else{volume-=settings.step;}
	 			yamaha.write(new Buffer(code+'\n'));
	 	},time);
	  }		
}

exports.action = function(params, next){
	if(readyYamaha){
	  if(params.hasOwnProperty('cmd')){
	  	var item=ir[params.cmd],
			code=item.code,
			res=item.vocals,
			choix = Math.floor(Math.random() * res.length); 

	  	if(params.cmd ==='volumeUp' || params.cmd ==='volumeDown' || params.cmd==='volumePercent'){
	  		if(params.cmd==='volumePercent'){
				var lvl=parseInt(params.lvl),
		  			val=(percent*lvl)/100,
		  			value=Math.round(settings.min+Math.abs(val));
		  			if(value<volume){
		  				code=ir.volumeDown.code;
		  				volumeChange(code, value-volume, false);
		  			}else{
						code=ir.volumeUp.code;
						volumeChange(code, value-volume, true);
		  			}
			}
			if(params.cmd ==='volumeUp' || params.cmd ==='volumeDown'){
		  		if(params.cmd==='volumeUp'){p=true;}
	  			if(params.cmd==='volumeDown'){p=false;}
		  		if(params.hasOwnProperty('int')){
		  			var p=undefined;	  			
		  			volumeChange(code, parseInt(params.int), p);
		  		}
		  		if(params.hasOwnProperty('lvl')){
		  			var lvl=parseInt(params.lvl),
		  			val=(percent*lvl)/100;
		  			if(settings.min <0){
		  				var diff = volume - (val-settings.min);
		  			}else{
		  				var diff = volume - val;
		  			}
		  			volumeChange(code, Math.round(val), p);
		  		}
			}
				if(!item.hasOwnProperty('off')){
			  		if(volume<settings.seuilTTS){
			  			next({tts:res[choix]});
			  		}else{
			  			console.log(res[choix])
			  			next();
			  		}
				}else{
					next();
				}
	  	}else{
			yamaha.write(new Buffer(code+'\n'),function(){
		  		if(!item.hasOwnProperty('off')){
		  			if(volume<settings.seuilTTS){
		  				next({tts:res[choix]});
		  			}else{
		  				console.log(res[choix])
		  				next();
		  			}
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
