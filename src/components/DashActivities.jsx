import React from 'react'
import './css/dashActivities.css'
import { BarChart } from '@mui/x-charts/BarChart';
// import Chart from 'chart.js/auto'
import { Chart } from "react-google-charts";

function DashActivities() {
    const data = [
        ["", "", ""],
        ["Week 1", 500, 400 ],
        ["Week 2", 350, 450],
        ["Week 3", 200, 300],
        ["Week 4", 400, 350],
    ];

    const options = {
        chart: {
          subtitle: "",
        },
        series: {
            0: { color: "#98D89E" }, // Color for the "Guest" series
            1: { color: "#EE8484" }, // Color for the "User" series
        },
        tooltip:'none',
        legend: { position: 'none'},
    };
  return (
    <div className='Activities'>
      <div className="ActivitiesTitle">
        <h1>Activities</h1>
      </div>
      <div className="activitesStrip">
        <span>May-June 2021</span>
        <div className="legends">
            <span className='GuestLegend'></span>
            <span className='spnTitle'>Guests</span>
            <span className='UserLegend'></span>
            <span className='spnTitle'>User</span>
        </div>
      </div>
      <div className="ActivitiesGraph">
      <Chart
        chartType="Bar"
        width="75%"
        height="240px"
        data={data}
        options={options}
        style={{margin:"auto"}}
        />
      </div>
    </div>
  )
}

export default DashActivities
