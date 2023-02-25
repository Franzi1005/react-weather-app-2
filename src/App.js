import "./App.css";

import axios from "axios";

function App() {
  let apiKey = "8a869017a9bbe9c440c0fea9e1fa0af6";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  axios.get(url).then(alertWeather);

  function alertWeather(response) {
    alert(response.data.main.temp);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Woohoo!!</p>
      </header>
    </div>
  );
}

export default App;
