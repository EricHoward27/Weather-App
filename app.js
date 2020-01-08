/*eslint-disable */
//@ts-nocheck1

  let long;
  let lat;
    window.addEventListener('load',()=>{
  

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            var proxy = 'https://cors-anywhere.herokuapp.com/';
            var apiLinkDS = "https://api.darksky.net/forecast/e6af5b5feb891b272e18f5e2fc0370a6/38,-122";

            position.ajax({
                url: proxy + apiLinkDS,
                success: function (data) { console.log(data); }
        });
    });
    } else{
        h1.textcontent = "Your weather cannot be access without location services!"
    }
});

