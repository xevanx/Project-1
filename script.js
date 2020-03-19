$( document ).ready(function() {    
    //function that detects the values of check boxes and outputs them to user queue

    function ifChecked() {
        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                console.log($(this).next().text() );
            }
            else if($(this).is(":not(:checked)")){
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


// Random User API

$.ajax({
    url: 'https://randomuser.me/api/?results=500',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

