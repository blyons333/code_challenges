var compute = function(strand1, strand2) {
	var hamming_difference = 0;
	for (var i = 0; i < strand1.length; i++){
		if (strand2.length > i && 
			strand1.charAt(i) !== strand2.charAt(i)) {
			hamming_difference += 1;
		}
	}
	return hamming_difference;
};

module.exports = compute;