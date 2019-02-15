// This code will run at O(length of d * max length of words in d * length of s)
// That being said, this is not an optimized solution

let s = "abppplee",                  // s will be our string to search through
    d = ["able", "ale", "apple",
        "bale", "kangaroo"],         // d will be our dictionary of words
    w = "",                          // w will be our longest word
    allWords = [];

let sLength = s.length,
    dLength = d.length;

// word finder
for (let j = 0; j < dLength; j++) {
    let dWord = d[j];                 // looks at every individual word in d
    
    for (let k = 0, i = 0; k < sLength && i < dWord.length; k++) {  // checks each letter in both s and the word from d
        let sLetter = s.charAt(k);    
        let dLetter = dWord.charAt(i);
        
        if (sLetter === dLetter) {
            i++;                                                    // intiates next letter in dWord
            w = w + dLetter;
                
            if (w === dWord){
                allWords.push(w);     // if a word is formed,the word is added to an array of all words
                w = "";               // word is reset to look for more full words in s
            }
        }
    }
}

// longest finder
for (let a = 0; a < allWords.length; a++) {
    let check = allWords[a];          // now that all possible words are stored, we must find the longest
                                      // keep in mind that w was emptied at the end of the word finder
    if (check.length > w.length) {    // if the current word is longer than the previous longest,
        w = allWords[a];              // it is now the longest word
    }
}



