import { API_KEY } from "../helpers/Api";
import { useState, useEffect } from "react";
import type { WeatherData } from "../types/Form.types";

export const useWether = (defaultCity = "Краснодар") => {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async (_city: string, url: string) => {
    try {
      setError(null);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      // console.log(data);

      if (data.message && data.message.includes("city not found")) {
        setError("Такого города нет, смотри глобус");
      }
    } catch (error) {
      console.error("Ошибка при получении погоды:", error);
    }
  };

  useEffect(() => {
    getWeather(
      defaultCity,
      `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${API_KEY}&units=metric&lang=ru`
    );
  }, []);

  return {
    city,
    setCity,
    weather,
    getWeather,
    error,
  };
};
