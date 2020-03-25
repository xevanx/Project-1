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


$(".modal-trigger").on("click", function(){
    console.log($(this))
    var displayName = localStorage.getItem("savedName");
    userNumb()
    $(".modal").modal()
    $("#modal-text").text("There are " + totalUser + " people ahead of you in the queue.")
    $("h5").text(displayName + ", your estimated wait time is " + convertHour + ":" + convertMin + ".")
    $("h4").text("Ticket Placed at " + moment().format('MMMM Do YYYY, h:mm A'))
});

// <-----function reset all parameters------>
function reset(){

        console.log("reset was checked");
    $(".check-item").prop("checked", false);
    firstName = "";
    lastName = "";
    email = "";
    // targets all forms and resets data, error: targets only one data entry....sometimes
    // $("form").reset(); 
    window.location.href='welcome.html';


  
}

// <----reset button------>
$("button").on("click", function () {
    console.log("was clicked")

    reset();
    // $("btn").attr("href", "welcome.html");
});

// <----- push code to local storage code here-------->

//  $("").each(function (index, value){

//     // //     // creates an object out of user information, have user input be global variables
//     //     userInfo = {"Name": firstname,"Email": email, "Reason": reason}
//     // //     // pushes object variable into the array, have this last since we need to store
//     // //     // the users help request into the object as well
//     //     welomeInput.push(userInfo);
//     // //     // pushes the whole thing into locall storage
//     //     localStorage.setItem("welcomeInput", JSON.stringify(welomeInput));
//     //     console.log(localStorage.getItem("welcomeInput"))


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
var waitTime = 0
var convertHour
var convertMin



$("#welcome-button").on("click", function(randFirst, randLast, randEmail) {
    const firstName = $('#first_name').val();
    const lastName = $('#last_name').val();
    const email = $('#email').val();
    localStorage.setItem("savedName", firstName);
    console.log(firstName, lastName, email + " This generates after the submit button is clicked")

    location.replace("index.html")

});

function userNumb(){
   totalUser = Math.floor(Math.random() * Math.floor(19));
   
   
   for (i = 0; i < totalUser; i++) {
       var randActivity = Math.floor(Math.random() * Math.floor(7));
       if(randActivity === 1){
           waitTime = waitTime + 5;
       }
       else if(randActivity === 2){
           waitTime = waitTime + 3;
       }
       else if(randActivity === 3){
           waitTime = waitTime + 20;
       }
       else if(randActivity === 4){
           waitTime = waitTime + 25;
       }
       else if(randActivity === 5){
           waitTime = waitTime + 30;
       }
       else if(randActivity === 6){
           waitTime = waitTime + 45;
       }
       else{
           waitTime = waitTime + 60;
       }
    }
console.log(waitTime)
 convertHour = Math.floor(waitTime / 60)
 convertMin = waitTime - (convertHour * 60)
 console.log(convertHour)
 console.log(convertMin)
 var stringHour = String(convertHour)
 var stringMin = String(convertMin)
 console.log(stringHour)
 console.log(stringMin)
};