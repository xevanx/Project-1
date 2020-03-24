$( document ).ready(function() {    
    // function that detects the values of check boxes and outputs them to user queue
    const checkItems = [
        {
            checkItem: "Accessories",
            duration: moment().add(10, 'm')
        },
        {
            checkItem: "Activate Prepaid",
            duration: moment().add(15, 'm')
        },
        {   
            checkItem: "Activate Service",
            duration: moment().add(25, 'm')
        },
        {   
            checkItem: "Promotional",
            duration: moment().add(15, 'm')
        },
        {
            checkItem: "SIM Card",
            duration: moment().add(5, 'm')
        },
        {
            checkItem: "Upgrade",
            duration: moment().add(30, 'm')
        },
        {
            checkItem: "Add/Remove Features",
            duration: moment().add(5, 'm')
        },
        {
            checkItem: "Bill Pay",
            duration: moment().add(3, 'm')
        },
        {
            checkItem: "Bill Troubleshooting",
            duration: moment().add(15, 'm')
        },
        {
            checkItem: "Just Browsing",
            duration: moment().add(5, 'm')
        },
        {
            checkItem: "Return/Exchange",
            duration: moment().add(20, 'm')
        },
        {
            checkItem: "Service Account",
            duration: moment().add(10, 'm')
        },
        {
            checkItem: "Service Device",
            duration: moment().add(25, 'm')
        },
        {
            checkItem: "Warrenty Exchange",
            duration: moment().add(15, 'm')
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
    function reset() {
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