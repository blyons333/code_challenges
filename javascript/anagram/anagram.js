String.prototype.sort = function() {
	return this.split('').sort().join('');
}

var Anagram = function(word) {
	
	this.word = word.toLowerCase();

	this.matches = function() {
		var match_set = this.get_match_set(arguments);

		var rtn_matches = [];
		for(var i = 0; i < match_set.length; i++) {
			if (this.are_anagrams(this.word, match_set[i].toLowerCase())) {
				rtn_matches.push(match_set[i]);
			}
		}

		return rtn_matches;
	};

	this.are_anagrams = function(word1, word2) {
		return (word1.sort() == word2.sort() && word1 != word2);
	} 

	this.get_match_set = function(arguments) {
		var rtn_set = [];
		for(var i = 0; i < arguments.length; i++) {
			if (typeof(arguments[i]) == "string") {
				rtn_set.push(arguments[i]);
			}else {
				rtn_set = rtn_set.concat(arguments[i]);
			}
		}
		return rtn_set;
	}

};
module.exports = Anagram;


