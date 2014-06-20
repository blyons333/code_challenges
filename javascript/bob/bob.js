var Bob = function() {}
Bob.prototype.hey =  function(input) {
	var response = "Whatever.";
	if (/[A-Z]/.exec(input) && 
		!/[a-z]/.exec(input)){
		response = "Woah, chill out!";
	}
	else if (/\?+$/.exec(input)) {
		response = "Sure.";
	}
	else if (input.trim() == ""){
		response = "Fine. Be that way!";
	}

	return response;
}

module.exports = Bob;