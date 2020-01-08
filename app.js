/*eslint-disable */
//@ts-nocheck1

  let long;
  let lat;
    window.addEventListener('load',()=>{
  

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = '${proxy}https://api.darksky.net/forecast/cb89a804d2f77ba9bfe22f6c04288204/${lat},${long}';

        
        fetch(api)
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data)
        });
    });
    } else{
        h1.textcontent = "Your weather cannot be access without location services!"
    }
});

