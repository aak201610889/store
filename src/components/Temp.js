import axios from "axios";
import React, { useEffect,useState } from "react";


function Temp() {
  const [weathernow, setweathernow] = useState([])
  const [log, setlog] = useState(true)
  useEffect(() => {

    const getposition = () => {
      setlog(true)
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=21e79090051788486f7f3be91d64b080`;
        axios.get(api).then(res => {

          setweathernow(res.data);
          setlog(false)
        });
      });
    };
    getposition();
  }, []);
  if (log) {
    return (
      <h1>
        Loading...
      </h1>
    )
  }
  return (
    <div>
      <h1>{weathernow.name}</h1>
      { console.log(weathernow.weather)}
      <h1>{weathernow.weather[0].description}</h1>
      <button onClick={() => { setweathernow()}}>after 6 days</button>
    </div>
  );
}
export default Temp;