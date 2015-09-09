var primes = function(number) {
  var numbers = []
  for(var index = 2; index < number; index += 1) {
    numbers.push(index)
  }
  var counter = 0

  for(var greaterIndex = numbers[0]; greaterIndex < number; greaterIndex = numbers[counter]) {
     var startingNumber = greaterIndex * 2
    for(var lesserIndex = startingNumber; lesserIndex < number; lesserIndex += greaterIndex) {
      var deleteNumber = numbers.indexOf(lesserIndex);
        if (deleteNumber != -1) {
          numbers.splice(deleteNumber, 1);
        }
    }
    counter += 1
  }
  return numbers
}


$(document).ready(function() {
  $("form#primes").submit(function(event) {
    var string = parseInt($("input#string").val())
    var result = primes(string)

    $("#all-primes").text(result)
    $("#result").show()

    event.preventDefault();
  });
});
