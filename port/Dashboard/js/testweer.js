console.log("test");
const firstChart = document.querySelector(".firstChart");
const SecondChart = document.querySelector(".SecondChart");
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
.then(mydata => mydata.json())
.then(myDataJson => chartBulding(myDataJson))


function chartBulding(myDataJson) {
    console.log(myDataJson);
    console.log(myDataJson.current_weather);
    console.log(myDataJson.current_weather.temperature);
    createChart(myDataJson)

}

function createChart(myDataJson) {
    new Chart(firstChart, {
        type: 'radar',
        data: {
          labels: myDataJson.hourly.time,
          datasets: [{
            label: '# of Votes',
            data: myDataJson.hourly.temperature_2m,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}