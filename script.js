$( document ).ready(function() {    
    
    // dynamically creates submit button
    $( '#submit' ).append('<input type="button" id="submit-button" value="submit" />');

    $( '#submit-button' ).on("click", function() {
    // after clicking the submit button, the function should take in the user's first and last name along with whatever selections they have made.
        const firstName = $( '#first_name' ).val();
        const lastName = $( '#last_name' ).val();
        const email = $( '#email' ).val();
        
        
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                alert($(":input").text());
            }
            else if($(this).prop("checked") == false){
                alert("Checkbox is unchecked.");
            }
        });
        
        console.log(firstName, lastName, email)
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

