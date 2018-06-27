var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

var input = document.getElementById('country-name');

input.addEventListener('keyup', function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById('search').click();
  }
});

function searchCountries() {
  var countryName = $('#country-name').val();
  if (!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  })
    .fail(function () {
      $('#countries').text('No results for your search query. Please try again.');
    });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function (item) {
    $('<li>')
      .append($('<h3>').text(item.name))
      .append($('<div>').append($('<img>').attr('src', item.flag).attr('alt', item.capital)))
      .append($('<p>').text('Capital city: ' + item.capital))
      .append($('<p>').text('Region: ' + item.region))
      .append($('<p>').text('Subregion: ' + item.subregion))
      .append($('<p>').text('Area: ' + item.area))
      .append($('<p>').text('Population: ' + item.population))
      .appendTo(countriesList);
  });
}