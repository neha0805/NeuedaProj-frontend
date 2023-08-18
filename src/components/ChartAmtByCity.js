import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

function ChartAmtByCity() {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  function getAmountByCity() {
    const url = "http://localhost:8080/transactions/city";
    fetch(url)
      .then(response => response.json())
      .then(items => {
        if (items.length > 0) {
          let temp = "";
          items.forEach(itemData => {
            temp += "<tr>";
            temp += "<td>" + itemData.city + "</td>";
            temp += "<td>" + itemData.totalAmt + "</td>";
            temp += "</tr>";
          });
          document.getElementById('city').innerHTML = temp;
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  function drawChart() {
    const charturl = "http://localhost:8080/transactions/city";
    fetch(charturl)
      .then(response => response.json())
      .then(items => {
        const chartLabels = items.map(itemData => itemData.city);
        const chartValues = items.map(itemData => itemData.totalAmt);

        setLabels(chartLabels);
        setValues(chartValues);
      })
      .catch(error => {
        console.error("Error fetching chart data:", error);
      });
  }

  const handleClickChart = () => {
    getAmountByCity();
    drawChart();
    console.log("handleClickChart");
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        data: values,
        borderColor: '#36A2EB',
        backgroundColor: '#3393FF'
      }
    ]
  };

  console.log(chartData)

  const chartOptions = {
    legend: { display: false },
    title: {
      display: true,
      text: 'City Amount'
    }
  };

  return (
    <div>
      <Button variant="primary" size="lg" onClick={handleClickChart}>Generate Chart</Button>{' '}
      <div id="city"></div>
      {/* <Bar data={chartData} options={chartOptions} /> */}
      {chartData.labels.length > 0 ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <p>No data available to display the chart.</p>
      )}
    </div>
  );
}

export default ChartAmtByCity;
