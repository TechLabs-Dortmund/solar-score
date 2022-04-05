import React, { useState } from 'react';
import axios from 'axios';
import './Prediction.css';
import Plot from 'react-plotly.js'

const PowerChart = () => {
  const [result, setLoadedData] = useState([]);

  const requestData = () => {
    axios
      .get('http://127.0.0.1:8000/powerchart')
      .then((res) => {
        setLoadedData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="solarscore__prediction" id="test">
      <div className="solarscore__prediction-content">
        <h1 className="gradient-text">Prediction Plot</h1>
        <p1> This graph visualizes the predicted solar power outcome for the next ten days at your location. </p1>
        <Plot
          data={[
            {
              x: result.x,
              y: result.y,
              type: "scatter gl",
              fill: 'tozeroy',
              mode: 'markers',
              fillcolor: 'rgb(10, 27, 59)',
              line: {
                color: 'white',
                width: 20,
              },
              marker: {
                color: 'rgb(255, 175, 64)',
                opacity: 1,
                size: 5,
                line: {
                  color: 'white',
                  width: 2,
                }
              },
            }
          ]}

          layout={
            {
              title: 'Power Prediction',
              titlefont: { family: 'Manrope, sans-serif', size: 20, color: '#0A1B3B' },
              width: 1000,
              height: 450,
              plot_bgcolor: 'rgb(255, 175, 64)',
              xaxis: {
                type: 'date',
                title: 'Time in [h]',
                titlefont: {
                  family: 'Manrope, sans-serif',
                  size: 18,
                  color: '#0A1B3B'
                }
              },
              yaxis: {
                title: 'Solar power in [kW]',
                titlefont: {
                  family: 'Manrope, sans-serif',
                  size: 18,
                  color: '#0A1B3B'
                }
              },
            }}
        />
        <button className="solarscore__prediction-button" onClick={requestData}>Predict</button>
        <p2> The process might take a few seconds. </p2>
      </div>
    </div>
  )
};

export default PowerChart;