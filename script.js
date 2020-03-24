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
    console.log($(this));
    console.log(userObject.firstName + "targeting works!")
    $(".modal").modal();  
    $("h4").text("Ticket Placed at " + moment().format('MMMM Do YYYY, h:mm a'));
    $("#modal-text").text("Name: " + firstname + " " + lastName, "Reason for visit: " + $(".check-item").val());
 

});

// <-----function reset all parameters------>


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


