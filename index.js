'use strict';

function getDogImage(numberOfImages = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfImages}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('#images').html(
    responseJson.message.map(element => `<img src="${element}" class="results-img">`).join('')
    
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('#get-picture-form').submit(event => {
    event.preventDefault();
    getDogImage($('.number-dogs').val());
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


