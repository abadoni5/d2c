"use client";
import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json";
import LiveUser from "../components/LiveUser";
import proj4 from "proj4";

import "tailwindcss/tailwind.css";

HighchartsMap(Highcharts);

class BubbleMapChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveUsers: [],
    };
    this.timer = null;
  }

  componentDidMount() {
    // Start simulating live visitors
    this.timer = setInterval(() => {
      this.updateLiveUsers();
    }, 3000); // Adjust the interval as needed (currently set to 5 seconds)
  }

  componentWillUnmount() {
    // Stop the simulation when the component is unmounted
    clearInterval(this.timer);
  }

  shuffleArray(array) {
    // shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  updateLiveUsers() {
    // SAMPLE DATA
    const shuffledData = this.shuffleArray([
      {
        lat: 19.076,
        lon: 72.8777,
      },
      {
        lat: 28.7041,
        lon: 77.1025,
      },
      {
        lat: 12.9716,
        lon: 77.5946,
      },
      {
        lat: 22.5726,
        lon: 88.3639,
      },
      {
        lat: 13.0827,
        lon: 80.2707,
      },
      {
        lat: 17.385,
        lon: 78.4867,
      },
      {
        lat: 18.5204,
        lon: 73.8567,
      },
      {
        lat: 23.0225,
        lon: 72.5714,
      },
      {
        lat: 26.9124,
        lon: 75.7873,
      },
    ]);

    const randomLiveUsers = shuffledData.slice(
      0,
      Math.floor(Math.random() * shuffledData.length)
    );

    this.setState({ liveUsers: randomLiveUsers });
  }

  render() {
    const { liveUsers } = this.state;

    const options = {
      chart: {
        map: "countries/in/custom/in-all-disputed",
        proj4,
      },
      title: null,
      mapNavigation: {
        enabled: false,
        buttonOptions: {
          verticalAlign: "top",
        },
      },
      series: [
        {
          name: "map",
          nullColor: "#5da6f5",
          showInLegend: false,
          mapData: mapData,
        },
        {
          type: "mappoint",
          name: "Customer Density",
          color: "blue",
          data: liveUsers,
          showInLegend: true,
        },
      ],
    };

    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen">
          <LiveUser />
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              constructorType={"mapChart"}
            />
          </div>
        </div>
      </>
    );
  }
}

export default BubbleMapChart;
