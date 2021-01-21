const response = prompt("What did you do for dinner tonight?");
$(document).ready(function() {
  $('.black').click(function() {
    alert(response);
  });

  $('.white').click(function() {
    alert(reverse(response))
  });
});

function capitalize(response) {
  return response[0].toUpperCase() + response.charAt(response.length - 1).toUpperCase()
}

function firstAndLast(response) {
  response = capitalize(response)
  return response[1] + response[0]
  }

function concat(response) {
  concatResponse = firstAndLast(response)
  return response + concatResponse
  }

function fourth(response) {
  newResponse = concat(response)
  x = response.length / 2
  y = Math.floor(x)
  z = response[y]
  return z + newResponse
}

function reverse(response) {
  response = fourth(response)
  return response.split("").reverse().join("")
}

  
