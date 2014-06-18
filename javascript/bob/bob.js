var Bob = function() {}
	Bob.prototype.hey =  function(input) {
		var last_char = input[input.length - 1];
		var response = "Whatever.";
		var upper_count = 0;
		var letter_count = 0;
		var letter_and_number_count = 0;
		for (var i = 0; i < input.length; i++){
			if (/[A-Za-z]/.exec(input[i])){
				letter_count++;
				if (input[i] === input[i].toUpperCase()){
					upper_count++;
				}
			}
			if (input[i] !== " "){
				letter_and_number_count++;
			}
			
		}
		switch(last_char) {
			case '?':
				if (upper_count === letter_count 
					&& upper_count !== 0){
					response = "Woah, chill out!";
				}else{
					response = "Sure.";
				}
				break;
			case '.':
				if (upper_count === letter_count && 
					upper_count !== 0){
					response = "Woah, chill out!";
				}
				break;
			case '!':
				if (upper_count === letter_count){
					response = "Woah, chill out!";
				}
				break;
			default:
				if (upper_count === letter_count && 
					upper_count !== 0){
					response = "Woah, chill out!";
				}

		}
		if (letter_and_number_count == 0){
			response = "Fine. Be that way!";
		}

		return response;
	}

module.exports = Bob;