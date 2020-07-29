// Business logic:

function makeRange(maxNumber) {
  let range = [];
  for (i = 0; i <= maxNumber; i++) {
    range.push(i);
  }
  return range;
}

function robotResults(rangeNumbers){
  let finalArray = [];
  rangeNumbers.forEach(function(number) {
    if (number.toString().includes("3")) {
      finalArray.push("Won't you be my neighbor?");
    }
    else if (number.toString().includes("2")) {
      finalArray.push("Boop!");
    }
    else if (number.toString().includes("1")) {
      finalArray.push("Beep!");
    }
    else {
      finalArray.push(number);
    }
  });
  return finalArray; 
}

// User interface logic:

$(document).ready(function() {
  $("#initialQ").submit(function(event) {
    event.preventDefault();
    const maxNumber = $("#rangeInput").val();
    let rangeNumbers = makeRange(maxNumber);
    let result = robotResults(rangeNumbers);
    $("#response").show();
    $("#commence").slideDown(2000);
    $("#lastLine").show(6000);
    $("#answer").text(result);
  });
});
