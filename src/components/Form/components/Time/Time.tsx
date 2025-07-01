import { useEffect, useState } from "react";
import styles from "./Time.module.scss";

const monthArr = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = monthArr[date.getMonth()];
    const weekday = date.toLocaleString("ru-RU", { weekday: "long" });
    return `${day} ${month}, ${weekday}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.timeWrapper}>
      <span className={styles.date}>{formatDate(currentTime)}</span>
      <span className={styles.time}>{formatTime(currentTime)}</span>
    </div>
  );
};
