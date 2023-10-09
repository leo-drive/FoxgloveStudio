// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import {
  WeatherCloudy24Filled,
  WeatherDrizzle24Filled,
  WeatherRain24Filled,
  WeatherSnow24Filled,
  WeatherSunny24Filled,
  WeatherThunderstorm24Filled,
} from "@fluentui/react-icons";
import { useEffect, useState } from "react";

const Header = ({ title }: { title: string }): JSX.Element => {
  const [temperature, setTemperature] = useState<{
    current_weather: {
      temperature: number;
      time: string;
      weathercode: number;
      winddirection: number;
      windspeed: number;
    };
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
  }>({
    current_weather: {
      temperature: 0,
      time: "",
      weathercode: 0,
      winddirection: 0,
      windspeed: 0,
    },
    elevation: 0,
    generationtime_ms: 0,
    latitude: 0,
    longitude: 0,
    timezone: "",
    timezone_abbreviation: "",
    utc_offset_seconds: 0,
  });

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=41.09&longitude=28.98&current_weather=true&timezone=auto`,
      { method: "GET" },
      // `https://api.open-meteo.com/v1/forecast?latitude=${latlong.latitude}&longitude=${latlong.longitude}&current_weather=true&timezone=auto`,
    )
      .then((res) => {
        const data = res.json();
        void data.then((receivedData: typeof temperature) => {
          setTemperature(receivedData);
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(err);
      });
  }, []);

  const { weathercode } = temperature.current_weather;

  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 60000); // Update every minute

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getFormattedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function getMonthAndDay() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${monthNames[Number(month) - 1]} ${day}`;
  }

  return (
    <div
      style={{
        height: "5rem",
        backgroundColor: "#1E2034",
        color: "#888888",
        fontSize: "2rem",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
      }}
    >
      <span>{title}</span>
      <svg
        width="51"
        height="34"
        viewBox="0 0 51 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          scale: "1.5",
        }}
      >
        <path
          d="M0.449951 0.75C0.449951 0.6 0.56998 0.469971 0.72998 0.469971H2.44995C2.59995 0.469971 2.72998 0.59 2.72998 0.75V20.04C2.72998 20.19 2.60995 20.3199 2.44995 20.3199H0.72998C0.57998 20.3199 0.449951 20.2 0.449951 20.04V0.75ZM6.13 20.04C6.13 20.19 6.25003 20.3199 6.41003 20.3199H11.75C11.9 20.3199 12.03 20.2 12.03 20.04V18.35C12.03 18.2 11.91 18.0699 11.75 18.0699H6.42004C6.27004 18.0699 6.14001 18.19 6.14001 18.35L6.13 20.04Z"
          fill="white"
        />
        <path
          d="M50.99 10.39C50.98 15.27 47.52 19.4699 42.7 20.4399C42.62 20.4599 42.53 20.44 42.46 20.38C42.39 20.33 42.36 20.25 42.36 20.16V18.4399C42.36 18.3099 42.45 18.19 42.58 18.16C46.18 17.28 48.72 14.07 48.72 10.38C48.72 6.69 46.19 3.47997 42.58 2.59997C42.45 2.56997 42.36 2.46001 42.36 2.32001V0.590025C42.36 0.510025 42.4 0.419993 42.46 0.369993C42.53 0.319993 42.61 0.299995 42.7 0.309995C44.97 0.759995 47.02 1.95996 48.52 3.70996C50.12 5.58996 51 7.95001 50.99 10.39ZM30.3199 10.39C30.3299 15.27 33.8 19.4699 38.62 20.4399C38.7 20.4599 38.79 20.44 38.85 20.38C38.91 20.32 38.95 20.25 38.95 20.16V18.4399C38.95 18.3099 38.86 18.19 38.73 18.16C35.13 17.28 32.59 14.07 32.59 10.38C32.59 6.69 35.12 3.47997 38.73 2.59997C38.86 2.56997 38.95 2.46001 38.95 2.32001V0.590025C38.95 0.510025 38.91 0.429993 38.85 0.369993C38.78 0.319993 38.7 0.299995 38.62 0.309995C33.8 1.31 30.3299 5.51001 30.3199 10.39Z"
          fill="white"
        />
        <path
          d="M15.4301 20.04C15.4301 20.19 15.55 20.3199 15.71 20.3199H27.01C27.16 20.3199 27.29 20.2 27.29 20.04V18.34C27.29 18.19 27.17 18.0601 27.01 18.0601H17.98C17.83 18.0601 17.7 17.94 17.7 17.78V2.97998C17.7 2.82998 17.82 2.70001 17.98 2.70001H27.01C27.16 2.70001 27.29 2.57998 27.29 2.41998V0.719971C27.29 0.569971 27.17 0.440002 27.01 0.440002H15.71C15.56 0.440002 15.4301 0.559971 15.4301 0.719971V20.04Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.37 8.38997L27.22 12.1099C27.25 12.1499 27.27 12.2 27.27 12.25C27.27 12.3 27.25 12.36 27.22 12.39C27.19 12.43 27.15 12.4499 27.11 12.4499H21.26C21.17 12.4499 21.1 12.36 21.1 12.25V8.52998C21.1 8.44998 21.14 8.37992 21.2 8.33992C21.26 8.31992 21.33 8.32997 21.37 8.38997Z"
          fill="#2BD1E4"
        />
        <path
          d="M46.74 33.6899C46.74 33.7399 46.78 33.78 46.83 33.78H50.63C50.68 33.78 50.72 33.7399 50.72 33.6899V33.12C50.72 33.07 50.68 33.03 50.63 33.03H47.59C47.54 33.03 47.5 32.9899 47.5 32.9399V27.96C47.5 27.91 47.54 27.87 47.59 27.87H50.63C50.68 27.87 50.72 27.83 50.72 27.78V27.21C50.72 27.16 50.68 27.12 50.63 27.12H46.83C46.78 27.12 46.74 27.16 46.74 27.21V33.6899Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.74 29.77L50.71 31.02C50.72 31.03 50.73 31.0499 50.73 31.0699C50.73 31.0899 50.72 31.11 50.71 31.12C50.7 31.13 50.69 31.14 50.67 31.14H48.7C48.67 31.14 48.65 31.1099 48.65 31.0699V29.8199C48.65 29.7899 48.6601 29.77 48.6801 29.76C48.7001 29.75 48.72 29.75 48.74 29.77Z"
          fill="#2BD1E4"
        />
        <path
          d="M2.80005 27.11H0.560059C0.510059 27.11 0.459961 27.15 0.459961 27.2V31.79C0.459961 31.84 0.500059 31.88 0.560059 31.88H1.14001C1.17001 31.88 1.18996 31.87 1.20996 31.85C1.22996 31.83 1.23999 31.81 1.23999 31.78V27.95C1.23999 27.9 1.27997 27.86 1.33997 27.86H2.80005C4.26005 27.86 5.44995 29.0099 5.44995 30.4399C5.44995 31.8699 4.26005 33.02 2.80005 33.02H0.560059C0.510059 33.02 0.459961 33.06 0.459961 33.11V33.6801C0.459961 33.7301 0.500059 33.77 0.560059 33.77H2.80005C4.69005 33.77 6.22998 32.2801 6.22998 30.4301C6.22998 28.6001 4.69005 27.11 2.80005 27.11Z"
          fill="white"
        />
        <path
          d="M25.33 33.6899C25.33 33.7399 25.3799 33.78 25.4399 33.78H26.12C26.15 33.78 26.18 33.77 26.2 33.75C26.22 33.73 26.23 33.7101 26.23 33.6801V27.2C26.23 27.17 26.22 27.15 26.2 27.13C26.18 27.11 26.15 27.1 26.12 27.1H25.4399C25.3799 27.1 25.33 27.1399 25.33 27.1899V33.6899Z"
          fill="white"
        />
        <path
          d="M18.17 29.16C18.17 28.62 17.9501 28.1 17.5601 27.71C17.1701 27.33 16.63 27.11 16.08 27.11H13.46C13.43 27.11 13.41 27.12 13.39 27.14C13.37 27.16 13.36 27.18 13.36 27.21V33.6899C13.36 33.7199 13.37 33.74 13.39 33.76C13.41 33.78 13.43 33.79 13.46 33.79H14.04C14.09 33.79 14.14 33.75 14.14 33.7V27.97C14.14 27.94 14.15 27.92 14.17 27.9C14.19 27.88 14.21 27.87 14.24 27.87H16.08C16.81 27.87 17.4 28.45 17.4 29.16C17.4 29.87 16.81 30.45 16.08 30.45H15.4C15.37 30.45 15.35 30.46 15.33 30.48C15.31 30.5 15.3 30.52 15.3 30.55V31.12C15.3 31.15 15.31 31.1699 15.33 31.1899C15.35 31.2099 15.37 31.22 15.4 31.22H15.9399C15.9799 31.22 16.01 31.24 16.03 31.27L16.7 32.51L17.37 33.75C17.39 33.78 17.42 33.8 17.46 33.8H18.12C18.15 33.8 18.19 33.78 18.2 33.75C18.21 33.72 18.22 33.69 18.2 33.66L17.54 32.45L16.85 31.1899C16.84 31.1699 16.84 31.14 16.85 31.11C16.86 31.09 16.88 31.0701 16.9 31.0601C17.25 30.9101 17.56 30.67 17.79 30.36C18.04 29.99 18.17 29.58 18.17 29.16Z"
          fill="white"
        />
        <path
          d="M33.99 27.11C34.03 27.11 34.0599 27.13 34.0699 27.16L34.9499 29.02L35.8399 30.89C35.8499 30.92 35.8499 30.95 35.8399 30.97L35.65 31.37L35.53 31.63C35.51 31.66 35.4799 31.6801 35.4499 31.6801C35.4099 31.6801 35.38 31.66 35.37 31.63L34.3399 29.46L33.3 27.25C33.29 27.22 33.29 27.19 33.31 27.16C33.33 27.13 33.36 27.12 33.39 27.12H34.02L33.99 27.11ZM36.05 33.02C36.04 33.05 36.04 33.08 36.05 33.1L36.1899 33.39L36.3399 33.71C36.3499 33.73 36.37 33.75 36.39 33.76C36.43 33.78 36.48 33.78 36.52 33.76C36.54 33.75 36.5499 33.73 36.5699 33.71L38.14 30.41L39.65 27.24C39.66 27.21 39.66 27.18 39.65 27.15C39.63 27.12 39.5999 27.11 39.5699 27.11H38.9399C38.8999 27.11 38.87 27.13 38.86 27.16L37.4699 30.08L36.05 33.02Z"
          fill="white"
        />
      </svg>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            color: "#fff",
          }}
        >
          {currentTime}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {[0, 1, 2, 3].includes(weathercode) && (
            <WeatherSunny24Filled
              style={{
                width: "1.25rem",
                height: "1.25rem",
                color: "#FBB142",
              }}
            />
          )}
          {[45, 48].includes(weathercode) && <WeatherCloudy24Filled />}
          {[51, 53, 55, 56, 57].includes(weathercode) && <WeatherDrizzle24Filled />}
          {[61, 63, 65, 66, 67, 80, 81, 82].includes(weathercode) && <WeatherRain24Filled />}
          {[71, 73, 75, 77, 85, 86].includes(weathercode) && <WeatherSnow24Filled />}
          {[95, 96, 99].includes(weathercode) && <WeatherThunderstorm24Filled />}
          <p
            style={{
              fontSize: "0.875rem",
              color: "#fff",
            }}
          >
            {Math.round(temperature.current_weather.temperature)}°, {getMonthAndDay()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
