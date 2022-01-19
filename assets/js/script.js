// API KEY

// console.log(process.env.API_KEY)
API_KEY = '22b14d04b10684424dd6f54560324001f6fe01d0'


document.addEventListener('DOMContentLoaded',function() {
document.querySelector('#btn_search').addEventListener('click',getLocation)

// GEOLOCATION
async function getLocation() {

  // const air_key = process.env.API_KEY;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
    //You have your locaton here
      let cooObj = "/geo:"+pos.coords.latitude+";"+ pos.coords.longitude;
        let urlAPIGeo = `https://api.waqi.info/feed${cooObj}/?token=${API_KEY}`;
        try{
        fetch(urlAPIGeo)
            .then(response => response.json())
            .then(resp => {
            let latLong = resp
            document.getElementById('infoCity').innerHTML =latLong.data.city.name;

          let geoQuality = latLong.data.aqi
          aqi.innerHTML = geoQuality

            let good = 'Air quality is satisfactory, and air pollution poses little or no risk.'
            let moderate = 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.'
            let mid = 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
            let unhealthy = 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
            let veryUnhealty = 'Health alert: The risk of health effects is increased for everyone.'
            let hazardous = 'Health warning of emergency conditions: everyone is more likely to be affected.'

        
            if (geoQuality <= 50) {
              health.innerHTML ='<h2>Air Quality Index: GOOD!</h2>' +good;
              document.getElementById('pollution').style.backgroundColor = "#ffffff";
              pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
              aqi.style.color = "#ffffff";
              
              aqi.style.backgroundColor = "#24db66";
            } else if (geoQuality > 50 && geoQuality <= 100) {
              health.innerHTML = '<h2>MODERATE!</h2>'+moderate;
              document.getElementById('pollution').style.backgroundColor = "#ffffff";
              pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
              aqi.style.color = "#ffffff"
              aqi.style.backgroundColor = "#f0c103"
              aqi.style.textAlign = "center";

            } else if (geoQuality > 100 && geoQuality <= 150) {
              health.innerHTML = '<h2>Mid!</h2>'+mid;
              document.getElementById('pollution').style.backgroundColor = "#ffffff";
              pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
              aqi.style.backgroundColor = "#f09903";
              aqi.style.color = "#ffffff";
              aqi.style.textAlign = "center";

            } else if (geoQuality > 150 && geoQuality <= 200) {
              health.innerHTML = '<h2>Unhealthy!</h2>'+unhealthy;
              document.getElementById('pollution').style.backgroundColor = "#ffffff";
              pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
              aqi.style.backgroundColor = "#f30b3d";
              aqi.style.color = "#ffffff";
              aqi.style.textAlign = "center";

            } else if (geoQuality > 200 && geoQuality <= 300) {
              health.innerHTML = '<h2>Very Unhealthy!</h2>'+veryUnhealty;
              document.getElementById('pollution').style.backgroundColor = "#ffffff";
              pollution.style.boxShadow = "10px 10px 8px #2d2d2d";
              aqi.style.backgroundColor = "#790d79";
              aqi.style.color = "#ffffff";
              aqi.style.textAlign = "center";

            } else if (geoQuality > 300) {
              health.innerHTML = '<h2>Hazardous!</h2>'+hazardous;
              document.getElementById('pollution').style.backgroundColor = "#ffffff";
              pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
              aqi.style.backgroundColor = "#8d0909";
              aqi.style.textAlign = "center";
              
            }
            document.getElementById('no2').innerHTML = '<div>NO2: </div>'+latLong.data.iaqi.no2.v
            document.getElementById('p').innerHTML = '<div>P: </div>'+latLong.data.iaqi.p.v
            document.getElementById('pm10').innerHTML = '<div>PM10: </div>'+latLong.data.iaqi.pm10.v
            document.getElementById('pm25').innerHTML = '<div>PM25: </div>'+latLong.data.iaqi.pm25.v
            // document.getElementById('o3').innerHTML = '<div>SO2: </div>'+latLong.data.iaqi.o3.v
          

    }
    )
  }catch(error){
    console.log('Error',error)
  }
  })}}
})

    // INPUT

document.addEventListener('DOMContentLoaded', function(){
document.querySelector('#btn').addEventListener('click', getCity);

   async function getCity(){

        let city = document.getElementById('city').value;
        console.log(city);
        let urlAPI = 'https://api.waqi.info/feed/' + city + '/?token=22b14d04b10684424dd6f54560324001f6fe01d0';
        if(city === ''){
            alert('City not found, Please try with another one...')

        }else{

    try{
          

        await fetch(urlAPI)

            .then(response => response.json())
            .then(infoPoll =>  
            {   
    
            console.log(infoPoll)
                let obj = infoPoll;
                
            // if(!obj.data.city) {
            //   const emptyCity = document.createElement("h1");
            //   let newContent = document.createTextNode("Città non trovata...Digitane un'altra");
            //   emptyCity.appendChild(newContent);
            //   const element = document.getElementById("noCity");
            //   element.appendChild(emptyCity); 

            
            // }else{
            
            if(infoPoll.data === 'Unknown station'){
                
                alert('City not found, Please try with another one...')
            }else{

            document.getElementById('infoCity').innerHTML = obj.data.city.name;
            let objName = obj.data.city.name
            console.log(objName)
            let airQuality = obj.data.aqi
            aqi.innerHTML = airQuality

            let good = 'Air quality is satisfactory, and air pollution poses little or no risk.'
            let moderate = 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.'
            let mid = 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
            let unhealthy = 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
            let veryUnhealty = 'Health alert: The risk of health effects is increased for everyone.'
            let hazardous = 'Health warning of emergency conditions: everyone is more likely to be affected.'
            
            if (airQuality <= 50) {
                health.innerHTML ='<h2>Air Quality Index: GOOD!</h2>' +good;
                document.getElementById('pollution').style.backgroundColor = "#ffffff";
                pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
                aqi.style.color = "#ffffff";
                
                aqi.style.backgroundColor = "#24DB66";
              } else if (airQuality > 50 && airQuality <= 100) {
                health.innerHTML = '<h2>MODERATE!</h2>'+moderate;
                document.getElementById('pollution').style.backgroundColor = "#ffffff";
                pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
                aqi.style.color = "#ffffff"
                aqi.style.backgroundColor = "#f0c103"
                aqi.style.textAlign = "center";

              } else if (airQuality > 100 && airQuality <= 150) {
                health.innerHTML = '<h2>Mid!</h2>'+mid;
                document.getElementById('pollution').style.backgroundColor = "#ffffff";
                pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
                aqi.style.backgroundColor = "#f09903";
                aqi.style.color = "#ffffff";
                aqi.style.textAlign = "center";

              } else if (airQuality > 150 && airQuality <= 200) {
                health.innerHTML = '<h2>Unhealthy!</h2>'+unhealthy;
                document.getElementById('pollution').style.backgroundColor = "#ffffff";
                pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
                aqi.style.backgroundColor = "#f30b3d";
                aqi.style.color = "#ffffff";
                aqi.style.textAlign = "center";

              } else if (airQuality > 200 && airQuality <= 300) {
                health.innerHTML = '<h2>Very Unhealthy!</h2>'+veryUnhealty;
                document.getElementById('pollution').style.backgroundColor = "#ffffff";
                pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
                aqi.style.backgroundColor = "#790d79";
                aqi.style.color = "#ffffff";
                aqi.style.textAlign = "center";

              } else if (airQuality > 300) {
                health.innerHTML = '<h2>Hazardous!</h2>'+hazardous;
                document.getElementById('pollution').style.backgroundColor = "#ffffff";
                pollution.style.boxShadow = "10px 10px 8px #2d2d2d"
                aqi.style.backgroundColor = "#8d0909";
                aqi.style.color = "#ffffff";
                aqi.style.textAlign = "center";
                
              }

              document.getElementById('no2').innerHTML = `<div>NO2: </div>${obj.data.iaqi.no2.v}`
              document.getElementById('p').innerHTML = `<div>P: </div>${obj.data.iaqi.p.v}`
              document.getElementById('pm10').innerHTML = `<div>PM10: </div>${obj.data.iaqi.pm10.v}`
              document.getElementById('pm25').innerHTML = `<div>PM25: </div>${obj.data.iaqi.pm25.v}`
              noCity.remove()
            } 
        }   

    

        )
      }catch(error){
        console.log('Error');
      
      }}}
    
    })     


//     let no2 = document.querySelector("#no2")
//     let pDetails = document.querySelector("#p")
//     let pmDetails = document.querySelector("#pm10")
//     let pm25Details = document.querySelector("#pm25")
//     no2.addEventListener('mouseover',function(){
        
//         no2.classList.toggle("show");
//         no2.innerHTML = `<p>CIAO</p>`
//  })
    


