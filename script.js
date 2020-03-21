$( document ).ready(function() {    
    //function that detects the values of check boxes and outputs them to user queue

    function ifChecked() {
        $( 'input[type="checkbox"]' ).click(function(){
            if($(this).is( ":checked" )){
                console.log($(this).next().text() );
                //Marc here
            }
            else {
                console.log("removed " + $(this).next().text() );
            }
        });
        
        
    }
    ifChecked()


    // dynamically creates submit button
    $( '#submit' ).append('<input type="button" id="submit-button" value="submit" />');

    $( '#submit-button' ).on("click", function() {
    // after clicking the submit button, the function should take in the user's first and last name along with whatever selections they have made.
        const firstName = $( '#first_name' ).val();
        const lastName = $( '#last_name' ).val();
        const email = $( '#email' ).val();
        
        

        console.log(firstName, lastName, email)
        

        
    })

})

// Chris code here: 

// <----variable values for wait times ----->
// var accesories = 5;
// var portIn = 3;
// var upgrade = 25;
// var JustLook = 15;
// var BusinessAcc = 45;

// <-----array vals and function storage------>

var welomeInput = [];
var userInfo = {};
// I don't know what I should target here
$("").each(function (index, value){

    // creates an object out of user information, have user input be global variables
    userInfo = {
        name: firstname + lastname, email: email
    }
    // pushes object variable into the array, have this last since we need to store
    // the users help request into the object as well
    welomeInput.push(userInfo);
    // pushes the whole thing into locall storage
    localStorage.setItem("welcomeInput", JSON.stringify(welomeInput));

})

// <------ Moment Js reference and formatting code here------>

// error caught, doesn't reference moment.js for some reason
// does however format the code into readable entries so we can have a time stamp for the user

// const moment  = require('moment');
// const from    = moment(iso)

// <----format is what we need to push into the object also, I took it out since its not working right now
// const format  = 'YYYY-MM-DD [at] HH:mm'

// const fromStr = from.format(format)
// const toStr   = to.format(format)
// const str     = `From ${fromStr} to ${toStr}`
// console.log(str)

// <-----function reset all parameters------>
function reset(){

    $(".check-item").prop("checked", false);

    // targets all forms and resets data, error: targets only one data entry....sometimes
    $("form").reset(); 
  
}

// <----reset button------>
$("button").on("click", function () {
    
    // container.removeAttr("display: none");
        
        if ($(this).attr() === ".btn"){
            reset();
        }

});






// Random User API

$.ajax({
    url: 'https://randomuser.me/api/?results=500',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

// Marc code here: 


// Evan code here:
var addUser = document.querySelector("#welcome-button");
var userObject=[],

$(addUser).click(function) {
     userObject.push({
         firstName: document.querySelector("first_name").value,
         lastName: document.querySelector("last_name").value,
         email: document.querySelector("email").value
     });
     localStorage.setItem(userObject);

};
