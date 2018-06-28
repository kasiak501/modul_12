var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
  getJoke();
});
var paragraph = document.getElementById('joke'),
  stats = document.getElementById('stats');
//get joke when page is loaded
document.addEventListener("DOMContentLoaded", getJoke);

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    var statsString = '';
    paragraph.innerHTML = response.value.joke;
    //categories contains any elements then display the first one
    if (response.value.categories.length != 0) {
      statsString = 'It\'s joke from category <strong>' + response.value.categories[
        0] + '</strong><br>';
    }
    //display joke's number
    statsString += 'Joke\'s number: ' + response.value.id;
    stats.innerHTML = statsString;
  });
  xhr.send();
}