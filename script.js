$( document ).ready(function() {    
    //function that detects the values of check boxes and outputs them to user queue
    // const checkItems = [
    //     {
    //         checkItem: "Accessories",
    //         duration: this.setMinutes(10)
    //     },
    //     {
    //         checkItem: "Activate Prepaid",
    //         duration: this.setMinutes(15)
    //     },
    //     {   
    //         checkItem: "Activate Service",
    //         duration: this.setMinutes(25)
    //     },
    //     {   
    //         checkItem: "Promotional",
    //         duration: this.setMinutes(15)
    //     },
    //     {
    //         checkItem: "SIM Card",
    //         duration: this.setMinutes(5)
    //     },
    //     {
    //         checkItem: "Upgrade",
    //         duration: this.setMinutes(30)
    //     },
    //     {
    //         checkItem: "Add/Remove Features",
    //         duration: this.setMinutes(5)
    //     },
    //     {
    //         checkItem: "Bill Pay",
    //         duration: this.setMinutes(3)
    //     },
    //     {
    //         checkItem: "Bill Troubleshooting",
    //         duration: this.setMinutes(15)
    //     },
    //     {
    //         checkItem: "Just Browsing",
    //         duration: this.setMinutes(5)
    //     },
    //     {
    //         checkItem: "Return/Exchange",
    //         duration: this.setMinutes(20)
    //     },
    //     {
    //         checkItem: "Service Account",
    //         duration: this.setMinutes(10)
    //     },
    //     {
    //         checkItem: "Service Device",
    //         duration: this.setMinutes(25)
    //     },
    //     {
    //         checkItem: "Warrenty Exchange",
    //         duration: this.setMinutes(15)
    //     },
    // ]

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
    $(".modal").modal()
    $("#modal-text").text("This works")
    $("h4").text("Ticket Placed at " + moment().format('MMMM Do YYYY, h:mm A'))
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
        console.log(data)
        const randFirst = data.results[0].name.first;
        const randLast = data.results[0].name.last;
        const randEmail = data.results[0].email;
        //this inputs the random generated user info on welcome.html
        $('#first_name').val(randFirst);
        $("#last_name").val(randLast);
        $("#email").val(randEmail);
        
        console.log(randFirst, randLast, randEmail + " This is randomly generated")
    }
});

// Marc code here: 


// Evan code here:

var addUser = $("#welcome-button");
var userObject = [];

$("#welcome-button").on("click", function(randFirst, randLast, randEmail) {
    const firstName = $('#first_name').val();
    const lastName = $('#last_name').val();
    const email = $('#email').val();

    console.log(firstName, lastName, email + " This generates after the submit button is clicked")

});

function userNumb(){
   totalUser = Math.floor(Math.random() * Math.floor(19));
   var waitTime = 0;
   for (i = 0; i < totalUser; i++) {
       
