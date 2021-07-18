function wordBlanks(noun, pronoun, adjective, verb, adverb) {
    var result = "I have a " + noun + ". " + pronoun + " is a " + adjective + " " + noun + ". " + pronoun + " is " + verb + " " + adverb + ".";
    console.log(result);
    document.getElementById("demo").innerHTML = result;
}



wordBlanks("dog", "He", "fast", "eating", "quickly");


var qNoun = prompt("What is your noun?");
var qPronoun = prompt("What is your pronoun? Make sure it starts with a capital letter.");
var qAdjective = prompt("What is your adj?");
var qVerb = prompt("What is your verb? Make sure it ends in \"ing\"");
var qAdverb = prompt("What is your adverb?");

wordBlanks(qNoun, qPronoun, qAdjective, qVerb, qAdverb);







