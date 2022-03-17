import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, ReferenceLine } from "recharts";
import ClimateCard from './card'


function App() {

  let futureData = [];


  const[minTemp,setMinTemp] = useState(999);
  const[maxTemp,setMaxTemp] = useState(-4854);
  const[finalFutureData,setFinalFutureData] = useState();
  const[animation,setAnimation]=useState("image Clouds-day");

  const[city,setCity] = useState("tenkasi");
  const[cityToSearch,setCityToSearch] = useState("tenkasi");
  const[cdata,setCdata] = useState({
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

  

    let obj = {};

    useEffect(()=>{
      let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=ec8ed7b018f29d0b43ae22a6decda539";    
      console.log(url);
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
          setAnimation("image "+cdata.weather[0].main+"-day");     
          setCdata(response);              
        }
  
      })
  
        let url2 = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=ec8ed7b018f29d0b43ae22a6decda539";
        fetch(url2)
        .then(response => response.json())
        .then(response => {              
  
        for(let i=0; i<response.list.length; i++){
          let value = response.list[i].dt_txt.split(" ")[0].split("-")[2];          
          let temper = (response.list[i].main.temp - 273.15).toFixed(2);          
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

    },[city,animation])


  // function updateAll(name){
    
  // }

function getTime(value){
  const unixTime = value;
  const date = new Date(unixTime*1000);
  return (date.toDateString() +" "+ date.toLocaleTimeString() );
}



  // Chart Starts Here
  
  const styles = {    
    textAlign: "center"
  };
  
  const type = "monotone";
  
  
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
              <div className={animation}></div>  
              <h2>{cdata.weather[0].main}{" "+ (cdata.main.temp- 273.15).toFixed(2)+" °C"}</h2>           

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
                    <ClimateCard blue={true} humidity={cdata.main.humidity+"%"} temp={" "+ (cdata.main.temp- 273.15).toFixed(2)+" °C"}/> 
                    <ClimateCard/>    
                    <ClimateCard/>    
                    <ClimateCard/>    

                </div>

              </div>
          </div>

          </Card>
        </Container>
      </div>      
    </div>
  );
}

export default App;

