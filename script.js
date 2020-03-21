$( document ).ready(function() {    
    //function that detects the values of check boxes and outputs them to user queue
    const checkItems = [
        {
            checkItem: "Accessories",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Activate Prepaid",
            duration: this.setMinutes(5)
        },
        {   
            checkItem: "Activate Service",
            duration: this.setMinutes(5)
        },
        {   
            checkItem: "Promotional",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "SIM Card",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Upgrade",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Add/Remove Features",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Bill Pay",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Bill Troubleshooting",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Just Browsing",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Return/Exchange",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Service Account",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Service Device",
            duration: this.setMinutes(5)
        },
        {
            checkItem: "Warrenty Exchange",
            duration: this.setMinutes(5)
        },
    ]

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

// <-----array vals and function storage------>

// var welomeInput = [];
// var userInfo = {};
// // I don't know what I should target here
// $("").each(function (index, value){

// //     // creates an object out of user information, have user input be global variables
//     userInfo = {"Name": firstname,"Email": email, "Reason": reason}
// //     // pushes object variable into the array, have this last since we need to store
// //     // the users help request into the object as well
//     welomeInput.push(userInfo);
// //     // pushes the whole thing into locall storage
//     localStorage.setItem("welcomeInput", JSON.stringify(welomeInput));
//     console.log(localStorage.getItem("welcomeInput"))

// })

$(".modal-trigger").on("click", function(){
    console.log($(this))
    $("#modal1").modal("show")
    $("#modal-text").text("This works")
    $("h4").text("Ticket Placed at " + moment().format('MMMM Do YYYY, h:mm:ss a'))


})

// <------ Moment Js reference and formatting code here------>

// error caught, doesn't reference moment.js for some reason
// does however format the code into readable entries so we can have a time stamp for the user

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
 

// <-----function reset all parameters------>
function reset(){

    $(".check-item").prop("checked", false);
    firstName = "";
    lastName = "";
    email = "";
    // targets all forms and resets data, error: targets only one data entry....sometimes
    $("form").reset(); 
  
}

// <----reset button------>
$("button").on("click", function () {
    
    // container.removeAttr("display: none");
            reset();

});

// <----- end chris code area-------->




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
var userObject=[]

$("#welcome-button").on("click", function() {
    firstname = document.querySelector("first_name").value;
    lastname = document.querySelector("last_name").value;
    email = document.querySelector("email").value;
    userObject.push({
         FirstName: firstname,
         LastName: lastname,
         Email: email
     });
     localStorage.setItem(userObject);
     console.log(userObject);
});

