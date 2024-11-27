import { useState } from "react";
import { SearchBar } from "../shared/search-bar";
import { CurrentWeather } from "../shared/current-weather";
import { Weather } from "../shared/model/weather-interface";
import { fetchWeather } from "../shared/api/weather-request";

export function MainPage() {
  const [weatherResponse, setWeatherResponse] = useState<Weather>();

  async function searchWeather(text: string) {
    const weather = await fetchWeather(text);
    setWeatherResponse(weather);
  }

  return (
    <>
      <SearchBar onSearch={(text) => searchWeather(text)} />
      <CurrentWeather weatherResponse={weatherResponse} />
    </>
  );
}
