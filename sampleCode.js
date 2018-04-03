// Go through each sample code and work out what the output will be and explain what happened.

// =========
// Episode 1
// ---------
// This will print "My name is Keith" to the console, using the globally
// defined variable 'name', that has been assigned the value 'Keith'.
// =========

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// =========
// Episode 2
// ---------
// This will print "3" to the console, using the locally defined
// variable 'score' that has been assigned the value '3'.
// =========

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// =========
// Episode 3
// ---------
// This will print the following to the console:
// 0: Ducks
// 1: Dogs
// 2: Lions
// Using the re-assigned myAnimals array, which was originally populated
// with 'Chickens', 'Cats', 'Rabbits', but then was re-assigned to be:
// Ducks', 'Dogs', 'Lions'
// =========

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// =========
// Episode 4
// ---------
// This will print the following to the console:
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is Keith
// Where the locally defined suspectThree variable is used within the function
// and the globally defined suspectThree variable is used in the log outside
// of the function body.
// =========

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// =========
// Episode 5
// ---------
// This will print the following to the console:
// Poirot
// As the detectiveInfo function has updated the name key:value pair for 'name'
// from 'Ace Ventura' to 'Poirot'.
// =========

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// =========
// Episode 6
// ---------
// A global variable 'murderer' is assigned to be 'rick'.
// outerFunction() then sets its own local var 'murderer' to be 'marc'.
// but then it calls innerFunction that changes the local variable of outerFunction
// 'murderer' to be 'valerie'.
// The following is then output to the console:
// the murderer is rick
// Because this is printing out the global variable, and not the locat variable
// =========

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// // =================================================================================
// // Episode 7 - Make up your own episode/s!
// // Make up your own episode which can be whatever you wish and the rest of the class
// // will work out together what happened and what the output will be.
// // =================================================================================

console.log('The unlucky victim1 is', victim1);

let victim2 = "Miss Scarlett";

const guessWho = function() {
  victim1 = 'Mrs White';
}

guessWho();
console.log('The unlucky victim1 is', victim1);
console.log('The unlucky victim2 is', victim2);

var victim1 = 'Colonel Mustard';
