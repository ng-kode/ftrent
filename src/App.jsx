import { useEffect } from 'react';
import Chart from './Chart';

function App() {

  useEffect(() => {
    const data = {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    };

    const config = {
      type: "scatter",
      data: data,
      options: {},
    };

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, config);
  }, []);

  return (
    <div>
      <div
        className="chart-container"
        style={{
          position: 'relative',
          height: '40vh',
          width: '80vw',
        }}
      >
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}

export default App;
