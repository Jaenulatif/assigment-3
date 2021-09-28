import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";

//function pembangkit angka random
const getRandom = (min, max) => Math.floor(Math.random() * (max-min) + min);

//function penghitungan shall
const countSell = (rates, random) => rates + (random / 100 * rates);

//function penghitungan shall
const countBuy = (rates, random) => rates - (random / 100 * rates);

// sell =  rates + 2% = 1.48855 + (2/100 * 1.48855) = 1.518321
// buy = rates - 2% = 1.48855 - (2/100 * 1.48855) = 1,458779

function App() {
  //get data
  const [data, setData] = useState({});
  useEffect(async()=>{
    const response = await axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=17e2116fc297ad64ef6e3b92279962c1&symbols=USD,IDR,CHF,CAD,JPY");
    setData(response.data.rates);
  },[0]);

  //angka random 2-4
  const numRandomCAD = getRandom(2,5);
  const numRandomIDR = getRandom(2,5);
  const numRandomJPY = getRandom(2,5);
  const numRandomCHF = getRandom(2,5);
  const numRandomUSD = getRandom(2,5);

  return (
    <div className="App">
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>WE BUY</th>
            <th>EXCHANGE RATES</th>
            <th>WE SELL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CAD</td>
            <td>{countBuy(data.CAD, numRandomCAD).toFixed(4)}</td>
            <td>{data.CAD}</td>
            <td>{countSell(data.CAD, numRandomCAD).toFixed(4)}</td>
          </tr>
          <tr>
            <td>IDR</td>
            <td>{countBuy(data.IDR, numRandomIDR).toFixed(4)}</td>
            <td>{data.IDR}</td>
            <td>{countSell(data.IDR, numRandomIDR).toFixed(4)}</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>{countBuy(data.JPY, numRandomJPY).toFixed(4)}</td>
            <td>{data.JPY}</td>
            <td>{countSell(data.JPY, numRandomJPY).toFixed(4)}</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>{countBuy(data.CHF, numRandomCHF).toFixed(4)}</td>
            <td>{data.CHF}</td>
            <td>{countSell(data.CHF, numRandomCHF).toFixed(4)}</td>
          </tr>
          <tr>
            <td>USD</td>
            <td>{countBuy(data.USD, numRandomUSD).toFixed(4)}</td>
            <td>{data.USD}</td>
            <td>{countSell(data.USD, numRandomUSD).toFixed(4)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
