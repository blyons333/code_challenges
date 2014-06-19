var words = function(phrase){
	phrase = phrase.replace(/[^\w\s\u00C0-\u1FFF\u2C00-\uD7FF]/g, "").toLowerCase();
	phrase = phrase.replace(/[\n\r\t]/, " ");
	var split_phrase = phrase.split(" ");
	var counts = {};
	for (var i = 0; i < split_phrase.length; i++){
		if (split_phrase[i].trim() !== ""){
			if (typeof(counts[split_phrase[i]]) == 'number'){
				counts[split_phrase[i]] = counts[split_phrase[i]] + 1;
			}else{
				counts[split_phrase[i]] = 1;
			}
		}
	}

	return counts;
};

module.exports = words;