import { Button } from "../Button/Button";
import { Headling } from "../Headling/Headling";
import { Icon } from "../Icon/Icon";
import { Input } from "./components/Input/Input";
import styles from "./Form.module.scss";
import { useWether } from "../../hooks/useWeather";
import type { FormEvent } from "react";
import { Time } from "./components/Time/Time";
import { API_KEY } from "../../helpers/Api";

export const Form = () => {
  const { city, setCity, weather, getWeather, error } = useWether();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getWeather(
      city,
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
    );
  };

  return (
    <div className={styles.fromWrapper}>
      <Headling attr="h1" className={styles.title}>
        {city}
      </Headling>

      <div className={styles.formInner}>
        {error && <div className={styles.error}>{error}</div>}
        {weather && weather.main && (
          <>
            <span className={styles.temp}>
              {Math.round(weather.main.temp)}&#176;
            </span>
            <span className={styles.info}>
              {weather.weather[0].description}
            </span>
          </>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <Input
              type="text"
              placeholder="Ваш город"
              onChange={(e) =>
                setCity(e.target.value != "" ? e.target.value : "Краснодар")
              }
            />
            <Button iconOnly={true} className={styles.submit} type="submit">
              <span>Отправить</span>
              <Icon id="search" />
            </Button>
          </div>
        </form>

        <Time />
      </div>
    </div>
  );
};
