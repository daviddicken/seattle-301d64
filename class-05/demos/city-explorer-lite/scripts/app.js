// GOAL: get the fake data and display it on the page
  // get the city information that the user is entering (right now - we are not doing anything with this information)
  // display the map
  // display the title
  // display restaurants

// make event handler
function fetchCityData(event){
  event.preventDefault();

  let searchQuery = $('#input-search').val().toLowerCase();
  console.log('this is our search:', searchQuery);

  const ajaxSettings = {
    method:'GET', 
    dataType: 'JSON', 
    data: { city: searchQuery }
  }

  $.ajax('/fake-data/location.json', ajaxSettings)
    .then(dataThatIgetBackFromMyLocationJson => {
      console.log('data returned from ajax: ', dataThatIgetBackFromMyLocationJson);
    })
}

// make an event listener
function setEventListener(){
  $('#search-form').on('submit', fetchCityData);
}

// this waits until the DOM is completely loaded to run code
$('document').ready(function(){
  setEventListener();
})

