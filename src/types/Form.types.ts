export interface WeatherMain {
  temp: number;
}

export interface WeatherDescription {
  id: number;
  description: string;
}

export interface WeatherData {
  main: WeatherMain;
  weather: WeatherDescription[];
}
