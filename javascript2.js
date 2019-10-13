var generateButton = document.querySelector(".btnGenPw");
var copyClipBoard = document.querySelector(".btnClipboard");
var displayPw = document.querySelector(".passwordArea"); 
var numCharacters = 0;
var useCase = false;
var specialChar = false;
var useNumbers = false;
var strAlphas = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var strNumbers = '0123456789';
var strSpecials = '!"#$%&+-:;<=>?@[\]^_`{|}~'; 

generateButton.addEventListener("click", function() {
    //Prompt the user for number of characters
    var numCharacters = prompt("How many characters would youlike your pw to contain?", "Number from 8 to 128");
    console.log(numCharacters);
    //check to see if meets length requirements between 8 and 128 and start confirming char types
    if (numCharacters >= 8 && numCharacters <= 128) {
        var useCase = confirm("Click Ok to use use upper and lower case.");
        var specialChar = confirm("Click Ok to use special characters.");
        var useNumbers = confirm("Click Ok to use numeric characters.");
        createPw();
    
    } 
    else {
        alert("Please pick a number between 8 and 128!  You picked " + numCharacters + "!")
    }

