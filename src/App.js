import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrentConditions from "./Current";
import { mockresponse } from "./shared/constants";

function App() {
  const [location, setLocation] = useState("");
  const [levels, setLevels] = useState(null);

  useEffect(() => {
    const getResults = () => {
      return Promise.resolve(mockresponse);
    };
    getResults().then((result) => {
      setLocation(result.city_name);
      setLevels({
        grassData: [
          { name: "severity", value: result.data[0].pollen_level_grass },
          { name: "clarity", value: 4 - result.data[0].pollen_level_grass },
        ],
        treeData: [
          { name: "severity", value: result.data[0].pollen_level_tree },
          { name: "clarity", value: 4 - result.data[0].pollen_level_tree },
        ],
        weedData: [
          { name: "severity", value: result.data[0].pollen_level_weed },
          { name: "clarity", value: 4 - result.data[0].pollen_level_weed },
        ],
      });
    });

    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log({ position });
      //   const lat = position.coords.latitude;
      //   const lon = position.coords.longitude;
      //   const url = `https://air-quality.p.rapidapi.com/current/airquality?lon=${lon}&lat=${lat}`;
      //   const options = {
      //     method: "GET",
      //     headers: {
      //       "X-RapidAPI-Host": "air-quality.p.rapidapi.com",
      //     },
      //   };
      //   try {
      //     const response = await fetch(url, options);
      //     const result = await response.json();
      //     setGrass([
      //       { name: "severity", value: result.data[0].pollen_level_grass },
      //       { name: "clarity", value: 4 - result.data[0].pollen_level_grass },
      //     ]);
      //     setTree([
      //       { name: "severity", value: result.data[0].pollen_level_tree },
      //       { name: "clarity", value: 4 - result.data[0].pollen_level_tree },
      //     ]);
      //     setWeed([
      //       { name: "severity", value: result.data[0].pollen_level_weed },
      //       { name: "clarity", value: 4 - result.data[0].pollen_level_weed },
      //     ]);
      //     emitLocation(result.city_name);
      //   } catch (error) {
      //     console.error(error);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pollen levels for {location}</h1>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              !levels ? (
                <div>nothing here</div>
              ) : (
                <CurrentConditions levels={levels}></CurrentConditions>
              )
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
