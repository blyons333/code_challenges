var song = function(){
	//The song as one big, long string. This was super annoying
	//to add to this file...
	var songString = "I know an old lady who swallowed a fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a spider.\n\
It wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a bird.\n\
How absurd to swallow a bird!\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a cat.\n\
Imagine that, to swallow a cat!\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a dog.\n\
What a hog, to swallow a dog!\n\
She swallowed the dog to catch the cat.\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a goat.\n\
Just opened her throat and swallowed a goat!\n\
She swallowed the goat to catch the dog.\n\
She swallowed the dog to catch the cat.\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a cow.\n\
I don't know how she swallowed a cow!\n\
She swallowed the cow to catch the goat.\n\
She swallowed the goat to catch the dog.\n\
She swallowed the dog to catch the cat.\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a horse.\n\
She's dead, of course!\n";

	//Instantiate the new song array
	this.songArray = new Array();
	//Split the song string based on line breaks
	var splitSong = songString.split('\n');

	//Loop through each line of the song. Add each
	//line to the current verse until you reach a blank
	//line. When a blank line is reached, push the current
	//verse onto the song's song array
	var curVerse = "";
	for (var n = 0; n < splitSong.length; n++) {
		var curLine = splitSong[n];
		if (curLine.match(/\w/)){
			//If we didn't hit a line break,
			//add the current line to the current verse
			curVerse += curLine + "\n";
		}else{
			//If we hit a line break, this verse is over,
			//push it onto the songArray
			this.songArray.push(curVerse);
			curVerse = "";
		}
	}
}

//The entire song, as an array of verses
song.prototype.songArray = [];

//Gets a specific verse by number.
//parameters:
//	verseNumber - the number of the verse you
//  			  want to get, starting at 1
//				  for the first verse
song.prototype.verse = function(verseNumber){
	var verseArrayNumber = verseNumber - 1;

	//Some error handling. Make sure the verse number 
	//passed in is within the array's bounds
	if (verseArrayNumber < 0 || verseArrayNumber >= this.songArray.length){
		return "Please enter a verse number greater than 0 and less than " + this.songArray.length;
	}
	return this.songArray[verseArrayNumber];
}

//Gets all the verses between the two 
//bounds, inclusive
//parameters:
//	verseBegin - the number of the verse
//               to start with
//	verseEnd   - the number of the verse
//				 to end with
//  Note: the verse numbers start at 1
//	      for the first verse
song.prototype.verses = function(verseBegin, verseEnd){
	
	var combinedVerses = "";

	while(verseBegin <= verseEnd) {
		//Since we're calling the verse method, we
		//don't need to validate the input here, we already
		//do that in the verse method. Probably wouldn't hurt
		//to validate it and not print out any verses, though...
		combinedVerses += this.verse(verseBegin);
		combinedVerses += "\n";
		verseBegin++;
	}

	return combinedVerses;
}

module.exports = new song();