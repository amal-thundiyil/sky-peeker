import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Error from "./Error";

const Location = () => {
  const { locations } = useGlobalContext();
  const { index } = useParams();

  const location = locations[index];
  console.log(location);
  if (location) {
    return (
      <section className="container single-location">
        <div className="single-location-main">
          <h1 className={`temp-k`}>{location.main.temp}</h1>
          <h2>{location.weather[0].main}</h2>
          <div className="sinlge-location-name">
            <h3>
              {location.name}, {location.sys.country}
            </h3>
          </div>
        </div>
        <div className="single-location-extra">
          <p>
            Longitude: {location.coord.lon}, Latitude {location.coord.lat}
          </p>
          <p>Timezone: {location.timezone}</p>
          <p>Humidity: {location.humidity}</p>
          <p>Visibility: {location.visibility}</p>
          <p>
            Min temp: {location.main.temp_min}
            {String.fromCharCode(8490)}
          </p>
          <p>
            Max temp: {location.main.temp_max}
            {String.fromCharCode(8490)}
          </p>
          <p>
            Actually feels like: {location.main.feels_like}{" "}
            {String.fromCharCode(8490)}
          </p>
          <p>Pressure: {location.main.pressure}</p>
          <p>Wind Speed: {location.wind.speed}</p>
          <p>Wind Degrees: {location.wind.deg}</p>
          <sub>*International System of Units</sub>
        </div>
      </section>
    );
  } else return <Error />;
};

export default Location;
