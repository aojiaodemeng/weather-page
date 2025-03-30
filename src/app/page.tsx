"use client";
import React, { useCallback, useEffect, useState } from "react";
import { APP_ID, APP_SECRET, cities, IDay } from "../common";
import { WeatherCard } from "@/components/weather-card";
import "./index.css";

export default function Home() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("上海");

  const fetchWeather = useCallback(async () => {
    const url = `http://v1.yiketianqi.com/free/week?unescape=1&version=v9&appid=${APP_ID}&appsecret=${APP_SECRET}&city=${city}`;
    try {
      const data = await fetch(url);
      const info = await data.json();
      console.log("data", info);
      setWeather(info.data);
    } catch (err) {
      console.error("err", err);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [city, fetchWeather]); // 当城市改变时重新获取天气数据

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="weatherPage">
      {weather && (
        <div className="contentCard">
          <div className="selectWrapper">
            请选择你要查询的城市：
            <select onChange={onChange}>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="weatherContent">
            {weather?.map((day: IDay) => (
              <WeatherCard info={day} key={day.date} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
