console.log("loaded");

const myChart = document.querySelector(".myChart");
const mySecondChart = document.querySelector(".mySecondChart");
fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
.then(myData => myData.json())
.then(myJsonData => genarteCharts(myJsonData));

function genarteCharts(myJsonData) {
    const mylabels= [];
    const myData= [];
    console.log(myJsonData.eur);

    for(key in myJsonData.eur){
        if(myJsonData.eur[key] >800){
        mylabels.push(key);
        console.log(key + " " + myJsonData.eur[key]);
        myData.push(myJsonData.eur[key])
    }
    }
    createChart(mySecondChart, "pie",mylabels, myData);
createChart(myChart, "line", mylabels, myData);
}


function createChart(canvas, type, labels, data) {
    

new Chart(canvas, {
    type: type,
    data: {
      labels:labels,
      datasets: [{
        label: '# of Votes',
        data:data,
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
  })
};