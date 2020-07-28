
// Business logic:




// User interface logic:

$(document).ready(function() {
  $("#initialQ").submit(function(event) {
    event.preventDefault();

    const maxNumber = $("#rangeInput").val();
    
    let numbers = [0];
    for (i = 0; i < maxNumber; i++) {
        numbers[i] = i;
    }
    


    $("#response").show();
    $("#answer").text(numbers);
    alert(numbers);
    alert(maxNumber);
  });
});


