$(document).ready(function(){

	var frames = 0;
	var frames_position = 0;
	var frames_time = 700;
	var state = "stop";

	function animate_play(){

	}

	function animate_stop(){

	}

	function animate_pause(){

	}

	function edite_image(){

	}

	function close_image(){

	}

	function load_image(){

	}

	function animate_execute(){

		if(state == "play"){

			animate_play();

		}else if(state == "pause"){

			animate_pause();

		}else if(state == "stop"){

			animate_stop();
			
		}else{

		}

	}

	setInterval(animate_execute, frames_time);

});