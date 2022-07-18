$(document).ready(function () {

  
    /*hamburger animation*/
    const hambuergerMenu = document.querySelector(".hamburger");
    const btnClose = document.querySelector(".btn-close"); 
    const tosearch = document.querySelector(".tosearchbtn"); 
  
    
    const menuActivate = () => {
        hambuergerMenu.classList.toggle('active');
    }
  
    hambuergerMenu.addEventListener('click', menuActivate);
    btnClose.addEventListener('click',menuActivate);
    tosearch.addEventListener('click',menuActivate);


// Google maps api
let searchInput = 'search_input';
 
$(document).ready(function () {
 var autocomplete;
 autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
  types: ['geocode'],
  /*componentRestrictions: {
   country: "USA"
  }*/
 });
  
 google.maps.event.addListener(autocomplete, 'place_changed', function () {
  var near_place = autocomplete.getPlace();
 });
});
  
  });
  