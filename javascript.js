var generateButton = document.querySelector(".btnGenPw");
var copyClipBoard = document.querySelector(".btnClipboard");
var displayPw = document.querySelector(".passwordArea"); 
var numCharacters = 10;
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
    if (numCharacters >= 8 && numCharacters <= 128) {
        var useCase = confirm("Click Ok to use use upper and lower case.");
        console.log(useCase);
        console.log(strAlphas.charAt(5));
        var specialChar = confirm("Click Ok to use special characters.");
        console.log(specialChar);
        console.log(strAlphas.charAt(5));
        var useNumbers = confirm("Click Ok to use numeric characters.");
        console.log(useNumbers);
        console.log(strNumbers.charAt(5));
        createPw();
    } 
    else {
        alert("Please pick a number between 8 and 128!  You picked " + numCharacters + "!");
    }
});

function createPw(){    
    if (specialChar) {
        console.log("use alpha, specials and num chars");
    }; 
    
    if (specialChar && useNumbers === false) {
        // if dogs are gross, which they are, this code will be run
        console.log("use alpah and special chars");
    }; 
    
    if (useNumbers && specialChar === false){
        // because the else if of dogsAreGross was true, this else statement
        // would not be run
        console.log("user alphas and num chars");
    };
    if (!useNumbers && !specialChar) {
        // because the else if of dogsAreGross was true, this else statement
        // would not be run
        console.log("just alpha chars");
    };
};

copyClipBoard.addEventListener("click", function(){
    //decrease count and set count -1

    });


function copyPassword(){
    // stuff
};

// function makePw(numCharacters) {
//     var newPw = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < numCharacters; i++ ) {
//        newPw += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     console.log(newPw);
//  };

//  makePw();
