import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, ReferenceLine } from "recharts";
import ClimateCard from './card'


const Weather = () => {

    
    
    const styles = {    
        textAlign: "center"
      };
      
    const type = "monotone";

    function getTime(value){
        const unixTime = value;
        const date = new Date(unixTime*1000);
        return (date.toDateString() +" "+ date.toLocaleTimeString() );
    }

    const[minTemp,setMinTemp] = useState(999);
    const[maxTemp,setMaxTemp] = useState(-4854);
    const[finalFutureData,setFinalFutureData] = useState();    

    const[upcomingData,setUpcomingData] = useState([
      {
          "dt": 1641364200,
          "sunrise": 1641344835,
          "sunset": 1641386664,
          "moonrise": 1641353580,
          "moonset": 1641396780,
          "moon_phase": 0.1,
          "temp": {
              "day": 302.77,
              "min": 293.8,
              "max": 303.23,
              "night": 295.96,
              "eve": 301.21,
              "morn": 294
          },
          "feels_like": {
              "day": 304.41,
              "night": 296.46,
              "eve": 302.58,
              "morn": 294.52
          },
          "pressure": 1014,
          "humidity": 55,
          "dew_point": 292.77,
          "wind_speed": 2.73,
          "wind_deg": 83,
          "wind_gust": 4.64,
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": 1,
          "pop": 0.07,
          "uvi": 10.47
      },
      {
          "dt": 1641450600,
          "sunrise": 1641431256,
          "sunset": 1641473095,
          "moonrise": 1641443040,
          "moonset": 1641486540,
          "moon_phase": 0.13,
          "temp": {
              "day": 301.1,
              "min": 294.16,
              "max": 303.29,
              "night": 296.73,
              "eve": 301.44,
              "morn": 294.41
          },
          "feels_like": {
              "day": 302.31,
              "night": 297.36,
              "eve": 302.92,
              "morn": 294.89
          },
          "pressure": 1014,
          "humidity": 58,
          "dew_point": 291.13,
          "wind_speed": 3.25,
          "wind_deg": 82,
          "wind_gust": 5.25,
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": 58,
          "pop": 0.3,
          "rain": 0.1,
          "uvi": 10.61
      },
      {
          "dt": 1641537000,
          "sunrise": 1641517677,
          "sunset": 1641559526,
          "moonrise": 1641532140,
          "moonset": 1641576000,
          "moon_phase": 0.17,
          "temp": {
              "day": 301.93,
              "min": 294.73,
              "max": 303.7,
              "night": 296.13,
              "eve": 301.94,
              "morn": 294.95
          },
          "feels_like": {
              "day": 302.53,
              "night": 296.76,
              "eve": 302.78,
              "morn": 295.59
          },
          "pressure": 1015,
          "humidity": 50,
          "dew_point": 289.69,
          "wind_speed": 2.73,
          "wind_deg": 72,
          "wind_gust": 4.41,
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": 79,
          "pop": 0.06,
          "uvi": 10.68
      },
      {
          "dt": 1641623400,
          "sunrise": 1641604097,
          "sunset": 1641645957,
          "moonrise": 1641621060,
          "moonset": 1641665280,
          "moon_phase": 0.2,
          "temp": {
              "day": 301.69,
              "min": 294.22,
              "max": 303.37,
              "night": 296.61,
              "eve": 302.02,
              "morn": 294.22
          },
          "feels_like": {
              "day": 302.92,
              "night": 297.36,
              "eve": 303.68,
              "morn": 294.73
          },
          "pressure": 1015,
          "humidity": 56,
          "dew_point": 291.11,
          "wind_speed": 2.69,
          "wind_deg": 83,
          "wind_gust": 4,
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": 25,
          "pop": 0.49,
          "rain": 1.1,
          "uvi": 10.71
      },
      {
          "dt": 1641709800,
          "sunrise": 1641690516,
          "sunset": 1641732387,
          "moonrise": 1641709800,
          "moonset": 0,
          "moon_phase": 0.23,
          "temp": {
              "day": 301.57,
              "min": 295.11,
              "max": 303.57,
              "night": 296.43,
              "eve": 301.25,
              "morn": 295.11
          },
          "feels_like": {
              "day": 303.24,
              "night": 297.16,
              "eve": 303.23,
              "morn": 295.84
          },
          "pressure": 1014,
          "humidity": 60,
          "dew_point": 292.11,
          "wind_speed": 2.76,
          "wind_deg": 79,
          "wind_gust": 3.78,
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": 36,
          "pop": 0.38,
          "rain": 1.26,
          "uvi": 10.44
      },
      {
          "dt": 1641796200,
          "sunrise": 1641776934,
          "sunset": 1641818818,
          "moonrise": 1641798480,
          "moonset": 1641754440,
          "moon_phase": 0.25,
          "temp": {
              "day": 302.07,
              "min": 294.93,
              "max": 303.35,
              "night": 296.3,
              "eve": 301.54,
              "morn": 294.93
          },
          "feels_like": {
              "day": 303.61,
              "night": 296.97,
              "eve": 303.32,
              "morn": 295.62
          },
          "pressure": 1014,
          "humidity": 57,
          "dew_point": 291.77,
          "wind_speed": 2.38,
          "wind_deg": 78,
          "wind_gust": 2.95,
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": 33,
          "pop": 0.52,
          "rain": 0.7,
          "uvi": 11
      },
      {
          "dt": 1641882600,
          "sunrise": 1641863352,
          "sunset": 1641905248,
          "moonrise": 1641887280,
          "moonset": 1641843600,
          "moon_phase": 0.3,
          "temp": {
              "day": 302.59,
              "min": 295.13,
              "max": 303.93,
              "night": 296.6,
              "eve": 302.3,
              "morn": 295.13
          },
          "feels_like": {
              "day": 304.45,
              "night": 297.35,
              "eve": 304.6,
              "morn": 295.79
          },
          "pressure": 1014,
          "humidity": 57,
          "dew_point": 292.22,
          "wind_speed": 2.27,
          "wind_deg": 76,
          "wind_gust": 2.52,
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": 27,
          "pop": 0.35,
          "rain": 0.9,
          "uvi": 11
      },
      {
          "dt": 1641969000,
          "sunrise": 1641949768,
          "sunset": 1641991678,
          "moonrise": 1641976020,
          "moonset": 1641932760,
          "moon_phase": 0.33,
          "temp": {
              "day": 302.75,
              "min": 295.33,
              "max": 304.15,
              "night": 296.28,
              "eve": 302.56,
              "morn": 295.33
          },
          "feels_like": {
              "day": 304.88,
              "night": 297.02,
              "eve": 304.72,
              "morn": 296.03
          },
          "pressure": 1013,
          "humidity": 58,
          "dew_point": 292.75,
          "wind_speed": 2.43,
          "wind_deg": 80,
          "wind_gust": 2.79,
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": 37,
          "pop": 0.39,
          "rain": 0.55,
          "uvi": 11
      }
  ]);
    
  
    const[city,setCity] = useState("tenkasi");
    const[cityToSearch,setCityToSearch] = useState("tenkasi");
    const[cdata,setCdata] = useState({
      an:"image Clouds-day",
      coord: {
      lon: -0.1257,
      lat: 51.5085
      },
      weather: [
      {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d"
      }
      ],
      base: "stations",
      main: {
      temp: 283.55,
      feels_like: 282.73,
      temp_min: 282.51,
      temp_max: 284.4,
      pressure: 1009,
      humidity: 80
      },
      visibility: 10000,
      wind: {
      speed: 5.14,
      deg: 230
      },
      clouds: {
      all: 75
      },
      dt: 1641213366,
      sys: {
      type: 2,
      id: 2019646,
      country: "GB",
      sunrise: 1641197149,
      sunset: 1641225821
      },
      timezone: 0,
      id: 2643743,
      name: "London",
      cod: 200
      });

    const[graph,setGraph]= useState(
      {
        "lat": 51.5085,
        "lon": -0.1257,
        "timezone": "Europe/London",
        "timezone_offset": 0,
        "current": {
            "dt": 1641364443,
            "sunrise": 1641369918,
            "sunset": 1641398759,
            "temp": 275.12,
            "feels_like": 275.12,
            "pressure": 1010,
            "humidity": 82,
            "dew_point": 272.47,
            "uvi": 0,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 0.89,
            "wind_deg": 283,
            "wind_gust": 3.58,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        "minutely": [
            {
                "dt": 1641364500,
                "precipitation": 0
            },
            {
                "dt": 1641364560,
                "precipitation": 0
            },
            {
                "dt": 1641364620,
                "precipitation": 0
            },
            {
                "dt": 1641364680,
                "precipitation": 0
            },
            {
                "dt": 1641364740,
                "precipitation": 0
            },
            {
                "dt": 1641364800,
                "precipitation": 0
            },
            {
                "dt": 1641364860,
                "precipitation": 0
            },
            {
                "dt": 1641364920,
                "precipitation": 0
            },
            {
                "dt": 1641364980,
                "precipitation": 0
            },
            {
                "dt": 1641365040,
                "precipitation": 0
            },
            {
                "dt": 1641365100,
                "precipitation": 0
            },
            {
                "dt": 1641365160,
                "precipitation": 0
            },
            {
                "dt": 1641365220,
                "precipitation": 0
            },
            {
                "dt": 1641365280,
                "precipitation": 0
            },
            {
                "dt": 1641365340,
                "precipitation": 0
            },
            {
                "dt": 1641365400,
                "precipitation": 0
            },
            {
                "dt": 1641365460,
                "precipitation": 0
            },
            {
                "dt": 1641365520,
                "precipitation": 0
            },
            {
                "dt": 1641365580,
                "precipitation": 0
            },
            {
                "dt": 1641365640,
                "precipitation": 0
            },
            {
                "dt": 1641365700,
                "precipitation": 0
            },
            {
                "dt": 1641365760,
                "precipitation": 0
            },
            {
                "dt": 1641365820,
                "precipitation": 0
            },
            {
                "dt": 1641365880,
                "precipitation": 0
            },
            {
                "dt": 1641365940,
                "precipitation": 0
            },
            {
                "dt": 1641366000,
                "precipitation": 0
            },
            {
                "dt": 1641366060,
                "precipitation": 0
            },
            {
                "dt": 1641366120,
                "precipitation": 0
            },
            {
                "dt": 1641366180,
                "precipitation": 0
            },
            {
                "dt": 1641366240,
                "precipitation": 0
            },
            {
                "dt": 1641366300,
                "precipitation": 0
            },
            {
                "dt": 1641366360,
                "precipitation": 0
            },
            {
                "dt": 1641366420,
                "precipitation": 0
            },
            {
                "dt": 1641366480,
                "precipitation": 0
            },
            {
                "dt": 1641366540,
                "precipitation": 0
            },
            {
                "dt": 1641366600,
                "precipitation": 0
            },
            {
                "dt": 1641366660,
                "precipitation": 0
            },
            {
                "dt": 1641366720,
                "precipitation": 0
            },
            {
                "dt": 1641366780,
                "precipitation": 0
            },
            {
                "dt": 1641366840,
                "precipitation": 0
            },
            {
                "dt": 1641366900,
                "precipitation": 0
            },
            {
                "dt": 1641366960,
                "precipitation": 0
            },
            {
                "dt": 1641367020,
                "precipitation": 0
            },
            {
                "dt": 1641367080,
                "precipitation": 0
            },
            {
                "dt": 1641367140,
                "precipitation": 0
            },
            {
                "dt": 1641367200,
                "precipitation": 0
            },
            {
                "dt": 1641367260,
                "precipitation": 0
            },
            {
                "dt": 1641367320,
                "precipitation": 0
            },
            {
                "dt": 1641367380,
                "precipitation": 0
            },
            {
                "dt": 1641367440,
                "precipitation": 0
            },
            {
                "dt": 1641367500,
                "precipitation": 0
            },
            {
                "dt": 1641367560,
                "precipitation": 0
            },
            {
                "dt": 1641367620,
                "precipitation": 0
            },
            {
                "dt": 1641367680,
                "precipitation": 0
            },
            {
                "dt": 1641367740,
                "precipitation": 0
            },
            {
                "dt": 1641367800,
                "precipitation": 0
            },
            {
                "dt": 1641367860,
                "precipitation": 0
            },
            {
                "dt": 1641367920,
                "precipitation": 0
            },
            {
                "dt": 1641367980,
                "precipitation": 0
            },
            {
                "dt": 1641368040,
                "precipitation": 0
            },
            {
                "dt": 1641368100,
                "precipitation": 0
            }
        ],
        "daily": [
            {
                "dt": 1641384000,
                "sunrise": 1641369918,
                "sunset": 1641398759,
                "moonrise": 1641378480,
                "moonset": 1641411060,
                "moon_phase": 0.1,
                "temp": {
                    "day": 277.95,
                    "min": 275.12,
                    "max": 278.67,
                    "night": 275.51,
                    "eve": 276.97,
                    "morn": 275.25
                },
                "feels_like": {
                    "day": 274.48,
                    "night": 273.82,
                    "eve": 274.24,
                    "morn": 270.35
                },
                "pressure": 1014,
                "humidity": 69,
                "dew_point": 272.77,
                "wind_speed": 6.36,
                "wind_deg": 282,
                "wind_gust": 14.21,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 7,
                "pop": 0,
                "uvi": 0.48
            },
            {
                "dt": 1641470400,
                "sunrise": 1641456297,
                "sunset": 1641485233,
                "moonrise": 1641466200,
                "moonset": 1641502440,
                "moon_phase": 0.14,
                "temp": {
                    "day": 277.42,
                    "min": 273.96,
                    "max": 279.93,
                    "night": 278.16,
                    "eve": 278.56,
                    "morn": 274.16
                },
                "feels_like": {
                    "day": 274.36,
                    "night": 274.21,
                    "eve": 274.13,
                    "morn": 272.16
                },
                "pressure": 1017,
                "humidity": 62,
                "dew_point": 270.68,
                "wind_speed": 7.6,
                "wind_deg": 200,
                "wind_gust": 17.28,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 22,
                "pop": 1,
                "rain": 1.71,
                "uvi": 0.52
            },
            {
                "dt": 1641556800,
                "sunrise": 1641542673,
                "sunset": 1641571708,
                "moonrise": 1641553620,
                "moonset": 1641593580,
                "moon_phase": 0.18,
                "temp": {
                    "day": 277.93,
                    "min": 275.03,
                    "max": 278.23,
                    "night": 275.12,
                    "eve": 276.32,
                    "morn": 276.44
                },
                "feels_like": {
                    "day": 274.05,
                    "night": 271.89,
                    "eve": 272.89,
                    "morn": 272.34
                },
                "pressure": 1013,
                "humidity": 63,
                "dew_point": 271.35,
                "wind_speed": 5.46,
                "wind_deg": 256,
                "wind_gust": 12.33,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 72,
                "pop": 0.8,
                "rain": 0.12,
                "uvi": 0.43
            },
            {
                "dt": 1641643200,
                "sunrise": 1641629045,
                "sunset": 1641658186,
                "moonrise": 1641640920,
                "moonset": 1641684480,
                "moon_phase": 0.21,
                "temp": {
                    "day": 280.61,
                    "min": 275.26,
                    "max": 281.57,
                    "night": 278.83,
                    "eve": 279.81,
                    "morn": 277.28
                },
                "feels_like": {
                    "day": 277.39,
                    "night": 274.03,
                    "eve": 275.39,
                    "morn": 274.26
                },
                "pressure": 1002,
                "humidity": 93,
                "dew_point": 279.51,
                "wind_speed": 8.58,
                "wind_deg": 293,
                "wind_gust": 17.04,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 1,
                "rain": 10.52,
                "uvi": 0.08
            },
            {
                "dt": 1641729600,
                "sunrise": 1641715415,
                "sunset": 1641744666,
                "moonrise": 1641728100,
                "moonset": 0,
                "moon_phase": 0.25,
                "temp": {
                    "day": 278.33,
                    "min": 276.53,
                    "max": 278.8,
                    "night": 276.68,
                    "eve": 276.99,
                    "morn": 276.77
                },
                "feels_like": {
                    "day": 275.16,
                    "night": 275.43,
                    "eve": 275.45,
                    "morn": 272.23
                },
                "pressure": 1015,
                "humidity": 71,
                "dew_point": 273.51,
                "wind_speed": 8.16,
                "wind_deg": 292,
                "wind_gust": 17.56,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 61,
                "pop": 0.02,
                "uvi": 0.55
            },
            {
                "dt": 1641816000,
                "sunrise": 1641801781,
                "sunset": 1641831148,
                "moonrise": 1641815340,
                "moonset": 1641775200,
                "moon_phase": 0.27,
                "temp": {
                    "day": 281.82,
                    "min": 277.38,
                    "max": 283,
                    "night": 281.81,
                    "eve": 282.9,
                    "morn": 280.13
                },
                "feels_like": {
                    "day": 279.67,
                    "night": 280.49,
                    "eve": 281.68,
                    "morn": 277.3
                },
                "pressure": 1022,
                "humidity": 97,
                "dew_point": 281.37,
                "wind_speed": 4.63,
                "wind_deg": 195,
                "wind_gust": 11.72,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 0.96,
                "rain": 0.9,
                "uvi": 1
            },
            {
                "dt": 1641902400,
                "sunrise": 1641888145,
                "sunset": 1641917633,
                "moonrise": 1641902580,
                "moonset": 1641865920,
                "moon_phase": 0.3,
                "temp": {
                    "day": 280.84,
                    "min": 277.95,
                    "max": 282.83,
                    "night": 277.95,
                    "eve": 279.42,
                    "morn": 282.45
                },
                "feels_like": {
                    "day": 278.83,
                    "night": 276.19,
                    "eve": 276.94,
                    "morn": 281.23
                },
                "pressure": 1031,
                "humidity": 88,
                "dew_point": 279,
                "wind_speed": 3.36,
                "wind_deg": 329,
                "wind_gust": 9.13,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 0.41,
                "rain": 0.56,
                "uvi": 1
            },
            {
                "dt": 1641988800,
                "sunrise": 1641974505,
                "sunset": 1642004119,
                "moonrise": 1641990000,
                "moonset": 1641956580,
                "moon_phase": 0.33,
                "temp": {
                    "day": 278.82,
                    "min": 276.13,
                    "max": 280,
                    "night": 277.92,
                    "eve": 278.56,
                    "morn": 276.13
                },
                "feels_like": {
                    "day": 276.67,
                    "night": 276.13,
                    "eve": 276.61,
                    "morn": 274.44
                },
                "pressure": 1042,
                "humidity": 76,
                "dew_point": 274.88,
                "wind_speed": 2.99,
                "wind_deg": 277,
                "wind_gust": 8.38,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 79,
                "pop": 0,
                "uvi": 1
            }
        ]
    }
    );

    let obj = {};
    useEffect(()=>{      
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=ec8ed7b018f29d0b43ae22a6decda539";                  
        fetch(url)
        .then(response => {      
            if(response.status === 404){
            alert("City Not Found");
            }else{
            return response.json()
            }      
        })
        .then(response => {      
            if(response.status===404){
            alert("City Not Found");
            }else{                                
                setCdata(response);                              
            }
    
        })      

    },[city])    
    
    useEffect(()=>{
      let futureData = [];
      let url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+cdata.coord.lat+"&lon="+cdata.coord.lon+"&exclude=hourly&appid=ec8ed7b018f29d0b43ae22a6decda539"
        fetch(url2)
        .then(response => response.json())
        .then(response => {   
          
          setUpcomingData(response.daily);       

  
          for(let i=0; i<response.daily.length; i++){          
            let value = parseInt(getTime(response.daily[i].dt).split(" ")[2]);          
            let temper = Math.floor(response.daily[i].temp.day- 273.15);          
            obj[value] = temper;                              
          }        


    
    
          setMinTemp(Math.floor(minTemp));
          setMaxTemp(Math.ceil(maxTemp));
    
        
          Object.keys(obj).forEach(function(key,idx) {          
            let temp={
              year: key,
              value: (obj[key])
            };
            futureData.push(temp);  
            setMinTemp(Math.min(minTemp,obj[key]));
            setMaxTemp(Math.max(maxTemp,obj[key]));      
            setMaxTemp(Math.ceil(maxTemp));
            setMinTemp(Math.floor(minTemp));       
    
            if(idx===Object.keys(obj).length-1){          
              setFinalFutureData(futureData);          
            }        
        });      
      });   
    },[cdata])

    // useEffect(()=>{

    // },[upcomingData])

    return ( 
  
    <div className="App">
      <div>
        <Container>
          <Card>            
          <div className="left-pane">
            <div className="search-box">
              <h3>Enter City :</h3>
              <input value={cityToSearch} onChange={(e)=>{setCityToSearch(e.target.value)} } type="text" />              
              <Button onClick={()=>{setCity(cityToSearch);}}>Search</Button>
            </div>
            <div className="information">
              <h3>{getTime(cdata.dt)}</h3>


              <div className={"image "+cdata.weather[0].main+"-day"}></div>  
              


              <h2>{cdata.weather[0].main}{" "+ (cdata.main.temp- 273.15).toFixed(2)+" °C"}</h2>    
              <h3>{ cdata.weather[0].description[0].toUpperCase() +  cdata.weather[0].description.substring(1)}</h3>       

              <div className="humitity-wind">
                <div className="humitity">
                  <span className="title">Humitity</span>
                  <h3>{cdata.main.humidity+"%"}</h3>
                </div>
                <div className="wind">
                  <span className="title">Wind Speed</span>
                  <h3>{cdata.wind.speed} km/h</h3>
                </div>
              </div> 
            </div>
          </div>


          <div className="right-pane">
              <div className="temperature">
                <h2>Temperature</h2>

                <div style={styles}>
                  <LineChart
                    width={600}
                    height={250}
                    data={finalFutureData}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="blue" />
                        <stop offset="100%" stopColor="blue" />
                      </linearGradient>
                    </defs>

                    <Line type={type} dataKey="value" stroke="url(#gradient)" dot={true} />
                    <XAxis dataKey="year" />
                    <YAxis type="number" domain={[minTemp,maxTemp]} />                           
                  </LineChart>
                </div>

                <div className="climate-cards">

                  <ClimateCard blue={true} title="Today" humidity={cdata.main.humidity+"%"} temp={" "+ (cdata.main.temp- 273.15).toFixed(2)+" °C"}/> 
                  
                  
                    <ClimateCard title={getTime(upcomingData[1].dt).split(" ")[1] + " " + getTime(upcomingData[1].dt).split(" ")[2]} humidity={upcomingData[1].humidity+"%"} temp={" "+ (upcomingData[1].temp.day- 273.15).toFixed(2)+" °C"} />                     
                    <ClimateCard title={getTime(upcomingData[2].dt).split(" ")[1] + " " + getTime(upcomingData[2].dt).split(" ")[2]} humidity={upcomingData[2].humidity+"%"} temp={" "+ (upcomingData[2].temp.day- 273.15).toFixed(2)+" °C"} />                     
                    <ClimateCard title={getTime(upcomingData[3].dt).split(" ")[1] + " " + getTime(upcomingData[3].dt).split(" ")[2]} humidity={upcomingData[3].humidity+"%"} temp={" "+ (upcomingData[3].temp.day- 273.15).toFixed(2)+" °C"} />                     
                    {/* <ClimateCard humidity={} temp={} />    
                    <ClimateCard humidity={} temp={} />     */}

                                 
                </div>

              </div>
          </div>

          </Card>
        </Container>
      </div>      
    </div>

    );


}
 
export default Weather;