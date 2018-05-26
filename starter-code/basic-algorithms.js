console.log("i'm ready!");
var hacker1 = "Bhavana";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What's your ?");
console.log("The navigator's name is " + hacker2);

//Conditionals

//find longest word out of the above two inputs. 

var longestword = 0;
if(hacker1.length>hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length +  " characters");
}
else if (hacker1.length<hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");

} else {
  console.log("wow, you both got equally long names," +  hacker1 + " characters!!")
}


//Loops
 
// print in caps with spaces in between
console.log(" In upper case  "+ hacker1.toUpperCase());
var caps = "";
for (i=0; i<hacker1.length; i++) {
  caps += (hacker1[i].toUpperCase() + " ");
}
console.log("in caps with gaps  " + caps);

//print in reverse order

var newString= "";
 for (var i=hacker2.length-1;i>=0;i--) { 
   newString+=hacker2[i];
        
 }
console.log("Reverse string is  " + newString);

//lexographocal order


//console.log(typeof hacker1)
//console.log(typeof hacker2)
if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log("The driver's name goes first");
} else if (hacker2.toUpperCase() < hacker1.toUpperCase()){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name? ")
}


//var hacker3 = prompt("What's your ?");
//console.log(hacker3);

//palindrome

var hacker3 = prompt("Palindrome test: What's your ? ");

console.log(hacker3);

var newString= "";
 for (var i=hacker3.length-1;i>=0;i--) { 
   
   newString+=hacker3[i];
        
 }
if(hacker3===newString){
  console.log("string is palindrome")
} else {
  console.log("string is not palindrome")
}

//Lorem generator

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices erat ac volutpat molestie. Aliquam elementum maximus tellus eget molestie. Proin aliquet mi nec urna fermentum tincidunt. Pellentesque in lorem sit amet mi pharetra eleifend. Aliquam tellus eros, accumsan quis diam at, vehicula atempus odio. Praesent accumsan egestas massa eu tempus. Donec eu mi congue, molestie massa sed, pharetra sapien. Praesent commodo congue nulla pellentesque sollicitudin. Nullam non luctus orci. Etiam ut suscipit lorem. Fusce commodo vulputate quam, quis cursus elit congue non. In ipsum leo, commodo sed lacus consequat, ornare pulvinar nibh. Quisque nulla metus, varius quis nisl ut, tincidunt iaculis nulla. Praesent vitae velit et purus vulputate bibendum sed at elit. Integer ultricies venenatis est, quis pulvinar arcu aliquam ut. Vestibulum a ante et dolor tincidunt aliquet. Cras molestie metus ligula, sed mollis lectus ullamcorper sed. Donec in lobortis metus. Sed ut elit libero. Suspendisse quis nunc in eros sollicitudin blandit ut eu dolor. Pellentesque dapibus gravida diam elementum bibendum. In vestibulum non elit vitae luctus. Quisque scelerisque metus eu metus cursus pulvinar. Aliquam ullamcorper ultricies consectetur. In hac habitasse platea dictumst. Donec nec feugiat magna. Aenean sed luctus nibh, non maximus justo. Nulla sit amet tincidunt ex. Nunc maximus hendrerit mollis. Aliquam rutrum odio ligula, ut volutpat diam fringilla at. Aenean tincidunt viverra mi, ut rhoncus nisi lobortis at. Vivamus bibendum dictum ligula, nec maximus elit maximus eget. Donec congue laoreet diam sed pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut felis aliquam, imperdiet justo at, lobortis ante. Morbi et ullamcorper lorem. Etiam quis dui porta, congue nisl vel, imperdiet libero. Suspendisse sed placerat tortor."

var balu="balu"
var count=0;
var separator=" "
var arrayOfStrings = text.split(separator);

console.log(arrayOfStrings);
console.log("the number of words in the string : " + arrayOfStrings.length);
for (var i=0;i<arrayOfStrings.length;i++){
  if(arrayOfStrings[i]=="et"){
    count++;
  }
}
console.log(" latin word et appears : " + count);
