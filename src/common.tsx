export const APP_ID = "78811952";
export const APP_SECRET = "UXfb7UJg";
export const cities = ["北京", "上海", "广州", "深圳", "成都"];

export interface IDay {
  date: string;
  tem_day: string;
  tem_night: string;
  wea: string;
  win: string;
  win_speed: string;
  wea_img: string;
}

export const weatherMap = new Map([
  [
    "qing",
    {
      img: "/image/qing.png",
      bg: `linear-gradient(to bottom, #0e7fdf, #69b8f0)`,
    },
  ],
  [
    "yin",
    {
      img: "/image/yin.png",
      bg: `linear-gradient(to bottom, #88a9ca, #bcd3e3)`,
    },
  ],
  [
    "yun",
    {
      img: "/image/yun.png",
      bg: `linear-gradient(to bottom, #50b2fb, #a6d4f6)`,
    },
  ],
]);
