import { useEffect, useRef, useState } from 'react';
import Chart from './Chart';

function App() {
  const myChart = useRef(null);
  const [datasets, setDatasets] = useState([
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
  ]);

  useEffect(() => {
    if (!myChart.current) {
      console.log('useEffect init Chart');
      const ctx = document.getElementById('myChart');
      myChart.current = new Chart(ctx, {
        type: "scatter",
        data: { datasets },
        options: {},
      });
    } else {
      console.log('useEffect update Chart');
      myChart.current.data = { datasets };
      myChart.current.update();
    }
  }, [datasets]);

  const randGen = () => {
    const newData = Array(6).fill(null).map(() => ({x: Math.random(), y: Math.random()}));
    setDatasets([ { ...datasets[0], data: newData } ]);
  }

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

      <button onClick={randGen}>RandGen</button>

      <pre>
        {JSON.stringify(datasets, null, 2)}
      </pre>
    </div>
  );
}

export default App;
