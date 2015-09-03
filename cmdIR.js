module.exports={
	power:{
		code:'0x7E8154AB', 
		vocals:["j'éteins l'ampli de suite", "de suite", "bien sur"]
	},
	volumeUp:{
		code:'0x5EA158A7', 
		vocals:["le son est monté", "le son a été augmenté", "tout de suite", "bien sur", "le volume est monté"]
	},
	volumeDown:{
		code:'0x5EA1D827', 
		vocals:["je baisse le volume", "je diminu le volume", "je baisse le son", "je diminu le son"]
	},
	mute:{
		code:'0x5EA138C7',
		vocals:["je coupe le son", "je coupe le volume", "mute", "mode silence"]
	},
	arrowUp:{
		code:'0x5EA1B946', 
		vocals:["haut"],
		off:true
	},
	arrowDown:{
		code:'0x5EA139C6', 
		vocals:["bas"],
		off:true
	},
	arrowLeft:{
		code:'0x5EA139C6', 
		vocals:["gauche"],
		off:true
	},
	arrowRight:{
		code:'0x5EA1F906', 
		vocals:["droit"],
		off:true
	},
	enter:{
		code:'0x5EA17986', 
		vocals:["valider", "je valide"]
	},
	back:{
		code:'0x5EA17B84', 
		vocals:["retour", "annulé", "arrière"]
	},
	onScreen:{
		code:'0xFE8006F9', 
		vocals:["display", "j'affiche", "sur l'écran"]
	},
	option:{
		code:'0x5EA121DE', 
		vocals:["voici les options"]
	},
	bluRay:{
		code:'0x5EA1D628', 
		vocals:["source blouré"]
	},
	tv:{
		code:'0x5EA100FE', 
		vocals:["source TV"]
	},
	cd:{
		code:'0x5EA1C03E', 
		vocals:["source CD"]
	},
	radio:{
		code:'0x5EA1609E', 
		vocals:["je met la radio", "je joue la radio"]
	},
	sleep:{
		code:'0x5EA1906E', 
		vocals:["mode veille"]
	},
	movie:{
		code:'0x5EA10CF3', 
		vocals:["ambiance film"]
	},
	music:{
		code:'0x5EA111EE', 
		vocals:["ambiance musique"]
	},
	enhancer:{
		code:'0x5EA1916E', 
		vocals:["Oui j'améliore", "j'active les effets d'amélioration"]
	},
	decode:{
		code:'0x5EA129D6', 
		vocals:["mode sélection du décodeur"]
	},
	straight:{
		code:'0x5EA1B14E', 
		vocals:["je désactive les effets", "désactivation des effets", "DSP off"]
	},
	pure:{
		code:'0x5EA16A95', 
		vocals:["mode pure", "mode pure direct", "mode audiophile"]
	},
	tuner:{
		code:'0x5EA1BB44', 
		vocals:{
			req:[], 
			res:[]
		}
	},
	fm:{
		code:'0x5EA16897', 
		vocals:["bande fm", "fm", "sélection fm"]
	},
	am:{
		code:'0xFE801AE4', 
		vocals:["bande am", "am", "sélection am"]
	},
	info:{
		code:'0xFE80AA54', 
		vocals:["info", "voici les infos", "les infos de Yamaha"]
	},
	memory:{
		code:'0x5EA1E41A', 
		vocals:["mémory", "j'enregistre"]
	},
	presetUp:{
		code:'0xFE80E618', 
		vocals:["presset haut", "haut"]
	},
	presetDown:{
		code:'0xFE80DA24', 
		vocals:["presset bas", "bas"]
	},
	tuningUp:{
		code:'0xFE807A84', 
		vocals:["tune haut"]
	},
	tunningDown:{
		code:'0xFE808678', 
		vocals:["tune bas"]
	},
	multi:{
		code:'0xFE8026D8', 
		vocals:["multi channel"]
	},
	dock:{
		code:'0x5EA1E11E', 
		vocals:["sélection dock", "dock", "source dock"]
	},
	phono:{
		code:'0xFE8052AD', 
		vocals:["entrée phono"; "phono", "source phono"]
	},
	av1:{
		code:'0x5EA128D7', 
		vocals:["av1", "source av1"]
	},
	av2:{
		code:'0x5EA1CA34', 
		vocals:{
			req:[], 
			res:["av2", "source av2"]
		}
	},
	av3:{
		code:'0x5EA16A94', 
		vocals:{
			req:[], 
			res:["av3", "source av3"]
		}
	},
	av4:{
		code:'0x5EA19A64', 
		vocals:{
			req:[], 
			res:["av4", "source av4", "xbmc", "kodi"]
		}
	},
	av5:{
		code:'0x5EA13AC4', 
		vocals:{
			req:[], 
			res:["av5", "source av5"]
		}
	},
	av6:{
		code:'0x5EA1FA04', 
		vocals:["av6", "source av6"]
	},
	audio1:{
		code:'0x5EA146B8', 
		vocals:["source audio 1", "audio 1"]
	},
	audio2:{
		code:'0x5EA1A658', 
		vocals:["source audio 2", "audio 2"]
	},
	hdmi1:{
		code:'0x5EA116E8', 
		vocals:["hdmi 1", "source hdmi 1"]
	},
	hdmi2:{
		code:'0x5EA1E21C', 
		vocals:["hdmi 2", "source hdmi 2"]
	},
	hdmi3:{
		code:'0x5EA152AC', 
		vocals:["hdmi 3", "source hdmi 3"]
	},
	hdmi4:{
		code:'0x5EA1B24C', 
		vocals:["hdmi 4", "source hdmi 4"]
	},
	hdmi5:{
		code:'0x5EA10AF4', 
		vocals:["hdmi 5", "source hdmi 5"]
	},
	vAux:{
		code:'0x5EA10EF0', 
		vocals:["auxiliarie", "source auxiliarie"]
	},
	rec:{
		code:'0x5EA1CE30', 
		vocals:["mode enregistrement", "enregistrement en cours", "je lance l'enregistrement"]
	},
	stop:{
		code:'0xFE806699', 
		vocals:["stop", "arret"]
	},
	pause:{
		code:'0xFE809669', 
		vocals:["pause"]
	},
	play:{
		code:'0xFE80E619', 
		vocals:["lecture"]
	},
	fastForward:{
		code:'0xFE8016E9', 
		vocals:["avance rapide"]
	},
	backForward:{
		code:'0xFE80D629', 
		vocals:["retour rapide"]
	},
	next:{
		code:'0xFE8056A9', 
		vocals:["suivant"]
	},
	previous:{
		code:'0xFE80B649', 
		vocals:["précédent"]
	},
	int1:{
		code:'0xFE8036C9', 
		vocals:["un"]
	},
	int2:{
		code:'0xFE808A75', 
		vocals:["deux"]
	},
	int3:{
		code:'0xFE804AB5', 
		vocals:["trois"]
	},
	int4:{
		code:'0xFE80CA35', 
		vocals:["quatre"]
	},
	int5:{
		code:'0xFE802AD5', 
		vocals:["cinq"]
	},
	int6:{
		code:'0xFE80AA55', 
		vocals:["six"]
	},
	int7:{
		code:'0xFE806A95', 
		vocals:["sept"]
	},
	int8:{
		code:'0xFE80EA15', 
		vocals:["huit"]
	},
	int9:{
		code:'0xFE801AE5', 
		vocals:["neuf"]
	},
	int0:{
		code:'0xFE809A65', 
		vocals:["zéro"]
	}
	ent:{
		code:'0xFE80DA25', 
		vocals:["enter"]
	}
};
