var anagram = function(word) {
	this.word = word;	
};

anagram.prototype.matches = function() {
		var match_set = [];
		for(var i = 0; i < arguments.length; i++) {
			if (typeof(arguments[i]) == "string") {
				match_set.push(arguments[i]);
			}else {
				match_set = match_set.concat(arguments[i]);
			}
		}
		var rtn_matches = [];
		var sorted_word = sort_string_chars(this.word);
		for(var i = 0; i < match_set.length; i++) {
			if (sorted_word == sort_string_chars(match_set[i]) &&
				this.word.toLowerCase() != match_set[i].toLowerCase()) {
				rtn_matches.push(match_set[i]);
			}
		}

		return rtn_matches;
};

module.exports = anagram;

 var sort_string_chars = function(string) {
	return string.toLowerCase().split('').sort().join('');
}

