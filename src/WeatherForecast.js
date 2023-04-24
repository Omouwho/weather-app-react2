import React from "react";
import axios from "axios";
// import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  // console.log(props);
  let apiKey = "b1ffa750faa242739962f64fe0t9dod4";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          {/* <WeatherIcon code="01d" size={36} /> */}

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import WeatherForecastDay from "./WeatherForecastDay";

// export default function WeatherForecast(props) {
//   let [loaded, setLoaded] = useState(false);
//   let [forecast, setForecast] = useState(null);

//   useEffect(() => {
//     setLoaded(false);
//   }, [props.coordinates]);

//   function handleResponse(response) {
//     setForecast(response.data.daily);
//     setLoaded(true);
//   }

//   function load() {
//     let apiKey = "b1ffa750faa242739962f64fe0t9dod4";
//     let longitude = props.coordinates.longitude;
//     let latitude = props.coordinates.latitude;
//     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

//     axios.get(apiUrl).then(handleResponse);
//   }

//   if (loaded) {
//     return (
//       <div className="WeatherForecast">
//         <div className="row">
//           {forecast.map(function (dailyForecast, index) {
//             if (index < 6) {
//               return (
//                 <div className="col-2" key={index}>
//                   <WeatherForecastDay data={dailyForecast} />
//                 </div>
//               );
//             } else {
//               return null;
//             }
//           })}
//         </div>
//       </div>
//     );
//   } else {
//     load();

//     return null;
//   }
// }
