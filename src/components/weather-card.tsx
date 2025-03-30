import Image from "next/image";
import { IDay, weatherMap } from "../common";
import { useMemo } from "react";
import "./index.css";

export const WeatherCard: React.FC<{ info: IDay }> = ({ info }) => {
  const detail = useMemo(() => {
    const cur = weatherMap.get(info.wea_img);
    return cur || weatherMap.get("qing");
  }, [info]);

  return (
    <div
      key={info.date}
      className="weatherCard"
      style={{
        background: detail?.bg,
      }}
    >
      <h1>{info.date}</h1>
      <Image
        className="image"
        src={detail?.img as string}
        alt="Next.js logo"
        width={40}
        height={38}
        priority
      />
      <div>
        {info.tem_day}/{info.tem_night}°C{" "}
      </div>
      <p className="wea">{info.wea}</p>
      <p>{info.win}</p>
      <p>{info.win_speed}</p>
    </div>
  );
};
