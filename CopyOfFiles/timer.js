var accesories = 5;
var portIn = 3;
var upgrade = 25;
var JustLook = 15;
var BusinessAcc = 45;

var lobby = guestWait + totalVariable;


$(".btn").on("click", function () {
    
    // container.removeAttr("display: none");

        // brings up a modal that displays the current wait time for that guest
        $("modal1").attr("display: true");
        var agreeBtn = $(".modal-close").on("click", function(){

            $("form").trigger("reset");
        })
        // targets and resets all forms on the user screen
        
    // displays the users choices on the modal
        // gets the values of the checkboxes and puts them into <p> format
        // var userInput = $(checkbox).val()

        $("p").text("Estimated wait time is ") + time;





});

console.log(time);

