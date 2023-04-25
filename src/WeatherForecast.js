import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    // console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  // console.log(props);
  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
              // } else {
              //   return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "b1ffa750faa242739962f64fe0t9dod4";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

//

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
