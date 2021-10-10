import { useGlobalContext } from "../context";
import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const LocationList = () => {
  const { locations, setLocations } = useGlobalContext();
  const { loading, setLoading } = useGlobalContext();
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const [unit, setUnit] = useState("k");

  const removeItem = (id) => {
    setLocations(locations.filter((location) => location.id !== id));
  };

  const convertTemp = (temp) => {
    switch (unit) {
      case "c":
        return parseFloat(temp - 273).toFixed(2);
      case "f":
        return parseFloat((temp * 9) / 5 - 459.67).toFixed(2);
      default:
        return temp;
    }
  };

  // FETCHING STARTS
  const getLocations = useCallback(async () => {
    if (searchTerm === "") {
      setLoading(false);
    } else {
      try {
        setLoading(true);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${process.env.REACT_APP_KEY}`;
        const response = await fetch(url);

        if (response.status > 299 || response.status < 200)
          alert("Could not find location.");
        else {
          const data = await response.json();
          if (data) {
            if (data.cod >= "200" && data.cod <= "299")
              setLocations([...locations, data]);
          } else console.log("Could not find location.");
        }
      } catch (error) {
        console.log("Request failed: ", error);
      }
    }

    setSearchTerm("");
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, setLocations, setLoading, setSearchTerm]);

  useEffect(() => {
    getLocations();
  }, [searchTerm, getLocations]);
  // FETCHING ENDS

  if (loading) return <Loading />;

  return (
    <>
      {locations.map((location, index) => {
        const {
          name,
          id,
          timezone,
          sys: { country },
          weather,
          main: { temp, feels_like, humidity },
          visibility,
          wind: { speed: windSpeed, deg: windDeg },
        } = location;
        return (
          <section className="location-list" key={id}>
            <div className="location-main">
              <h1 className={`temp-${unit}`}>{convertTemp(temp)}</h1>
              <div className="temp-toggle">
                <div className="temp-btn-container">
                  <button className="temp-btn" onClick={() => setUnit("f")}>
                    {String.fromCharCode(8457)}
                  </button>
                  <button className="temp-btn" onClick={() => setUnit("c")}>
                    {String.fromCharCode(8451)}
                  </button>

                  <button className="temp-btn" onClick={() => setUnit("k")}>
                    {String.fromCharCode(8490)}
                  </button>
                </div>
              </div>
              <h2>{weather[0].main}</h2>
              <div className="location-name">
                <h3>
                  {name}, {country}
                </h3>
              </div>
            </div>
            <div className="location-extra">
              <p>Timezone: {timezone}</p>
              <p>Humidity: {humidity}</p>
              <p>Visibility: {visibility}</p>
              <p>
                Actually feels like: {feels_like} {String.fromCharCode(8490)}
              </p>
              <p>Wind Speed: {windSpeed}</p>
              <p>Wind Degrees: {windDeg}</p>
              <Link to={`/location/${index}`}>More Info</Link>
            </div>
            <FontAwesomeIcon
              type="button"
              className="delete-btn"
              onClick={() => removeItem(id)}
              icon={faTimesCircle}
            />
          </section>
        );
      })}
    </>
  );
};

export default LocationList;
