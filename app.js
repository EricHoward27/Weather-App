
/*eslint-disable */
//@ts-nocheck1

  let long;
  let lat;
  
    window.addEventListener('load',()=>{
  
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            var apiLinkDS = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e6af5b5feb891b272e18f5e2fc0370a6/38,-122${long}${lat}";

            
                fetch(apiLinkDS)
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    console.log(data);
                });
             
        });
    

    }
});

